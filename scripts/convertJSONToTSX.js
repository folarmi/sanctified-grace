// const fs = require("fs");
// const path = require("path");

// // Path to your JSON file
// const jsonFilePath = path.join(__dirname, "../data/hymnsWithTheme.json"); // Adjust the path as necessary

// // Path to output TSX file
// const tsxFilePath = path.join(__dirname, "DataComponent.tsx"); // Adjust the path as necessary

// // Read the JSON file
// fs.readFile(jsonFilePath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }

//   try {
//     // Parse the JSON data
//     const jsonObject = JSON.parse(data);

//     // Generate TSX component code
//     const tsxComponent = generateTsxComponent(jsonObject);

//     // Write the TSX component to a file
//     fs.writeFile(tsxFilePath, tsxComponent, (err) => {
//       if (err) {
//         console.error("Error writing the file:", err);
//       } else {
//         console.log("TSX component written to", tsxFilePath);
//       }
//     });
//   } catch (parseError) {
//     console.error("Error parsing JSON:", parseError);
//   }
// });

// // Function to generate a TSX component from the JSON data
// function generateTsxComponent(jsonObject) {
//   return `
// import React from 'react';

// const data = ${JSON.stringify(jsonObject, null, 2)};

// const DataComponent: React.FC = () => {
//   return (
//     <div>
//       {data.array.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>Path: {item.path}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DataComponent;
//   `;
// }

const fs = require("fs");
const path = require("path");

// Path to your JSON file
const jsonFilePath = path.join(__dirname, "../data/hymnsWithTheme.json"); // Adjust the path as necessary

// Path to output TSX file
const tsxFilePath = path.join(__dirname, "PsalmsAndHymnsComponent.tsx"); // Adjust the path as necessary

// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonObject = JSON.parse(data);

    // Convert JSON data to the desired format
    const formattedData = Object.entries(jsonObject).map(
      ([category, hymns]) => ({
        category,
        hymns,
      })
    );

    // Generate TSX component code
    const tsxComponent = generateTsxComponent(formattedData);

    // Write the TSX component to a file
    fs.writeFile(tsxFilePath, tsxComponent, (err) => {
      if (err) {
        console.error("Error writing the file:", err);
      } else {
        console.log("TSX component written to", tsxFilePath);
      }
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});

// Function to generate a TSX component from the JSON data
function generateTsxComponent(data) {
  return `
import React from 'react';

const psalmsAndHymnsData = ${JSON.stringify(data, null, 2)};

const PsalmsAndHymnsComponent: React.FC = () => {
  return (
    <div>
      {psalmsAndHymnsData.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.hymns.map((hymn, hymnIndex) => (
              <li key={hymnIndex}>
                <a href={hymn.hymn_link} target="_blank" rel="noopener noreferrer">
                  {hymn.hymn_title}
                </a> - {hymn.hymn_number}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PsalmsAndHymnsComponent;
  `;
}
