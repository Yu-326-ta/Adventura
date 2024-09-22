import Image from 'next/image'
import styles from './main.module.css'
import Link from 'next/link'

const Main = () => {
  return (
    <div
      className={`${styles.mainPage} flex flex-col md:flex-row items-center justify-between md:p-32 md:py-24 pt-12`}
    >
      <div className="md:w-1/2 md:pl-16">
        <h1 className="text-2xl font-bold text-center text-white text-4xl pt-12 md:pt-0">
          日常を冒険に変える
        </h1>
        <p className="mt-4 text-lg text-center text-white text-xl pt-8 md:pt-2">
          ようこそ、「Adventura」へ!✨
          <br />
          このアプリは、あなたの日常のタスクをワクワクする冒険に変える、ユニークなRPG形式のタスク管理ツールです！
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center p-4 space-y-4">
        <Image
          src="/images/male-characters/king.png"
          alt="king"
          width={350}
          height={350}
        />
        <Link
          href="/signup"
          className="rpg-blowing w-full max-w-xs px-8 py-2 flex items-center justify-center"
        >
          新規登録
        </Link>
        <Link
          href="/login"
          className="rpg-blowing px-8 py-2 w-full max-w-xs flex items-center justify-center"
        >
          ログイン
        </Link>
      </div>
    </div>
  )
}

export default Main
