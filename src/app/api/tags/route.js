import { sql } from '@vercel/postgres';

export async function GET(request) {

    const { rows } = await sql`SELECT * FROM tag`;
    const data = JSON.stringify(rows);
    return new Response(data);
    
}
