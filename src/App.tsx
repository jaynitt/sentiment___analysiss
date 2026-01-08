import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketOverview } from './components/MarketOverview';
import { SectorSentiment } from './components/SectorSentiment';
import { StockList } from './components/StockList';
import { NewsInsights } from './components/NewsInsights';
import { FloatingParticles } from './components/FloatingParticles';

export default function App() {
  const [selectedView, setSelectedView] = useState<'stocks' | 'sectors'>('stocks');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0a00] text-white relative overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10">
        <Header />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <MarketOverview />
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setSelectedView('stocks')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedView === 'stocks'
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
                }`}
              >
                Individual Stocks
              </button>
              <button
                onClick={() => setSelectedView('sectors')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedView === 'sectors'
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
                }`}
              >
                Sector Analysis
              </button>
            </div>

            {selectedView === 'stocks' ? <StockList /> : <SectorSentiment />}
          </div>

          <NewsInsights />
        </motion.div>
      </div>
    </div>
  );
}
