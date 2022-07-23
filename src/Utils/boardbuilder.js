export default function boardbuilder(height, width) {
	let boardArr = [];
	for (let i = 0; i < height; i++) {
		let nested = [];
		for (let j = 0; j < width; j++) {
			nested.push('');
		}
		boardArr.push(nested);
	}
	return boardArr;
}

