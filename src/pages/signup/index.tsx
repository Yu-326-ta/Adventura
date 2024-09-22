import Header from '@/components/common/header-before-login/header-before-login'
import Signup from '@/components/signup/signup'
import Footer from '@/components/common/footer/footer'

export default function Home() {
  return (
    <>
      <main className="form-bg">
        <Header />
        <Signup />
        <Footer />
      </main>
    </>
  )
}
