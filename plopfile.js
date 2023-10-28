export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("model", {
    description: "Generates a model",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter model name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/schemas/{{kebabCase name}}.schema.ts",
        templateFile: "plop/schema.template.hbs",
      },
      {
        type: "add",
        path: "src/models/{{kebabCase name}}.model.ts",
        templateFile: "plop/model.template.hbs",
      },
      {
        type: "add",
        path: "src/models/{{kebabCase name}}.model.test.ts",
        templateFile: "plop/model.test.template.hbs",
      },
      {
        type: "add",
        path: "src/api/{{kebabCase name}}.api.tsx",
        templateFile: "plop/query.template.hbs",
      },
    ],
  })

  plop.setHelper("kebabCase", (text) => {
    return kebabCase(text)
  })

  plop.setHelper("pascalCase", (text) => {
    return pascalCase(text)
  })

  plop.setHelper("camelCase", (text) => {
    return camelCase(text)
  })
}

const kebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
}

const pascalCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .replace(/\s+/g, "")
}

const camelCase = (str) => {
  return str.replace(/[\s-](\w)/g, function (match, letter) {
    return letter.toUpperCase()
  })
}
