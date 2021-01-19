function run() {
	const input1 = document.getElementById("input").value;
	const input2 = document.getElementById("input2").value;
	const output = document.getElementById("output");
	let out = "";
	inParsed = JSON.parse(input1);
	for (let i = 0; i < inParsed.length; i++) {
		if (inParsed[i] === Number(input2)) {
			out = i;
			break;
		}
	}

	output.innerText = out;
}
