const dns = require("dns")
const mongoose = require("mongoose")

// Use public DNS servers for SRV resolution when local DNS refuses the query.
// This helps with mongodb+srv Atlas URIs on some Windows/network environments.
dns.setServers(["8.8.8.8", "1.1.1.1"])




async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB