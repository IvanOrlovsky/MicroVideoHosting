'use client';

import styles from './watch.module.scss'
import { useState, useEffect } from 'react';
// export const metadata = {
//     title: 'Просмотр видео - Микровидеохостинг',
//     description: 'Просмотр видео.',
//     keywords: ['Видеохостинг', 'Микровидеохостинг', 'загрузка видео', 'теги', 'Просмотр видео'],
//     applicationName: 'Microvideohosting',
//     creator: 'Орловский Иван Сергеевич',
//     publisher: 'Орловский Иван Сергеевич'
//   };


export default function Watch({ params }) {

    const [video_info, setVideo_info] = useState({});

    const fetchVideoData = async (id) => {
        const response = await fetch(`/api/videos/${id}`, { method:  'GET' });  
        const video_info = await response.json();
        setVideo_info(video_info);
    }

    useEffect(() => {
        fetchVideoData(params.id);
    }, []);

    return (
        <div>
            {video_info[0] && (
                    <video src={video_info[0].file_url} controls>
                        Ваш браузер не поддерживает тег video.
                    </video>
            )}
        </div>
    )
  }