import "./global.css";
import { Header } from "./components/Header.jsx";
import styles from "./App.module.css";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name: "Jonny Marco",
        role: "Developer",
      },
      content: [
        { type: "paragraph", content: "Hey friends 👋" },
        {
          type: "paragraph",
          content:
            "I just uploaded another project to my portfolio. It is a project I did at NLW Return, an event by Rocketseat. Project name is DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: "date",
    },
    {
      id: 2,
      author: {
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        name: "Mike Brennar",
        role: "Developer",
      },
      content: [
        { type: "paragraph", content: "Hey friends 👋" },
        {
          type: "paragraph",
          content:
            "I just uploaded another project to my portfolio. It is a project I did at NLW Return, an event by Rocketseat. Project name is DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: "date",
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
          ,
        </main>
      </div>
    </div>
  );
}

export default App;
