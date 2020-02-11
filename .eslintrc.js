module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/forbid-prop-types": [
            0
        ],
        "react/require-default-props": [
            0
        ],
        "global-require": [
            0
        ]
    }
};