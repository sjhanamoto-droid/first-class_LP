import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-b border-gray-200">
       <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col md:flex-row items-end justify-between mb-16">
             <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter animate-fade-in">Voices</h2>
             <AnimatedSection direction="fade" delay={0.4}>
               <p className="text-gray-500 font-bold mb-2">参加メンバーの声</p>
             </AnimatedSection>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <AnimatedSection direction="right" delay={0.3}>
               <div className="bg-gray-50 p-10 md:p-14 relative group hover:bg-white transition-all duration-500 cursor-pointer overflow-hidden">
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      transform: 'scale(0)',
                      animation: 'group-hover:scale(2) 0.5s ease-out',
                    }}
                  ></div>
                  <div className="relative z-10">
                     <Quote className="w-12 h-12 text-gray-200 mb-6 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
                     <p className="text-xl md:text-2xl font-serif font-bold leading-relaxed mb-8 group-hover:text-gray-900 transition-colors">
                       「一人で悩んでいたのが嘘のよう。今は信頼できる仲間と、新しい事業に挑戦しています。」
                     </p>
                     <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden group-hover:ring-2 group-hover:ring-pink-500 transition-all duration-300">
                           <img src="https://picsum.photos/200/200?random=7" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                           <p className="font-bold text-sm group-hover:text-pink-600 transition-colors">Aさん (30代・起業家)</p>
                        </div>
                     </div>
                  </div>
               </div>
             </AnimatedSection>

             <AnimatedSection direction="left" delay={0.4}>
               <div className="bg-gray-50 p-10 md:p-14 relative group hover:bg-white transition-all duration-500 cursor-pointer overflow-hidden">
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  <div className="relative z-10">
                     <Quote className="w-12 h-12 text-gray-200 mb-6 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
                     <p className="text-xl md:text-2xl font-serif font-bold leading-relaxed mb-8 group-hover:text-gray-900 transition-colors">
                       「具体的にお金の知識が身につき、将来への不安が自信に変わりました。」
                     </p>
                     <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden group-hover:ring-2 group-hover:ring-pink-500 transition-all duration-300">
                           <img src="https://picsum.photos/200/200?random=8" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                           <p className="font-bold text-sm group-hover:text-pink-600 transition-colors">Bさん (40代・会社員)</p>
                        </div>
                     </div>
                  </div>
               </div>
             </AnimatedSection>
          </div>
       </div>
    </section>
  );
};

export default Testimonials;