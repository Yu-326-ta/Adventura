import Image from 'next/image'
import styles from './todos.module.css'
import Link from 'next/link'
import TodoCard from '../common/todo-card/todo-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

const Todos = () => {
  const todos = [
    { id: 1, content: 'タスク1' },
    { id: 2, content: 'タスク2' },
    { id: 3, content: 'タスク3' },
    // { id: 4, content: 'タスク4' },
    // { id: 5, content: 'タスク5' },
    // { id: 6, content: 'タスク6' },
    // { id: 7, content: 'タスク7' },
    // { id: 8, content: 'タスク8' },
    // { id: 9, content: 'タスク9' },
    // { id: 10, content: 'タスク10' },
  ]

  return (
    <div
      className={`${styles.todosBg} bg-cover bg-center min-h-screen p-8 mx-16`}
    >
      <form className="flex flex-col items-center md:flex-row justify-center space-y-3 md:space-y-0 md:mt-32 md:mb-16 mt-24">
        <div className="relative md:w-96 lg:w-96">
          <input
            type="text"
            placeholder="検索"
            className="w-full px-12 h-10 border-2 focus:outline-none md:w-96 lg:w-128"
          />
          <button
            type="submit"
            className="absolute left-0 top-0 bottom-0 flex items-center px-2 md:px-3"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0">
          <select
            id="pricingType"
            name="pricingType"
            className="w-32 h-10 border-2 focus:outline-none lg:ml-40 md:ml-16 py-0 tracking-wider"
          >
            <option value="All" selected>
              タグ
            </option>
            <option value="Freemium">仕事</option>
            <option value="Free">勉強</option>
            <option value="Paid">運動</option>
          </select>
          <button
            type="submit"
            className="rpg-blowing max-w-xs px-2 py-2 my-2 lg:ml-48 md:ml-16"
          >
            <FontAwesomeIcon icon={faPlus} />
            タスクの追加
          </button>
        </div>
      </form>
      <div className="flex-grow flex flex-col md:flex-row md:space-y-0">
        <TodoCard title="未着手" items={todos} />
        <TodoCard title="進行中" items={todos} />
        <TodoCard title="完了済み" items={todos} isCompleted={true} />
      </div>
    </div>
  )
}

export default Todos
