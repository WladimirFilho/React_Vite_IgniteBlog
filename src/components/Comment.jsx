import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";


const Comment = () => {
	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				className={styles.avatar}
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
				alt="image"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>John Wick</strong>
							<time title='Published at 15h30 1 - May - 2022' dateTime='2022-05-11 15:30:00'>Published 1
								day ago
							</time>
						</div>
						<button title='Delete post'>
							<Trash size={24}></Trash>
						</button>
					</header>
					<p>Very Good, John. Congrats!</p>
				</div>
				<footer>
					<button>
						<ThumbsUp/> <p>Likes</p> <span>20</span>
					</button>
				</footer>
			</div>


		</div>
	)
}
export default Comment;