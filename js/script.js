	var popupButton = document.querySelector(".popup-button");
	var searchForm = document.querySelector(".booking-form");
	var arrival = searchForm.querySelector(".arrival-input");
	var departure = searchForm.querySelector(".departure-input");

	popupButton.addEventListener("click", function(evt){
		evt.preventDefault();
		searchForm.classList.toggle("show-search-form");
	});

	searchForm.addEventListener("submit", function(evt){
		if(!arrival.value || !departure.value){
			evt.preventDefault();
			searchForm.classList.remove("modal-error");
			searchForm.offsetWidth = searchForm.offsetWidth;
			searchForm.classList.add("modal-error");
		}
	});

		window.addEventListener("keydown", function(evt){
		if(evt.keyCode === 27){
			evt.preventDefault();
			if(searchForm.classList.contains("show-search-form")){
				searchForm.classList.remove("show-search-form");
			}
		}
	});

