import Header from '@/components/header-before-login/header-before-login'
import Login from '@/components/login/login'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main className="form-bg">
        <Header />
        <Login />
        <Footer />
      </main>
    </>
  )
}
