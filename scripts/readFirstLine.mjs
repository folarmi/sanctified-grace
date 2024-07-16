// readFirstLine.js
const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

async function readFirstLineFromPDF(filePath) {
  try {
    // Read the PDF file into a buffer
    const pdfBuffer = fs.readFileSync(filePath);

    // Load the PDF document from the buffer
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get the first page
    const firstPage = pdfDoc.getPage(0);

    // Extract the text content from the first page
    const textContent = await firstPage.getTextContent();

    // Get the text from the first page and split it into lines
    const text = textContent.items.map((item) => item.str).join(" ");
    const lines = text.split("\n");

    // Return the first line
    return lines[0].trim();
  } catch (error) {
    console.error("Error reading PDF:", error);
    return null;
  }
}

// Example usage
const pdfPath = path.resolve(__dirname, "../assets/hymns/Hymn_1_1.pdf");
readFirstLineFromPDF(pdfPath).then((firstLine) => {
  console.log("First line:", firstLine);
});
