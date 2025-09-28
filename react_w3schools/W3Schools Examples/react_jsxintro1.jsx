import { createRoot } from "react-dom/client";

const myElement1 = (
    <>
    <p>I am a paragraph.</p>
    <p>I am a praragraph too.</p>
    </>
);

createRoot(document.getElementById('intro1')).render(
    myElement1
);