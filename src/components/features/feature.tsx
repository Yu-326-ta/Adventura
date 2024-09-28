import Image from 'next/image'
import styles from './feature.module.css'

const Feature = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-12 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-center text-white text-4xl">
            人生を冒険に変える「Adventura」
          </h1>
          <p className="mt-4 text-lg text-center text-white text-xl pt-8 md:pt-2">
            Adventuraはあなたの日常をエキサイティングな冒険に変えます！
            <br />
            はやくその世界に飛び込んで、自分の成長と共に各タスクをクリアし、魅力的な冒険の舞台を探索し、新たな挑戦に挑みましょう！
            <br />
            退屈な日々とはおさらばし、リアルタイムで成長と達成感を感じる新しい生活を始めてみませんか？
          </p>
        </div>
      </div>
      <div
        className={`${styles.featurePage} flex flex-col md:flex-row items-center justify-between md:p-24 md:pt-0 pt-12`}
      >
        <div className="md:w-1/3 p-4 m-4">
          <div className="flex justify-center">
            <div>
              <Image
                src="/images/items/portion.png"
                alt="king"
                width={150}
                height={110}
              />
            </div>
            <div className="flex items-end">
              <Image
                src="/images/items/tresure.png"
                alt="king"
                width={150}
                height={100}
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-white text-3xl pt-12 md:pt-2">
            タスクをこなそう
          </h1>
          <p className="mt-4 text-lg text-center text-white text-lg pt-8 md:pt-2">
            毎日のタスクをクリアするごとに経験値や報酬を獲得できます！もう退屈なToDoアプリとはおさらば！
          </p>
        </div>
        <div className="md:w-1/3 p-4 m-4 pt-24 md:pt-2">
          <div className="flex justify-center">
            <Image
              src="/images/monsters/demon.png"
              alt="king"
              width={250}
              height={250}
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-white text-3xl pt-12 md:pt-0">
            多彩な冒険の舞台
          </h1>
          <p className="mt-4 text-lg text-center text-white text-lg pt-8 md:pt-2">
            日常の仕事や勉強が、まるでファンタジーRPGのように楽しくなる！
          </p>
        </div>
        <div className="md:w-1/3 p-4 m-4 md:pt-2">
          <div className="flex justify-center">
            <Image
              src="/images/male-characters/master.png"
              alt="king"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-white text-3xl pt-12 md:pt-0">
            成長の喜びを実感
          </h1>
          <p className="mt-4 text-lg text-center text-white text-lg pt-8 md:pt-2">
            各クエストをクリアするごとにレベルアップし、スキルやステータスが上昇！自分の成長をリアルタイムで感じられる！
          </p>
        </div>
      </div>
    </>
  )
}

export default Feature
