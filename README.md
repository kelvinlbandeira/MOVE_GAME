# MOVE GAME — versão Netlify

Este pacote contém o app MOVE GAME pronto para rodar no Netlify, com um banco
de dados real (Netlify Blobs) no lugar do armazenamento do Claude. Isso quer
dizer: **qualquer pessoa pode abrir o link e usar o app livremente, sem
precisar de conta Claude nem de nenhum plano pago.**

## O que tem aqui

- `index.html` — o app inteiro (front-end).
- `netlify/functions/storage.mjs` — a "gaveta" onde os dados ficam salvos
  (participantes, check-ins, missões, ranking).
- `netlify.toml` e `package.json` — configuração para o Netlify entender o
  projeto.

## Como publicar (sem usar terminal)

1. Crie uma conta gratuita no [GitHub](https://github.com) (se ainda não
   tiver).
2. No GitHub, clique em **New repository**, dê um nome (ex: `move-game`) e
   crie o repositório (pode deixar público ou privado).
3. Dentro do repositório vazio, clique em **uploading an existing file** (ou
   **Add file > Upload files**) e arraste **todos os arquivos e pastas deste
   pacote** (mantendo a estrutura de pastas `netlify/functions/`).
4. Clique em **Commit changes** para salvar.
5. Crie uma conta gratuita no [Netlify](https://netlify.com).
6. No painel do Netlify, clique em **Add new site > Import an existing
   project**.
7. Escolha **GitHub** e selecione o repositório que você acabou de criar.
8. Deixe as configurações padrão (o Netlify já vai detectar o
   `netlify.toml`) e clique em **Deploy site**.
9. Em 1–2 minutos o Netlify te dá um link tipo
   `https://algum-nome-aleatorio.netlify.app` — esse é o link do seu app,
   já funcionando com banco de dados real.

## Depois de publicar

- Você pode trocar o nome do link em **Site configuration > Change site
  name** (ainda gratuito), ou apontar um domínio próprio (ex:
  `movegame.com.br`) em **Domain management**.
- Cole esse link no campo "Link do app" dentro da aba Acesso do próprio
  MOVE GAME — ele será usado nas mensagens de WhatsApp.
- Toda vez que você quiser atualizar o app (novo texto, nova cor, nova
  função), é só me pedir aqui no Claude, eu gero os arquivos atualizados, e
  você os sobe de novo no mesmo repositório do GitHub — o Netlify publica a
  atualização sozinho em segundos.

## Importante

Este pacote ainda tem a faixa amarela de "Versão de homologação" e um
usuário de teste pré-cadastrado (útil para você continuar testando à
vontade). Quando estiver pronta para o lançamento oficial para as clientes
reais, me avise que eu gero uma versão final sem esses elementos de teste.
