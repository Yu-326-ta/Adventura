import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import styles from './header-before-login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-transparent">
      <div className="container flex items-center p-4">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/weapons/sword.png"
                alt="sword"
                width={50}
                height={50}
              />
              <span className={`${styles.textWhiteLogo} pr-32`}>Adventura</span>
            </div>
          </Link>
        </div>
        <div
          className={`md:flex md:space-x-8 ${
            menuOpen
              ? 'flex flex-col items-end space-y-2 pr-2 pt-2 w-full absolute top-12 left-0 z-20'
              : 'hidden md:flex'
          }`}
        >
          <Link href="/" className={`${styles.textWhite} pt-1`}>
            ホーム
          </Link>
          <Link href="/get-started" className={`${styles.textWhite} pt-1`}>
            始めましょう
          </Link>
          <Link href="/faq" className={`${styles.textWhite} pt-1`}>
            よくある質問
          </Link>
        </div>
        <div className="md:hidden flex justify-end w-full" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            className={`${styles.textWhiteIcon} ${styles.HumburgerIcon} pt-1`}
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
