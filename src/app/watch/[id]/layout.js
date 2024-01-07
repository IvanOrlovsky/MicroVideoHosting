
import Watch from "./page";
import { sql } from "@vercel/postgres";

export async function generateMetadata({ params }) {

    const { rows } = await sql`SELECT * FROM video WHERE video_id = ${params.id};`;
    console.log(rows[0])
    return {
        title: `${rows[0].title} - Микровидеохостинг`,
        description: `${rows[0].description}`,
        keywords: ['Теги', 'видео', 'добавление тегов', 'просмотр тегов', `${rows[0].title}`, 'Просмотр видео'],
        applicationName: 'Microvideohosting',
        creator: 'Орловский Иван Сергеевич',
        publisher: 'Орловский Иван Сергеевич'
    };
    
}

export default Watch;