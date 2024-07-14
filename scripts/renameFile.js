const fs = require("fs");
const path = require("path");

// Path to the directory containing the PDF files
const directoryPath = path.join(__dirname, "../assets/hymns");

// Function to rename files
function renameFiles() {
  // Read the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    // Loop through all the files
    files.forEach((file) => {
      // Check if the file is a PDF
      if (path.extname(file) === ".pdf") {
        // Create a new file name by replacing spaces with underscores
        const newFileName = file.replace(/\s+/g, "_");

        // Define the old and new file paths
        const oldFilePath = path.join(directoryPath, file);
        const newFilePath = path.join(directoryPath, newFileName);

        // Rename the file
        fs.rename(oldFilePath, newFilePath, (err) => {
          if (err) {
            console.log("Error renaming file:", err);
          } else {
            console.log(`Renamed: ${file} -> ${newFileName}`);
          }
        });
      }
    });
  });
}

// Run the function
renameFiles();
