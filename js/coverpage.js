$('#cover-projects-btn').click(function(){
	$(".cover").toggleClass("fadeOutLeftBig").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html"
     });
})

$('#cover-resume-btn').click(function(){
	toggleCover();
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