import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import styles from './header-after-login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-transparent w-full">
      <div className="flex items-center justify-between w-full p-4">
        {/* ロゴ部分 */}
        <div className="flex items-center flex-grow">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/weapons/sword.png"
                alt="sword"
                width={50}
                height={50}
              />
              <span className={`${styles.textWhiteLogo} pr-32`}>Adventure</span>
            </div>
          </Link>
        </div>

        {/* ナビゲーションとログアウトボタンコンテナ */}
        <div className="flex items-center justify-between">
          {/* ナビゲーションメニュー部分 */}
          <div
            className={`md:flex md:space-x-8 ${
              menuOpen
                ? 'flex flex-col items-end space-y-2 pr-2 pt-2 w-full absolute top-12 left-0 z-20'
                : 'hidden md:flex'
            }`}
          >
            <Link href="/todos" className={`${styles.textWhite} md:pt-4 pt-2`}>
              タスク一覧
            </Link>
            <Link href="/quests" className={`${styles.textWhite} md:pt-4 pt-2`}>
              クエスト
            </Link>
            <Link
              href="/profile/1"
              className={`${styles.textWhite} md:pt-4 pt-2`}
            >
              プロフィール
            </Link>
            {/* ログアウトボタン部分 */}
            <div className="flex items-center ml-auto">
              <button
                type="submit"
                className="rpg-blowing max-w-xs flex items-center justify-center md:px-10 md:py-1 md:mt-3 md:mx-12 text-white py-2 px-1 mt-2"
              >
                ログアウト
              </button>
            </div>
          </div>

          {/* メニューアイコン部分（モバイル用） */}
          <div
            className="md:hidden flex justify-end w-full"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`${styles.textWhiteIcon} ${styles.HumburgerIcon} pt-1`}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
