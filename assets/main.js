$(document).ready(main);

var i = 1;

function main() {
    $(".menu_bar").click(function(){
        if(i == 1){
            $("nav").animate({
                left: '0'
            });
            i = 0;
        } else {
            i = 1;
            $("nav").animate({
                left: '-100%'
            });
        }
    });
}