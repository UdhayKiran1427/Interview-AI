require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

// 1. Start the server immediately so Render's port scanner succeeds right away
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    
    // 2. Connect to the database after the port is safely open
    connectToDB();
});