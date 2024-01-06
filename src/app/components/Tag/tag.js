import styles from './tag.module.scss'
import Link from 'next/link';

export default function Tag(props) {
    const { name } = props;
    const path =  `/related/${name}`
    return (
        <Link href={path}>
            <div className={styles.tag_bg}>
                
                    <span className={styles.tag_name}>{name}</span>
                
            </div>
        </Link>
    )

}