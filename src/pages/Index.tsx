import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = [
    {
      title: "Премиум курс по JavaScript",
      description:
        "Полный курс по современному JavaScript с практическими заданиями",
      price: 2990,
      originalPrice: 4990,
      discount: "-40%",
      category: "Обучение",
      image: "📚",
      isHot: true,
    },
    {
      title: "Шаблоны для Figma",
      description: "Коллекция из 50+ профессиональных шаблонов для дизайна",
      price: 1490,
      category: "Дизайн",
      image: "🎨",
    },
    {
      title: "Бот для Telegram",
      description: "Готовый бот для автоматизации бизнеса с документацией",
      price: 3990,
      originalPrice: 5990,
      discount: "-33%",
      category: "Разработка",
      image: "🤖",
      isHot: true,
    },
  ];

  const promotions = [
    {
      title: "Скидка 50%",
      description: "На все курсы по программированию",
      image: "💻",
      color: "from-purple-bright to-blue-500",
    },
    {
      title: "2+1 бесплатно",
      description: "При покупке шаблонов дизайна",
      image: "🎁",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-rubik">
      <Header />

      {/* Hero Section */}
      <section id="main" className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-telegram via-purple-bright to-telegram bg-clip-text text-transparent">
              Цифровой магазин
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Лучшие цифровые товары для развития бизнеса и творчества. Быстрая
            доставка, надёжная оплата, 24/7 поддержка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-rubik bg-gradient-to-r from-telegram to-purple-bright hover:from-telegram-dark hover:to-purple-bright text-white px-8 py-3"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Начать покупки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-rubik px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🔥 Горячие акции
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${promo.color} p-8 rounded-2xl text-white hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-lg opacity-90">{promo.description}</p>
                  </div>
                  <div className="text-5xl animate-float">{promo.image}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ⭐ Популярные товары
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        id="support"
        className="py-16 bg-gradient-to-r from-telegram/10 to-purple-bright/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            💬 Нужна помощь?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Наша команда поддержки готова помочь вам 24/7. Свяжитесь с нами
            любым удобным способом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-rubik bg-telegram hover:bg-telegram-dark text-white"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram чат
            </Button>
            <Button size="lg" variant="outline" className="font-rubik">
              <Icon name="Mail" size={20} className="mr-2" />
              Email поддержка
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-telegram to-purple-bright p-2 rounded-xl">
                <Icon name="ShoppingBag" className="text-white" size={24} />
              </div>
              <h3 className="font-rubik font-bold text-xl">DigiShop</h3>
            </div>
            <p className="text-gray-400 font-rubik">
              © 2024 DigiShop. Лучшие цифровые товары для вашего успеха.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
