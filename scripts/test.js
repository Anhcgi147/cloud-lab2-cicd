const fs = require("fs");

const source = fs.readFileSync("index.html", "utf8");
if (!source.includes("<title>Cloud Lab 2 | CI/CD</title>")) {
  throw new Error("Trang chủ chưa có tiêu đề Cloud Lab 2.");
}

console.log("Kiểm tra ứng dụng thành công.");
