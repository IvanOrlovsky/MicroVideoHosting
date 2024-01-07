import styles from './videocard.module.scss'
import Link from 'next/link';

export default function VideoCard(props) {
    const { video_id, title, description } = props;

    return (
    <Link href={`/watch/${video_id}`}>
      <div className={`p-6 rounded-lg bg-slate-500 shadow-md`}>
        <h2 className="text-xl font-semibold mb-2 text-white border-b-2">{title}</h2>
        <p className="text-gray-200">{description}</p>
      </div>
    </Link>
    )
}