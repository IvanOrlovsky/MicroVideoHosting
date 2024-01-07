'use client';

import styles from './videogrid.module.scss';
import { useState, useEffect } from 'react';
import VideoCard from '../VideoCard/VideoCard';

export default function VideoGrid() {
    
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        const response = await fetch('/api/videos', { method:  'GET' });  
        const videos = await response.json();
        setVideos(videos);
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className={styles.video_grid}>
            {videos.map((video_info) => (
                <VideoCard key={video_info.video_id} video_id={video_info.video_id} title={video_info.title} description={video_info.description} />
            ))}
        </div>
    );
}
