function run() {
	const input = document.getElementById("input").value;
	const input2 = document.getElementById("input2").value;
	const output = document.getElementById("output");
	let out = [];
	let inParsed = eval(input);
	for (let i = 0; i < inParsed.length; i++) {
		out.push(inParsed[i][input2]);
	}
	output.innerText = out;
}
