const fs = require("fs");
const path = require("path");

// Directory path where your PDFs are located
const directoryPath = path.join(__dirname, "../assets/hymnsTwo");

// Function to read directory and create objects
const createPdfObjects = () => {
  try {
    // Read directory contents
    const files = fs.readdirSync(directoryPath);

    // Filter PDF files
    const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

    // Map PDF files to object structure
    const pdfObjects = pdfFiles.map((file, index) => ({
      id: (index + 1).toString(), // Example ID generation
      title: file,
      //   path: require(path.join(directoryPath, file)), // Require the file path
      path: path.join(directoryPath, file), // Require the file path
    }));

    return pdfObjects;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

// Usage example
const pdfFiles = createPdfObjects();
const outputFilePath = path.join(__dirname, "pdfFilesThree.tsx"); // Output file path
fs.writeFileSync(outputFilePath, JSON.stringify(pdfFiles, null, 2));
