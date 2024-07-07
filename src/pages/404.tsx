// pages/404.js
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/custom.module.css'

const Custom404 = () => {
  return (
    <div className={`${styles.customErrPage} pt-48`}>
      <div className={styles.customErrBox}>
        ここにはページが存在しないようだ...
      </div>
      <Image
        src={'/images/male-characters/joker.png'}
        alt="Yatter"
        width={300}
        height={300}
        className="pt-8"
      />
    </div>
  )
}

export default Custom404
