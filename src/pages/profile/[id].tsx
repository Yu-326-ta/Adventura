import Header from '@/components/common/header-after-login/header-after-login'
import Login from '@/components/login/login'
import Footer from '@/components/common/footer/footer'
import TodosStatus from '@/components/todos-status/todos-status'
import Todos from '@/components/todos/todos'
import Profile from '@/components/profile/profile'

export default function Home() {
  return (
    <>
      <main className="profile-bg">
        <Header />
        <Profile />
        <Footer />
      </main>
    </>
  )
}
