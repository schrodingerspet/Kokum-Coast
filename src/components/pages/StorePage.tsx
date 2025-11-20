import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { useState } from 'react';
import Footer from '@/components/Footer';

const menuItems = [
  {
    id: 1,
    name: 'Kokum Sol Kadhi',
    description: 'Refreshing kokum drink with coconut milk and spices',
    price: 149,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1600788907416-456578634209?w=400&h=300&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Bombil Fry',
    description: 'Crispy Bombay duck fish marinated in coastal spices',
    price: 399,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Malvani Fish Curry',
    description: 'Fresh catch in authentic Malvani coconut gravy',
    price: 549,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Prawn Koliwada',
    description: 'Spicy battered prawns, Koli-style',
    price: 499,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Surmai Tawa Fry',
    description: 'Pan-seared kingfish with coastal masala',
    price: 599,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1580959375944-57c5a2c6e093?w=400&h=300&fit=crop',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Crab Masala',
    description: 'Mud crab in rich tomato-coconut gravy',
    price: 799,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1559737558-2f5a7654a2e6?w=400&h=300&fit=crop',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Veg Kolhapuri',
    description: 'Mixed vegetables in spicy Kolhapuri curry',
    price: 349,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Solkadi Ice Cream',
    description: 'Unique kokum-flavored dessert',
    price: 199,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    rating: 4.7,
  },
];

const categories = ['All', 'Beverages', 'Appetizers', 'Main Course', 'Desserts'];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<number>(0);

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=600&fit=crop"
            alt="Delicious coastal cuisine"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/60 to-orange-900/70" />
        </motion.div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-4">
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Fresh. Authentic. Delicious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shopping Cart Badge */}
      <motion.div 
        className="fixed top-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl">
          <ShoppingCart className="w-6 h-6" />
          {cart > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
              {cart}
            </span>
          )}
        </Button>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:bg-purple-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">{item.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {item.category}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-gray-800">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="flex items-center justify-between pt-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{item.price}
                  </div>
                  <Button
                    onClick={addToCart}
                    className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500">No items found in this category</p>
          </motion.div>
        )}

      </main>
      
      <Footer />
    </div>
  );
}
