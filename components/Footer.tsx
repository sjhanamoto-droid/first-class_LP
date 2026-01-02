import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center justify-center text-center mb-24">
           <h2 className="text-[12vw] leading-none font-oswald font-bold text-black uppercase tracking-tighter mb-4 opacity-90">
             First Class
           </h2>
           <p className="text-lg md:text-2xl font-serif font-bold text-gray-800">
             理想の生き方を実現するサロン
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-black pt-12">
           <div className="col-span-1 md:col-span-2">
              <p className="font-oswald text-xl font-bold uppercase mb-4">First Class Community</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                 理想の生き方を実現する、女性のためのライフデザインアカデミー。
                 美・食・健・衣を豊かにし、知識・時間・資金・自由を手に入れる。
              </p>
           </div>
           
           <div>
              <p className="font-oswald font-bold uppercase mb-4">Links</p>
              <ul className="space-y-2 text-sm text-gray-600">
                 <li><a href="#concept" className="hover:text-black">Concept</a></li>
                 <li><a href="#leaders" className="hover:text-black">Leaders</a></li>
                 <li><a href="#benefits" className="hover:text-black">Benefits</a></li>
                 <li><a href="#price" className="hover:text-black">Pricing</a></li>
              </ul>
           </div>

           <div>
              <p className="font-oswald font-bold uppercase mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-black">特定商取引法に基づく表記</a></li>
                 <li><a href="#" className="hover:text-black">プライバシーポリシー</a></li>
              </ul>
           </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center md:text-left">
           <p className="text-xs text-gray-400 font-oswald uppercase tracking-wider">&copy; 2026 FIRST CLASS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;