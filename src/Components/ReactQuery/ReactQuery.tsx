import { useState, ChangeEvent, MouseEvent } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FetchPost, PostData } from './../../api/Api';
import { PostType } from './../../types/types';

const ReactQuery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['myposts'],
    queryFn: FetchPost,
  });
  const [formData, setFormData] = useState<PostType>({
    id: 1,
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    website: '',
    company: '',
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const mutation = useMutation({
    mutationFn: PostData,
    onSuccess: (data) => {
      console.log('Post created successfully:', data);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });
  // Handle form submission
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    mutation.mutate(formData);
  };

  return (
    <div>
      <h2> post data</h2>
      <h1 className="text-2xl font-semibold text-center mb-6">User Form</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input onChange={handleChange} type="text" name="name" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input onChange={handleChange} type="text" name="username" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input onChange={handleChange} type="email" name="email" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <h3 className="text-lg font-medium mt-6">Address</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input onChange={handleChange} type="text" name="address" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input onChange={handleChange} type="tel" name="phone" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input onChange={handleChange} type="url" name="website"
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <h3 className="text-lg font-medium mt-6">Company</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input onChange={handleChange} type="text" name="company" required
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-4">
          Submit
        </button>
      </form>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred while fetching data</div>}
      {!isLoading && data && data.data.map((post: PostType) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactQuery;
