import React, { useState } from 'react';
import LegalModal from './LegalModal';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center justify-center text-center mb-24">
           <img 
             src="./images/logo.png" 
             alt="First Class" 
             className="h-32 md:h-40 w-auto mb-4"
           />
           <h2 className="text-3xl md:text-4xl leading-none font-oswald font-bold text-black uppercase tracking-tighter mb-4 opacity-90">
             First Class
           </h2>
           <p className="text-sm md:text-base font-serif font-bold text-gray-800">
             理想の生き方を実現するサロン
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-black pt-12">
           <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="./images/logo.png" 
                  alt="First Class" 
                  className="h-8 w-auto"
                />
                <p className="font-oswald text-xl font-bold uppercase">First Class Community</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                 自由な選択ができる人。それは、真に自立した女性。
                 経済的な豊かさも、自分らしい生き方も。
                 そのすべてが十分に満たされてこそ、
                 私たちは人生を心から楽しみ、周りの人を幸せにすることができます。
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
                 <li>
                   <button 
                     onClick={() => setIsLegalModalOpen(true)}
                     className="hover:text-black cursor-pointer"
                   >
                     特定商取引法に基づく表記
                   </button>
                 </li>
                 <li>
                   <button 
                     onClick={() => setIsPrivacyModalOpen(true)}
                     className="hover:text-black cursor-pointer"
                   >
                     プライバシーポリシー
                   </button>
                 </li>
              </ul>
           </div>

           <LegalModal 
             isOpen={isLegalModalOpen} 
             onClose={() => setIsLegalModalOpen(false)} 
           />
           <PrivacyModal 
             isOpen={isPrivacyModalOpen} 
             onClose={() => setIsPrivacyModalOpen(false)} 
           />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center md:text-left">
           <p className="text-xs text-gray-400 font-oswald uppercase tracking-wider">&copy; 2026 FIRST CLASS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;