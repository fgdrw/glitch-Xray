// const port = process.env.PORT || 8080;
const port = 8080;
const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`, {
  cwd: "./",
});
