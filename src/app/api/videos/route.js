import { sql } from '@vercel/postgres';
export const fetchCache = 'force-no-store';
export async function GET(request) {
    const { rows } = await sql`SELECT * FROM video WHERE video_id > %{Math.random() * (0 - (-2)) + (-2);};`;
    
    const data = JSON.stringify(rows);

    return new Response(data);
}