
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* ハリネズミ画像 */}
      <img
        src="/harinezumi.png" // public/hedgehog.png に保存しておく
        alt="Hedgehog"
        className="w-40 h-40 mb-8"
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
