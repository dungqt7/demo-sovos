module.exports = {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:react/recommended"
    ],
    "plugins": [
      "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jquery": true,
      "jest": true
    },
    "globals": {},
    "rules": {
      "class-methods-use-this": 1,
      "comma-dangle": 0,
      "no-debugger": 1,
      "func-style": 0,
      "func-names": 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "indent": ["error", 2, {"SwitchCase": 1}],
      "linebreak-style": 0,
      "max-len": 0,
      "no-console": 0,
      "no-param-reassign": 0,
      "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
      "no-script-url": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-curly-spacing": [2, "always"],
      "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
      "no-unused-expressions": 0,
      "arrow-body-style": [2, "as-needed"],
      "react/forbid-prop-types": 0,
      "no-unneeded-ternary": 0,
      "no-confusing-arrow": "off",
      "react/no-array-index-key": 0,
      "quotes": [1, "single"],
      "no-var": 1,
      "semi": [
        1,
        "always"
      ],
      "no-trailing-spaces": 0,
      "eol-last": 0,
      "no-underscore-dangle": 0,
      "no-alert": 0,
      "no-lone-blocks": 0,
      "jsx-quotes": 1,
      "react/display-name": [
        1,
        {
          "ignoreTranspilerName": false
        }
      ],
      "react/jsx-first-prop-new-line": 1,
      "react/jsx-closing-tag-location": 1,
      "react/jsx-boolean-value": 0,
      "react/jsx-closing-bracket-location": 1,
      "react/jsx-indent-props": [1, 2],
      "react/jsx-key": 1,
      "react/jsx-max-props-per-line": 1,
      "react/jsx-no-duplicate-props": 1,
      "react/jsx-no-literals": 0,
      "react/jsx-no-undef": 1,
      "react/jsx-pascal-case": 1,
      "react/jsx-sort-prop-types": 0,
      "react/jsx-sort-props": 0,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/jsx-wrap-multilines": [1, {"declaration": true, "assignment": true, "return": true, "arrow": true}],
      "react/no-danger": 1,
      "react/no-did-mount-set-state": 1,
      "react/no-did-update-set-state": 1,
      "react/no-direct-mutation-state": 1,
      "react/no-multi-comp": 1,
      "react/no-set-state": 0,
      "react/no-unknown-property": 1,
      "react/prefer-es6-class": 1,
      "react/prop-types": 1,
      "react/react-in-jsx-scope": 1,
      "import/extensions": 1,
      "react/self-closing-comp": 1,
      "react/sort-comp": 1
    }
  };
  