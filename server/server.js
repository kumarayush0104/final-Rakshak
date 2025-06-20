import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config();
console.log('Environment Variables Loaded:', process.env);
import connectDb from './db/db.js'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import fileRoutes from './routes/fileRoutes.js'
import printRoutes from './routes/printRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

// env.config();
// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log environment variables (without sensitive data)
console.log('Environment Variables Loaded:', {
    PORT: process.env.PORT,
    DEV_MODE: process.env.DEV_MODE,
    MONGO_URL_EXISTS: !!process.env.MONGO_URI

});
connectDb();
// Rest object
const app = express();


const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, '');

app.use(cors({
  origin: allowedOrigin,
  credentials: true
})); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.set('view engine', 'ejs');

// configure env

//() es config mei es brackets mei path dena hota   hai hamare case mei root par hai thats why we are not giving path

//database config 
connectDb();

app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/file", fileRoutes); // routes for file operations (upload, fetch, and QR generation)
app.use('/api/v1/print', printRoutes);

//rest api

app.get("/", (req, res) => {
  res.send({
message: "Welcome to Rakshak API"

  })
})

// Handle client-side routing
app.get('*', (req, res) => {
  // Check if the request is for an API endpoint
  if (!req.url.startsWith('/api/')) {
    // Send the index.html for client-side routes
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  } else {
    // For API routes that weren't matched, send 404
    res.status(404).send({ message: 'API endpoint not found' });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`.bgCyan.white);
});
