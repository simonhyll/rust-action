const { exec } = require('node:child_process');

exec('bin/rust-action', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`${stdout}`);
});
