[開発者用ダウンロード(Github)](https://github.com/takuan-tv-2sei/9bn-a/releases/latest)
[開発者用ダウンロード(GoogleDrive)]([https://github.com/takuan-tv-2sei/9bn-a/releases/latest](https://drive.google.com/file/d/1s7BjZYAXIB0iT5JPuS8nQMxBXb_A_csw/view?usp=drive_link))
# Qubena Modding Codes
## 2024/10/07時点で動作確認済み
## 概要 / Summary
このコードはQubenaの誤答も正解判定にするものです。
## 使い方 / How to use
### IMPORTANT: Releasesから、[最新の自動化キット](https://github.com/takuan-tv-2sei/9bn-a/releases/latest)をダウンロードしておいてください。
### すべて正解判定にする方法
1. エクスプローラーで、ドキュメントなどにフォルダーを作成します。
2. Qubenaで、何でもいいのでワークブックに入り、好きなものを開始します。
3. F12キーを押して、デベロッパーツールを開きます。
4. 上の、ソース(Sources)タブに行き、左のページというところの右にある>>を押し、オーバーライド(Overrides)を押します。
5. オーバーライド用のフォルダを選択を押します。
6. 上にバーが出てきたら許可を押します。
7. 先ほど作成したフォルダを選択します。
8. ページ(Page)タブに戻ります。
9. _next/staticの中のchunksの中にある21-48f368874dc07a96.jsを開きます。
10. 21-48f368874dc07a96.jsの中身をすべて消します。
11. 自動化キットの中のMain.jsをメモ帳などで開いてください。
12. Main.jsの中身をコピーし、先ほど開いた21-48f368874dc07a96.jsにペーストします。
13. Ctrl+Sをおして保存します。
14. Qubenaのサイトをリロードもしくはもう一度開きます。

### 自動で問題を解いてもらう方法
1. Qubenaを開き、ワークブックに入り、自動化したいものを始めます。
2. F12を押し、デベロッパーツールを開きます。
3. 上のコンソール(Console)タブを開きます。
4. 自動化キットの、Automatic.jsの中身をコピーします。(メモ帳などで開いてください)
5. 先ほど開いたコンソールに、先ほどコピーした内容を張り付けます。
6. エンターキーを押し、実行します。
7. Qubenaの問題を自動で解いてくれます。
8. 終わったら、必ずページをリロード、または閉じてもう一度開いてください。
