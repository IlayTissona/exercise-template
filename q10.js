function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = [];
	let inParsed = JSON.parse(input);
	for (let i = 0; i < inParsed.length; i++) {
		out += "row " + i + ":\n";
		for (let j = 0; j < inParsed[i].length; j++) {
			out += inParsed[i][j] + " , ";
		}
		out += "\n";
	}

	output.innerText = out;
}
