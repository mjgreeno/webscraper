const xray = new Xray();

xray('http://watchfiresigns.com', 'div', [{
	title: 'h2',
	content: 'p',
	image: 'img@src'
}]).write('results.json');
