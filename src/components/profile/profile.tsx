import Image from 'next/image'
import styles from './main.module.css'
import Link from 'next/link'

const Profile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:p-56 md:py-24 pt-12">
        <div className="md:w-1/2 flex flex-col items-center md:p-4 space-y-4">
          <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
            <Image
              src="/images/male-characters/m-warrior.png"
              alt="warriror"
              layout="responsive"
              width={350}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="rpg-blowing py-12 px-8 md:mt-12 mt-16 md:min-w-[500px]">
          <p className="text-lg text-left text-white text-xl leading-loose">
            ゆうた
            <br />
            職業：せんし
            <br />
            Lv：50
            <br />
            次のレベル
            <progress className="w-full mt-2" value="70" max="100"></progress>
            <br />
            達成したタスクの数：100
            <br />
            クエストクリアした数：50
            <br />
            開始日：2021/10/01
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/todos"
          className="rpg-blowing px-8 py-2 flex items-center justify-center"
        >
          タスク一覧へ戻る
        </Link>
      </div>
    </>
  )
}

export default Profile
