

function makeTimer() {

	
		var endTime = new Date("13 Maret 2022 9:00:00 GMT+07:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Hari</span>");
			$("#hours").html(hours + "<span>Jam</span>");
			$("#minutes").html(minutes + "<span>Menit</span>");
			$("#seconds").html(seconds + "<span>Detik</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);



$('.menu').find('a').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
		
    });


//$("audio")[0].play();
$(".trigger-audio").click(function(){
        var audio = $("#music")[0];
        if (audio.paused) {
            audio.play();
            
$(this).html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><g><g><path d="M16.5,25.5c-1.1,0-2-0.9-2-2v-7c0-1.1,0.9-2,2-2s2,0.9,2,2v7C18.5,24.6,17.6,25.5,16.5,25.5z M16.5,15.5c-0.6,0-1,0.4-1,1 v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7C17.5,15.9,17.1,15.5,16.5,15.5z"/></g><g><g><path d="M23.5,25.5c-1.1,0-2-0.9-2-2v-7c0-1.1,0.9-2,2-2s2,0.9,2,2v7C25.5,24.6,24.6,25.5,23.5,25.5z M23.5,15.5 c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7C24.5,15.9,24.1,15.5,23.5,15.5z"/></g></g></g></svg>');
        }  else {
            audio.pause();
            $(this).html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><g><g><path d="M17.7,25.5c-1,0-1.7-0.8-1.7-1.7v-7.5c0-1,0.8-1.7,1.7-1.7c0.3,0,0.6,0.1,0.9,0.2l6.5,3.8c0.5,0.3,0.9,0.9,0.9,1.5 s-0.3,1.2-0.9,1.5l-6.5,3.8C18.3,25.4,18,25.5,17.7,25.5z M17.7,15.5c-0.4,0-0.7,0.3-0.7,0.7v7.5c0,0.6,0.7,0.9,1.1,0.6l6.5-3.8 c0.2-0.1,0.4-0.4,0.4-0.6s-0.1-0.5-0.4-0.6l-6.5-3.8C18,15.5,17.9,15.5,17.7,15.5z"/></g></g></svg>');

        }

    });


sal({
  threshold: 0.0001,
  once: false,
 
});

const viewport = $(window).width();

if(viewport > 678){
	$('#map').css('height', '670px')
}

$(window).scroll(function fix_element() {
    $('.bg').css(
      $(window).scrollTop() > 100
        ? { 'position': 'fixed', 'top': '0px' }
        : { 'position': 'absolute', 'top': 'auto' }
    );
    return fix_element;
  }());

$('.bxslider').bxSlider({
	auto: true,
	controls: false,
	mode: 'vertical',
	moveSlides: 1,
	slideMargin: 100,
	infiniteLoop: true,
	slideHeight: 600,
	minSlides: 1,
	maxSlides: 1,
	speed: 800,
	pager: false
});




	var arr = ["white","blue","black"];
    var i = 0;

    $(".w__intro").each(function () {
        arr.push($(this));
    });

    function bgChange() {
        for (var count = 0; count < arr.length; count++) {
            if (i == count) arr[count].css('background-color', 'red');
            else arr[count].css('background-color', 'white');
        }
        i++;
        if (i === arr.length) i = 0;
    }
    setInterval(bgChange, 8000);


$('.w__desc .left').find('img').click(function() {
						$(".w__desc").find('.left').fullscreen();
						return false;
					});

$('.w__desc .right').find('img').click(function() {
						$(".w__desc").find('.right').fullscreen();
						return false;
					});
					// exit fullscreen
$('.w__desc').find('img').click(function() {
						$.fullscreen.exit();
				
					});


$(".trigger-in").on('click', function(){

	$(".preloader").hide("slow");
});



$(window).on('load', function(){
	$(".preloader").hide("slow");
})

