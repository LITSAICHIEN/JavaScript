$(document).ready(function(){
  //ここからはモーダルウィンドウ
  $('#windowShow').click(function() {
    $('#windowmodal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#windowmodal').fadeOut();
  });
  //ここからはメガメニュー
  $(function(){
    $('.mainmenu li').hover(function(){
        $('ul:not(:animated)', this).slideDown();
    }, function(){
        $('ul.submenu',this).slideUp();
    });
  });
  //ここからはハンバーガーメニュー
  $('.navToggle').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.hamburgermenu').addClass('active');
        } else {
            $('.hamburgermenu').removeClass('active');
        }
    });
  //ここからはスライドショーのオート系
  var $setElm = $('.autoslide'),
    fadeSpeed = 1500,
    switchDelay = 5000;

    $setElm.each(function(){
        var targetObj = $(this);
        var findUl = targetObj.find('ul');
        var findLi = targetObj.find('li');
        var findLiFirst = targetObj.find('li:first');

        findLi.css({display:'block',opacity:'0',zIndex:'99'});
        findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

        setInterval(function(){
            findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
        },switchDelay);
    });

  //ここからはスライドショーのライトボタン系
  var $setElm = $('.lightslide'),
    fadeSpeed = 1500,
    switchDelay = 5000;

    $setElm.each(function(){
        var targetObj = $(this);
        var findUl = targetObj.find('ul');
        var findLi = targetObj.find('li');
        var findLiFirst = targetObj.find('li:first');

        findLi.css({display:'block',opacity:'0',zIndex:'99'});
        findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

        setInterval(function(){
            findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
        },switchDelay);
    });
  //ここからはアコーディオン
  $('.faq-list-item').click(function() {
    var $contents=$(this).find('.contents')
    if ($contents.hasClass('open')) {
      $contents.removeClass('open');
      $contents.slideUp();
      $(this).find('span').text('+');
    } else {
      $contents.addClass('open');
      $contents.slideDown();
      $(this).find('span').text('-');
    }
  });
  //ここからはタブ切り替え
  $('.tab li').click(function() {
    var index=$('.tab li').index(this);
    $('.content').removeClass('active');
    $('.content').eq(index).addClass('active');
    $('.tab li').removeClass('active');
    $(this).addClass('active');
  });
  //ここからはスムーススクロール
  $('#top').click(function() {
    $('html, body').animate({
      'scrollTop':0
    }, 800);
  });
});
