import { sql } from '@vercel/postgres';
export const fetchCache = 'force-no-store';
export async function GET(request, { params }) {

    const { rows } = await sql`SELECT tag.tag_id, tag.tag_name
                                FROM tag
                                JOIN video_tag ON tag.tag_id = video_tag.tag_id
                                WHERE video_tag.video_id = ${params.id};`;
    const data = JSON.stringify(rows);
    
    return new Response(data);
}