import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import TextReveal from './TextReveal';

const Benefits: React.FC = () => {
  return (
    <div id="benefits" className="border-b border-gray-200">
      
      {/* Header */}
      <AnimatedSection direction="fade" className="py-24 text-center border-b border-gray-200 bg-black text-white relative overflow-hidden">
         <div 
           className="absolute inset-0 opacity-10"
           style={{
             background: 'radial-gradient(circle at 50% 50%, #ec4899, transparent)',
             animation: 'pulse 4s ease-in-out infinite',
           }}
         ></div>
         <div className="relative z-10 flex flex-col items-center justify-center">
           <TextReveal delay={0.2}>
             <h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter mb-4">Values</h2>
           </TextReveal>
           <AnimatedSection direction="up" delay={0.4}>
             <p className="text-pink-500 font-bold tracking-widest text-center">FIRST CLASSで得られる4つの価値</p>
           </AnimatedSection>
         </div>
      </AnimatedSection>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
         {[
           {
             id: '01',
             en: 'Financial Literacy',
             jp: 'お金の教養',
             desc: '資産づくり、株式投資（日本/米国）、NISA活用術',
             features: ['インフレに負けない資産形成', '初心者からの投資スタート', 'Privateクラスでの上級編']
           },
           {
             id: '02',
             en: 'Business Skills',
             jp: 'ビジネススキル',
             desc: 'マーケティング、ライティング、SNS活用法',
             features: ['月10〜20万を目指す実践スキル', '起業・副業の0→1サポート', 'Webデザイン講座']
           },
           {
             id: '03',
             en: 'Connections',
             jp: '圧倒的な繋がり',
             desc: '毎月の定例会やパーティで、刺激し合える仲間と出会う',
             features: ['経営者とのマッチング', '異業種コラボレーション', '六本木オフィス利用権']
           },
           {
             id: '04',
             en: 'Premium Life',
             jp: '極上の特典',
             desc: '美・食・健・衣を豊かにする会員限定サービス',
             features: ['高級別邸（南房総・琵琶湖）利用', '提携サロン優待', 'じゃらん法人サービス']
           }
         ].map((item, i) => (
           <AnimatedSection key={i} direction={i % 2 === 0 ? 'right' : 'left'} delay={0.1 * i}>
             <div className="group border-b border-r border-gray-200 p-12 lg:p-16 hover:bg-gray-50 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <h3 
                      className="text-4xl md:text-5xl font-oswald font-bold text-gray-200 group-hover:text-black transition-all duration-500"
                      style={{
                        transform: 'translateX(0)',
                      }}
                    >
                      {item.id}
                    </h3>
                    <span className="bg-black text-white text-xs px-2 py-1 font-oswald uppercase tracking-wider group-hover:bg-pink-600 transition-colors duration-300">{item.en}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300 inline-block">{item.jp}</h4>
                  <p className="text-gray-600 mb-8 font-medium">{item.desc}</p>
                  
                  <ul className="space-y-3">
                     {item.features.map((f, j) => (
                       <li 
                         key={j} 
                         className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors"
                         style={{
                           opacity: 0,
                           animation: `fadeInUp 0.5s ease-out ${0.3 + j * 0.1}s forwards`,
                         }}
                       >
                          <span className="w-4 h-4 bg-pink-600 flex items-center justify-center rounded-full mr-3 text-white text-[10px] group-hover:scale-110 transition-transform duration-300">
                            <Check className="w-3 h-3"/>
                          </span>
                          {f}
                       </li>
                     ))}
                  </ul>
                </div>
             </div>
           </AnimatedSection>
         ))}
      </div>

      {/* Opportunity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-pink-600 text-white relative overflow-hidden">
         <div 
           className="absolute inset-0 opacity-20"
           style={{
             background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3), transparent 50%)',
             animation: 'float 6s ease-in-out infinite',
           }}
         ></div>
         <AnimatedSection direction="right" delay={0.2} className="p-16 border-b md:border-b-0 md:border-r border-pink-700 hover:bg-pink-700 transition-all duration-500 cursor-pointer relative z-10 group">
            <h4 className="text-3xl font-oswald font-bold mb-4 uppercase group-hover:scale-105 transition-transform duration-300">First Class Place</h4>
            <p className="font-bold mb-4">認定講師制度</p>
            <p className="text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
              コミュニティで学び、実績を積むことで、FIRST CLASSの認定講師として活躍する道も。あなたの知識や経験が、次の誰かの力になります。
            </p>
         </AnimatedSection>
         <AnimatedSection direction="left" delay={0.3} className="p-16 hover:bg-pink-700 transition-all duration-500 cursor-pointer relative z-10 group">
            <h4 className="text-3xl font-oswald font-bold mb-4 uppercase group-hover:scale-105 transition-transform duration-300">Dragon's Den</h4>
            <p className="font-bold mb-4">事業支援ピッチ</p>
            <p className="text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
              あなたのビジネスプランを経営者たちに直接プレゼン。事業拡大の資金調達のチャンスを掴みましょう。
            </p>
         </AnimatedSection>
         
         <style dangerouslySetInnerHTML={{__html: `
           @keyframes fadeInUp {
             from {
               opacity: 0;
               transform: translateY(10px);
             }
             to {
               opacity: 1;
               transform: translateY(0);
             }
           }
           @keyframes float {
             0%, 100% { transform: translate(0, 0); }
             50% { transform: translate(20px, -20px); }
           }
         `}} />
      </div>
    </div>
  );
};

export default Benefits;