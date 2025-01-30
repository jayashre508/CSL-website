import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import VideoPage from "./Pages/VideoPage";
// import VideoPage from "./Pages/VideoPage";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/videoPage" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
