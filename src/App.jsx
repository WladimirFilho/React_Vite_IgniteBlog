import './global.css';
import {Header} from "./components/Header.jsx";
import styles from './App.module.css'
import {Post} from "./Post.jsx";
import {Sidebar} from "./components/Sidebar.jsx";


function App() {

    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post
                        author='Diego'
                        content='hbbcsybbvb b cxu'
                    />
                </main>

            </div>


        </div>
    )
}

export default App
