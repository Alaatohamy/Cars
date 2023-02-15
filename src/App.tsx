import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <div className="App mx-auto max-w-screen-2xl">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
