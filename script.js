$(document).ready(function() {
	$("#menu section p").on('click',function(e) {

		if ( $(this).parents("section").hasClass("hide") ){

		$(this).parents().siblings("section").addClass("hide");
		$(this).parents("section").removeClass("hide");}

		else{
			$(this).parents("section").addClass("hide");
		}
	});
})(jQuery);

// $(document).ready == page load; does not wait for all the images to load before firing
//function() == function without parameters
//'click'; run this function when the menu item is clicked
//function(e); e is the event object that is populated when the event callback is executed
//(this) refers to the object on which a method is being invoked
//In this case, "this" references the menu surface items
	//add class hide to parent siblings
	//remove class from parent (the menu item you clicked)
//WHAT IS e.preventDefault() USED FOR??? IS return false; BETTER???
