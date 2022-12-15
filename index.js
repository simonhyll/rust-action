const { spawn, exec } = require('node:child_process');
exec('git lfs pull', (error, stdout, stderr) => {
    const inputs = []
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('INPUT_')) {
            inputs.push(`--${key.slice(6).toLowerCase()}="${value}"`)
        }
    }
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    let platform = "ubuntu-latest"
    if (process.platform === "darwin") platform = "macos-latest"
    if (process.platform === "win32") platform = "windows-latest.exe"
    spawn(`./bin/rust-action-${platform}`, inputs, { stdio: 'inherit' })
})
