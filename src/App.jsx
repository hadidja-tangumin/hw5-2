import {Routes, Route} from "react-router-dom"
import './App.css'

import Lay from './components/lay.jsx'
import Page from './components/page.jsx'
import Master from "./components/master.jsx"
import Nav from "./components/nav.jsx"
import Create from "./components/create.jsx"
import OnePost from "./components/onePost.jsx"


const App = () => {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Lay/>}>
          <Route index element={<Master/>} />
          <Route path="post" element={<Page/>} />
          <Route path="create" element={<Create/>} />
          <Route path="posts/:postId" element={<OnePost/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App