const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Headers de segurança e otimização
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Endpoint de verificação de integridade (Health Check para Railway)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    app: 'Velina Catálogo Multi-Design',
    options: {
      option1: ['/', '/v1', '/opcao-1', '/velina-1'],
      option2: ['/velina-2', '/v2', '/opcao-2']
    },
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Rota explícita da Opção 2 (Velina - Aracaju / Mostarda & Creme)
app.get(['/velina-2', '/velina-2/', '/v2', '/opcao-2'], (req, res) => {
  res.sendFile(path.join(__dirname, 'velina-2.html'));
});

// Rota explícita da Opção 1 (Velina - Minimalista / Ouro & Carvão)
app.get(['/velina-1', '/velina-1/', '/v1', '/opcao-1'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir arquivos estáticos com cache inteligente
app.use(express.static(__dirname, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Não armazenar cache de HTML para refletir atualizações imediatamente
      res.setHeader('Cache-Control', 'no-cache');
    } else if (filePath.endsWith('.mp4')) {
      // Suporte a range de bytes para reprodução de vídeo em Safari / iOS / Chrome
      res.setHeader('Accept-Ranges', 'bytes');
    }
  }
}));

// Fallback para qualquer rota não mapeada (direciona para a Opção 1)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicialização do servidor
const server = app.listen(PORT, HOST, () => {
  console.log('====================================================');
  console.log(' ✨ Velina - Catálogo Digital pronto para produção');
  console.log(` 🌐 Opção 1 (Principal): http://${HOST}:${PORT}/`);
  console.log(` 🌐 Opção 2:             http://${HOST}:${PORT}/velina-2`);
  console.log(` 🩺 Health Check:        http://${HOST}:${PORT}/health`);
  console.log('====================================================');
});

// Encerramento seguro (Graceful shutdown para containers Railway / Docker)
process.on('SIGTERM', () => {
  console.log('⚠️  Recebido SIGTERM. Encerrando servidor graciosamente...');
  server.close(() => {
    console.log('🛑 Servidor encerrado.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('⚠️  Recebido SIGINT. Encerrando servidor graciosamente...');
  server.close(() => {
    console.log('🛑 Servidor encerrado.');
    process.exit(0);
  });
});
