function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = "";
	for (let i = 0; i < input.length; i++) {
		out += input[i];
		if (Number(input[i]) % 2 === 0 && Number(input[i + 1]) % 2 === 0) {
			out += "-";
		}
	}

	output.innerText = out;
}
