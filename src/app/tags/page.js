'use client';

import { useState, useEffect} from "react";
import Tag from "../components/Tag/tag";

export default function Tags() {
    const [tags, setTags] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [tagName, setTagName] = useState('');

    const fetchTags = async () => {
        const response = await fetch('/api/tags', { method:  'GET' }); 
        const tags = await response.json() 
        setTags(tags)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/tags', { 
            method:  'POST',
            body: JSON.stringify({ tagName }),
        }); 
        fetchTags();
        setShowForm(false);
        setTagName('');
      };

    const closeForm = () => {
        setShowForm(false);
        setTagName('');
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
                        <Tag name={tags.tag_name}/>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center m-5">
                <button onClick={() => setShowForm(true)} className="text-white p-2 bg-blue-500 ">Добавить тег</button>
            </div>

            {showForm && (
                <form method="POST" onSubmit={handleSubmit} onReset={closeForm} className="bg-slate-400 mt-4 flex flex-row justify-center">
                <input
                    type="text"
                    placeholder="Введите название тега"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    className="p-2 m-2"
                />
                <button type="submit" className="p-2 m-2 bg-green-600">Добавить</button>
                <button type="reset" className="p-2 m-2 bg-red-700">Отмена</button>
                </form>
            )}

        </div>
      
    )
}

