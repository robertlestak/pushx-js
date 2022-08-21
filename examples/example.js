const pushx = require("../index.js");

async function main() {
    let ex = process.argv[2];
    if (!ex) {
        console.log("Usage: node example.js <example>");
        process.exit(1);
    }
    let data = {
        name: "John Doe",
        age: 30,
        address: "123 Main St"
    }
    
    let examples = [
        'fs',
        'redis-list',
        'redis-pubsub'
    ]
    // ensure ex in examples
    if (!examples.includes(ex)) {
        throw new Error(`${ex} is not a valid example`);
    }

    let args = require('./'+ex+'.json')
    
    try {
        await pushx(JSON.stringify(data), args);
        console.log("Successfully pushed");
    } catch (err) {
        console.log("Failed to push");
    }
}

(async () => {
    await main();
})()