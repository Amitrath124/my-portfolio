
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NoteFound } from "./pages/NoteFound"
import { Home } from "./pages/Home"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NoteFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
