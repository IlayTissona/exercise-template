function run() {
	const input1 = document.getElementById("input").value;
	const input2 = document.getElementById("input2").value;
	const output = document.getElementById("output");
	let out = "";
	let higher = Math.max(Number(input1), Number(input2));
	let lower = Math.min(Number(input1), Number(input2));
	for (let i = lower; i <= higher; i++) {
		if (i % 4 === 0) {
			out += i + ", ";
		}
	}
	output.innerText = out;
}
