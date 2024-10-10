import routes from './Router/Router';
import { useRoutes } from 'react-router-dom'
function App() {
  const router = useRoutes(routes)
  return (
    <>
      {router}
    </>
  );
}

export default App;
