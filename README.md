# Commitizen PT-BR

Commitizen PT-BR é um adaptador customizado para o Commitizen que fornece prompts em português para facilitar a criação de mensagens de commit padronizadas.

## Instalação

### Passo 1: Clone o Repositório

Clone este repositório para um diretório acessível:

```bash
git clone https://github.com/seu-usuario/cz-pt-br.git
```

### Passo 2: Configuração Global

Adicione o caminho do adaptador customizado ao arquivo `.czrc` no seu diretório `home`. No Windows, geralmente este diretório é `C:\Users\SeuUsuario`. Crie ou edite o arquivo `.czrc`:

```json
{
  "path": "C:\\Users\\SeuUsuario\\cz-pt-br"
}
```

### Uso

Navegue até o diretório do seu projeto Git e use o Commitizen:

```bash
git add .
git cz
```

Você verá prompts em português para ajudá-lo a criar mensagens de commit padronizadas.

### Exemplos de Prompts

- Qual o tipo de mudança que você está fazendo?
  - `feat`: Uma nova funcionalidade
  - `fix`: Uma correção de bug
  - `docs`: Mudanças na documentação
  - `style`: Mudanças que não afetam o significado do código
  - `refactor`: Uma refatoração de código
  - `test`: Adição ou correção de testes
  - `chore`: Outras mudanças sem impacto no código
- Qual é o escopo dessa mudança (opcional)?
- Escreva uma descrição curta e imperativa da mudança:
- Forneça uma descrição mais detalhada da mudança (opcional). Use "|" para quebras de linha:
- Liste quaisquer issues fechadas por esta mudança (opcional). Ex.: #31, #34:

### Contribuindo

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões, por favor, abra uma issue ou envie um pull request.

### Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
