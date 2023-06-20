import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Task from "./pages/Task";
import Bibliography from "./pages/Bibliography";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/task" element={<Task />} />
                <Route path="/about" element={<About />} />
                <Route path="/bibliography" element={<Bibliography />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
