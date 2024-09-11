import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';


const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for API requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

// use imported routes from routes.ts, anything else serve the React app
app.use('/api', routes);

// Catch-all route to serve React app for all other routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
