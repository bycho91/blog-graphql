import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ title, author, coverPhoto, datePublished, slug }) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imageContainer}>
          <img src={coverPhoto.url} />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
