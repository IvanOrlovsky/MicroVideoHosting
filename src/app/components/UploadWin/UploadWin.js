import styles from "./uploadwin.module.scss"

export default function UploadWin() {
  return (
    <div className={styles.parent}>
        <form className={styles.form}>
            <h1>
                Загрузка нового видео
            </h1>
            <ul>
                <li><input type="text" placeholder="Название видео"/></li>
                <li><input type="text" placeholder="Описание видео"/></li>
            </ul>
            

        </form>
  </div>
  );
};
