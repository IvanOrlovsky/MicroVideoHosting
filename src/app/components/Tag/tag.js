import styles from './tag.module.scss'
import Link from 'next/link';

export default function Tag(props) {
    const { name, path} = props;
    const tag = <div className={styles.tag_bg}>   
                    <span className={styles.tag_name}>{name}</span>
                </div>

    return (path === '') ? {tag} : <Link href={path}>{tag}</Link>
}