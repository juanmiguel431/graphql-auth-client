import { Outlet } from 'react-router-dom';
import Header from './components/Header.tsx';

function App() {

  return (
    <div className="container">
      <Header />
      <h3>Juan Miguel</h3>
      <Outlet/>
    </div>
  )
}

export default App
