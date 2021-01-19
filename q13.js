let count = 0;
let bigArr = [];
function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = "element " + count + ": " + input + "\n";
	count++;
	bigArr.push(out);
	output.innerText += out;
}
