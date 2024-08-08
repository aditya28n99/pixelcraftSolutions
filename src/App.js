import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Functions from "./pages/Functions";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Arrays from "./pages/Arrays";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/functions" element={<Functions/>}/>
        <Route path="/arrays" element={<Arrays/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
