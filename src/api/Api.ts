import axios from "axios"

export const FetchPost = async () => {
    const post = await axios.get('https://jsonplaceholder.typicode.com/users')
    return post;
}