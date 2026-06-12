//@ts-check
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
    baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
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
