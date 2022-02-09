module.exports = {
  plugins : [],
  env: {
    browser  : true,
    commonjs : true,
    es6      : true,
    node     : true
  },
  globals : {
    google : 'readonly',
    vegaEmbed : 'readonly',
  },
  extends : 'eslint:recommended',
  parserOptions : {
    ecmaVersion : 2021,
    sourceType : 'module',
  },
  rules : {
    'require-atomic-updates' : 'off',
    'no-unused-vars' : [
      'error',
      {
        argsIgnorePattern : '[cycle|executingUser]'
      }
    ],
    'no-empty' : ['error', { allowEmptyCatch : true }],
    indent : [
      'error',
      2
    ],
    'linebreak-style' : [
      'error',
      'unix'
    ],
    quotes : [
      'error',
      'single'
    ],
    semi : [
      'error',
      'always'
    ],
    'no-console' : [
      'error',
      {
        allow : [ 'debug', 'warn', 'error', 'log' ]
      }
    ]
  }
};
