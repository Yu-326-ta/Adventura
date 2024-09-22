import Header from '@/components/common/header-before-login/header-before-login'
import Login from '@/components/login/login'
import Footer from '@/components/common/footer/footer'

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
