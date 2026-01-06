import React from 'react';
import { Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ParallaxImage from './ParallaxImage';
import TextReveal from './TextReveal';

const Leaders: React.FC = () => {
  return (
    <section id="leaders" className="py-24 border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <h2 className="text-6xl md:text-9xl font-oswald font-bold text-gray-300 uppercase tracking-tighter mb-[-4rem] relative z-0 pointer-events-none text-center md:text-left">
          Leaders
        </h2>
        <AnimatedSection direction="up" delay={0.2} className="relative z-10 mb-20 md:pl-20">
          <TextReveal delay={0.3}>
            <h3 className="text-3xl md:text-4xl font-bold font-serif">私たちも、同じ道を<br/>歩んできました</h3>
          </TextReveal>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border border-gray-200">
           {/* Representative - Featured */}
           <AnimatedSection direction="right" delay={0.3} className="lg:col-span-8 relative group border-r border-gray-200">
              <div className="h-[600px] lg:h-[800px] overflow-hidden relative">
                 <ParallaxImage
                   src="./images/leaders/sachi.jpg"
                   alt="Sachi Ishibashi"
                   className="w-full h-full object-cover brightness-100 group-hover:brightness-110 transition-all duration-700"
                   speed={0.2}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                    <p className="text-pink-500 font-bold tracking-widest uppercase mb-2">
                      Representative
                    </p>
                    <h4 className="text-4xl md:text-5xl text-white font-serif font-bold mb-6">石橋 幸 <span className="text-xl font-sans font-light opacity-80">Sachi Ishibashi</span></h4>
                    <p className="text-gray-200 max-w-xl leading-relaxed">
                      エステティシャンから投資家へ転身し、わずか4年で数億円規模の株取引を行う実績を持つ。プライベートでは2児の母であり、がんサバイバー。「人と人との繋がりによって病気から快方に向かえた」という自身の実体験から、女性の幸せと自立を支援する本コミュニティを設立。
                    </p>
                 </div>
              </div>
           </AnimatedSection>

           {/* Vice Representative - Featured */}
           <AnimatedSection direction="left" delay={0.4} className="lg:col-span-4 relative group">
              <div className="h-[600px] lg:h-[700px] overflow-hidden relative">
                 <ParallaxImage
                   src="./images/leaders/maiko.jpg"
                   alt="Maiko Mizuta"
                   className="w-full h-full object-cover brightness-100 group-hover:brightness-110 transition-all duration-700"
                   speed={0.2}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                    <p className="text-amber-400 font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">
                      Vice Representative
                    </p>
                    <h4 className="text-3xl md:text-4xl text-white font-serif font-bold mb-4">水田 真依子 <span className="text-lg md:text-xl font-sans font-light opacity-80">Maiko Mizuta</span></h4>
                    <p className="text-gray-200 max-w-xl leading-relaxed text-sm md:text-base">
                      プロスノーボーダーとしてスポーツ界でアスリートとしての実績を持つ。美容家・サロンプロデューサーとしても活動しており、全国のサロンプロデュースも手掛けている。起業家・複数の会社での顧問を担い、「365日毎日会食」を実行。年間3,000人以上と交流するイベントの主催や、延べ500名以上の経営者が集う『ミズタマ会』の開催など、精力的に人との繋がりを広げる活動を実施している。
                    </p>
                 </div>
              </div>
           </AnimatedSection>
        </div>

        {/* Story Block */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 p-12 md:p-20">
           <AnimatedSection direction="right" delay={0.3} className="order-2 md:order-1">
              <TextReveal delay={0.4}>
                <h3 className="text-3xl font-serif font-bold mb-6">全ての女性が自立すること。<br/>選択の自由をもてる世界へ</h3>
              </TextReveal>
              <AnimatedSection direction="up" delay={0.5}>
                <p className="text-gray-600 leading-relaxed mb-6">
                  2児の母、そして経営者として走り続けた日々。しかし、突如訪れた大病が、私の価値観を大きく変えました。失意の底で私を救ってくれたのは、温かい人の繋がりでした。
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="text-gray-900 font-bold">
                  この経験から、多くの女性が支え合い、共に成長し、喜びを分かち合える場を創りたい——その想いが「FIRST CLASS」の原点です。
                </p>
              </AnimatedSection>
           </AnimatedSection>
           <AnimatedSection direction="left" delay={0.4} className="order-1 md:order-2 flex justify-center">
              <div 
                className="w-full max-w-sm aspect-square bg-white p-4 shadow-xl rotate-3 hover:rotate-6 transition-transform duration-500 cursor-pointer group"
                style={{
                  transform: 'rotate(3deg)',
                }}
              >
                 <img 
                   src="./images/origin.jpg" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                 />
              </div>
           </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Leaders;