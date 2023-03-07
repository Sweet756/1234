let result = document.getElementById("result");

function getResult(value) {
	if (value === "=") {
		result.value = eval(result.value);
	} else {
		result.value += value;
	}
}

function clearResult() {
	result.value = "";
}

function deleteChar() {
	result.value = result.value.slice(0, -1);
}
