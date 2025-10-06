import { createRoot } from 'react-dom/client';
import './MyStyle.scss';

function MyHeader() {
    return (
        <h1 className='h1'>My Header</h1>
    );
}

function MyHeader1() {
    return (
        <div>
            <h1 className='h1'>My Header 1</h1>
            <h2 className='h2'>My Header 2</h2>
            <h3 className='h3'>My Header 3</h3>
        </div>
    );
}

function Sass() {
    return (
        <>
            <MyHeader />
            <MyHeader1 />
        </>
    )
}

export default Sass