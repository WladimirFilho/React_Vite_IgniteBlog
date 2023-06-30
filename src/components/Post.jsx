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

export function Post({ author, content }) {
  // TODO fix date format using date-fns. Already installed

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

  // Function: To delete comments from the post
  // 1: Filter the list of comments
  // 2: Returns a new list without the comment passed by attribute
  function deleComment(commentToDelete) {
    const commentsListWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsListWithoutDeleteOne);
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

        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.link === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

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
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleComment}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
