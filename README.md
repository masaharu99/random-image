# 画像ランダム生成アプリ

## 環境構築手順

1. react アプリを作成する<br/>
   下記コマンドで作成。

```sh
npx create-react-app {プロジェクト名} --template typescript
```

2. サーバー起動<br/>
   `docker compose up`でサーバーを起動して、`localhost:3000`にアクセス

## メモ

### Dockerfile の WORKDIR と docker-compose.yml の working_dir の違い

Dockerfile の方は RUN コマンド等で実行されるディレクトリを指定する。
`npm install`等。<br/>
docker-compose.yml はコンテナ起動時に実行するディレクトリを指定する。
`npm start`等。

そのため、コンテナ内に`sh`コマンドで入ってからサーバーを起動してもポートが接続されていないから、ローカルでアクセスできない。
