const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/generate-resume', async (req, res) => {
  try {
    const resumeData = req.body;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const { getResumeHTML } = require('./template');
    const htmlContent = getResumeHTML(resumeData);

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    res.contentType("application/pdf");
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
