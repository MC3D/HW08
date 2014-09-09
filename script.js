$(document).ready(function() {
	$("#menu section p").click(function(e) {

		if ( $(this).parents("section").hasClass("hide") ){

		$(this).parents().siblings("section").addClass("hide");
		$(this).parents("section").removeClass("hide");}

		else{
			$(this).parents("section").addClass("hide");
		}

		return false;
		//e.preventDefault();
	});
})(jQuery);

// $(document).ready == page load; does not wait for all the images to load before firing
//function() == function without parameters
//$("#artist")reference to menu surface items; outter skin of the accordion
//.click; run this function when the menu item is clicked
//function(e); e is the event object that is populated when the event callback is executed
		//WHAT DOES THAT MEAN?
//(this) refers to the object on which a method is being invoked
//  //HMMMMMMM????
//In this case, "this" references the menu surface items
	//add class hide to parent siblings
	//remove class from parent (the menu item you clicked)
//WHAT IS e.preventDefault() USED FOR??? IS return false; BETTER???
	//
//NEED A BETTER UNDERSTANDING OF $("#menu section p") ... COULDN'T GET IT TO WORK
//	WITHOUT NAMED DIV

//CAN'T GET IF STATEMENT WORKING; WANT TO CLOSE ITEM IF IT IS OPENED AND CLICKED ON
