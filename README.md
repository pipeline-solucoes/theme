# @pipelinesolucoes/theme

Base de tema e design system da Pipeline Soluções para aplicações React com Material UI (MUI).

Esta lib não impõe um tema final nem um ThemeProvider.
Ela define o contrato de tema, os tokens compartilhados e os helpers para que múltiplas libs de componentes (pipesol-button, pipesol-formulario, etc.) possam coexistir no mesmo projeto sem conflitos de theme.

---

## ✨ Objetivo

Resolver o problema clássico de:

 - múltiplas libs React
 - cada uma com seus próprios tokens de tema
 - todas usando MUI
 - sem sobrescrever o tema umas das outras

A solução adotada:

 - 1 lib base de theme (@pipesol/theme)
 - cada lib exporta apenas um pedaço do ThemeOptions
 - o projeto final cria um único tema, fazendo merge de tudo

---


## 📦 O que esta lib fornece

✅ Tipos e interfaces do design system (pipesol.*)
✅ declare module "@mui/material/styles" unificado
✅ Integração segura com MUI v6 e v7
✅ Helper de deep merge (mergeThemeParts)
✅ Helper para criar o tema final (createPipelineSolucoesTheme)
✅ Arquivo runtime real (mui-theme.js) para garantir carregamento do augmentation

---

## 🧱 Estrutura interna (resumo)

@pipesol/theme
├─ types              → contratos e tokens
├─ mui-theme.ts       → module augmentation (gera JS real no dist)
├─ mergeThemeParts    → deep merge de ThemeOptions
├─ createTheme        → helper para criar o theme final
└─ index.ts           → entrypoint

## 🧩 Tokens disponíveis

theme.pipesol.buttons

```
type ButtonKind = "primary" | "secondary" | "tertiary" | "delete" | "none";

interface PipeSolButtonTokens {
  background: string;
  backgroundHover: string;
  color: string;
  colorHover: string;
  borderRadius: string;
  boxShadow?: string;
  padding: string;
}

```

theme.pipesol.forms
```
interface PipeSolFormTokens {
  notification?: {
    background: string;
  };
  field?: {
    background?: string;
    backgroundDisabled?: string;
    color?: string;
    colorFocused?: string;
    colorDisabled?: string;
    borderRadius?: string;
    boxShadow?: string;
    borderColor?: string;
    padding?: string;
  };
}
```

Novos domínios (ex: menu, cards, sections) devem ser adicionados aqui, mantendo um único contrato.

---

## 🧪 Como usar nas libs de componentes

Exemplo: pipesol-button

```
import type { ThemeOptions } from "@mui/material/styles";

export const buttonsThemeOptions: ThemeOptions = {
  pipesol: {
    buttons: {
      primary: {
        background: "#216fed",
        backgroundHover: "#005ce3",
        color: "#fff",
        colorHover: "#fff",
        borderRadius: "9999px",
        padding: "8px 24px",
      }
    }
  }
};
```

📌 Regras importantes para as libs:
❌ não criar ThemeProvider
❌ não chamar createTheme
✅ exportar apenas ThemeOptions
✅ declarar @pipesol/theme como peerDependency


## 🧩 Como usar no projeto final (app)

```
import { ThemeProvider } from "@mui/material/styles";
import {
  createPipelineSolucoesTheme,
} from "@pipesol/theme";

import { buttonsThemeOptions } from "pipesol-button/theme";
import { formsThemeOptions } from "pipesol-formulario/theme";

const theme = createPipelineSolucoesTheme(
  formsThemeOptions,
  buttonsThemeOptions
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

✔️ Um único ThemeProvider
✔️ Todos os tokens disponíveis em theme.pipesol.*
✔️ Sem conflitos entre libs


## 🔧 Funções exportadas

mergeThemeParts

```
mergeThemeParts(...parts: ThemeOptions[]): ThemeOptions
```

Faz deep merge seguro de múltiplos ThemeOptions.

createPipelineSolucoesTheme

```
createPipelineSolucoesTheme(...parts: ThemeOptions[]): Theme
```

Cria o tema final do app a partir dos pedaços fornecidos.


## ⚙️ Compatibilidade
✅ React 18 / 19
✅ MUI v6 e v7
✅ Emotion
✅ Next.js / Vite / CRA


## 🔐 Licença de uso comercial

Este pacote é publicamente acessível no npm, porém:

O uso comercial é licenciado por projeto.

**O que isso significa?**

O pacote pode ser instalado e avaliado livremente.

Para uso em projetos comerciais, é necessária a aquisição de uma licença válida por projeto.

**Definição de projeto**

Projeto = 1 aplicação em produção
(ex.: site institucional, sistema interno ou aplicação SaaS).
Ambientes de desenvolvimento, staging e homologação estão incluídos no mesmo projeto.

---

## 📄 O que a licença inclui

✔ Uso em 1 projeto
✔ Atualizações enquanto a licença estiver ativa
✔ Correções de bugs
✔ Suporte básico
✔ Evolução contínua do pacote

---

## ⚙️ Configuração de licença (mock)

Após adquirir a licença, você receberá um Project ID e uma License Key.

No projeto, configure as variáveis de ambiente:

PIPESOL_PROJECT_ID=meu-projeto
PIPESOL_THEME_LICENSE_KEY=SUA-LICENSE-KEY-AQUI


Atualmente, a validação é local e não bloqueante, servindo como preparação para automação futura.

---

## 🔁 Versionamento

Este projeto segue Semantic Versioning (SemVer):

1.0.1 – Correção de bugs

1.1.0 – Nova funcionalidade compatível

2.0.0 – Mudança incompatível

1.0.0-beta.x – Versões beta

Para listar as versões publicadas:

```
npm view @pipelinesolucoes/theme versions --json
```

## 🚀 Processo de publicação

Este pacote é publicado exclusivamente via CI/CD utilizando GitHub Actions.

Características do processo:

 - Publicação apenas por tags Git (vX.Y.Z)
 - Autenticação via Trusted Publishing (OIDC)
 - Nenhum token npm armazenado
 - Tokens clássicos desabilitados
 - Autenticação em dois fatores (2FA) obrigatória
 - Publicações seguras, rastreáveis e reprodutíveis

 ---

 ## 📬 Aquisição de licença e contato

Para adquirir uma licença comercial ou obter mais informações:

📧 contato@pipelinesolucoes.com.br
🌐 https://www.pipelinesolucoes.com.br

--- 

## 📄 Licença

Copyright © 2025 Pipeline Soluções.

Este software é distribuído sob um **modelo de licença comercial por projeto**.

A instalação do pacote é permitida para avaliação e desenvolvimento local.
O uso em produção ou em projetos comerciais requer a aquisição
de uma licença válida junto à Pipeline Soluções.

Consulte o arquivo LICENSE para os termos completos.


