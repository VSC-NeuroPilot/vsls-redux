import { defineConfig } from "eslint/config";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        "sourceType": "module",

        parserOptions: {
            "project": "tsconfig.json",
        },
    },

    extends: compat.extends("prettier"),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    "rules": {
        "@typescript-eslint/member-delimiter-style": ["warn", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true,
            },

            "singleline": {
                "delimiter": "semi",
                "requireLast": false,
            },
        }],

        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/semi": ["warn", "always"],
        "curly": "warn",
        "eqeqeq": ["warn", "always"],
        "no-redeclare": "warn",
        "no-throw-literal": "warn",
        "no-unused-expressions": "off",
        "semi": "off",
    },
}]);
