import styles from './tag.module.scss'
import Link from 'next/link';

export default function Tag(props) {
    const { name, path} = props;

    const tag = <div className={(path !== undefined) ? styles.link_tag : ''}>{name}</div>

    return (path == undefined) ? tag : <Link href={path}>{tag}</Link>
}