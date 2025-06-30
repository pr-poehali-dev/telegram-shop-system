import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-telegram to-purple-bright p-2 rounded-xl">
              <Icon name="ShoppingBag" className="text-white" size={24} />
            </div>
            <h1 className="font-rubik font-bold text-xl bg-gradient-to-r from-telegram to-purple-bright bg-clip-text text-transparent">
              DigiShop
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#main"
              className="font-rubik font-medium text-gray-700 hover:text-telegram transition-colors"
            >
              Главная
            </a>
            <a
              href="#promotions"
              className="font-rubik font-medium text-gray-700 hover:text-telegram transition-colors"
            >
              Акции
            </a>
            <a
              href="#catalog"
              className="font-rubik font-medium text-gray-700 hover:text-telegram transition-colors"
            >
              Каталог
            </a>
            <a
              href="#support"
              className="font-rubik font-medium text-gray-700 hover:text-telegram transition-colors"
            >
              Поддержка
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-rubik">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            <Button className="font-rubik bg-gradient-to-r from-telegram to-purple-bright hover:from-telegram-dark hover:to-purple-bright text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
