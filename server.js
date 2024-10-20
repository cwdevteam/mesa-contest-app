// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the frontend running on localhost:3000
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Google Drive API setup
const KEYFILEPATH = path.join(__dirname, 'credentials.json'); // Adjust if credentials.json is in a different location
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

// Test endpoint
app.get('/test', (req, res) => {
  console.log('Test endpoint hit'); // Debugging statement
  res.status(200).send({ message: 'Server is working correctly' });
});

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const filePath = req.file.path;

    console.log('File upload request received:', { name, email, filePath }); // Debugging statement

    // Obtain the authenticated client
    const authClient = await auth.getClient();

    // Upload file to Google Drive
    const driveService = google.drive({ version: 'v3', auth: authClient });
    const fileMetadata = {
      name: `${Date.now()}_${req.file.originalname}`,
      parents: ['1Qsx044Qrbsivmbz4BVr-LoXdhzPaQSRt'], // Replace with your shared folder ID
    };
    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(filePath),
    };

    const response = await driveService.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    console.log('File ID:', response.data.id);

    // Delete file from server after uploading
    fs.unlinkSync(filePath);

    res.status(200).send({ message: 'File uploaded successfully to Google Drive', fileId: response.data.id });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send({ message: 'Error uploading file', error: error.message });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});