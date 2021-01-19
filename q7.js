function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = [];
	let arr = textToArr(input);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = Number(arr[i]);
	}
	let temp = 0;
	for (let x = 0; x < arr.length; x++) {
		for (let y = x; y < arr.length; y++) {
			if (arr[x] > arr[y]) {
				temp = arr[x];
				arr[x] = arr[y];
				arr[y] = temp;
			}
		}
		out.push(arr[x]);
	}
	output.innerText = out;
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
