import * as puppeteer from 'puppeteer';

export class HtmlPdfGenerator {
  async generate(content: string) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();

    await page.setContent(content);
    await page.emulateMediaType('screen');

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    await browser.close();

    return Buffer.from(pdf);
  }
}
