import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <nav className="bg-[#333333] border-b border-[#FF6B35] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Bike" size={32} className="text-[#FF6B35]" />
            <span className="text-2xl font-bold text-[#FF6B35]">
              MOTO GAMING
            </span>
          </div>
          <div className="flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:text-[#FF6B35] hover:bg-[#333333]"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-[#FF6B35] hover:bg-[#333333]"
            >
              Донаты
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-[#FF6B35] hover:bg-[#333333]"
            >
              Моды
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-[#FF6B35] hover:bg-[#333333]"
            >
              Форум
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-[#FF6B35] hover:bg-[#333333]"
            >
              Telegram
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] to-[#333333] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/b2da28f2-f51b-4ee5-8c2a-c77890ea6bb5.jpg"
            alt="Racing motorcycle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 text-[#FF6B35]">
            ULTIMATE MOTO GAMING
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Погрузись в мир мотоциклетных гонок! Кастомизируй байки, участвуй в
            турнирах и получай помощь от профессионалов.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-3"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FF6B35]">
            <Icon name="Heart" size={32} className="inline mr-3" />
            Донат-пакеты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#FF6B35] p-6 hover:scale-105 transition-transform">
              <div className="text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">Стартер</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-4">
                  299₽
                </div>
                <ul className="text-left space-y-2 text-gray-300 mb-6">
                  <li>• Премиум мотоцикл</li>
                  <li>• 5000 игровых монет</li>
                  <li>• Эксклюзивные скины</li>
                  <li>• Приоритетная поддержка</li>
                </ul>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Купить
                </Button>
              </div>
            </Card>

            <Card className="bg-[#333333] border-[#FF6B35] p-6 hover:scale-105 transition-transform relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#FF6B35] text-white">
                Популярный
              </Badge>
              <div className="text-center">
                <Icon
                  name="Crown"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">Про</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-4">
                  599₽
                </div>
                <ul className="text-left space-y-2 text-gray-300 mb-6">
                  <li>• 3 премиум мотоцикла</li>
                  <li>• 15000 игровых монет</li>
                  <li>• Все скины коллекции</li>
                  <li>• VIP статус на 30 дней</li>
                  <li>• Персональный тренер</li>
                </ul>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Купить
                </Button>
              </div>
            </Card>

            <Card className="bg-[#333333] border-[#FF6B35] p-6 hover:scale-105 transition-transform">
              <div className="text-center">
                <Icon
                  name="Star"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">Легенда</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-4">
                  999₽
                </div>
                <ul className="text-left space-y-2 text-gray-300 mb-6">
                  <li>• Все мотоциклы</li>
                  <li>• 50000 игровых монет</li>
                  <li>• Эксклюзивные моды</li>
                  <li>• VIP статус навсегда</li>
                  <li>• Команда экспертов</li>
                </ul>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Купить
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mods Section */}
      <section className="py-16 bg-[#333333]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FF6B35]">
            <Icon name="Settings" size={32} className="inline mr-3" />
            Популярные моды
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1A1A1A] border-[#FF6B35] p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <Icon name="Bike" size={32} className="text-[#FF6B35] mr-3" />
                <h3 className="text-xl font-bold text-white">
                  Реалистичная физика
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Улучшенная физика мотоциклов для максимального реализма
              </p>
              <div className="flex items-center justify-between">
                <Badge className="bg-[#FF6B35] text-white">v2.1</Badge>
                <Button
                  size="sm"
                  className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                >
                  Скачать
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1A1A] border-[#FF6B35] p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <Icon
                  name="Palette"
                  size={32}
                  className="text-[#FF6B35] mr-3"
                />
                <h3 className="text-xl font-bold text-white">
                  Кастомные скины
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Огромная коллекция уникальных скинов для мотоциклов
              </p>
              <div className="flex items-center justify-between">
                <Badge className="bg-[#FF6B35] text-white">v1.5</Badge>
                <Button
                  size="sm"
                  className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                >
                  Скачать
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1A1A] border-[#FF6B35] p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <Icon name="Map" size={32} className="text-[#FF6B35] mr-3" />
                <h3 className="text-xl font-bold text-white">Новые трассы</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Дополнительные трассы с различными уровнями сложности
              </p>
              <div className="flex items-center justify-between">
                <Badge className="bg-[#FF6B35] text-white">v3.0</Badge>
                <Button
                  size="sm"
                  className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                >
                  Скачать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#FF6B35]">
            <Icon name="Users" size={32} className="inline mr-3" />
            Присоединяйся к сообществу
          </h2>
          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram канал
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Форум
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] border-t border-[#FF6B35] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Bike" size={24} className="text-[#FF6B35]" />
            <span className="text-xl font-bold text-[#FF6B35]">
              MOTO GAMING
            </span>
          </div>
          <p className="text-gray-300">
            © 2024 Moto Gaming. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
