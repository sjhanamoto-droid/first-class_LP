import React from 'react';
import { Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Service {
  name: string;
  logo?: string;
  website?: string;
  activityUrl?: string; // [ACTIVITY] リンク（任意）
  instagram?: string;
}

const services: Service[] = [
  {
    name: 'キラキラ\nハウスクリーニング',
    logo: './images/logo/kirakira.png',
    website: 'https://house-cleaning.jnavi.co.jp',
  },
  {
    name: 'ジェイナビ',
    logo: './images/logo/jnavi.png',
    website: 'https://jnavi.co.jp',
    activityUrl: 'https://min-paku.ja.jnavi.co.jp/',
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
  {
    name: 'S&N MIYAKO',
    logo: './images/logo/snmiyako.png',
    website: 'https://snmiyako.com/',
    instagram: 'https://www.instagram.com/miyako_sn_support?igsh=bjFtMHN0NXdoZ2lj',
  },
];

const JGroup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pink-50 to-white border-b-4 border-pink-200">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-20 md:py-28">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-3 text-gray-800">
                  J-Group
                </h1>
                <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full" aria-hidden />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <AnimatedSection key={service.name} direction="up" delay={index * 0.1}>
                  <div
                    className={`relative p-8 rounded-lg transition-all duration-300 hover:shadow-xl overflow-hidden
                      ${index % 2 === 0
                        ? 'bg-white border-2 border-pink-100 hover:border-pink-300'
                        : 'bg-white border-2 border-gray-200 hover:border-pink-200'
                      }`}
                  >
                    {/* カード上部アクセントライン */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600" />
                    {/* Service Name */}
                    <h2 className="text-2xl md:text-3xl font-oswald font-bold uppercase mb-6 text-center text-gray-800 pt-1">
                      {service.name.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}
                    </h2>

                    {/* Logo (正方形) */}
                    <div className="mb-6 flex justify-center">
                      {service.website ? (
                        <a
                          href={service.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-32 h-32 bg-gray-50 border-2 border-gray-300 flex items-center justify-center overflow-hidden rounded-lg hover:border-gray-400 transition-all"
                        >
                          {service.logo ? (
                            <img
                              src={service.logo}
                              alt={`${service.name.replace(/\n/g, ' ')} ロゴ`}
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm font-oswald uppercase">Logo</span>
                          )}
                        </a>
                      ) : (
                        <div className="w-32 h-32 bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
                          {service.logo ? (
                            <img
                              src={service.logo}
                              alt={`${service.name.replace(/\n/g, ' ')} ロゴ`}
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm font-oswald uppercase">Logo</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Activity Link */}
                      {service.activityUrl && (
                        <a
                          href={service.activityUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-oswald font-bold uppercase tracking-wider text-pink-600 hover:text-pink-700 transition-colors"
                        >
                          [ACTIVITY]
                        </a>
                      )}
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
