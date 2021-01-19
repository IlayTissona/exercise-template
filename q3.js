function run() {
	const input = document.getElementById("input").value;
	const input2 = document.getElementById("input2").value;
	const output = document.getElementById("output");
	let out = "";
	out = first(textToArr(input), input2);
	output.innerText = out;
}

function first(arr, index) {
	let temp = [];
	if (index === undefined) {
		return arr[0];
	} else {
		for (let i = 0; i < index; i++) {
			temp.push(arr[i]);
		}
		return temp;
	}
}

function textToArr(input) {
	let out = [];
	let index = 0;
	let temp = "";
	if (input[0] !== "[" || input[input.length - 1] !== "]") {
		out = "NaA";
	} else {
		for (let i = 1; i < input.length - 2; i++) {
			if (input[i] === ",") {
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
