import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

interface FileWithPreview extends File {
    preview: string;
}

const EditProfile = () => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setFiles((prev) => [...prev, ...newFiles]);
    }, []);

    const removeFile = (fileName: string) => {
        setFiles((prev) => prev.filter((file) => file.name !== fileName));
        setUploadedUrls((prev) => prev.filter((url) => !url.includes(fileName))); // Sync URL state
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const uploadFilesToCloudinary = async (files: FileWithPreview[]) => {
        const cloudName = 'dfhlcpdtr'; // Replace with your Cloudinary cloud name
        const uploadPreset = 'first_test'; // Your unsigned upload preset

        const uploads = files.map(async (file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadPreset);

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                    formData
                );
                const fileUrl = response.data.secure_url;
                setUploadedUrls((prev) => [...prev, fileUrl]);
                console.log(`Uploaded: ${file.name} -> URL: ${fileUrl}`);
            } catch (error) {
                console.error(`Error uploading ${file.name}:`, error);
            }
        });

        await Promise.all(uploads); // Ensure all files are uploaded
    };
    const UploadFiles = () => {
        uploadFilesToCloudinary(files);
    }

    return (
        <div>
            <h2 className="text-xl font-semibold text-center text-gray-800 my-5">File Upload Cloudinary</h2>
            <div className="flex flex-col justify-center items-center">
                <div
                    {...getRootProps()}
                    className="border-4 border-dashed border-gray-300 rounded-lg p-10 text-center bg-white shadow-lg transition duration-200 hover:border-blue-400"
                >
                    <input {...getInputProps()} className="hidden" />
                    <div className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-gray-400 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        {isDragActive ? (
                            <p className="text-gray-600 mb-2">Drop the files here ...</p>
                        ) : (
                            <>
                                <p className="text-gray-600 mb-2">Drag and drop your files here</p>
                                <p className="text-gray-400">or</p>
                                <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                                    Browse Files
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <button onClick={() => UploadFiles()}>upload files</button>
                {/* File Previews */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    {files.map((file) => (
                        <div key={file.name} className="relative">
                            <img
                                src={file.preview}
                                alt={file.name}
                                className="w-32 h-32 object-cover rounded-md"
                            />
                            <button
                                onClick={() => removeFile(file.name)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 transition"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                {/* Uploaded URLs */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium">Uploaded Files:</h3>
                    <ul className="list-disc list-inside">
                        {uploadedUrls.map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
