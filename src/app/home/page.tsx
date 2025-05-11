"use client";
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronRight, Search, User } from 'lucide-react';

export default function FuturisticHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleBuyNow = () => {
    setIsAddingToCart(true);
    
    setTimeout(() => {
      setIsAddingToCart(false);
      setShowAddedMessage(true);
      
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-black" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl opacity-10" />
      </div>
      
      {/* Grid overlay effect */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 z-0" 
           style={{backgroundImage: 'linear-gradient(to right, rgba(75, 85, 99, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 85, 99, 0.1) 1px, transparent 1px)', 
                   backgroundSize: '50px 50px'}} />

      {/* Navbar */}
      <nav className="relative z-10 px-6 py-4 border-b border-gray-800 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Payment-module
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">Gallery</a>
            <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-6 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              QUANTUM Z
            </span>
            <span className="block mt-2">Holographic Display</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:max-w-md">
            The next generation of immersive technology. Experience true-to-life 
            3D projections with zero latency and 360° viewing angles.
          </p>
          
          <div className="flex space-x-8 text-sm text-gray-300">
            <div className="space-y-1">
              <div className="font-medium">Resolution</div>
              <div>8K Ultra HD</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">Field of View</div>
              <div>120° diagonal</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">Weight</div>
              <div>245g</div>
            </div>
          </div>
          
          <div className="space-y-6 pt-6">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold">$1,999</div>
              <div className="text-sm text-gray-400 line-through">$2,499</div>
              <div className="ml-2 px-2 py-1 text-xs bg-blue-500 bg-opacity-20 text-blue-300 rounded">
                SAVE 20%
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleBuyNow}
                disabled={isAddingToCart}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span className={`flex items-center justify-center transition-all duration-500 ${isAddingToCart ? 'opacity-0' : 'opacity-100'}`}>
                  <span>Buy Now</span>
                  <ChevronRight size={16} className={`ml-1 transform transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                </span>
                
                {/* Circular loading animation */}
                {isAddingToCart && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
                
                {/* Success message */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-green-500 transition-opacity duration-300 ${showAddedMessage ? 'opacity-100' : 'opacity-0'}`}
                >
                  Added to cart!
                </div>
                
                {/* Background pulse effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
              
              <button className="px-4 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-blue-500 opacity-20 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              <div className="absolute w-80 h-80 border border-purple-500 opacity-15 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute w-96 h-96 border border-blue-500 opacity-10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
            </div>
            
            {/* Product display */}
            <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              </div>
              
              {/* Placeholder product - in a real app, use a proper product image */}
              <div className="transform -rotate-12 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Quantum Z Holographic Display" 
                  className="w-48 h-48 object-contain drop-shadow-2xl filter brightness-110" 
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"></div>
            </div>
            
            {/* Tech specs floating around the product */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs border border-gray-700 animate-pulse">
                8K Ultra
              </div>
            </div>
            <div className="absolute bottom-12 right-0 transform translate-x-1/2">
              <div className="px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs border border-gray-700 animate-pulse" style={{animationDelay: '1s'}}>
                Neural Sync
              </div>
            </div>
            <div className="absolute top-1/4 right-0 transform translate-x-3/4">
              <div className="px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs border border-gray-700 animate-pulse" style={{animationDelay: '2s'}}>
                Zero Latency
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}