const fs = require("fs");
const path = require("path");

// Path to the TypeScript file containing the array of objects
const filePath = path.join(__dirname, "../data/pdfFiles.tsx"); // Adjust the file name and path as needed

// Function to update the format of a single object
const updateObjectFormat = (object, newId) => {
  // Create a new title based on the new id
  const newTitle = `Document${newId}.pdf`;
  // Update the path to use require
  const newPath = `require("@/assets/hymns/${object.title}")`;

  return {
    id: newId.toString(),
    title: newTitle,
    path: newPath,
  };
};

// Function to read, update, and write the array of objects
const processFile = () => {
  try {
    // Read the file as a string
    const data = fs.readFileSync(filePath, "utf8");

    // Extract the array of objects from the file string
    const arrayStart = data.indexOf("[");
    const arrayEnd = data.lastIndexOf("]") + 1;
    const arrayString = data.substring(arrayStart, arrayEnd);

    // Parse the array of objects
    let objectsArray;
    eval(`objectsArray = ${arrayString}`);

    // Update each object
    const updatedObjectsArray = objectsArray.map((obj, index) => {
      return updateObjectFormat(obj, index + 1);
    });

    // Convert updated objects array to a string
    const updatedArrayString = JSON.stringify(
      updatedObjectsArray,
      null,
      2
    ).replace(
      /"require\(\\"@\/assets\/hymns\/(.+?)\\"\)"/g,
      'require("@/assets/hymns/$1")'
    );

    // Replace the old array string with the updated array string in the file data
    const updatedData =
      data.substring(0, arrayStart) +
      updatedArrayString +
      data.substring(arrayEnd);

    // Write the updated file data back to the file
    fs.writeFileSync(filePath, updatedData);

    console.log("File updated successfully");
  } catch (error) {
    console.error("Error processing file:", error);
  }
};

// Run the script
processFile();
