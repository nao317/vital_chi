# this file is powered by chat gpt
# Node.js公式イメージ
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係インストール用にpackage.jsonだけコピー
COPY package*.json ./

# 本番用依存関係のみをインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# Next.jsをビルド
RUN npm run build

# ポート解放
EXPOSE 3000

# アプリ実行
CMD ["npm", "run", "dev"]
