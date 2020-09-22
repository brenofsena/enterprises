module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/components/{{dashCase name}}/{{dashCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/components/{{dashCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/components/{{dashCase name}}/{{dashCase name}}.spec.tsx',
        templateFile: 'templates/component/test.spec.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/pages/{{dashCase name}}/{{dashCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/pages/{{dashCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/pages/{{dashCase name}}/{{dashCase name}}.spec.tsx',
        templateFile: 'templates/component/test.spec.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/hooks/use-{{dashCase name}}/use-{{dashCase name}}.ts',
        templateFile: 'templates/hook/hook.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/hooks/use-{{dashCase name}}/use-{{dashCase name}}.spec.ts',
        templateFile: 'templates/hook/test.spec.ts.hbs',
      },
    ],
  })

  plop.setGenerator('context', {
    description: 'Create a context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your context name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/contexts/{{dashCase name}}/{{dashCase name}}-context.ts',
        templateFile: 'templates/context/context.ts.hbs',
      },
    ],
  })
}
