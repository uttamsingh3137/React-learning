import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1> React with Deno</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
