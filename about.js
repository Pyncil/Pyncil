var chalk = require('chalk'),
    pyncil = require('./package')

var logo = [
  '',
  '  ________  ___    ___ ________   ________  ___  ___',
  ' |\\   __  \\|\\  \\  /  /|\\   ___  \\|\\   ____\\|\\  \\|\\  \\',
  ' \\ \\  \\|\\  \\ \\  \\/  / | \\  \\\\ \\  \\ \\  \\___|\\ \\  \\ \\  \\',
  '  \\ \\   ____\\ \\    / / \\ \\  \\\\ \\  \\ \\  \\    \\ \\  \\ \\  \\',
  '   \\ \\  \\___|\\/  /  /   \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\____',
  '    \\ \\__\\ __/  / /      \\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\_______\\',
  '     \\|__||\\___/ /        \\|__| \\|__|\\|_______|\\|__|\\|_______|',
  '          \\|___|/',
  ''
]

logo.forEach((str) => console.log(chalk.cyan(str)))

var info = {
  description: ' ' + pyncil.description,
  version: '     ' + pyncil.version,
  license: '     ' + pyncil.license,
  creator: '     ' + pyncil.author
}

Object.keys(info).forEach((obj) => {
  console.log(chalk.yellow('     - ' + obj.toUpperCase() + ': ' + info[obj]))
})
