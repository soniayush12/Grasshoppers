const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0'; // Listen on all available network interfaces
const port = 3000; // Use the port of your choice (e.g., 3000)

const server = http.createServer((req, res) => {
  // Get the URL of the requested resource
  const requestedUrl = req.url === '/' ? '/index.html' : req.url;

  // Determine the file path based on the requested URL
  const filePath = path.join(__dirname, requestedUrl);

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File does not exist, return a 404 response
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
    } else {
      // File exists, read and serve it
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // Error reading the file, return a 500 response
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('500 Internal Server Error');
        } else {
          // Serve the file with the appropriate content type
          const contentType = getContentType(filePath);
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    }
  });
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Function to determine the content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.jpg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    default:
      return 'application/octet-stream';
  }
}
