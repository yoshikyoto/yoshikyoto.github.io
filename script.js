window.onload = function () {
  var photos = [
    {src: "topimage/20140216yasukuni.png", desc: "靖国神社"},
    {src: "topimage/20140208kinkaku.png", desc: "雪の金閣"},
    {src: "topimage/20140208ginkaku.png", desc: "雪の銀閣"},
    {src: "topimage/20140125heijo.png", desc: "平常宮"},
    {src: "topimage/20131121eikan.png", desc: "永観堂の紅葉"},
    {src: "topimage/20131121eikan2.png", desc: "永観堂の紅葉"},
    {src: "topimage/20130804koutokuin.png", desc: "鎌倉高徳院の大仏"},
    {src: "topimage/20130804kamakura.png", desc: "鎌倉駅"},
    {src: "topimage/20130403ny.png", desc: "ニューヨークの街並み"},
    {src: "topimage/20140222yoshino1.png", desc: "吉野　銅の鳥居"},
    {src: "topimage/kemari.png", desc: "京都御苑の蹴鞠"}
  ]
  rand = Math.floor(Math.random() * photos.length);
  dom = document.getElementsByTagName("header")[0];
  dom.innerHTML += '<center><img src="' + photos[rand].src + '" class="top"></center>'
  dom.innerHTML += '<h2>Photo: ' + photos[rand].desc + '</h2>'
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