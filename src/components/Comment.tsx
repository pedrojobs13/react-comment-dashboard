import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Comment {
  content: string;
  ondeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, ondeleteComment }: Comment) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    ondeleteComment(content);
  }

  function handleLikeComment() {
    if (likeCount == 0) {
      setLikeCount((state) => {
        return state + 1;
      });
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://pbs.twimg.com/profile_images/1529556363269050369/aje3bVKg_400x400.jpg"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro</strong>
              <time
                title="03 de Janeiro às 01:35h"
                dateTime="2023-01-04 01:36:00 "
              >
                {" "}
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
