import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Layout from "./Layout";
import './App.css';
import { store } from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div className="App mx-auto max-w-screen-2xl">
          <Layout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
