export function swapGetParam(query: string, param: string, value: string): string {
	let getParams = new Map();
	let result = '';
	query.substr(1).split('&').forEach((item) => {
		if (item == '') return;
		let tmp = item.split('=');
		if (tmp[0] == param) {
			getParams.set(tmp[0], value);
		} else {
			getParams.set(tmp[0], tmp[1]);
		}
	});
	if (!getParams.has(param)) getParams.set(param, value);
	for (let item of getParams) {
		if (item[1]) {
			result += '&' + item[0] + '=' + item[1];
		} else {
			result += '&' + item[0];
		}
	}
	if (result.length > 0) result = result.replace('&', '?');
	return result;
}