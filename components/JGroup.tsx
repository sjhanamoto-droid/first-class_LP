import React from 'react';
import { Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Service {
  name: string;
  logo?: string; // ロゴ画像のパス（後で追加可能）
  website?: string;
  instagram?: string;
}

const services: Service[] = [
  {
    name: 'キラキラハウスクリーニング',
    logo: './images/logo/kirakira.png',
    website: 'https://house-cleaning.jnavi.co.jp',
  },
  {
    name: 'アクティビティ',
    logo: './images/logo/jnavi.png',
    website: 'https://min-paku.ja.jnavi.co.jp/',
    instagram: 'https://www.instagram.com/vacationrentals_jnavi?igsh=bDZ6azFxcWp1azV6',
  },
  {
    name: 'マネスタ',
    logo: './images/logo/manesuta.png',
    website: 'https://min-paku.ja.jnavi.co.jp/',
    instagram: 'https://www.instagram.com/money_study_college/',
  },
  {
    name: 'エシュロンヴィレッジ',
    logo: './images/logo/echelon.png',
    website: 'https://echelonvillage.co.jp/',
    instagram: 'https://www.instagram.com/eche.lonvillage',
  },
  {
    name: 'ファーストクラス',
    logo: './images/logo/firstclass.png',
    website: 'https://class-info.jp',
    instagram: 'https://www.instagram.com/js_firstclass/',
  },
];

const JGroup: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      <main>
        {/* Hero Section */}
        <section className="border-b border-gray-200">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-4">
                  J-Group
                </h1>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <AnimatedSection key={service.name} direction="up" delay={index * 0.1}>
                  <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                    {/* Service Name */}
                    <h2 className="text-2xl md:text-3xl font-oswald font-bold uppercase mb-6 text-center">
                      {service.name}
                    </h2>

                    {/* Logo (正方形) */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-32 h-32 bg-white border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                        {service.logo ? (
                          <img
                            src={service.logo}
                            alt={`${service.name} ロゴ`}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <span className="text-gray-400 text-sm font-oswald uppercase">
                            Logo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Instagram Link */}
                      {service.instagram && (
                        <a
                          href={service.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors"
                        >
                          <Instagram className="w-6 h-6" />
                          <span className="text-sm font-oswald font-bold uppercase tracking-wider">
                            Instagram
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JGroup;
