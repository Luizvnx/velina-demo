# ✨ Velina — Catálogo Digital & Landing Page (Multi-Design)

Projeto demonstrativo de catálogo digital e landing page para a marca de moda feminina **Velina**. Este repositório contém **duas propostas de design exclusivas**, prontas para apresentar ao cliente sob o mesmo domínio no **Railway** ou rodando localmente.

---

## 🎨 Propostas de Design Disponíveis

Ambas as versões são servidas pela mesma aplicação sob o mesmo domínio no Railway:

| Proposta | Rota Principal | Rotas Alternativas | Estilo & Destaques |
| :--- | :--- | :--- | :--- |
| **Opção 1** | `/` | `/velina-1`, `/v1`, `/opcao-1` | **Editorial & Minimalista** (Paleta Ouro & Carvão, vídeo institucional da coleção com streaming fluido em loop, navegação leve). |
| **Opção 2** | `/velina-2` | `/v2`, `/opcao-2` | **Calorosa & Detalhada** (Paleta Mostarda & Creme, botão flutuante de WhatsApp, catálogo em grade expandido e dados estruturados Schema.org). |

---

## 🚀 Tecnologias

- **Frontend:** HTML5 Semântico, CSS3 Moderno (Vanilla CSS), JavaScript Vanilla.
- **Backend / Servidor:** Node.js + Express (suporte a HTTP 206 Partial Content para streaming de vídeo no Safari/iOS/Chrome, compressão e rotas unificadas).
- **Hospedagem & Deploy:** Configurado nativamente para o **Railway** com [railway.json](railway.json) (Nixpacks) e Dockerfile opcional.
- **Integração Comercial:** Links de compra e contato direto via WhatsApp.

---

## 📁 Estrutura do Repositório

```text
├── assets/                  # Identidade visual, fotos da coleção e vídeo (Opção 1)
│   ├── blusa-azul.jpg
│   ├── body-baunilha.jpg
│   ├── body-branco.jpg
│   ├── body-preto.jpg
│   ├── favicon.svg          # Ícone personalizado para a aba do navegador
│   ├── logo.jpg
│   ├── manifesto.jpg
│   ├── regata-oliva.jpg
│   └── velina-highlight.mp4 # Vídeo em destaque da coleção
├── index.html               # Página da Opção 1 (Design Editorial / Minimalista)
├── velina-2.html            # Página da Opção 2 (Design Mostarda & Creme)
├── velina-2/
│   └── index.html           # Cópia para compatibilidade estática direta
├── styles.css               # Folha de estilo da Opção 1
├── script.js                # Lógica e configuração de WhatsApp da Opção 1
├── server.js                # Servidor Express multi-rotas para o Railway
├── package.json             # Dependências e scripts
├── railway.json             # Configuração de build e healthcheck no Railway
├── Procfile                 # Comando de start para PaaS
└── Dockerfile               # Configuração opcional de container Docker
```

---

## 💻 Como Rodar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor:**
   ```bash
   npm start
   ```

3. Acesse no navegador:
   - **Opção 1:** [http://localhost:3000/](http://localhost:3000/)
   - **Opção 2:** [http://localhost:3000/velina-2](http://localhost:3000/velina-2)
   - **Healthcheck:** [http://localhost:3000/health](http://localhost:3000/health)

---

## ☁️ Como Apresentar ao Cliente no Railway

Com as duas opções no mesmo repositório, você precisa de apenas **1 serviço no Railway**:

1. No Railway, faça o deploy do repositório `Luizvnx/velina-demo`.
2. Após o deploy, gere o domínio em **Settings > Networking > Generate Domain** (ex: `https://velina-demo.up.railway.app`).
3. Para apresentar ao cliente, basta enviar os links:
   - **Para ver a Opção 1:** `https://velina-demo.up.railway.app`
   - **Para ver a Opção 2:** `https://velina-demo.up.railway.app/velina-2`
