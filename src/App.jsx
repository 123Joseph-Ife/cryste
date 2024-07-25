import "./css/App.css";
import "./css/helper_classes.css";
import "./css/media_query.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import About from "./pages/About/About";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
