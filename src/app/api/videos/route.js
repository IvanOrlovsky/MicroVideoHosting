import { sql } from '@vercel/postgres';

export async function GET(request) {
    const { rows } = await sql`SELECT * FROM video;`;
    const data = JSON.stringify(rows);
    return new Response(data);
}