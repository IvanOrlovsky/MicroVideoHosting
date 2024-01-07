import styles from "./uploadform.module.scss"

export default function UploadForm() {
  return (
    <div className={styles.parent}>
        <form className={styles.form}>
            <h1 className={styles.title}>
                Загрузка нового видео
            </h1>
            <ul className={styles.form_content}>
                <li className="mb-4">
                    <input
                    type="text"
                    placeholder="Название видео"
                    className={styles.input_text}
                    />
                </li>
                <li className="mb-4">
                    <textarea
                    placeholder="Описание видео"
                    className={styles.input_text}
                    />
                </li>
                <button type="submit" className={styles.video_submit}>Загрузить</button>
            </ul>
            
        </form>
  </div>
  );
};
