$(document).ready(function() {
	$('#btnDelete').click(deleteTown)

	$('#btnShuffle').click(shuffleTowns);

    document.addEventListener("DOMContentLoaded", function() {
        shuffleTowns();
    });
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for(let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function shuffleTowns() {

	let towns = Array.from(document.querySelectorAll("#towns option"));
	document.getElementById("towns").innerHTML = "";
	shuffleArray(towns);

	towns.forEach(function (town){
		document.getElementById("towns").appendChild(town);
	});
	showMessage("Towns shuffled.");
	function shuffleArrsay(array){
		for(let i = array.Length - 1; i > 0; i--){
			let j = Math.floor(Math.random() * (i + 1));
			let oldElement = array[i];
			array[i] = array[j];
			array[j] = oldElement;
		}
	}
}

function showMessage(msg){
	let resultElement = document.getElementById("result");
	resultElement.textContent = msg;
	resultElement.style.display = "block";
	setTimeout(function (){
		resultElement.style.display = "none";
	}, 3000);
}

