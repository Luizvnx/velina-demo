# ✨ Velina — Catálogo Digital & Landing Page

Catálogo digital de moda feminina com estética minimalista, elegante e foco em conversão via WhatsApp. Desenvolvido para apresentar coleções de forma premium, com alta velocidade de carregamento, design responsivo e vídeo institucional integrado.

---

## 🚀 Demonstração Rápida & Tecnologias

- **Frontend:** HTML5 Semântico, CSS3 Moderno (Vanilla CSS com Design Tokens e Tipografia sob medida), JavaScript Vanilla.
- **Backend / Servidor de Produção:** Node.js + Express (suporte nativo a byte-range streaming para iOS/Safari/Chrome e health check).
- **Hospedagem & Deploy:** Preparado para **Railway** (Nixpacks / Docker) e qualquer provedor em nuvem.
- **Integração Comercial:** Links de compra direta via WhatsApp com mensagens personalizadas por peça.

---

## 📁 Estrutura do Projeto

```text
├── assets/                  # Identidade visual, fotos da coleção e vídeo
│   ├── blusa-azul.jpg
│   ├── body-baunilha.jpg
│   ├── body-branco.jpg
│   ├── body-preto.jpg
│   ├── favicon.svg          # Ícone personalizado para a aba do navegador
│   ├── logo.jpg             # Logo da marca
│   ├── manifesto.jpg
│   ├── regata-oliva.jpg
│   └── velina-highlight.mp4 # Vídeo em destaque da coleção
├── index.html               # Estrutura semântica com tags Open Graph completas
├── styles.css               # Folha de estilo sofisticada, responsiva e otimizada
├── script.js                # Interatividade (filtros, menu mobile e WhatsApp dinâmico)
├── server.js                # Servidor Express otimizado para deploy em nuvem
├── package.json             # Dependências e scripts de execução
├── railway.json             # Configuração pronta para o Railway (Health check e Nixpacks)
├── Procfile                 # Comando de inicialização para PaaS
├── Dockerfile               # Configuração opcional de container Docker
└── robots.txt               # Configurações de indexação para motores de busca
```

---

## 📱 Como Configurar o WhatsApp do Cliente

Toda a lógica de contato está centralizada no início do arquivo `script.js`:

```javascript
const CONFIG = {
  // Altere para o WhatsApp comercial do cliente (DDI + DDD + Número):
  whatsapp: '5511999998888',

  defaultContactMessage: 'Oi, Velina! Quero conhecer as peças da coleção.',
  productMessage: (productName) => `Oi, Velina! Tenho interesse na peça ${productName}. Pode me passar as cores, tamanhos e valores?`
};
```

Basta alterar o número nessa constante para que **todos os botões do catálogo e do site atualizem automaticamente**.

---

## 💻 Como Rodar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor local:**
   ```bash
   npm start
   ```

3. Abra o navegador em: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Como Fazer o Deploy no Railway

O projeto já conta com o arquivo `railway.json`, `Procfile` e `server.js` configurados com a porta dinâmica (`process.env.PORT`) e endpoint de monitoramento (`/health`).

### Método 1: Via GitHub (Recomendado)
1. Suba o projeto para um repositório no seu GitHub (veja as instruções abaixo).
2. Acesse [railway.app](https://railway.app) e faça login.
3. Clique em **"New Project"** -> **"Deploy from GitHub repo"**.
4. Selecione o repositório deste projeto.
5. O Railway detectará o Node.js automaticamente e iniciará o deploy!
6. Na aba **Settings** do serviço gerado no Railway, clique em **"Generate Domain"** para obter o link público HTTPS (ex: `velina-catalogo.up.railway.app`).

### Método 2: Via Railway CLI
Se preferir subir diretamente pelo terminal sem GitHub:
```bash
# 1. Instalar a CLI do Railway (se ainda não tiver)
npm install -g @railway/cli

# 2. Fazer login
railway login

# 3. Inicializar e subir
railway init
railway up
```

---

## 🐙 Como Subir para o Git / GitHub

Execute os comandos abaixo na pasta do projeto:

```bash
# 1. Inicializar o repositório (caso ainda não esteja inicializado)
git init -b main

# 2. Adicionar todos os arquivos
git add .

# 3. Criar o commit inicial
git commit -m "feat: landing page e catálogo Velina pronto para Railway"

# 4. Vincular ao seu repositório no GitHub (crie um repositório vazio no GitHub antes)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# 5. Enviar para o GitHub
git push -u origin main
```

---

## 🎯 Apresentação para o Cliente — Destaques

- **Identidade Visual Refinada:** Paleta de tons neutros e dourados que transmitem sofisticação.
- **Experiência Mobile First:** Navegação fluida em smartphones, com carregamento rápido e layout adaptativo.
- **Conversão Facilitada:** O cliente não precisa preencher formulários longos; com um clique ele já inicia a conversa no WhatsApp com o nome do produto pré-preenchido.
- **Mídia Dinâmica:** Seção de passarela com reprodução de vídeo em loop de alta performance.
