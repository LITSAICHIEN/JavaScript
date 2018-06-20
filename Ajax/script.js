$(document).ready(function () {
    $.ajax({
    type: 'GET',
    url: 'data.json',
    dataType: 'json',
    success: function(data){
          for(var i in data){
          $('#output').append('<tr><th colspan="2" class="first">' + data[i].division + '</th></tr>'+'<tr><th scope="col">お名前</th><th scope="col">年齢</th></tr>');
              for(var j in data[i].person){
                  $('#output').append('<tr><td>' + data[i].person[j].name + '</td><td>' + data[i].person[j].age + '才</td></tr>');
              }
          }
      }
});
});
