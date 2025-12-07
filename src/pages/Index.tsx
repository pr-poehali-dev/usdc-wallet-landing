import { useState } from 'react';
import Login from './Login';
import Wallet from './Wallet';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Wallet />
  ) : (
    <Login onLogin={() => setIsAuthenticated(true)} />
  );
};

export default Index;