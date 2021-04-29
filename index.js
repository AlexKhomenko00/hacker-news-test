import app from "./app.js";

const PORT = process.env.PORT || 8006;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
