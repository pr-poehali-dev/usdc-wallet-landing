import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [pin, setPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length >= 4) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3375BB] to-[#1E3A8A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Icon name="Wallet" size={40} className="text-[#3375BB]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Trust Wallet</h1>
          <p className="text-blue-100">Войдите в ваш кошелек</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <label className="block text-white text-sm font-medium mb-3">
              PIN-код
            </label>
            <Input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Введите PIN"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-lg h-14"
              maxLength={6}
            />
          </div>

          <Button
            type="submit"
            disabled={pin.length < 4}
            className="w-full h-14 text-lg font-semibold bg-white text-[#3375BB] hover:bg-blue-50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            Войти
          </Button>

          <div className="text-center">
            <button type="button" className="text-white/80 hover:text-white text-sm transition-colors">
              Забыли PIN?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
