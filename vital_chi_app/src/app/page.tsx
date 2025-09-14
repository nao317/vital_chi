
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFA237]">
      {/* バイタルっぽタイトル画像 */}
      <Image
        src="/vital_po_title.png" // public/hedgehog.png に保存しておく
        alt="vital_po_title"
        width={320}
        height={320}
        className="mb-4"
      />
      {/* ハリネズミ画像 */}
      <Image
        src="/harinezumi.png" // public/hedgehog.png に保存しておく
        alt="harinezumi"
        width={120}
        height={120}
        className="mb-8"
      />

      {/* ボタン */}
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          ログイン
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
          新規登録
        </button>
      </div>
    </div>
  );
}
