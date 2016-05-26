#!/usr/bin/env node

const exec = require('child_process').exec

exec('git log --pretty=format:%ae', (err, stdout, stderr) => {
  if (err) {
    process.stderr.write(err.message)
    process.exit(err.code)
  }

  var lines = stdout.split('\n')
  var emails = {}
  for (i in lines) {
    var email = lines[i]
    if (email in emails) {
      emails[email] = emails[email] + 1
    } else {
      emails[email] = 1
    }
  }

  console.log(emails)
})
