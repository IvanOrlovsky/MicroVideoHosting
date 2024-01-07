import VideoGrid from "@/app/components/VideoGrid/VideoGrid"
import styles from "./relatedpage.module.scss";

export async function generateMetadata({ params }) {

    const name = decodeURIComponent(params.name);
    
    return {
        title: `${name} - Микровидеохостинг`,
        description: `${name}`,
        keywords: ['Теги', 'видео', 'добавление тегов', 'просмотр тегов', `${name}`, 'Просмотр видео', 'Связанные видео'],
        applicationName: 'Microvideohosting',
        creator: 'Орловский Иван Сергеевич',
        publisher: 'Орловский Иван Сергеевич'
    };
    
}

export default function Related({ params }) {

    const name = decodeURIComponent(params.name);

    return (
        <div className={styles.video_grid_bg}>
            <h1 className={styles.recent_videos_title}>{`Видео по тегу - ${name}`}</h1>
            <VideoGrid id={params.id}/>
        </div>
    )
}
