import { Home } from "lucide-react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NoteFound } from "./pages/NoteFound"



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
