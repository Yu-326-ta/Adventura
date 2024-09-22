import Header from '@/components/header-after-login/header-after-login'
import Login from '@/components/login/login'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main className="home-bg">
        <Header />
        <h1>Todos</h1>
        <Footer />
      </main>
    </>
  )
}
