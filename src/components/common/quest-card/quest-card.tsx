import React from 'react'

interface CardComponentProps {
  className?: string
  title: string
  level: string
  content: string
  imageUrl: string
}

const QuestCard: React.FC<CardComponentProps> = ({
  imageUrl,
  title,
  level,
  content,
  className,
}) => {
  return (
    <div
      className={`w-full lg:w-2/3 lg:flex mx-16 my-8 rpg-blowing ${className}`}
    >
      <div className="bg-black p-4 flex w-full">
        <div className="my-4">
          <div className="text-white font-bold text-xl mb-2">
            <h3>{title}</h3>
            <p className="text-sm py-2">
              難易度：<span className="text-yellow-500">{level}</span>
            </p>
            <p className="text-sm">獲得経験値：100</p>
          </div>
        </div>
      </div>
      <div
        className="h-60 lg:h-auto lg:w-60 flex-none bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
        title="Woman holding a mug"
      ></div>
    </div>
  )
}

export default QuestCard
