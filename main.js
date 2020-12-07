let hits = 0;
let hint = document.getElementById("hint");

let coordX = Math.floor(Math.random() * 740 + 5);
let coordY = Math.floor(Math.random() * 523 + 5);

let clickMouse = function (event) {
	let targetX = event.pageX;
	let targetY = event.pageY;
	hits++;
	let distanse = Math.floor(Math.sqrt((coordX - targetX) * (coordX - targetX) + (coordY - targetY) * (coordY - targetY)));
	console.log(distanse);
	if (distanse < 10) {
	alert("Клад найден! Количество попыток: " + hits);
} else if (distanse < 20) {
	hint.innerText = "Горячо!";
} else if (distanse < 50) {
	hint.innerText = "Тепло";
} else if (distanse < 100) {
	hint.innerText = "Теплее";
} else if (distanse < 150) {
	hint.innerText = "Прохладно";
} else if (distanse < 200) {
	hint.innerText = "Холоднее";
}
else {
	hint.innerText = "Холодно!";
}
}
$("#pic").click(clickMouse);

