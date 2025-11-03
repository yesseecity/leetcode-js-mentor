import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ListNode: "writable", // 允許 ListNode 作為全域變數，且可被修改
        reverse: "writable",   // 允許 reverse 作為全域變數，且可被修改
      },
    },
    rules: {
      "indent": ["error", 2], // 強制縮排為 2 個空格
      "no-unused-vars": "off", // 關閉未使用的變數檢查
      "no-redeclare": "off",   // 關閉重複宣告的檢查
    },
  },
]);
