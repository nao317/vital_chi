# this file is powered by chat gpt

# Node.js公式イメージを使用
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係インストール用にpackage.jsonだけコピー
COPY package*.json ./

# 依存関係インストール
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsをビルド
RUN npm run build

# ポート解放
EXPOSE 3000

# 実行コマンド
CMD ["npm", "start"]