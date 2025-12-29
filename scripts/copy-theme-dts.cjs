const fs = require("fs");
const path = require("path");

const src = path.resolve("src/types/pipesol-buttons.d.ts");
const outDir = path.resolve("dist");
const dst = path.resolve(outDir, "mui-theme.d.ts");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dst);

console.log("Copied:", src, "->", dst);
