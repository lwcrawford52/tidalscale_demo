var oracleOn = [
  { imageURL: 'img/ServerRack_0b.png', cores: 0, memory: 0, time: '0', width:'0', color: '#03496e', query: '0', qwidth: '0', qcolor: '#03496e' }, 
  { imageURL: 'img/ServerRack_1b.png', cores: 12, memory: '768GB', time: '7+ Hours', width: '100%', color: '#FA0228', query: '3x', qwidth: '3%', qcolor: '#FA0228' },
  { imageURL: 'img/ServerRack_2b.png', cores: 24, memory: '1536GB', time: '5&nbsp;Min', width: '6%', color: '#00DD3B', query: '82x', qwidth: '100%', qcolor: '#00DD3B' },
  { imageURL: 'img/ServerRack_3b.png', cores: 36, memory: '2304GB', time: '5&nbsp;Min', width: '6%', color: '#00DD3B', query: '55x', qwidth: '64%', qcolor: '#00DD3B' },
  { imageURL: 'img/ServerRack_4b.png', cores: 48, memory: '3072GB', time: '5&nbsp;Min', width: '6%', color: '#00DD3B', query: '41x', qwidth: '48%', qcolor: '#00DD3B'}
];
var oracleOff = [
  { imageURL: 'img/ServerRack_0b.png', cores: 0, memory: 0, time: '0', width: '0', color: '#03496e', query: '0', qwidth: '0', qcolor: '#03496e' },
  { imageURL: 'img/ServerRack_1b.png', cores: 12, memory: '768GB', time: '7+ Hours', width: '100%', color: '#FA0228', query: '4x', qwidth: '4%', qcolor: '#FA0228' }, 
  { imageURL: 'img/ServerRack_2b.png', cores: 24, memory: '1536GB', time: '33 Minutes', width: '33%', color: '#00DD3B', query: '22x', qwidth: '26%', qcolor: '#00DD3B' },
  { imageURL: 'img/ServerRack_3b.png', cores: 36, memory: '2304GB', time: '33 Minutes', width: '33%', color: '#00DD3B', query: '15x', qwidth: '20%', qcolor: '#00DD3B' }, 
  { imageURL: 'img/ServerRack_4b.png', cores: 48, memory: '3072GB', time: '33 Minutes', width: '33%', color: '#00DD3B', query: '11x', qwidth: '12%', qcolor: '#00DD3B' }
];

var checkBox = document.getElementById("oracle");

var changeData = function(arr, i){  
  $('#sliderStatus').html( i );
  $("#img").prop("src", arr[i].imageURL);
  $("#coreStatus").html(arr[i].cores);
  $("#memStatus").html(arr[i].memory);
  $("#time-text").html(arr[i].time);
  $("#time-text").css({ width: arr[i].width, background: arr[i].color });
  $("#query-text").html(arr[i].query);
  $("#query-text").css({ width: arr[i].qwidth, background: arr[i].qcolor });
};

$(document).on('change', '#slider', function() {
    var v = $(this).val(),
        num = parseInt(v, 10);
  
    if (checkBox.checked == true) {
      
      changeData(oracleOn, num);
      
    } else { 
      
      changeData(oracleOff, num);
      
    }
});

$(document).on('change', '#oracle', function(){
    var n = $('#slider').val(),
        numb = parseInt(n, 10);
  
    if (checkBox.checked == true) {
      
      changeData(oracleOn, numb);
      
    } else { 
      
      changeData(oracleOff, numb);
      
    }
})

// function oracleSwitch() {
//   var checkBox = document.getElementById("oracle");
//   };
  
$('.dell-example .nav-toggle').on('click', function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('nav-open');
});