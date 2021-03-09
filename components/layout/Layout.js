import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="body">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}
