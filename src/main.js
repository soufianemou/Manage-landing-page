$(document).ready(()=>{

    $(window).on('scroll',showScrollBtn)
    function showScrollBtn(){       
        $(window).scrollTop() > 400 ? $('#up').css('bottom','20px') : $('#up').css('bottom','-65px')
    }
    $('#up').click(()=>{
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })
    

    function hideShow(){
        $('#menu').on('click',()=>{
            if($( "#menu" ).hasClass( "hide" )){
                $("#menu").attr("src","./media/icon-close.png")
                $('#links-div').slideDown()
                $( "#menu" ).removeClass("hide")
            }else{
                $("#menu").attr("src","./media/icon-hamburger.png")
                $('#links-div').slideUp()
                $( "#menu" ).addClass("hide")
            }
        })
    }
    hideShow()
})
