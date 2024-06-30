import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Adventura</h1>
      <h2>冒険を始めよう</h2>
      <Image
        src="/images/male-characters/yusha.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/male-characters/monk.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/male-characters/thief.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/male-characters/traveler.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/male-characters/wizard.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
      <Image
        src="/images/male-characters/warrior.png"
        alt="yusha"
        width={200}
        height={200}
      ></Image>
    </main>
  )
}
