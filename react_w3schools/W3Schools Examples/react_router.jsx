import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
        color: isActive ? '#007bff' : '#333',
        textDecoration: isActive ? 'none' : 'underline',
        fontWeight: isActive ? 'bold' : 'normal',
        padding: '5px 10px'
    });

function Router() {
    return (
        <>
            <App />
        </>
    )
}

export default Router