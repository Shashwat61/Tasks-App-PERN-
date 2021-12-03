import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div className="grid w-full bg-gray-100 place-items-center">

      <div className="my-2 bg-white ">
      {/* header */}
      <Header/>
      {/* main content */}
      <div className="p-2">
      <MainContent/>
      </div>
      {/* footer */}
      <Footer/>
      </div>
    </div>
  )
}


export default App
