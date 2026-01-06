import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ParallaxImage from './ParallaxImage';
import TextReveal from './TextReveal';

const Concept: React.FC = () => {
  return (
    <>
      {/* Introduction */}
      <section id="intro" className="border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2">
           
           <AnimatedSection direction="right" delay={0.2} className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-gray-200">
              <TextReveal delay={0.3}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-12">
                  自立からはじまる、自分らしい生き方
                </h2>
              </TextReveal>
              <div className="space-y-8 max-w-lg">
                <AnimatedSection direction="up" delay={0.5}>
                  <p className="text-lg font-medium leading-relaxed">
                    私たち日本人は、「守る」ことや「おもてなし」は抜群です。<br/>
                    ですが、それだけでは描いた未来は実現できません。<br/>
                    知らないことは学び、仲間と知恵を共有する。<br/>
                    楽しみながら自立し、自分の足で歩む。<br/>
                    FIRST CLASSは、そんな大人の女性が集う場所です。
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={0.7}>
                  <div className="flex items-start">
                    <ArrowDownRight className="w-8 h-8 mr-4 text-pink-600 flex-shrink-0 animate-pulse" />
                    <p className="text-xl font-bold border-b-2 border-pink-600 pb-2 inline-block">
                      理想を現実に。私が選ぶ人生へ。
                    </p>
                  </div>
                </AnimatedSection>
              </div>
           </AnimatedSection>

           <AnimatedSection direction="left" delay={0.4} className="relative h-[600px] md:h-auto overflow-hidden group">
              <ParallaxImage
                 src="./images/concept.jpg"
                 alt="Concept"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 speed={0.2}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent group-hover:from-transparent transition-all duration-1000"></div>
           </AnimatedSection>

        </div>
      </section>

      {/* 3 Pillars */}
      <section id="concept" className="bg-black text-white py-24 md:py-32 border-b border-gray-200 relative overflow-hidden">
         {/* Animated Background Gradient */}
         <div 
           className="absolute inset-0 opacity-20"
           style={{
             background: 'linear-gradient(45deg, #ec4899, #db2777, #9d174d, #831843)',
             backgroundSize: '400% 400%',
             animation: 'gradientShift 15s ease infinite',
           }}
         ></div>
         
         <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="mb-20 border-l-4 border-pink-600 pl-8">
                 <h3 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-4">
                    Welcome to<br/>First Class
                 </h3>
                 <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                   FIRSTCLASSは、単なるビジネスコミュニティではありません。<br/>
                   あなたの理想のライフデザインを、仲間と共に描き、実現するための<br/>「ライフデザインアカデミー」です。
                 </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
               {[
                 { title: 'CONNECTIONS', jp: '繋がり', desc: '同じ志を持つ仲間との出会い' },
                 { title: 'LEARNING', jp: '学び', desc: '必要な知識を必要なタイミングで' },
                 { title: 'PRACTICE', jp: '実践', desc: '事業のスケールアップと資産形成' }
               ].map((item, i) => (
                 <AnimatedSection key={i} direction="up" delay={0.3 + i * 0.1}>
                   <div className="group border-r border-b border-gray-800 p-10 md:p-16 relative overflow-hidden hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                      <span 
                        className="block text-6xl md:text-8xl font-oswald font-bold opacity-20 mb-8 group-hover:opacity-20 group-hover:text-black transition-all duration-500"
                        style={{
                          transform: 'translateX(0)',
                        }}
                      >
                        0{i+1}
                      </span>
                      <h4 className="text-3xl font-oswald font-bold mb-2 tracking-wider group-hover:scale-105 transition-transform duration-300">{item.title}</h4>
                      <p className="text-pink-600 font-bold mb-4 group-hover:text-pink-800 transition-colors">{item.jp}</p>
                      <p className="text-gray-500 group-hover:text-gray-800 transition-colors">{item.desc}</p>
                      <ArrowDownRight 
                        className="absolute top-8 right-8 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 text-pink-600 group-hover:translate-x-2 group-hover:-translate-y-2" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:to-transparent transition-all duration-500"></div>
                   </div>
                 </AnimatedSection>
               ))}
            </div>
         </div>
         
         <style dangerouslySetInnerHTML={{__html: `
           @keyframes gradientShift {
             0% { background-position: 0% 50%; }
             50% { background-position: 100% 50%; }
             100% { background-position: 0% 50%; }
           }
         `}} />
      </section>
    </>
  );
};

export default Concept;