console.log("Hello World from main.js!");



var $cats = document.querySelectorAll(".cat");


for (var i = 0; i < $cats.length; i++) {
	
	new Waypoint({
		element: $cats[i],
		handler: function(direction) {
			if (direction == "down") {
				TweenMax.to(this.element, 1, {opacity: 1})
			} else if (direction == "up") {
				TweenMax.to(this.element, 0.5, {opacity: 0})
			}
		},
		offset: "80%"
	})

}


