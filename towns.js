$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
	$('#btnAdd').click(addTown)
  $('#btnShuffle').click(shuffleTowns);

    document.addEventListener("DOMContentLoaded", function() {
        shuffleTowns();
    });
});


function shuffleTowns(){
	let towns = Array.from(document.querySelectorAll("#towns option"));
	document.getElementById("towns").innerHTML = "";
	shuffleArray(towns);
	towns.forEach(function (town){
		document.getElementById("towns").appendChild(town);
	});
	showMessage("Towns Shuffled!");

	
}

function shuffleArray(array){
	for(let i = array.length-1;i>0;i--){
		let j = Math.floor(Math.random()*(i+1));
		let oldElement = array[i];
		array[i] = array[j];
		array[j] = oldElement;
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


function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		showMessage(townName + " deleted.");
	else
	showMessage(townName + " not found.");
}


function addTown() {
	let townNameField = document.getElementById('addTownInput');

	let towns = document.getElementById('towns');
	let newTown = document.createElement('option');

	newTown.textContent = townNameField.value;

	townNameField.value = '';
	towns.appendChild(newTown);
}