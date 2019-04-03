//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let place_template = _.template($("#place_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html());

	_.each(data, function (place) {
		$("#character").append(option_template({ county: place.county }));
	});

	// $('#enter').on("click", function (e) {
	// 	e.preventDefault(); //disable the button
	$("body").on("keyup keydown keypress change", "select", function (e) {

		places_name = $("#character").val();
		result = _.find(data, { county: places_name });

		console.log(result);

		$("#info").html(place_template({ place: result }));
	});



}); // closes document ready