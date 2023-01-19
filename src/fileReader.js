const fs = require("fs");

fs.readFile(
  "/Users/ashutosh_senapati/sandbox/src/content.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
