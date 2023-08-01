const eggShellPath = '../art/eggs/shell/';
const eggPatternPath = '../art/eggs/pattern/';
const eggCracksPath = '../art/eggs/cracks/';

function displayEgg(shell, pattern, maturity) {
	const template = document.querySelector("template");
	const container = document.getElementById('container');
	let egg = document.importNode(template.content, true);

	egg.querySelector('.egg-base').src = eggShellPath + shell + '.png';
	egg.querySelector('.egg-pattern').src = eggPatternPath + pattern + '.png';
	egg.querySelector('.egg-crack').src = eggCracksPath + maturity + '.png';

	container.append(egg);
}

function main() {
	for(let i = 0; i < 12; i++) {
	displayEgg('01', '05', '00');
	}
}