#!/usr/bin/env node

const exec = require('child_process').exec

exec('git branch -a', (err, stdout, stderr) => {
  if (err) {
    process.stderr.write(err.message)
    process.exit(err.code)
  }

  if (stdout) process.stdout.write(stdout)
  if (stderr) process.stderr.write(stderr)
})
