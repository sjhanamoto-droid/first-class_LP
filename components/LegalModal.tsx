import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const legalInfo = [
    { label: '事業者名', content: '株式会社 J-RISING' },
    { label: '代表者氏名', content: '石橋 幸' },
    { label: '所在地', content: '〒106-0032<br/>東京都港区六本木3丁目8-2 WHARF六本木301' },
    { label: '電話番号', content: '03-4400-0889' },
    { label: 'メールアドレス', content: 'info@j-rising.co.jp' },
    { 
      label: '販売価格', 
      content: '■ FIRST CLASS 月会費<br>・一般：月額 9,900円（税込）<br>・学生：月額 6,600円（税込）<br><br>■ FIRST CLASS 年会費（年払い）<br>・一般：年額 99,000円（税込）<br>・学生：年額 66,000円（税込）<br>※年払いは2ヶ月分お得になります' 
    },
    { 
      label: '商品代金以外の必要料金', 
      content: '・インターネット接続料金、通信料金等はお客様の負担となります。<br>・「Executive Lounge（日経225オプション取引など）」や「Privateクラス」などの上位クラスへの参加には別途追加料金が発生する場合があります。<br>・ハイグレード別邸の宿泊（1泊55,000円〜）など、有料オプションサービス利用時の費用。' 
    },
    { label: 'お支払方法', content: 'クレジットカード決済' },
    { 
      label: 'お支払時期', 
      content: '・月額払い：初回申込時に決済され、翌月以降は毎月【25日など】に自動決済されます。<br>・年額払い：申込時に一括で決済されます。' 
    },
    { 
      label: 'サービスの提供時期', 
      content: '決済完了後、公式LINEへの登録および会員限定グループへの招待をもってサービス提供開始となります。' 
    },
    { 
      label: '返品・交換・キャンセルについて', 
      content: '＜返品・交換について＞<br>デジタルコンテンツおよびコミュニティサービスの性質上、返品・返金はお受けしておりません。<br><br>＜解約（退会）について＞<br>解約をご希望の場合は、次回決済日の【○日前】までに所定の手続きを行ってください。期日を過ぎますと翌月分の会費が発生いたします。日割りでの返金は行いませんのでご了承ください。' 
    },
    { 
      label: '動作環境', 
      content: 'LINEアプリが使用できるスマートフォン、またはPC。<br>オンラインセミナー（Zoom等）が視聴できる通信環境。' 
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-oswald font-bold uppercase">特定商取引法に基づく表記</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-6">
            {legalInfo.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <h3 className="font-oswald font-bold text-lg mb-2 uppercase">{item.label}</h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 text-center">
          <button
            onClick={onClose}
            className="bg-black text-white px-8 py-3 font-oswald font-bold uppercase tracking-wider hover:bg-pink-600 transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

