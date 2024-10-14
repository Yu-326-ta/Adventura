import { useState } from 'react'
import QuestCard from '../common/quest-card/quest-card'
import styles from './quests.module.css'
import Image from 'next/image'
import quests from '../../data/quests-data'

const Quests: React.FC = () => {
  const [selectedQuest, setSelectedQuest] = useState<{
    title: string
    content: string
    imageUrl: string
    level: string
    experience: number
  } | null>(null)

  const openModal = (quest: {
    title: string
    content: string
    imageUrl: string
    level: string
    experience: number
  }) => {
    setSelectedQuest(quest)
  }

  const closeModal = () => {
    setSelectedQuest(null)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-3xl mt-20 mb-8 text-white">クエスト一覧</h1>
      </div>
      <div className="flex flex-wrap w-full max-w-4xl justify-around">
        {quests.map((quest, index) => (
          <QuestCard
            key={index}
            imageUrl={quest.imageUrl}
            title={quest.title}
            level={quest.level}
            content={quest.content}
            experience={quest.experience}
            onClick={() => openModal(quest)}
          />
        ))}
      </div>

      {selectedQuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-black hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            <h2 className="text-2xl mb-4">{selectedQuest.title}</h2>
            <Image
              src={selectedQuest.imageUrl}
              alt={selectedQuest.title}
              width={400}
              height={400}
            />
            <p className="text-lg mt-4">{selectedQuest.content}</p>
            <p className="text-lg mt-4">
              難易度：
              <span className="text-yellow-500">{selectedQuest.level}</span>
            </p>
            <p className="text-lg mt-4">
              獲得経験値：{selectedQuest.experience}
            </p>
            <div className="flex justify-center">
              <button className="mt-8 bg-black text-white px-4 py-4 rounded">
                クエスト開始
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quests
