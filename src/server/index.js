import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';

const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static('dist/client'));

app.get('*', async (req, res, next) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  const { body, statusCode, contentType } = httpResponse;
  res.status(statusCode).type(contentType).send(body);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});