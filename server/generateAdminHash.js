const bcrypt = require("bcryptjs");

const plainPassword = process.argv[2];

if (!plainPassword) {
    console.log("Usage: node generateAdminHash.js \"YourChosenPassword\"");
    process.exit(1);
}

bcrypt.hash(plainPassword, 10).then((hash) => {
    console.log("\nAdd this to your .env file:\n");
    console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
});