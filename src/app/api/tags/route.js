import { sql } from '@vercel/postgres';

export async function GET(request) {

    const { rows } = await sql`SELECT * FROM tag`;
    const data = JSON.stringify(rows);
    return new Response(data);
    
}

export async function POST(request) {
    const { tagName } = await request.json();
    await sql`INSERT INTO tag (tag_name)
    VALUES (${tagName});`;
    return new Response('', { status: 200 });
}