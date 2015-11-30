(function pickEndorsement() {
	var endorsements = document.getElementsByClassName('endorsement');
	var randomPick = Math.floor(Math.random() * endorsements.length);

	endorsements[randomPick].className = "endorsement";
})();
