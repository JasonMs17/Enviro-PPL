import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  // Jika tidak ada user (belum login), arahkan ke halaman login
  if (!user) return <Navigate to="/login" />;
  
  return children;  // Jika user ada, tampilkan halaman yang diinginkan
};

export default ProtectedRoute;
