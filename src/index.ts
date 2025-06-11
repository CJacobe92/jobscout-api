import app from "./app.js";

const PORT = process.env.PORT || 3000; 

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server started at http://localhost:${PORT}`);
    });
  } catch (error: unknown) {
    console.error(`❌ Internal Server Error occurred:`, error);
    process.exit(1); // Exit with error code on failure
  }
};

startServer();