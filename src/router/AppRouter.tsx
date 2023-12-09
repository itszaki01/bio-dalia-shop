import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Romoch from '../screens/romoch/Romoch'

export default function AppRouter() {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/hells' element={<Romoch/>} />
        </Routes>
    </BrowserRouter>
  )
}
