import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import MyFruits from './Fruits';

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MyFruits />
            </Suspense>
        </div>
    );
}

const Cars = lazy(() => import('./Cars'));

function App1() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Cars />
            </Suspense>
        </div>
    );
}

const Header = lazy(() => import('./header'));
const Content = lazy(() => import('./content'));
const Sidebar = lazy(() => import('./sidebar'));

function App2() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <Content />
                </div>
            </Suspense>
        </div>
    );
}

function suspense() {
    return (
        <>
            <App />
            <App1 />
            <App2 />
        </>
    )
}

export default suspense