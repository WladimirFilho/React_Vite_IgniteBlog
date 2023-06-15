import { format } from "date-fns";

import styles from "./Post.module.css";
import Comment from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import { useState } from "react";

// To create a new post:
// Set a state of an array empty
// Give a attribute name with a name to the text area inside the form
// Store the value of the text area using event.target.nameGiven.value - That will give you the value form that text area.
// Call a new function in the onSubmit of the form
// In the function, setState for the spread (...) plus the new variable for the new text inside text area
// Show that using a map function

export function Post({ author, publishedAt }) {
  // TODO fix date format using date-fns. Already installed
  // const dateFormatted = format(publishedAt, "HH:mmh d llll");

  // Set state New port textarea

  const [comments, setComments] = useState(["My first post"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

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
        {/* <time>{publishedAt}</time> */}
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
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Leave you comment</strong>
          <textarea
            value={newCommentText}
            onChange={handleNewCommentChange}
            name="comment"
            placeholder="Leave a comment"
          />
          <footer>
            <button type="submit">Submit</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment, index) => (
            <Comment key={index} content={comment} />
          ))}
        </div>
      </section>
    </article>
  );
}
