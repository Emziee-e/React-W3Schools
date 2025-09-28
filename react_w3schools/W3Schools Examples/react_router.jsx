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

function Home1() {
    return <h1>Home Page</h1>;
}

function About1() {
    return <h1>About Page</h1>;
}

function Contact1() {
    return <h1>Contact Page</h1>;
}

function App1() {
    return (
        <BrowserRouter>
            {/* Navigation with NavLink for active styling */}
            <nav style={{ marginBottom: '20px' }}>
                <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
                <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
                <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/about" element={<About1 />} />
                <Route path="/contact" element={<Contact1 />} />
            </Routes>
        </BrowserRouter>
  );
}


createRoot(document.getElementById('router')).render(
  <App />
);

createRoot(document.getElementById('router1')).render(
  <App1 />
);