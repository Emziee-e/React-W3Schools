import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';
import styles1 from './BlueHeader.module.css';

function App() {
    return (
        <div>
            <button className={styles.mybutton}>
                My Button
            </button>
        </div>
    );
}

function App1() {
  return (
        <div>
            <button className={`${styles.mybutton} ${styles.primary}`}>
                My Primary Button
            </button>
            <br/>
            <br/>
            <button className={`${styles.mybutton} ${styles.secondary}`}>
                My Secondary Button
            </button>
        </div>
    );
}

function App2() {
  return (
        <div>
            <h1 className="myheader">
                My Header
            </h1>
        </div>
    );
}

function CSSModules() {
    return (
        <>
            <App />
            <App1 />
            <App2 />
        </>
    )
}

export default CSSModules