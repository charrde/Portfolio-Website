const cron = require('node-cron');
const { exec } = require('child_process');
const path = require('path');

cron.schedule('0 */3 * * *', () => {
	console.log('Running Puppeteer script...');
	const scriptPath = path.join(__dirname, 'screenshot.js');
	exec(`node ${scriptPath}`, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error executing script: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
});