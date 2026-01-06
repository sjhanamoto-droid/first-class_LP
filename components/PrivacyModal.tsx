import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <h2 className="text-2xl font-oswald font-bold uppercase">プライバシーポリシー</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <p className="mb-4">
                株式会社 J-RISING（以下「当社」といいます）は、当社が運営する女性起業家コミュニティ「FIRST CLASS」（以下「本サービス」といいます）において、お客様の個人情報をどのように取り扱うかについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">1. 個人情報の定義</h3>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先（LINEアカウント情報等）、その他の記述等により特定の個人を識別できる情報を指します。
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">2. 個人情報の収集方法</h3>
              <p>
                当社は、お客様が本サービスの利用登録をする際に、氏名、生年月日、住所、電話番号、メールアドレス、クレジットカード番号などの個人情報をお尋ねすることがあります。また、入会後のカウンセリング（ヒアリング）において、事業状況や資産状況などの情報をご提供いただく場合があります。
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">3. 個人情報の利用目的</h3>
              <p className="mb-2">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>本サービスの提供・運営のため（会員管理、イベント・セミナーの案内等）</li>
                <li>利用料金（会費・有料オプション）の請求のため</li>
                <li>会員様同士のマッチング、ビジネスマッチング支援のため</li>
                <li>各種提携サービス（福利厚生・宿泊施設・認定サロン等）の優待利用の手続きのため</li>
                <li>お問い合わせへの対応のため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">4. 個人情報の第三者提供</h3>
              <p className="mb-2">
                当社は、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、以下の場合は除きます。
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>提携サービス利用時:</strong> 会員様が「ハイグレード別邸」や「提携エステサロン」等の福利厚生サービスを利用される際、予約手配のために必要な範囲で提携施設へ情報を提供する場合。
                </li>
                <li>
                  <strong>法令に基づく場合:</strong> 人の生命、身体または財産の保護のために必要がある場合など、個人情報保護法その他の法令で認められる場合。
                </li>
              </ol>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">5. 個人情報の共同利用</h3>
              <p className="mb-2">当社は、会員様への総合的なサービス提供のため、以下の範囲内で個人情報を共同利用いたします。</p>
              <ul className="space-y-2 ml-4">
                <li>
                  <strong>共同して利用される個人情報の項目:</strong> 氏名、住所、電話番号、メールアドレス、受講履歴、サービス利用履歴
                </li>
                <li>
                  <strong>共同して利用する者の範囲:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>株式会社 J-BRIDGE</li>
                    <li>株式会社 コンシェルジュワン</li>
                    <li>株式会社 HONEY-B</li>
                    <li>その他、当社グループ企業</li>
                  </ul>
                </li>
                <li>
                  <strong>利用する者の利用目的:</strong> グループ各社が提供するサービス（イベント、交流会、美容関連サービス等）のご案内およびご提案のため。
                </li>
                <li>
                  <strong>管理責任者:</strong> 株式会社 J-RISING 代表取締役 石橋 幸
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">6. 個人情報の開示・訂正・利用停止</h3>
              <p>
                会員様ご本人から個人情報の開示、訂正、追加、削除、利用停止のご請求があった場合は、ご本人確認の上、法令に従い速やかに対応いたします。
              </p>
            </div>

            <div>
              <h3 className="font-oswald font-bold text-lg mb-3 uppercase">7. お問い合わせ窓口</h3>
              <p className="mb-2">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <ul className="space-y-1 ml-4">
                <li><strong>社名：</strong>株式会社 J-RISING</li>
                <li><strong>代表：</strong>石橋 幸</li>
                <li><strong>住所：</strong>〒106-0032 東京都港区六本木3丁目8-2 WHARF六本木301</li>
                <li><strong>Eメールアドレス：</strong>info@j-rising.co.jp</li>
              </ul>
            </div>
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

export default PrivacyModal;

