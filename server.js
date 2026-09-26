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
    app: 'Velina Catálogo',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
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

// Fallback para qualquer rota não mapeada
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicialização do servidor
const server = app.listen(PORT, HOST, () => {
  console.log('====================================================');
  console.log(' ✨ Velina - Catálogo Digital pronto para produção');
  console.log(` 🌐 Servidor ouvindo em http://${HOST}:${PORT}`);
  console.log(` 🩺 Health Check em http://${HOST}:${PORT}/health`);
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
