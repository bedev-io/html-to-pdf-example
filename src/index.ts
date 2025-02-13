import data from './data';
import { MustacheRenderer } from './MustacheRenderer';
import { HtmlPdfGenerator } from './HtmlPdfGenerator';
import express from "express";

const mustache = new MustacheRenderer();
const pdfGenerator = new HtmlPdfGenerator();

const app = express();
const port = 3030;

app.get('/', async (_, res) => {
  const html = await mustache.render('Invoice.html', data);
  const pdf = await pdfGenerator.generate(html);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Invoice.pdf');
  res.send(pdf);
})

app.listen(port, () => {
  console.log(`Html to Pdf API Example listening on port ${port}`)
})
