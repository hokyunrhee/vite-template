module.exports = {
  printWidth: 120,
  bracketSpacing: true,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "<BUILTIN_MODULES>",
    "^(react/(.*)$)|^(react$)",
    "^(react-dom/(.*)$)|^(react-dom$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/api/(.*)$",
    "^@/models/(.*)$",
    "^@/schemas/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/assets/(.*)$",
    "",
    "^[.]",
    "^[/]",
  ],
  plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}
