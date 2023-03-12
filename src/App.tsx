import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../tabs/home'
import { Checkout } from '../tabs/checkout'
import { Navbar } from '../components/navbar'

function App() {
  return (
  <>
    <Navbar/>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </Container>
  </>
  )
}

export default App
