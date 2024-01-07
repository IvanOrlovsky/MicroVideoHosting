import styles from "./uploadform.module.scss"
import { useState, useEffect } from "react";

export default function UploadForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [file, setFile] = useState(null);

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
                    <input type="file" accept="video/*" className={styles.upload}/>
                    <button type="submit" className={styles.video_submit}>Загрузить</button>
                </ul>
                
            </form>
    </div>
    );
};
