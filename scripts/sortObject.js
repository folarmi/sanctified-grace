const fs = require("fs");
const path = require("path");

// Path to your JSON file
const filePath = path.join(__dirname, "../data/pdfFilesThree.tsx"); // Adjust the path as necessary

// Function to extract the numeric part from the title
function extractNumber(title) {
  const match = title.match(/^(\d+)/); // Match the number at the beginning
  return match ? parseInt(match[1], 10) : 0; // Return the number or 0 if no match
}

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const objects = JSON.parse(data);

    // Sort the array based on the extracted number
    const sortedObjects = objects.sort((a, b) => {
      return extractNumber(a.title) - extractNumber(b.title);
    });

    // Output the sorted array
    console.log(sortedObjects);

    // Optionally, write the sorted data back to a file
    const outputFilePath = path.join(__dirname, "sorted_data.json"); // Adjust the path as necessary
    fs.writeFile(
      outputFilePath,
      JSON.stringify(sortedObjects, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing the file:", err);
        } else {
          console.log("Sorted data written to", outputFilePath);
        }
      }
    );
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
