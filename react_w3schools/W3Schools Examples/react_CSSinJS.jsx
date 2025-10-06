import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const MyHeader = styled.h1`
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
    `;

function App() {
    return (
        <>
            <MyHeader>Welcome!</MyHeader>
        </>
    );
}

const Button = styled.button`
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    `;

const PrimaryButton = styled(Button)`
        background-color: #007bff;
    `;

const SuccessButton = styled(Button)`
        background-color: #28a745;
    `;

function App1() {
    return (
        <div>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
        </div>
    );
}

function CSSinJS() {
    return (
        <>
            <App />
            <App1 />
        </>
    )
}

export default CSSinJS