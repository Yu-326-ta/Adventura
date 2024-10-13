import Image from 'next/image'
import styles from './main.module.css'
import Link from 'next/link'

const TodosStatus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:py-16 md:px-64 pt-12">
      <div className="flex flex-col items-center md:mx-8 min-w-[200px] min-h-[200px]">
        <Image
          src="/images/male-characters/m-warrior.png"
          alt="king"
          width={200}
          height={200}
        />
      </div>
      <div className="rpg-blowing py-4 px-12 mx-8 md:mt-0 mt-8 min-w-[400px]">
        <p className="text-lg text-left text-white text-xl">
          ゆうた
          <br />
          職業：せんし
          <br />
          Lv：50
          <br />
          次のレベル
        </p>
        <progress className="w-full mt-2" value="70" max="100"></progress>
      </div>
    </div>
  )
}

export default TodosStatus
