import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#main", label: "🏠 Главная" },
    { href: "#promotions", label: "🔥 Акции" },
    { href: "#catalog", label: "📦 Каталог" },
    { href: "#support", label: "💬 Поддержка" },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-rubik font-medium text-gray-700 hover:text-telegram transition-colors"
              >
                {item.label.split(" ")[1]}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-rubik">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            <Button className="font-rubik bg-gradient-to-r from-telegram to-purple-bright hover:from-telegram-dark hover:to-purple-bright text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="ShoppingCart" size={20} />
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-telegram to-purple-bright p-2 rounded-xl">
                      <Icon
                        name="ShoppingBag"
                        className="text-white"
                        size={20}
                      />
                    </div>
                    <span className="font-rubik font-bold bg-gradient-to-r from-telegram to-purple-bright bg-clip-text text-transparent">
                      DigiShop
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleMenuClick(item.href)}
                      className="w-full text-left p-4 rounded-lg hover:bg-gradient-to-r hover:from-telegram/10 hover:to-purple-bright/10 transition-all font-rubik text-lg"
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="border-t pt-4 space-y-3">
                    <Button className="w-full font-rubik bg-gradient-to-r from-telegram to-purple-bright text-white">
                      <Icon name="User" size={16} className="mr-2" />
                      Войти
                    </Button>
                    <Button variant="outline" className="w-full font-rubik">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Корзина
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
