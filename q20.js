function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	inParsed = JSON.parse(input);
	let temp = 0;
	let out = [];
	for (let i = 0; i < inParsed.length; i++) {
		temp = inParsed[i];
		for (let j = 0; j < inParsed.length; j++) {
			if (inParsed[j] === temp && j !== i && inParsed[j] !== null) {
				out.push(inParsed[j]);
				inParsed[j] = null;
			}
		}
	}
	for (let i = 0; i < out.length; i++) {
		temp = out[i];
		for (let j = 0; j < out.length; j++) {
			if (out[j] === temp && j !== i && out[j] !== null) {
				out.splice(j, 1);
				inParsed[j] = null;
			}
		}
	}

	output.innerText = "Duplicates: " + out;
}
