# @pipelinesolucoes/button

Biblioteca de **componentes de botão para React**, desenvolvida para **padronização visual**, **reutilização** e **escalabilidade** em aplicações modernas e design systems.

Este pacote faz parte do ecossistema de componentes da **Pipeline Soluções**.

---

## 📦 Componentes disponíveis

A biblioteca inclui os seguintes componentes:

- **ActionButton**  
  Botão de ação estilizado, baseado no tema e com tipografia configurável via `variant`.

- **CircularIconLink**  
  Componente que exibe um ícone/imagem dentro de um container circular clicável, ideal para links de redes sociais ou ações rápidas com aparência consistente.

- **DownloadButton**
  Componente que renderiza um link estilizado como botão para **download de arquivos** usando a tag `<a>` com o atributo `download`, permitindo customização visual via props.  

- **FormButtonGroup**  
  Agrupador de botões *Deletar*, *Cancelar* e *Salvar* para uso **dentro de formulários**.

- **NavigationButton**  
  Botão de navegação reutilizável baseado em link (`<a>`), estilizado com Material UI.

- **NavigationLink**  
  Link de navegação reutilizável, estilizado com Material UI.

---

## Theme (opcional) — habilitar `kind` com tokens do tema

Os componentes de botão desta lib suportam a prop `kind` (ex.: `primary`, `secondary`, `tertiary`, `delete`) para aplicar **tokens de estilo** definidos no tema do projeto.

**Observação**
 - Se o tema não estiver configurado, os componentes permitem estilização via props (fallback), e kind não aplicará tokens do tema.
 - Se você adicionar/alterar global.d.ts ou declarations.d.ts, pode ser necessário reiniciar o TypeScript Server no editor.

Para que o TypeScript reconheça `pipesol` em `createTheme` e para que o `kind` funcione corretamente, siga os passos abaixo.

---

### 1) Carregar a tipagem do tema (TypeScript)

Adicione **uma única vez** no seu projeto (recomendado em `global.d.ts` ou `declarations.d.ts`):

```ts
import "@pipelinesolucoes/button/mui-theme";
export {};
```

### 2) Configurar os tokens no tema do projeto

No seu tema (theme.ts, theme.tsx, etc.), inclua pipesol.buttons com os estilos desejados:
import { createTheme } from "@mui/material/styles";

```ts
export const theme = createTheme({
  pipesol: {
    buttons: {
      primary: {
        background: "#216fed",
        backgroundHover: "#005ce3",
        color: "#fff",
        colorHover: "#fff",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
      secondary: {
        background: "#fff",
        backgroundHover: "#fff",
        color: "#216fed",
        colorHover: "#005ce3",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
      // opcionais
      delete: {
        background: "#F44336",
        backgroundHover: "#D32F2F",
        color: "#fff",
        colorHover: "#fff",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
    },
  },
});
```
Tokens disponíveis por botão:
 - background
 - backgroundHover
 - color
 - colorHover
 - borderRadius
 - padding
 - boxShadow (opcional)

### 3) Usar kind nos componentes

Com o tema configurado, basta usar a prop kind:

```ts
import { NavigationButton } from "@pipelinesolucoes/button";

export function Example() {
  return (
    <>
      <NavigationButton kind="primary" url="#contato" aria_label="Ir para contato" width="fit-content">
        Fale conosco
      </NavigationButton>

      <NavigationButton kind="secondary" url="/sobre" aria_label="Ir para sobre" width="fit-content">
        Saiba mais
      </NavigationButton>

      <NavigationButton kind="delete" url="#remover" aria_label="Remover" width="fit-content">
        Remover
      </NavigationButton>
    </>
  );
}
```

## ✨ Características

- ✅ Pronto para produção
- 🎨 Integração com Material UI
- ♿ Foco em acessibilidade
- 🧩 Ideal para design systems
- 🔄 Reutilizável em múltiplos projetos
- 📦 Publicado no npm com versionamento semântico
- 🔐 Preparado para licenciamento por projeto

---

## 📥 Instalação

```bash
npm install @pipelinesolucoes/button 
ou
yarn add @pipelinesolucoes/button

```

## 🚀 Uso básico

```
import { ActionButton } from "@pipelinesolucoes/button";

export function Example() {
  return (
    <ActionButton variant="contained" color="primary">
      Ação
    </ActionButton>
  );
}
```

## 🧩 Uso em Design Systems

Este pacote foi projetado para:

 - padronização de ações e navegação
 - reutilização entre projetos
 - evolução incremental de UI
 - integração com temas e tokens de design

Pode ser utilizado de forma isolada ou como parte de um design system maior.

---

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
PIPESOL_BUTTON_LICENSE_KEY=SUA-LICENSE-KEY-AQUI


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
npm view @pipelinesolucoes/button versions --json
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

Copyright © Pipeline Soluções
Este software está sujeito a licença comercial por projeto.
Consulte o arquivo LICENSE para mais informações.

```
Se você quiser, eu também posso gerar agora o **arquivo `LICENSE`** (texto curto e claro) no mesmo padrão profissional pra você copiar e colar como `LICENSE` no repo.
```


