function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let inParsed = textToArr(input);
	console.log(inParsed);
	for (let i = 0; i < inParsed.length; i++) {
		if (isNaN(inParsed[i]) || inParsed[i] == 0 || inParsed[i] === "") {
			inParsed.splice(i, 1);
			i--;
			console.log(inParsed);
		}
	}

	output.innerText = inParsed;
}
function textToArr(input) {
	let out = [];
	let index = 0;
	let temp = "";
	if (input[0] !== "[" || input[input.length - 1] !== "]") {
		out = "NaA";
	} else {
		for (let i = 1; i < input.length; i++) {
			if (input[i] === "," || input[i] === "]") {
				out[index] = temp;
				index++;
				temp = "";
			} else {
				temp += input[i];
			}
		}
	}
	return out;
}
