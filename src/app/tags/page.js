"use client";

import { useState, useEffect} from "react";
import Tag from "../components/Tag/tag";
import TagForm from "../components/TagForm/TagForm";
import styles from "./tagpage.module.scss"

export default function Tags() {
    

    const [tags, setTags] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const fetchTags = async () => {
        const response = await fetch('/api/tags', { method:  'GET' }); 
        const tags = await response.json() 
        setTags(tags)
    };

    const handleSubmit = async () => {
        fetchTags();
        setShowForm(false);
      };

    const closeForm = () => {
        setShowForm(false);
    }
    
    useEffect(() => {
        fetchTags();
    }, []);

    return (
                <div className={styles.all_tegs}>
                    <h1 className={styles.all_tegs_title}>Список тегов</h1>
                    <div className={styles.all_tegs_grid}> 
                        {tags.map((tags) => (
                            <div
                                key={tags.tag_id}
                                className={styles.single_tag}
                            >
                                <Tag name={tags.tag_name} path={`/related/${tags.tag_id}/${tags.tag_name}`}/>
                            </div>
                        ))}
                    </div>

                    <div className={styles.add_btn_flex}>
                        <button onClick={() => setShowForm(true)} className={styles.add_btn}>Добавить тег</button>
                    </div>

                    {showForm && (
                        <TagForm onSubmit={handleSubmit} onCancel={closeForm} />
                    )}

                </div>
            )
}

