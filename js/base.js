let i = 0;
$('.toolbar').on('click', function( ){
    if( i == 0 ){
    $('header ul').css('left','0');
    i = i +1;
    // console.log(i)
    }else{
    $('header ul').css('left','-290px');
    i = i -1;
    // console.log(i)
    }
})

$("#topbararrow1").on({"click" : function( ){
    var src = ($(this).attr('src') === 'img/topbararrow.png')
    ? 'img/topbararrow_up.png'
    : 'img/topbararrow.png';
    $(this).attr('src', src);
    }
})

$("#topbararrow2").on({"click" : function( ){
    var src = ($(this).attr('src') === 'img/topbararrow.png')
    ? 'img/topbararrow_up.png'
    : 'img/topbararrow.png';
    $(this).attr('src', src);
    }
})
let j = 0;
$("#topbararrow1").on("click", function(){
    if( j == 1 ){
    $("#organism").css("margin-bottom","0");
    $(".organism div").css('left','-290px');
    j = j -1;
    console.log(j);
    }else{
    $("#organism").css("margin-bottom","100px");
    $(".organism div").css('left','0');
    j = j + 1;
    console.log(j);
    }
})

let k = 0;
$("#topbararrow2").on("click", function(){
    if( k == 1 ){
    $("#product_item").css("margin-bottom","0");
    $(".product_item div").css('left','-290px');
    k = k -1;
    console.log(k);
    }else{
    $("#product_item").css("margin-bottom","250px");
    $(".product_item div").css('left','0');
    k = k +1;
    console.log(k);
    }
})