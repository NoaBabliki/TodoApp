
import './App.css'
import Home from './components/HomePage/Home'
import TodoDetails from './components/DetailsPage/TodoDetails';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<TodoDetails />} />
      </Routes>
    </>
  )
}

export default App
