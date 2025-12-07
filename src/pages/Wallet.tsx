import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const USDC_TO_RUB = 96.5;

const Wallet = () => {
  const usdcBalance = 14674820;
  const rubBalance = (usdcBalance * USDC_TO_RUB).toLocaleString('ru-RU');

  const [activeTab, setActiveTab] = useState('assets');

  const transactions = [
    { id: 1, type: 'receive', amount: '+500 USDC', date: '7 декабря, 14:32', from: '0x742d...3a5c' },
    { id: 2, type: 'send', amount: '-250 USDC', date: '6 декабря, 09:15', to: '0x8a1b...7f2e' },
    { id: 3, type: 'receive', amount: '+1,000 USDC', date: '5 декабря, 18:45', from: '0x3c4d...9b1a' },
    { id: 4, type: 'send', amount: '-75 USDC', date: '4 декабря, 11:20', to: '0x5e6f...2c3d' },
  ];

  const tokens = [
    { symbol: 'USDC', name: 'USD Coin', balance: usdcBalance.toLocaleString('en-US'), value: `₽${rubBalance}`, icon: '💵', change: '+2.4%' },
    { symbol: 'ETH', name: 'Ethereum', balance: '0.0', value: '₽0', icon: '⟠', change: '+5.2%' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.0', value: '₽0', icon: '₿', change: '+3.1%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#3375BB] to-[#1E3A8A] text-white px-6 pt-8 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Кошелек</h1>
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
            <Icon name="Settings" size={20} />
          </button>
        </div>

        <div className="text-center mb-8 animate-fade-in">
          <p className="text-blue-100 text-sm mb-2">Общий баланс</p>
          <h2 className="text-5xl font-bold mb-3">
            {usdcBalance.toLocaleString('en-US')} <span className="text-2xl">USDC</span>
          </h2>
          <p className="text-blue-100 text-lg">≈ ₽{rubBalance}</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Icon name="Send" size={20} className="text-[#3375BB]" />
            </div>
            <span className="text-xs font-medium">Отправить</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Icon name="Download" size={20} className="text-[#3375BB]" />
            </div>
            <span className="text-xs font-medium">Получить</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Icon name="ArrowLeftRight" size={20} className="text-[#3375BB]" />
            </div>
            <span className="text-xs font-medium">Обмен</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Icon name="ShoppingBag" size={20} className="text-[#3375BB]" />
            </div>
            <span className="text-xs font-medium">Купить</span>
          </button>
        </div>
      </div>

      <div className="px-6 -mt-16">
        <Card className="bg-white shadow-xl rounded-2xl p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="assets" className="data-[state=active]:bg-[#3375BB] data-[state=active]:text-white">
                Активы
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#3375BB] data-[state=active]:text-white">
                История
              </TabsTrigger>
            </TabsList>

            <TabsContent value="assets" className="space-y-3 animate-fade-in">
              {tokens.map((token) => (
                <div
                  key={token.symbol}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3375BB] to-[#1E3A8A] flex items-center justify-center text-2xl">
                      {token.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{token.symbol}</p>
                      <p className="text-sm text-gray-500">{token.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{token.balance}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500">{token.value}</p>
                      <span className="text-xs text-green-600 font-medium">{token.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="history" className="space-y-3 animate-fade-in">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      tx.type === 'receive' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <Icon
                        name={tx.type === 'receive' ? 'ArrowDownLeft' : 'ArrowUpRight'}
                        size={20}
                        className={tx.type === 'receive' ? 'text-green-600' : 'text-red-600'}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {tx.type === 'receive' ? 'Получено' : 'Отправлено'}
                      </p>
                      <p className="text-sm text-gray-500">{tx.date}</p>
                      <p className="text-xs text-gray-400">
                        {tx.type === 'receive' ? `От ${tx.from}` : `Кому ${tx.to}`}
                      </p>
                    </div>
                  </div>
                  <p className={`font-semibold ${
                    tx.type === 'receive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {tx.amount}
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-[#3375BB]">
            <Icon name="Wallet" size={24} />
            <span className="text-xs font-medium">Кошелек</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <Icon name="TrendingUp" size={24} />
            <span className="text-xs font-medium">Рынок</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <Icon name="Zap" size={24} />
            <span className="text-xs font-medium">DApps</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <Icon name="User" size={24} />
            <span className="text-xs font-medium">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
