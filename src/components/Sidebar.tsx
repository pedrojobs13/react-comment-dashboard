import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          className={styles.cover}
        />
        <div className={styles.profile}>
          <Avatar src="https://pbs.twimg.com/profile_images/1529556363269050369/aje3bVKg_400x400.jpg" />
          <strong>Pedro</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            {" "}
            <PencilLine size={20} /> Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
