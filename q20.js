function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	inParsed = JSON.parse(input);
	let temp = 0;
	let out = "Duplicates: ";
	for (let i = 0; i < inParsed.length; i++) {
		temp = inParsed[i];
		for (let j = 0; j < inParsed.length; j++) {
			if (inParsed[j] === temp && j !== i && inParsed[j] !== null) {
				out += inParsed[j] + ", ";
				inParsed[j] = null;
			}
		}
	}
	output.innerText = out;
}
