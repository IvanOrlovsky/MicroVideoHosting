'use client';

import styles from './watch.module.scss'
import { useState, useEffect } from 'react';
import Tag from '@/app/components/Tag/tag';


export default function Watch({ params }) {

    const [video_info, setVideo_info] = useState({});
    const [tags, setTag_info] = useState([]);

    const fetchVideoData = async (id) => {
        const response = await fetch(`/api/videos/${id}`, { method:  'GET' });  
        const video_info = await response.json();
        setVideo_info(video_info);
    }

    const fetchTagsData = async (id) => {
        const response = await fetch(`/api/tags/${id}`, { method:  'GET' });  
        const tags = await response.json();
        console.log(tags)
        setTag_info(tags);
    }

    useEffect(() => {
        fetchVideoData(params.id);
        fetchTagsData(params.id);
    }, []);

    return (
        <div className={styles.video_area}>
            {video_info[0] && (
                    <video src={video_info[0].file_url} controls autoPlay muted >
                        Ваш браузер не поддерживает тег video.
                    </video>
            )}
            <div>
                <h2 className={styles.video_title}>
                    {video_info[0] && video_info[0].title}
                </h2>
                <p className={styles.video_disc}>
                    {video_info[0] && video_info[0].description}
                </p>
            </div>
            <div className={styles.all_tegs_grid}> 
                    {tags && tags.map((tag) => (
                        <div
                            key={tag.tag_id}
                            className={styles.single_tag}
                        >
                            <Tag name={tag.tag_name} path={`/related/${tag.tag_name}`}/>
                        </div>
                    ))}
            </div>
        </div>
    )
  }