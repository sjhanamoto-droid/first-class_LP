import React from 'react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <section id="price" className="bg-black text-white py-24 md:py-32">
       <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
             <h2 className="text-6xl md:text-9xl font-oswald font-bold uppercase tracking-tighter mb-4">Investment</h2>
             <p className="text-gray-400">あなたの未来への投資</p>
          </div>

          <div className="max-w-5xl mx-auto border border-white/20">
             
             {/* Annual Plan */}
             <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20 bg-white text-black relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold px-4 py-2 uppercase">Recommended</div>
                <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center">
                   <h3 className="text-3xl font-oswald font-bold uppercase mb-2">Annual Plan</h3>
                   <p className="font-bold text-gray-500">年額プラン</p>
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center items-start md:items-end">
                   <div className="text-5xl md:text-6xl font-oswald font-bold mb-2">¥99,000</div>
                   <p className="text-sm font-bold text-pink-600">2ヶ月分お得 (月あたり¥8,250)</p>
                </div>
             </div>

             {/* Monthly Plan */}
             <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20">
                <div className="p-10 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-center">
                   <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Monthly Plan</h3>
                   <p className="font-bold text-gray-500 text-sm">月額プラン</p>
                </div>
                <div className="p-10 flex flex-col justify-center items-start md:items-end">
                   <div className="text-4xl font-oswald font-bold">¥9,900</div>
                </div>
             </div>

             {/* Student Plan */}
             <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-center">
                   <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Student Plan</h3>
                   <p className="font-bold text-gray-500 text-sm">学割プラン</p>
                </div>
                <div className="p-10 flex flex-col justify-center items-start md:items-end">
                   <div className="text-4xl font-oswald font-bold">¥6,600</div>
                </div>
             </div>
          </div>

          <div className="text-center mt-20">
             <Button variant="gold" size="xl" withArrow>
               今すぐメンバー登録する
             </Button>
             <p className="mt-4 text-sm" style={{ color: '#06C755' }}>公式LINEへ移動します</p>
          </div>
       </div>
    </section>
  );
};

export default Pricing;