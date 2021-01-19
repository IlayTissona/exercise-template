function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = "";

	if (input[0] === "[" && input[input.length - 1] === "]") {
		out = true;
	} else {
		out = false;
	}
	output.innerText = out;
}
