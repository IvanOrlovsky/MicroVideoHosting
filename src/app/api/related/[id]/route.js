import { sql } from '@vercel/postgres';
export const fetchCache = 'force-no-store';
export async function GET(request, { params }) {

    const { rows } = await sql`SELECT video.video_id, video.title, video.description, video.file_url
                                FROM video
                                JOIN video_tag ON video.video_id = video_tag.video_id
                                WHERE video_tag.tag_id = ${params.id};`;

    const data = JSON.stringify(rows);
    return new Response(data);
}