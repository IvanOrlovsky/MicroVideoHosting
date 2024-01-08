import { sql } from '@vercel/postgres';
export const fetchCache = 'force-no-store';
export async function GET(request) {
    const id = Math.floor(Math.random() * 2 - 2);
    const { rows } = await sql`SELECT * FROM video WHERE video_id > ${id};`;
    
    const data = JSON.stringify(rows);

    return new Response(data);
}