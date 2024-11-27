import routes from "./Router/Router";
import { useRoutes } from "react-router-dom";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const router = useRoutes(routes);
  return (
    <>
     <PersistGate loading={'Loading . . .'} persistor={persistor}>
      <Provider store={store}>{router};</Provider>;
     </PersistGate>
    </>
  );
}

export default App;
