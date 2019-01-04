/////////////////////////////////////////////////////////////////////////////////////////// COVER PAGE
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

$('#cover-projects-btn').click(function(){
	$(".cover").toggleClass("fadeOutDown").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html";
     });
});

$('#cover-resume-btn').click(function(){
	$(".cover").toggleClass("fadeOutLeft").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "https://drive.google.com/viewerng/viewer?url=https://le-rich.github.io/assets/pdf/resume.pdf";
     });
});

$('#cover-contact-btn').click(function(){
	$(".cover").toggleClass("fadeOutUp").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
              window.location.href = "projects.html";
     });
});

$('#cover-contact-btn').click(function(){
	toggleCover();
});


/////////////////////////////////////////////////////////////////////////////////////////// PROJECTS PAGE
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var activeProjectDiv = '#gamedev-projects';
$('#software-projects').hide();
$('#other-projects').hide();

$("#gamedev-projects").toggleClass("fadeInDown").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
	$('#gamedev-projects').removeClass('fadeInDown');
	$('#projects-catButtons').addClass('fadeIn');
});


$('#gamedev-button').click(function(){
	if (activeProjectDiv != '#gamedev-projects'){
		switchToProject('#gamedev-projects', activeProjectDiv);
		activeProjectDiv = '#gamedev-projects';
	}
});

$('#software-button').click(function(){
	if (activeProjectDiv != '#software-projects'){
		switchToProject('#software-projects', activeProjectDiv);
		activeProjectDiv = '#software-projects';
	}
});

$('#other-button').click(function(){
	if (activeProjectDiv != '#other-projects'){
		switchToProject('#other-projects', activeProjectDiv);
		activeProjectDiv = '#other-projects';
	}
});


function switchToProject(toEnable, toDisable){
	 $(toDisable).hide();
	 $(toEnable).show();
}


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
