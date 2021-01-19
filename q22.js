function run() {
	const input1 = document.getElementById("input").value;
	const input2 = document.getElementById("input2").value;
	const output = document.getElementById("output");

	let inParsed1 = JSON.parse(input1);
	let inParsed2 = JSON.parse(input2);
	let notExist = true;
	let out = [];
	for (let x = 0; x < inParsed1.length; x++) {
		out.push(inParsed1[x]);
	}
	for (let i = 0; i < inParsed2.length; i++) {
		notExist = true;
		for (let j = 0; j < out.length; j++) {
			if (inParsed2[i] === out[j]) {
				notExist = false;
			}
		}
		if (notExist) {
			out.push(inParsed2[i]);
		}
	}

	output.innerText = out;
}
