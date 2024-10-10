import { useQuery } from "@tanstack/react-query";
import { FetchPost } from './../../api/Api';
import { PostType } from './../../types/types';

const ReactQuery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['myposts'],
    queryFn: FetchPost,
  });
  return (
    <div>
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
