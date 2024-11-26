import routes from "./Router/Router";
import { useRoutes } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  const router = useRoutes(routes);
  return <Provider store={store}>{router};</Provider>;
}

export default App;
