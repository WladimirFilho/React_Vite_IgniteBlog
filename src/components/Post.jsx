import styles from './Post.module.css'
import Comment from "./Comment.jsx";

export function Post() {
	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.userBlock}>
					<img className={styles.avatar}
					     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
					     alt=""/>
					<div className={styles.nameBlock}>
						<strong>Jonh Wick</strong>
						<p>Dev Front End</p>
					</div>
				</div>
				<time title='Published at 15h30 1 - May - 2022' dateTime='2022-05-11 15:30:00'>Published 1 day ago
				</time>
			</header>


			<section className={styles.content}>
				{/*  text post  */}
				<p>Hey friends 👋</p>
				<p>I just uploaded another project to my portfolio. It is a project I did at NLW Return, an event by
					Rocketseat. Project name is DoctorCare 🚀</p>


				{/*  links and tags  */}
				<div className={styles.linksWrapper}>
					<p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
					<p>
						<a href="">#novoprojeto</a>{' '}
						<a href="">#nlw </a>{' '}
						<a href="">#rocketseat</a>{' '}
					</p>
				</div>

				{/*    feedback section   */}
				<form className={styles.commentForm}>

					<strong>Leave you comment</strong>
					<textarea
						placeholder='Leave a comment'
					/>
					<footer>
						<button type='submit'>Submit</button>
					</footer>
				</form>

				<div className={styles.commentList}>
					<Comment/>
					<Comment/>
					<Comment/>
					<Comment/>

				</div>
			</section>
		</article>

	)
}


