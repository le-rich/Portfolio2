//COVER PAGE

$('#cover-projects-btn').click(function(){
	$(".cover").toggleClass("fadeOutDown").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html"
     });
})

$('#cover-resume-btn').click(function(){
	$(".cover").toggleClass("fadeOutLeft").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html"
     });
})

$('#cover-contact-btn').click(function(){
	$(".cover").toggleClass("fadeOutUp").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html"
     });
})

$('#cover-contact-btn').click(function(){
	toggleCover();
})



function toggleCover(){
	$('.cover').toggleClass("fadeOutLeftBig");
}

//Params: string element, string visible or hidden
function setElementVisibility(element, state){
	$(element).css('visibility', state);
}

//PROJECTS PAGE

$('.projects-btn').click(function(){
	//$(this).css('color', 'white');
	$(this).attr('id', 'projects-act-btn');
	$('.projects-btn').not(this).each(function(){
		$(this).removeAttr('id');
	});
});
