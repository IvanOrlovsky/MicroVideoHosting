"use client";

import { useState, useEffect} from "react";
import Tag from "../components/Tag/tag";
import TagForm from "../components/TagForm/TagForm";

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
                <div className="bg-gray-800 m-40 p-5">
                    <h1 className="text-center font-bold text-3xl text-yellow-500 p-5">Список тегов</h1>
                    <div className="grid grid-cols-3 gap-4"> 
                        {tags.map((tags) => (
                            <div
                                key={tags.tag_id}
                                className={`p-2 rounded ${
                                tags.tag_name.length > 10 ? "col-span-2" : "col-span-1"
                                }`}
                            >
                                <Tag name={tags.tag_name} path={`/related/${tags.tag_name}`}/>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center m-5">
                        <button onClick={() => setShowForm(true)} className="text-white p-2 bg-blue-500 hover:bg-blue-800 transition duration-300">Добавить тег</button>
                    </div>

                    {showForm && (
                        <TagForm onSubmit={handleSubmit} onCancel={closeForm} />
                    )}

                </div>
            )
}

