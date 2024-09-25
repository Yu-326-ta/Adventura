import React, { useState } from 'react'
import styles from './todo-card.module.css'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TodoListProps {
  title: string
  items: { id: number; content: string }[]
  isCompleted?: boolean
}

const TodoCard: React.FC<TodoListProps> = ({ title, items, isCompleted }) => {
  const [editItemId, setEditItemId] = useState<number | null>(null)
  const [editContent, setEditContent] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleEdit = (id: number, content: string) => {
    setEditItemId(id)
    setEditContent(content)
    setIsModalOpen(true)
  }

  const handleSave = (id: number) => {
    // 保存処理（実際にはAPI呼び出しや状態の更新などを行う）
    console.log(`Item ${id} has been saved with new content: ${editContent}`)
    setEditItemId(null)
    setIsModalOpen(false)
  }

  const cardClass = isCompleted
    ? `${styles.completedTodoList}`
    : `${styles.todoList}`

  return (
    <>
      <div className={cardClass}>
        <h2 className={`${styles.todoTitle} text-center`}>{title}</h2>
        <ul className={styles.todoItems}>
          {items.map(({ id, content }) => (
            <li
              key={id}
              className={`${styles.todoItem} relative flex items-center border-b border-gray-300 md:mx-8`}
            >
              <input type="checkbox" className="mr-2" />
              {editItemId === id ? (
                <span className="flex-grow text-2xl">{content}</span>
              ) : (
                <span className="flex-grow text-2xl">{content}</span>
              )}
              <FontAwesomeIcon
                className="ml-2 cursor-pointer"
                icon={faPenToSquare}
                onClick={() => handleEdit(id, content)}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg rpg-blowing">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl text-white">編集</h3>
                <button
                  type="button"
                  className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only text-white">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <input
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full px-2 py-1 border rounded text-gray-900 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:border-gray-600 dark:text-white dark:focus:ring-blue-800"
                />
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleSave(editItemId as number)}
                >
                  修正する
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoCard
