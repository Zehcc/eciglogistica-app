import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import AddPage from './pages/Add/AddPage';
import EditPage from './pages/Edit/EditPage';
import InventaryPage from './pages/Inventary/InventaryPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import IsAuthProvider from './shared/contexts/IsAuthContext';
import RequireAuth from './shared/RequireAuth/RequireAuth';
import './styles/main.scss';

function App() {
  return (
    <div className='App'>
      <IsAuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route
              path='/inventary'
              element={
                <RequireAuth>
                  <InventaryPage />
                </RequireAuth>
              }
            />
            <Route
              path='/edit/:id'
              element={
                <RequireAuth>
                  <EditPage />
                </RequireAuth>
              }
            />
            <Route
              path='/add'
              element={
                <RequireAuth>
                  <AddPage />
                </RequireAuth>
              }
            />
            <Route path='*' element={<Navigate to='/inventary' />} />
          </Routes>
        </Router>
      </IsAuthProvider>
    </div>
  );
}

export default App;
