import './global.css';
import {Header} from "./components/Header.jsx";
import styles from './App.module.css'
import {Post} from "./components/Post.jsx";
import {Sidebar} from "./components/Sidebar.jsx";


function App() {

    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post/>
                    <Post/>
                    <Post/>
                </main>

            </div>


        </div>
    )
}

export default App
