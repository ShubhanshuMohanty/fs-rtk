import { useState } from 'react'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
// import DeleteAllUser from './components/DeleteAllUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <UserDetails/>
    {/* <DeleteAllUser/> */}
    </>
  )
}

export default App
