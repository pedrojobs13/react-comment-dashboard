import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";
import React, { useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: 'paragraph' | 'link';
  content: string
}


interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}


export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, SetComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: React.FormEvent) {
    e.preventDefault();
    SetComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  };

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    SetComments(commentsWithoutDeletedOne);
  }
  function handleNewCommentInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commetForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              ondeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
