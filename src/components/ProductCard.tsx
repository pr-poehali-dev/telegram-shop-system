import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  category: string;
  image: string;
  isHot?: boolean;
}

const ProductCard = ({
  title,
  description,
  price,
  originalPrice,
  discount,
  category,
  image,
  isHot = false,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg h-48 bg-gradient-to-br from-purple-light/20 to-telegram/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-float">{image}</div>
          </div>

          {isHot && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-rubik">
              <Icon name="Flame" size={12} className="mr-1" />
              Хит
            </Badge>
          )}

          {discount && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-rubik">
              {discount}
            </Badge>
          )}

          <Badge
            variant="secondary"
            className="absolute bottom-3 left-3 font-rubik"
          >
            {category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-rubik font-semibold text-lg mb-2 group-hover:text-telegram transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 font-rubik">{description}</p>

        <div className="flex items-center space-x-2 mb-3">
          <span className="font-rubik font-bold text-xl text-telegram">
            {price}₽
          </span>
          {originalPrice && (
            <span className="font-rubik text-gray-400 line-through text-sm">
              {originalPrice}₽
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full font-rubik bg-gradient-to-r from-telegram to-purple-bright hover:from-telegram-dark hover:to-purple-bright text-white group-hover:shadow-lg transition-all">
          <Icon name="Download" size={16} className="mr-2" />
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
