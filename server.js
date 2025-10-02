import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the dist directory
app.use('/material-dashboard-shadcn-vue', express.static(join(__dirname, 'dist')));

// Handle SPA routing - serve index.html for all routes under the base path
app.get('/material-dashboard-shadcn-vue/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Redirect root to the base path
app.get('/', (req, res) => {
  res.redirect('/material-dashboard-shadcn-vue/');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

