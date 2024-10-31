# Qubena Modding Codes
## 2024/10/18時点で10_28-1347 (release)ビルドで動作確認済み
### 10_28-1347 (release)アップデートに対応しました。
## 概要 / Summary
このコードはQubenaの誤答も正解判定にするものです。
**何が起きても責任は負いませんのでご注意ください。**
## 使用時のルールと注意
- 再度言いますが、**何が起きても責任は負いません**のでご注意ください。
- また、再配布や改造して配布などは許可していませんのでご注意ください。
- 以下の使い方セクションを見ても使用方法が分からない方はGoogleなどでデベロッパーツールのオーバーライドの仕方を学んでから使用してください。
- Qubenaのアップデートが入ると使用できなくなる可能性があります。その際には再ダウンロードをしていただきますようお願いします。
- バグなどが発生している際は[Issues](https://github.com/takuan-tv-2sei/9bn-a/issues)を使って報告してください。
## FAQ
- Q.使い方が分からない
    - A.以下の使い方セクションを見てもわからない場合はGoogleでデベロッパーツールについて学習してください。
- Q.Qubenaのエラーページに飛ぶ
    - A.導入が間違っている可能性があります。もう一度やり直してみてください。
## 使い方 / How to use
### すべて正解判定にする方法
1. エクスプローラーで、ドキュメントなどにフォルダーを作成します。
2. Qubenaで、何でもいいのでワークブックに入り、好きなものを開始します。
3. F12キーまたは、Fn+F12、CTRL+SHIFT+Iを押して、デベロッパーツールを開きます。
4. 上の、ソース(Sources)タブに行き、左のページというところの右にある>>を押し、オーバーライド(Overrides)を押します。
5. オーバーライド用のフォルダを選択を押します。
6. 上にバーが出てきたら許可を押します。
7. 先ほど作成したフォルダを選択します。
8. ページ(Page)タブに戻ります。
9. _next/staticの中のchunksの中にある[497-b8ba122821f94df1.js](https://github.com/takuan-tv-2sei/9bn-a/blob/main/648-7a0f793f285b714f.js)を開きます。
10. 497-b8ba122821f94df1.jsの中身をすべて消します。
11. [ここから](https://github.com/takuan-tv-2sei/9bn-a/blob/main/648-7a0f793f285b714f.js)コードをコピーしてください。
12. 先ほど開いた497-b8ba122821f94df1.jsにペーストします。
13. Ctrl+Sをおして保存します。
14. Qubenaのサイトをリロードもしくはもう一度開きます。

### 自動で問題を解いてもらう方法
- **まず、上の "すべて正解判定にする方法" を行ってからこのセクションを行ってください。**
1. Qubenaを開き、ワークブックに入り、自動化したいものを始めます。
2. F12キーまたは、Fn+F12、CTRL+SHIFT+Iを押し、デベロッパーツールを開きます。
3. 上のコンソール(Console)タブを開きます。
4. [これ](https://github.com/takuan-tv-2sei/9bn-a/blob/main/Automatic.js)の中身をコピーします。
5. 先ほど開いたコンソールに、先ほどコピーした内容を張り付けます。
6. エンターキーを押し、実行します。
7. Qubenaの問題を自動で解いてくれます。
8. 終わったら、必ずページをリロード、または閉じてもう一度開いてください。
