'use client';

import { useState, useEffect} from "react";
import Tag from "../components/Tag/tag";

export default function Tags() {
    const [tags, setTags] = useState([]);

    const fetchTags = async () => {
        const response = await fetch('/api/tags'); 
        const tags = await response.json() 
        console.log(tags)
        setTags(tags)
    };

    useEffect(() => {
        fetchTags();
    }, []);

    // const handleTagAdded = () => {
    //     fetchTags();
    // };
        
    return (
        <div className="bg-gray-800 m-40">
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
        </div>
      
    )
}

