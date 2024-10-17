import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [boxes, setBoxes] = useState([{ title: '', description: '', images: [] }]);

    const handleFieldChange = (index, field, value) => {
        const updatedBoxes = [...boxes];
        updatedBoxes[index][field] = value;
        setBoxes(updatedBoxes);
    };

    const handleImageChange = (index, e) => {
        const updatedBoxes = [...boxes];
        updatedBoxes[index].images = [...e.target.files];
        setBoxes(updatedBoxes);
    };

    const addNewBox = () => {
        setBoxes([...boxes, { title: '', description: '', images: [] }]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();

            // Append each box's data to FormData
            boxes.forEach((box, boxIndex) => {
                box.images.forEach((image) => {
                    formData.append(`box${boxIndex}_images`, image);
                });
                formData.append(`box${boxIndex}_title`, box.title);
                formData.append(`box${boxIndex}_description`, box.description);
            });

            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert(response.data.message);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };

    return (
        <div>
            {boxes.map((box, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <input
                        type="text"
                        placeholder={`Title ${index + 1}`}
                        value={box.title}
                        onChange={(e) => handleFieldChange(index, 'title', e.target.value)}
                    />
                    <textarea
                        placeholder={`Description ${index + 1}`}
                        value={box.description}
                        onChange={(e) => handleFieldChange(index, 'description', e.target.value)}
                    />
                    <input type="file" multiple onChange={(e) => handleImageChange(index, e)} />
                </div>
            ))}
            <button onClick={addNewBox}>Add New Box</button>
            <button onClick={handleUpload} style={{ marginTop: '1rem' }} className='block bg-green-800'>Submit</button>
        </div>
    );
};

export default ImageUpload;
