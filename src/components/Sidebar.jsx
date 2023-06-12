import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from "./Avatar.jsx";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
				alt=''/>

			<div className={styles.profile}>
				<Avatar
					hasBorder={true}
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
				/>

				<strong>Jonh Wick</strong>
				<span>Web Developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size='20' className={styles.icon}/>
					Edit your profile
				</a>
			</footer>
		</aside>
	);
}