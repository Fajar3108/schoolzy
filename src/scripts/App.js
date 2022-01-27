import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import { Login, Register } from './pages';

const App = () => {
  return (
    <Main />
  );
}

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
