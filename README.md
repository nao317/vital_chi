# vital_chi
飯塚アプリコンテスト提出用プロダクト


# 周辺知識・ルール
## コマンド
### 準備

➀リポジトリのクローン
```bash
git clone git@github.com:nao317/vital_chi.git
```
➁クローンしたvital_chiに移動
```bash
cd vital_chi
```
➂VSCodeでディレクトリを開く
```bash
code .
```

### コミット・プッシュ

➀コミットするファイル（変更を加えたファイル）をステージング
```bash
git add .
```
➁コミット
```bash
git commit -m "ここにコミットメッセージを書く"
```
➂プッシュ
```bash
git push origin ブランチの名前
```

### ビルド・実行

➀ビルド
```bash
docker compose build
```
➁実行（コンテナの起動）
```bash
docker compose up -d
```
➂コンテナの停止（後片付けみたいなイメージ）
```bash
docker compose down
```