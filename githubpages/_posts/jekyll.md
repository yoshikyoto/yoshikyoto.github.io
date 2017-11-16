---
title: jekyllを使いMarkdownで書いてGitHub Pagesで公開する
---

# Markdownで書かれたページをGitHub Pagesで公開する

jekyllのconfigファイルを置くことで、GitHub上のmasterブランチの変更をトリガーにMarkdownのビルドを行い、
GitHub Pages上で公開することができる。


### 必要なファイルとディレクトリ構成

必要なディレクトリは以下の通り

* _config.yml
* _layouts
  * defaut.html
* index.md

### _config.yml

`_config.yml` には以下のように記述する。

```
markdown: kramdown
highlighter: rouge
```

* `markdown: kramdown` krandownっていうRubyで書かれたライブラリを使ってマークダウンをビルドする
  * https://github.com/gettalong/kramdown
* `highlighter: rouge` rougeというライブラリでシンタックスハイライトを行う
  * https://github.com/jneen/rouge
  * 特に指定がなければ `highlighter: pygments` になる
* `safe: true` や `lsi: false` がGitHub側で上書きされるらしいがあまり気にしなくていい


### _layouts

`default.html` という名前はなんでもよい。
例えば、 `_layouts/defaut.html` を以下のように記述する。



content の部分に、MarkdownをHTMLに変換したものが入る。
page.title の部分については後に出て来るページタイトルが表示される。


### index.ms のような適当なMarkdownファイル

Markdownファイルを以下のように書く。

```
---
layout: default
title: トップページ
---

# トップページです

* hoge
* huga
```

* `layout` で `default` を指定しているので、 `_layouts/default.html` というレイアウトが適用される。
  * 指定しないと `default.html` が使われるようだ。
* `title` の中身が `page.title` の部分に入る。


## 公開方法

masterブランチにpushされるとGitHub側でビルドされ公開される。
ビルドエラーなどが出るとメールで通知が来る。
