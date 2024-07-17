const fs = require("fs");

function readAndWriteToFile(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file:${err}`);
      return;
    }

    fs.writeFile(outputFilePath, data, "utf8", (err) => {
      if (err) {
        console.error(`Error reading file:${err}`);
        return;
      }
      console.log(`Successfully wrote to ${outputFilePath}`);
    });
  });
}

readAndWriteToFile("../assets/hymns/Hymn_1_1.pdf", "../data/test.txt");
