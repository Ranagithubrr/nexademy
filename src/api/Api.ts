import axios from "axios";
import { PostType } from "types/types";

export const FetchPost = async () => {
  const post = await axios.get("https://jsonplaceholder.typicode.com/users");
  return post;
};
export const PostData = async (data: PostType) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    data,
  });
  return response.data;
};
