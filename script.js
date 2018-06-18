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
});
$(document).ready(function(){
//ここからはスライドショーのライトボタン系
  var num               = 0;
  var slideNum          = $('#lightslides div').length;
  var slideIntervalID   = 0;
  var slideCurrentIndex = 0;
  var slideTime         = 5000;
  var thumbnailAction   = "click";
  //先頭の画像をフェードインさせる
  $('#lightslides .slider0').fadeIn('slow');
  $('#lightthumbnail .slider0').addClass('active');
  //スライドショー開始
  slideIntervalID = setInterval(moveSlide , slideTime);
  //スライドを次へ送る
  //idx:あれば指定された番号のスライドを表示、なければ+1する
  function moveSlide(idx) {
    //表示している画像と同じサムネイルをクリックしたときは処理しない
    if (idx == slideCurrentIndex) {
        return false;
    }
    //idxがundefindだった場合
    if (typeof idx === 'undefined') {
       idx = Number(slideCurrentIndex) + 1;
    }
    //idxが最後までいった場合最初に戻す
    if (idx == slideNum) {
       idx = 0;
    }
    //slideCurrentIndexのスライドを隠す
    $('#lightslides .slider' + slideCurrentIndex).fadeOut('slow');
    $('#lightthumbnail .slider' + slideCurrentIndex).removeClass('active');
    //idxのスライドを表示する
    $('#lightslides .slider' + idx).fadeIn('slow');
    $('#lightthumbnail .slider' + idx).addClass('active');
    //slideCurrentIndexを更新する
    slideCurrentIndex = idx;
    }
    //指定された数字にスライドする
    function newSlideInterval(num) {
      //インターバルを止める
      clearInterval(slideIntervalID);
      //moveSlideにiを与えてスライドを再開
      moveSlide(num);
      slideIntervalID = setInterval(moveSlide , slideTime);
    }
    //サムネイルをクリックorホバーしたらスライドする
    $('#lightthumbnail div').bind(thumbnailAction , function() {
      var _this = $(this);
      //スライドさせる
      num = _this.attr('class').replace('slider' , '');
      newSlideInterval(num);
    });
    //矢印をクリックしたらスライドを送る
    $('.moveSlide').bind('click' , function() {
      //クリックされたボタンのIDで戻る進を判断する
      var moveDirection = $(this).attr('id').replace('slider' , '');
      if (moveDirection == 'Right') {
        //右矢印をクリックした場合
        if (slideCurrentIndex == slideNum + 1) {
            num = 0;
        } else {
            num = slideCurrentIndex + 1;
        }
      } else {
      //左矢印をクリックした場合
        if (slideCurrentIndex == 0) {
            num = slideNum - 1;
          } else {
            num = slideCurrentIndex - 1;
        }
      }
      //スライドさせる
      newSlideInterval(num);
    });
});

$(document).ready(function(){
//ここからはスライドショーのバナー表示系
  var num               = 0;
  var slideNum          = $('#bannerslides div').length;
  var slideIntervalID   = 0;
  var slideCurrentIndex = 0;
  var slideTime         = 5000;
  var thumbnailAction   = "click";
  //先頭の画像をフェードインさせる
  $('#bannerslides .slide0').fadeIn('slow');
  $('#thumbnail .slide0').addClass('active');
  //スライドショー開始
  slideIntervalID = setInterval(moveSlide , slideTime);
  //スライドを次へ送る
  //idx:あれば指定された番号のスライドを表示、なければ+1する
  function moveSlide(idx) {
    //表示している画像と同じサムネイルをクリックしたときは処理しない
    if (idx == slideCurrentIndex) {
        return false;
    }
    //idxがundefindだった場合
    if (typeof idx === 'undefined') {
        idx = Number(slideCurrentIndex) + 1;
    }
    //idxが最後までいった場合最初に戻す
    if (idx == slideNum) {
        idx = 0;
    }
    //slideCurrentIndexのスライドを隠す
    $('#bannerslides .slide' + slideCurrentIndex).fadeOut('slow');
    $('#thumbnail .slide' + slideCurrentIndex).removeClass('active');
    //idxのスライドを表示する
    $('#bannerslides .slide' + idx).fadeIn('slow');
    $('#thumbnail .slide' + idx).addClass('active');
    //slideCurrentIndexを更新する
    slideCurrentIndex = idx;
  }
  //指定された数字にスライドする
  function newSlideInterval(num) {
    //インターバルを止める
    clearInterval(slideIntervalID);
    //moveSlideにiを与えてスライドを再開
    moveSlide(num);
    slideIntervalID = setInterval(moveSlide , slideTime);
  }
  //サムネイルをクリックorホバーしたらスライドする
  $('#thumbnail div').bind(thumbnailAction , function() {
    var _this = $(this);
    //スライドさせる
    num = _this.attr('class').replace('slide' , '');
    newSlideInterval(num);
  });
  //矢印をクリックしたらスライドを送る
  $('.moveSlide').bind('click' , function() {
    //クリックされたボタンのIDで戻る進を判断する
    var moveDirection = $(this).attr('id').replace('slide' , '');
    if (moveDirection == 'Right') {
        //右矢印をクリックした場合
        if (slideCurrentIndex == slideNum + 1) {
            num = 0;
        } else {
            num = slideCurrentIndex + 1;
        }
    } else {
        //左矢印をクリックした場合
        if (slideCurrentIndex == 0) {
            num = slideNum - 1;
        } else {
            num = slideCurrentIndex - 1;
        }
    }
    //スライドさせる
    newSlideInterval(num);
  });
});
$(document).ready(function(){
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
//ここからはAjax、json
$.ajax({
	url: 'data.json',
	dataType: 'json',
	data: {name: 'name'},
	success: function(data){
		var dataArray = data.names;
		$.each(dataArray, function(i){
			$('.nameData').append('<p>division: ' + dataArray[i].division + 'person: ' + dataArray[i].name + '(age: ' + dataArray[i].age + ')</p>');
		});
	}
});
