function main() : HTMLElement {
	let element = document.createElement('div');
	element.innerHTML += 'script.js loaded';
	return element;
}

document.body.appendChild(main());