import React from 'react';
import SectionTitle from './SectionTitle';
import { Plane, Star, Crown } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-600 to-pink-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle en="SUCCESS PATH" ja="成長ロードマップ" color="white" />

        <div className="mt-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/30 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-pink-600">
                <Plane className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-playfair">Economy Class</h4>
              <p className="text-pink-200 text-sm mb-4">Start Up</p>
              <p className="text-sm leading-relaxed opacity-90">
                まずは「月10万円」を生み出すファーストステップ。副業、起業準備、マインドセットを整えます。
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white/20 backdrop-blur-md border border-white/40 p-8 rounded-2xl text-center transform scale-105 shadow-2xl z-10">
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-pink-900 text-xs font-bold px-3 py-1 rounded-full">
                 RECOMMENDED
               </div>
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold mb-2 font-playfair text-amber-300">Business Class</h4>
              <p className="text-pink-200 text-sm mb-4">Scale Up</p>
              <p className="text-sm leading-relaxed font-medium">
                事業を軌道に乗せ、資産形成を本格化。仲間との協業やオフィス活用で加速します。
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <Crown className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-playfair">First Class</h4>
              <p className="text-pink-200 text-sm mb-4">Leader / Investor</p>
              <p className="text-sm leading-relaxed opacity-90">
                「認定講師」として活躍できる『First Class Place』制度。投資家としての道も拓かれます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;