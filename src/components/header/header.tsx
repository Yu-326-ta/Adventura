import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className={styles.bgTransparent}>
      <div className={`${styles.container} mx-auto flex items-center p-4`}>
        <div className={`flex items-center ${styles.logoAndText}`}>
          <div className={`flex items-center`}>
            <Image
              src="/images/weapons/sword.png"
              alt="sword"
              width={50}
              height={50}
              className={styles.logo}
            />
            <span className={`${styles.textWhiteLogo} pr-24`}>Adventure</span>
          </div>
        </div>
        <div className={`flex space-x-2 ${styles.links}`}>
          <Link href="/get-started" className={`${styles.textWhite} pt-1`}>
            始めましょう
          </Link>
          <Link href="/faq" className={`${styles.textWhite} pt-1`}>
            よくある質問
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
