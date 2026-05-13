import readline from "readline";

let sessions = [];
let totalDuration = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(q) {
    return new Promise(resolve => rl.question(q, resolve));
}

async function tracker() {
    const topic = await ask("Enter topics: ");
    const duration = await ask("Enter duration: ");

    console.log(`Topic: ${topic} Duration: ${duration}`);

    rl.close();
}

tracker();
