const { spawn } = require("child_process");

async function pushx(input, args) {
    return new Promise(async function(resolve, reject) {
        const cmd = spawn("pushx", args);
        cmd.stdin.write(input);
        cmd.stdin.end();
        cmd.stdout.on("data", data => {
            console.log(data.toString());
        })
        cmd.stderr.on("data", data => {
            console.log(data.toString());
        })
        cmd.on("close", code => {
            if (code === 0) {
                resolve(code);
            } else {
                reject(code);
            }
        })
    })
}

module.exports = pushx;