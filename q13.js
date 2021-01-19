let count = 0;

function run() {
	const input = document.getElementById("input").value;
	const output = document.getElementById("output");
	let out = "element " + count + ": " + input + "\n";
	count++;
	output.innerText += out;
}
