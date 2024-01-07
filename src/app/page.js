import VideoGrid from "./components/VideoGrid/VideoGrid";
import styles from "./homepage.module.scss"

export const metadata = {
  title: 'Главная страница - Микровидеохостинг',
  description: 'Видеохостинг для загрузки видео с тегами. Тестовое задание.',
  keywords: ['Видеохостинг', 'Микровидеохостинг', 'загрузка видео', 'теги', 'главная страница'],
  applicationName: 'Microvideohosting',
  creator: 'Орловский Иван Сергеевич',
  publisher: 'Орловский Иван Сергеевич'
};

export default async function Home() {

  return (
      <div className={styles.video_grid_bg}>
        <h1 className={styles.recent_videos_title}>Последние видео</h1>
        <VideoGrid />
      </div>
  )
}
