module.exports = {
    root: true,
    extends: [
        "react-app",
        "react-app/jest"
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        // Add custom rules here if needed
        "no-unused-vars": "warn",
        "no-console": "off"
    }
};
