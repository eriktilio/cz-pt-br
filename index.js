"use strict";
const questions = [
    {
        type: "list",
        name: "type",
        message: "Qual o tipo de mudança que você está fazendo?",
        choices: [
            { name: "feat:     Uma nova funcionalidade", value: "feat" },
            { name: "fix:      Uma correção de bug", value: "fix" },
            { name: "docs:     Mudanças na documentação", value: "docs" },
            { name: "style:    Mudanças que não afetam o significado do código", value: "style" },
            { name: "refactor: Uma refatoração de código", value: "refactor" },
            { name: "test:     Adição ou correção de testes", value: "test" },
            { name: "chore:    Outras mudanças sem impacto no código", value: "chore" },
        ],
    },
    {
        type: "input",
        name: "scope",
        message: "Qual é o escopo dessa mudança (opcional)?",
    },
    {
        type: "input",
        name: "subject",
        message: "Escreva uma descrição curta e imperativa da mudança:\n",
    },
    {
        type: "input",
        name: "body",
        message: "Forneça uma descrição mais detalhada da mudança (opcional). Use \"|\" para quebras de linha:\n",
    },
    {
        type: "input",
        name: "footer",
        message: "Liste quaisquer issues fechadas por esta mudança (opcional). Ex.: #31, #34:\n",
    },
];

module.exports = {
    prompter: function (cz, commit) {
        cz.prompt(questions).then((answers) => {
            const { type, scope, subject, body, footer } = answers;
            const scopeText = scope ? `(${scope})` : '';
            const head = `${type}${scopeText}: ${subject}`;
            const bodyText = body ? `\n\n${body.replace(/\\n/g, '\n')}` : '';
            const footerText = footer ? `\n\n${footer}` : '';
            commit(`${head}${bodyText}${footerText}`);
        });
    },
};
