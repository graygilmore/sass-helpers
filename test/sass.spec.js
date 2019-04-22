const path = require('path');
const glob = require('glob');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassTestFiles = glob.sync(
    path.resolve(process.cwd(), 'test/**/*.spec.scss')
  );

  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it));
});
