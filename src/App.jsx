import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import CommercePage from './pages/Commerce/CommercePage';
import InventaryPage from './pages/Inventary/InventaryPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import IsAuthProvider from './shared/contexts/IsAuthContext';
import './styles/main.scss';

function App() {
  const { isAuthUser } = IsAuthProvider;
  return (
    <div className='App'>
      <IsAuthProvider>
        <Router>
          <Routes>
            {isAuthUser ? (
              <Route path='*' element={<Navigate to='/commerce' />} />
            ) : (
              <Route path='*' element={<Navigate to='/login' />} />
            )}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/inventary' element={<InventaryPage />} />
            <Route path='/commerce' element={<CommercePage />} />
          </Routes>
        </Router>
      </IsAuthProvider>
    </div>
  );
}

export default App;
