import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ src, hasBorder = true, ...props }: Avatar) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...props}
    />
  );
}
