const fs = require("fs");
const path = require("path");

const outputDirectory = path.join(process.cwd(), "dist");
fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync("index.html", path.join(outputDirectory, "index.html"));

console.log("Đã tạo dist/index.html.");
