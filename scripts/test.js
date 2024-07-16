// // updateTitles.js
// const fs = require("fs");
// const path = require("path");

// const tsxFilePath = path.join(__dirname, "../data/pdfFiles.tsx");

// const updateTitles = (filesArray) => {
//   return filesArray.map((file) => {
//     const filePath = file.path.replace("require(", "").replace(")", ""); // Strip require() to get the actual path
//     const fileName = filePath.split("/").pop().replace(/['"]/g, ""); // Get the filename and remove quotes
//     return {
//       ...file,
//       title: fileName, // Update the title to the filename
//     };
//   });
// };

// // Read the TSX file
// fs.readFile(tsxFilePath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the TSX file:", err);
//     return;
//   }

//   // Extract the files array using a regular expression
//   const filesArrayMatch = data.match(/const hymnObjects = (\[[\s\S]*?\]);/);
//   if (!filesArrayMatch) {
//     console.error("Files array not found in the TSX file.");
//     return;
//   }

//   // Parse the extracted array
//   const filesArrayStr = filesArrayMatch[1];
//   let filesArray;
//   try {
//     filesArray = eval(filesArrayStr);
//   } catch (e) {
//     console.error("Error parsing the files array:", e);
//     return;
//   }

//   // Update the titles
//   const updatedFiles = updateTitles(filesArray);

//   // Replace the original array with the updated array in the TSX file content
//   const updatedFilesStr = JSON.stringify(updatedFiles, null, 2);
//   const updatedData = data.replace(filesArrayStr, updatedFilesStr);

//   // Write the updated content back to the TSX file
//   fs.writeFile(tsxFilePath, updatedData, "utf8", (err) => {
//     if (err) {
//       console.error("Error writing the updated TSX file:", err);
//       return;
//     }
//     console.log("TSX file updated successfully.");
//   });
// });

// updateTitles.js
const fs = require("fs");
const path = require("path");

const tsxFilePath = path.join(__dirname, "../data/pdfFiles.tsx");

const updateTitles = (filesArray) => {
  return filesArray.map((file) => {
    console.log(file);
    const filePath = file.path; // Treat the path as a string
    const fileName = filePath.split("/").pop().replace(/['"]/g, ""); // Get the filename and remove quotes
    return {
      ...file,
      title: fileName, // Update the title to the filename
    };
  });
};

// Read the TSX file
fs.readFile(tsxFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the TSX file:", err);
    return;
  }

  // Extract the files array using a regular expression
  const filesArrayMatch = data.match(/const hymnObjects = (\[[\s\S]*?\]);/);
  if (!filesArrayMatch) {
    console.error("Files array not found in the TSX file.");
    return;
  }

  // Parse the extracted array as JSON
  const filesArrayStr = filesArrayMatch[1].replace(/require\((.*?)\)/g, "$1");
  let filesArray;
  try {
    filesArray = eval(filesArrayStr);
  } catch (e) {
    console.error("Error parsing the files array:", e);
    return;
  }

  // Update the titles
  const updatedFiles = updateTitles(filesArray);

  // Replace the original array with the updated array in the TSX file content
  const updatedFilesStr = JSON.stringify(updatedFiles, null, 2);
  const updatedData = data.replace(filesArrayMatch[1], updatedFilesStr);

  // Write the updated content back to the TSX file
  fs.writeFile(tsxFilePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing the updated TSX file:", err);
      return;
    }
    console.log("TSX file updated successfully.");
  });
});
