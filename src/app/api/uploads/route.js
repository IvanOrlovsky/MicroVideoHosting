import { sql } from "@vercel/postgres";
import { put } from '@vercel/blob';

export async function POST(request) {

    const form = await request.formData();
    const title = form.get('title');
    const description = form.get('description');
    const selectedItems = JSON.parse(form.get('selectedItems'));
    const file = form.get('file');

    const blob = await put(file.name, file, { access: 'public' });  

    await sql`INSERT INTO video (title, description, file_url)
    VALUES (${title}, ${description}, ${blob.url});`

    const { rows } = await sql`SELECT video_id FROM video 
    WHERE File_url = ${blob.url};`

    const video_id = rows[0].video_id;

    for (let tag_id of selectedItems) {
        await sql`INSERT INTO video_tag (Video_id, Tag_id)
        VALUES (${video_id}, ${tag_id});`
    }
    
    return new Response('', { status: 200 });
}
