const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Function to extract URLs from HTML
const extractUrlsFromHtml = (htmlFilePath) => {
	const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
	const dom = new JSDOM(htmlContent);
	const document = dom.window.document;
	const screenshots = document.querySelectorAll('screenshot');
	const urls = [];
	screenshots.forEach((screenshot) => {
		const url = screenshot.getAttribute('data-src');
		const id = screenshot.id;
		if (url) {
			urls.push({ id, url });
		}
	});
	return urls;
};

// Function to validate and format URLs
const formatUrl = (url) => {
	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}
	return `http://${url}`;
};

// Function to take screenshots of URLs
const takeScreenshots = async (urls, outputDir) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	for (const { id, url } of urls) {
		const formattedUrl = formatUrl(url);
		try {
			await page.goto(formattedUrl, { waitUntil: 'networkidle2' });
			const screenshotPath = path.join(outputDir, `${id}.png`);
			await page.screenshot({ path: screenshotPath });
			console.log(`Screenshot of ${formattedUrl} saved as ${screenshotPath}`);
		} catch (error) {
			console.error(`Error navigating to ${formattedUrl}: ${error.message}`);
		}
	}
	await browser.close();
};

// Main function
(async () => {
	const htmlFilePath = path.join(__dirname, '..', '..', 'index.html');
	const outputDir = path.join(__dirname, '..', '..', 'img', 'screenshots');

	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}

	const urls = extractUrlsFromHtml(htmlFilePath);
	await takeScreenshots(urls, outputDir);

	console.log('All screenshots taken.');
})();
