function include(str){
  document.write('<title>' + str + '</title>');
  document.write('<link rel="stylesheet" href="style.css">');
  // Google Font
  document.write('<link href="http://fonts.googleapis.com/css?family=VT323" rel="stylesheet" type="text/css">');
  // meta tag
  document.write('<meta charset="UTF-8">');
}

function header(){
  document.write('<header>');
  
  document.write('<hgroup>');
  document.write('<h1>@yoshiki_utakata</h1>');
  
  document.write('<img src="http://usericon.nimg.jp/usericon/56/561613.jpg">');
  
  document.write('<nav>');
  document.write('<ul>');
  document.write('<a href="index.html"><li><div>Profile</li></a>');
  document.write('<a href="products.html"><li>Products</li></a>');
  document.write('<a href="photos2014.html"><li>Photos</li></a>');
  document.write('<a href="http://ch.nicovideo.jp/yoshiki_utakata"><li>Blog</li></a>');
  document.write('<a href="/wiki"><li>Wiki</li></a>');
  document.write('</ul>');
  document.write('</nav>');
  
  document.write('</hgroup>');
  
  // 乱数
  rand = Math.floor(Math.random() * 13);
  switch(rand){
    case 0:
      document.write('<center><img src="topimage/20140403kawabata.png" class="top"></center>');
      document.write('<h2>Photo: 京都川端通から taken by @yoshiki_utakata 2014.4.3</h2>');
      break;
    case 1:
      document.write('<center><img src="topimage/20140216yasukuni.png" class="top"></center>');
      document.write('<h2>Photo: 靖国神社 taken by @yoshiki_utakata 2014.2.16</h2>');
      break;
    case 2:
      document.write('<center><img src="topimage/20140208kinkaku.png" class="top"></center>');
      document.write('<h2>Photo: 雪の金閣 taken by @yoshiki_utakata 2014.2.8</h2>');
      break;
    case 3:
      document.write('<center><img src="topimage/20140208ginkaku.png" class="top"></center>');
      document.write('<h2>Photo: 雪の銀閣 taken by @yoshiki_utakata 2014.2.8</h2>');
      break;
    case 4:
      document.write('<center><img src="topimage/20140125heijo.png" class="top"></center>');
      document.write('<h2>Photo: 平城宮 taken by @yoshiki_utakata 2014.1.25</h2>');
      break;
    case 5:
      document.write('<center><img src="topimage/20131121eikan.png" class="top"></center>');
      document.write('<h2>Photo: 永観堂の紅葉1 taken by @yoshiki_utakata 2013.11.21</h2>');
      break;
    case 6:
      document.write('<center><img src="topimage/20130804koutokuin.png" class="top"></center>');
      document.write('<h2>Photo: 高徳院鎌倉大仏 taken by @yoshiki_utakata 2013.8.4</h2>');
      break;
    case 7:
      document.write('<center><img src="topimage/20130804kamakura.png" class="top"></center>');
      document.write('<h2>Photo: 鎌倉駅 taken by @yoshiki_utakata 2013.8.4</h2>');
      break;
    case 8:
      document.write('<center><img src="topimage/20130804enoshima.png" class="top"></center>');
      document.write('<h2>Photo: 江ノ島からの風景 taken by @yoshiki_utakata 2013.8.4</h2>');
      break;
    case 9:
      document.write('<center><img src="topimage/20130403ny.png" class="top"></center>');
      document.write('<h2>Photo: ニューヨークの街並み taken by @yoshiki_utakata 2013.4.3</h2>');
      break;
    case 10:
      document.write('<center><img src="topimage/20131121eikan2.png" class="top"></center>');
      document.write('<h2>Photo: 永観堂の紅葉2 taken by @yoshiki_utakata 2013.11.21</h2>');
      break;
    case 11:
      document.write('<center><img src="topimage/20140222yoshino1.png" class="top"></center>');
      document.write('<h2>Photo: 吉野 銅の鳥居 taken by @yoshiki_utakata 2014.2.22</h2>');
      break;
    case 12:
      document.write('<center><img src="topimage/kemari.png" class="top"></center>');
      document.write('<h2>Photo: 蹴鞠 at 京都御苑 taken by @yoshiki_utakata</h2>');
      break;
  }
  document.write('</header>');
}

function footer(){
  document.write('<footer>');
  document.write('<small>Copyright (C) @yoshiki_utakata, All rights reserved.');
  document.write('</footer>');
}

function viewPhotos(dir, num){
  for(i = 1; i <= num; i = i + 1){
    imgname = convertNum(i, 3) + '.jpg';
    atag = '<a href="photos/' + dir + '/' + imgname + '" rel="lightbox[20130803kamakura]">';
    imgtag = '<img src="photos/' + dir + '/thumbs/' + imgname + '" rel="lightbox[20130803kamakura]">';
    document.write(atag);
    document.write(imgtag);
    document.write('</a> ');
  }
}

function photoMenu(){
  document.write('<div class="submenu">');
  document.write('<ul class="submenu">');
  document.write('<a href="photos2014.html"><li>2014</li></a>');
  document.write('<a href="photos2013.html"><li>2013</li></a>');
  document.write('</ul>');
  document.write('</div>');
}

// 桁数分0で埋める関数
function convertNum(num, figures) {
  var str = String(num);
  while (str.length < figures) {
    str = "0"+str;
  }
  return str;
}