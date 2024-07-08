import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-32 pt-32">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image
              src="/images/weapons/sword.png"
              alt="sword"
              width={50}
              height={50}
            />
            <span className="text-2xl text-white">Adventura</span>
          </div>
          <ul className="flex flex-wrap items-center text-sm font-medium text-white sm:mb-0">
            <li>
              <Link href="#">
                <span className="hover:underline me-4 md:me-6">開発者</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline me-4 md:me-6">ソーシャル</span>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <span className="hover:underline me-4 md:me-6">サポート</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:underline">プロダクト</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="sm:mx-auto lg:my-8 my-6" />
        <span className="block text-sm text-white sm:text-center">
          © 2024 <span>Adventura</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
