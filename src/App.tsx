import { useEffect } from 'react'
import { Auth } from './store/components/Auth'
import { Todo } from './store/components/Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { CsrfToken } from './types'

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      // csrfのエンドポイントにアクセスしてトークン取得
      const { data } = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrf`
      )
      // 取得したトークンをX-CSRF-Tokenという名前をつけてヘッダーに付与
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
