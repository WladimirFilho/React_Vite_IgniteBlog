import { format } from "date-fns";

import styles from "./Post.module.css";
import Comment from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";

export function Post({ author, publishedAt }) {
  // const dateFormatted = format(publishedAt, "HH:mmh d llll");

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.userBlock}>
          <Avatar
            hasBorder={true}
            className={styles.avatar}
            src={author.avatarUrl}
            alt="avatar"
          />

          <div className={styles.nameBlock}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>
        <time>{publishedAt}</time>
      </header>

      <section className={styles.content}>
        {/*  text post  */}
        <p>Hey friends 👋</p>
        <p>
          I just uploaded another project to my portfolio. It is a project I did
          at NLW Return, an event by Rocketseat. Project name is DoctorCare 🚀
        </p>

        {/*  links and tags  */}
        <div className={styles.linksWrapper}>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw </a>{" "}
            <a href="">#rocketseat</a>{" "}
          </p>
        </div>

        {/*    feedback section   */}
        <form className={styles.commentForm}>
          <strong>Leave you comment</strong>
          <textarea placeholder="Leave a comment" />
          <footer>
            <button type="submit">Submit</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </section>
    </article>
  );
}
