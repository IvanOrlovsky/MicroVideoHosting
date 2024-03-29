import { sql } from '@vercel/postgres';
export const fetchCache = 'force-no-store';
export async function GET(request, { params }) {

    const { rows } = await sql`SELECT * FROM video WHERE video_id = ${params.id};`;
    const data = JSON.stringify(rows);
    return new Response(data);
}