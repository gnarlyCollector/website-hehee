$( document ).ready(function() {
    var dimg = "images/lson.png";
    var imgswitch = false;
    $('.swapimg').click(function(){
        if(imgswitch){
             $(this).attr('src','images/lson.png');
             imgswitch = false;
        }else{
             $(this).attr('src','images/lsoff.png');
             imgswitch = true;
        }
    })
});