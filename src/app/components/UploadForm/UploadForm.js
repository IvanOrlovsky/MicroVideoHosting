import styles from "./uploadform.module.scss"
import Tag from "../Tag/tag";
import { useState, useEffect } from "react";

export default function UploadForm() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [file, setFile] = useState(null);
    const [tags, setTags] = useState([]);

    const fetchTags = async () => {
        const response = await fetch('/api/tags', { method:  'GET' }); 
        const tags = await response.json() 
        setTags(tags)
    };

    useEffect(() => {
        fetchTags();
    }, []);


    const handleToggleSelection = (item) => {
        setSelectedItems((prevSelectedItems) => {
          if (prevSelectedItems.includes(item)) {
            return prevSelectedItems.filter((selectedItem) => selectedItem !== item);
          } else {
            return [...prevSelectedItems, item];
          }
        });
      };
      

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
                            pattern="^[a-zA-Z][a-zA-Z0-9_-]{4,254}$"
                            title="Название видео должно начинаться с буквы в любом регистре и быть по длине от 5 до 255 символов."
                            required
                        />
                    </li>
                    <li className="mb-4">
                        <textarea
                        placeholder="Описание видео"
                        className={styles.input_text}
                        />
                    </li>
                    <div className={styles.tag_select}> 
                        <h2 className={styles.sub_title}>
                            Выберите подходящие теги:
                        </h2>
                        <ul className="grid grid-cols-3 gap-4"> 
                        {tags.map((tag) => (
                                                <li
                                                    key={tag.tag_id}
                                                    className={`rounded-lg text-center font-bold cursor-pointer ${selectedItems.includes(tag.tag_id) ? 'bg-yellow-700 ' : 'bg-yellow-400'}`}
                                                    onClick={() => handleToggleSelection(tag.tag_id)}
                                                >
                                                    <Tag name={tag.tag_name}/>
                                                </li>
                                            ))}

                        </ul>
                    </div>
                    <input 
                        type="file" 
                        accept="video/*"
                        className={styles.upload} 
                        required
                    />
                    <button type="submit" className={styles.video_submit}>Загрузить</button>
                </ul>
                
            </form>
    </div>
    );
};
