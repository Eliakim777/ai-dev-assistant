const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

app.use(express.text());

app.post("/from-nodered", (req, res) => {
  const code = req.body;
  if (typeof code !== "string") {
    return res.status(400).send("Expected plain text.");
  }

  fs.writeFileSync("autohotkey-input.txt", code);
  console.log("✅ Code written to file.");
  res.send("✅ Code saved.");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
