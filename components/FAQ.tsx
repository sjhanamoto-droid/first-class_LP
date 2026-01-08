import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "起業していなくても参加できますか？",
      a: "はい、大歓迎です。これから起業準備をしたい方、会社員として働きながら副業を始めたい方、あるいはまだ具体的な目標が決まっていない方でも、学ぶ意欲があればご参加いただけます。"
    },
    {
      q: "地方在住でも参加できますか？",
      a: "もちろんです。セミナーや講義は基本的にオンライン（Zoom）での開催・またはアーカイブ配信を行っておりますので、全国どこからでも学びを深めることができます。"
    },
    {
      q: "男性は参加できますか？",
      a: "FIRST CLASSは、女性ならではの悩みやキャリア形成に特化した女性限定コミュニティとなっております。そのため、通常メンバーとしてのご参加は女性のみとさせていただいております。\n\nなお、男性の方には協賛という形で関わっていただくことが可能です。協賛企業・個人様には、コミュニティとのつながりを活かした機会の提供や、六本木オフィスの利用など、協賛者向けの特典をご用意しております。\n\n詳細な内容や条件については、状況に応じてご案内しておりますので、まずはお気軽にお問い合わせください。"
    },
    {
      q: "退会はいつでもできますか？",
      a: "はい、月額プランの場合は所定の手続きを行っていただければ翌月からの退会が可能です。年払いの場合は期間途中での返金は致しかねますのでご了承ください。"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle en="FAQ" ja="よくある質問" />

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-800 flex items-center">
          <span className="text-pink-500 mr-3 text-xl">Q.</span>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div 
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        } bg-pink-50`}
      >
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          <span className="font-bold text-gray-500 mr-3">A.</span>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;