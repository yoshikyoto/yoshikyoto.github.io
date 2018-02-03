---
title: jekyllを使いMarkdownで書いてGitHub Pagesで公開する
tags:
- GithubPages
---

## Markdownで書かれたページをGitHub Pagesで公開する

GitHubには、Markdownとして書かれたページをhtmlに変換して公開してくれるサービスがあります。この仕組みは[jekill](https://jekyllrb.com/)というソフトウェアで動いています。リポジトリ内にjekyllのconfigファイルを置くと、GitHubが、masterブランチの変更をトリガーに勝手にMarkdownのビルドを行い、GitHub Pagesとして公開してくれます。この yoshikyoto.github.io もその方法でページが生成されています。今回はその設定の方法を説明します。


## 必要なファイルとディレクトリ構成

必要なディレクトリは以下の通りです。

* _config.yml
* _layouts
  * defaut.html
* index.md

## _config.yml

`_config.yml` には以下のように記述します。

```
markdown: kramdown
highlighter: rouge
```

* `markdown: kramdown` krandownというRubyで書かれたライブラリを使ってマークダウンをビルドする設定です
  * [https://github.com/gettalong/kramdown]
* `highlighter: rouge` rougeというライブラリでシンタックスハイライトを行うという設定です
  * [https://github.com/jneen/rouge]
  * 特に指定がなければ `highlighter: pygments` になります

### _layouts

`default.html` という名前はなんでもよいです。レイアウトの雛形的な書き方です。
例えば、このページの `_layouts/defaut.html` は以下のようになっています。

[https://github.com/yoshikyoto/yoshikyoto.github.io/blob/master/_layouts/default.html]

content の部分に、MarkdownをHTMLに変換したものが入ります。
page.title の部分については後に説明します。


### index.ms のような適当なMarkdownファイル

Markdownファイルを以下のように書きます。

```
---
layout: default
title: トップページ
---

# トップページです

* hoge
* huga
```

* `layout` で `default` を指定しているので、 `_layouts/default.html` というレイアウトが適用されます。
  * 指定しないと `default.html` が使われるようです。
* `title` の中身が `page.title` の部分に入ります。
* `---` 以下の部分が`content` の部分に入ります。

## 公開方法

masterブランチにpushされるとGitHub側でビルドされ公開されます。

