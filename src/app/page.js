import VideoGrid from "./components/VideoGrid/VideoGrid";


export const metadata = {
  title: 'Главная страница - Микровидеохостинг',
  description: 'Видеохостинг для загрузки видео с тегами. Тестовое задание.',
  keywords: ['Видеохостинг', 'Микровидеохостинг', 'загрузка видео', 'теги', 'главная страница'],
  applicationName: 'Microvideohosting',
  creator: 'Орловский Иван Сергеевич',
  publisher: 'Орловский Иван Сергеевич'
};

export default function Home() {

  return (
      <div className="bg-gray-800 m-40 p-5">
        <h1 className="text-center font-bold text-3xl text-yellow-500 p-5">Последние видео</h1>
        <VideoGrid />
      </div>
  )
}
