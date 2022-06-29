import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import GlobalStyle from "./components/styles/GlobalStyle.styled"

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home /> }/>
      </Routes>
    </>
  )
}

export default App
