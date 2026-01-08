import React from 'react';
import SectionTitle from './SectionTitle';
import { Smartphone, FileEdit, Sparkles } from 'lucide-react';

const Flow: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "LINE登録",
      desc: "公式LINEの「メンバー登録」ボタンをタップ"
    },
    {
      icon: <FileEdit className="w-8 h-8" />,
      title: "お申し込み",
      desc: "フォームより必要事項を入力して手続き"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "利用開始",
      desc: "セミナー参加や六本木オフィス利用スタート！"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle en="FLOW" ja="入会までの流れ" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
              )}
              
              <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-6 border-4 border-white shadow-lg z-10">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                <span className="text-pink-500 mr-2">Step.0{idx + 1}</span>
                {step.title}
              </h4>
              <p className="text-sm text-gray-500 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;