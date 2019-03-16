	var searchPopup = document.querySelector(".hotels-search-popup");
	var popupButton = searchPopup.querySelector(".popup-button");
	var searchForm = searchPopup.querySelector(".booking-form");

	popupButton.addEventListener("click", function(evt){
		evt.preventDefault();
		searchForm.classList.toggle("show-search-form");
	});

		window.addEventListener("keydown", function(evt){
		if(evt.keyCode === 27){
			evt.preventDefault();
			if(searchForm.classList.contains("show-search-form")){
				searchForm.classList.remove("show-search-form");
			}
		}
	});