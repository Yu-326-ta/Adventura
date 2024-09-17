import Feature from '@/components/features/feature'
import Header from '@/components/header-before-login/header'
import Main from '@/components/main/main'
import Footer from '@/components/footer/footer'
import { useEffect } from 'react'
import axios from 'axios'
import { CsrfToken } from '@/type/Task.type'

export default function Home() {
  // useEffect(() => {
  //   axios.defaults.withCredentials = true
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get<CsrfToken>(
  //       `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/csrf`
  //     )
  //     axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
  //   }
  //   getCsrfToken()
  // }, [])
  return (
    <>
      <main>
        <Header />
        <Main />
        <Feature />
        <Footer />
      </main>
    </>
  )
}
