$(document).ready(function(){
    
    $('.link').click(function(){
        if( $(this).attr('rel') )
        {
            $('html, body').animate({ scrollTop: ($('#' + $(this).attr('rel')).offset().top) - 76 }, 500);
        }
    });
    
    $('.sort_by div').css('cursor','pointer');
    
    $('.sort_by div').click(function(){
        $('.sort_by div').removeClass('selected');
        $(this).addClass('selected');
        if( $(this).attr('rel') == 'all' )
        {
            $('.element div').show();
        }
        else
        {
            $('.element div').hide();
            $('.element div[rel="' + $(this).attr('rel') + '"]').show();
        }
    });
    
    $('#prev').click(function(){
        var last = $('.staff').length - 1;
        $('.box').prepend( '<div class="staff">' + $('.staff').eq(last).html() + '</div>' );
        $('.staff').eq(last + 1).remove();
    });
    
    $('#next').click(function(){
        $('.box').append( '<div class="staff">' + $('.staff').eq(0).html() + '</div>' );
        $('.staff').eq(0).remove();
    });
	
    
    /** simple carousel start **/
    var len_car = $('.hidden').length; 
    var n = 0; 
   
    $('.navigate').html(''); 
    
    for(var i=0;i<len_car;i++)
    {
        $('.navigate').append('<a></a>'); 
    }
   
    $('.navigate a').eq(0).addClass('active');
    $('.hidden').removeClass('selected')
    $('.hidden').eq(0).addClass('selected');
    
    setInterval(function(){
        
        if( n < (len_car - 1) )
        {
            n++;
        }
        else
        {
            n = 0;
        }
        
        $('.navigate a').removeClass('active');
        $('.navigate a').eq(n).addClass('active');
        
        $('.hidden').removeClass('selected')
        $('.hidden').eq(n).addClass('selected');
        
    },2500); 
    /** end simple carousel **/ 
    
   
});

$(window).scroll(function(){
    if( $(window).scrollTop() > 810 )
    {
        $('nav').css('position', 'fixed').css('top','0');
        $('#second_box').css('margin-top','76px');
    }
    else 
    { 
        $('nav').css('position', 'relative');
        $('#second_box').css('margin-top','0');
    }
    
    //console.log( $(window).scrollTop() + $(window).height() - ($('.stats').eq(0).height() + 100) + '//' + $('.for2or1').eq(0).offset().top );
    
    var dis_top = $(window).scrollTop() + $(window).height() - ($('.stats').eq(0).outerHeight(true));
    var pos_1st_elm = $('.for2or1').eq(0).offset().top;
    
    if( dis_top > pos_1st_elm ){
        for( var i = 0; i < $('.stats').length; i++ )
        {
            $('.stats').eq(i).find('.fill').delay( 1000 * i ).animate({
                width: $('.stats').eq(i).find('.val').html()
            }, 1000, function() {
                // Animation complete.
            });
        }
    }
    
});

