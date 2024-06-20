import app from "./app";
import dbClient from "./utils/dbClient";
import redisClient from "./utils/redisClient";


// Define the port
const port = 3000;

// Check if the database connection is alive
dbClient.isAlive();
redisClient.isAlive();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
