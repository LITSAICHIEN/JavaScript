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
  //ここからはスライドショーのライトボタン系
  $('.btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex=$('.btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  });
  $('.change-btn').click(function() {
    var $displaySlide=$('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
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
