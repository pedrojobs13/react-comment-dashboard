import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";



const post: {
  id: number;
  author: { avatarUrl: string; name: string; role: string; };
  content: { type: 'paragraph' | 'link'; content: string; }[]; publishedAt: Date;
}[] = [
    {
      id: 1,
      author: {
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1529556363269050369/aje3bVKg_400x400.jpg",
        name: "Pedro",
        role: "Web",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projetoque fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-01-07 23:48:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1529556363269050369/aje3bVKg_400x400.jpg",
        name: "Lucas",
        role: "Back",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projetoque fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-01-07 23:48:00"),
    },
  ];
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
