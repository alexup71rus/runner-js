// const readline = require('readline');
const cp = require("child_process");

if (process.argv.length == 3) {
    // process.argv[2] = process.argv[2].slice(2);
    process.argv[2] = process.argv[2].replace(/%5C/g, "\\"),
        process.argv[2] = process.argv[2].replace(/run:/, ""),
        process.argv[2] = process.argv[2].replace(/%20/, " ");
    console.log(process.argv[2]);
    cp.exec(process.argv[2]);
}

// function askQuestion(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise(resolve => rl.question(query, ans => {
//         rl.close();
//         resolve(ans);
//     }))
// }

// askQuestion("Press any key");
