import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHandler from "./components/PageHandler";
import Home from "./pages/Home";
import About from "./pages/About";
import Task from "./pages/Task";
import Bibliography from "./pages/Bibliography";
import Section1 from "./layouts/Section1";
import S1P1 from "./pages/section1/S1P1";
import S1P2 from "./pages/section1/S1P2";
import S1P3 from "./pages/section1/S1P3";
import S1P4 from "./pages/section1/S1P4";
import S1P5 from "./pages/section1/S1P5";
import S1P6 from "./pages/section1/S1P6";
import S1P7 from "./pages/section1/S1P7";
import S1P8 from "./pages/section1/S1P8";
import S1PFinish from "./pages/section1/S1PFinish";
import Section2 from "./layouts/Section2";
import S2P1 from "./pages/section2/S2P1";
import S2P2 from "./pages/section2/S2P2";
import S2P3 from "./pages/section2/S2P3";
import S2P4 from "./pages/section2/S2P4";
import S2P5 from "./pages/section2/S2P5";
import S2P6 from "./pages/section2/S2P6";
import S2PFinish from "./pages/section2/S2PFinish";
import Section3 from "./layouts/Section3";
import S3P1 from "./pages/section3/S3P1";
import S3P2 from "./pages/section3/S3P2";
import S3P3 from "./pages/section3/S3P3";
import S3P4 from "./pages/section3/S3P4";
import S3PFinish from "./pages/section3/S3PFinish";
import Section4 from "./layouts/Section4";
import S4P1 from "./pages/section4/S4P1";
import S4P2 from "./pages/section4/S4P2";
import S4P3 from "./pages/section4/S4P3";
import S4PFinish from "./pages/section4/S4PFinish";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="*" element={<PageHandler />} />
                <Route path="/" element={<Home />} />
                <Route path="/bibliography" element={<Bibliography />} />
                <Route path="/task" element={<Task />} />
                <Route path="/about" element={<About />} />
                <Route path="/section1" element={<Section1 />} />
                <Route path="/section1/1" element={<S1P1 />} />
                <Route path="/section1/2" element={<S1P2 />} />
                <Route path="/section1/3" element={<S1P3 />} />
                <Route path="/section1/4" element={<S1P4 />} />
                <Route path="/section1/5" element={<S1P5 />} />
                <Route path="/section1/6" element={<S1P6 />} />
                <Route path="/section1/7" element={<S1P7 />} />
                <Route path="/section1/8" element={<S1P8 />} />
                <Route path="/section1/finish" element={<S1PFinish />} />
                <Route path="/section2" element={<Section2 />} />
                <Route path="/section2/1" element={<S2P1 />} />
                <Route path="/section2/2" element={<S2P2 />} />
                <Route path="/section2/3" element={<S2P3 />} />
                <Route path="/section2/4" element={<S2P4 />} />
                <Route path="/section2/5" element={<S2P5 />} />
                <Route path="/section2/6" element={<S2P6 />} />
                <Route path="/section2/finish" element={<S2PFinish />} />
                <Route path="/section3" element={<Section3 />} />
                <Route path="/section3/1" element={<S3P1 />} />
                <Route path="/section3/2" element={<S3P2 />} />
                <Route path="/section3/3" element={<S3P3 />} />
                <Route path="/section3/4" element={<S3P4 />} />
                <Route path="/section3/finish" element={<S3PFinish />} />
                <Route path="/section4" element={<Section4 />} />
                <Route path="/section4/1" element={<S4P1 />} />
                <Route path="/section4/2" element={<S4P2 />} />
                <Route path="/section4/3" element={<S4P3 />} />
                <Route path="/section4/finish" element={<S4PFinish />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
