# Rakshak Server

## Overview

This directory contains the backend of the Rakshak – Encrypted Document Sharing System. It is built using Node.js, Express.js, and MongoDB.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Cloudinary for file storage
- Multer for file uploads

## Installation

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run server
```

The server will start on the configured port (default 5000).

## API Endpoints

Refer to the `routes` directory for available API endpoints:

- Authentication routes: `authRoutes.js`
- File upload and management routes: `fileRoutes.js`
- QR code related routes: `printRoutes.js`

## Environment Variables

Make sure to configure environment variables for:

- MongoDB connection URI
- JWT secret
- Cloudinary credentials

## License

This project is licensed under the MIT License.
