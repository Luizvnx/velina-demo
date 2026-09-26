/**
 * ====================================================================
 * VELINA - CATÁLOGO DIGITAL
 * Configurações da Loja e Contato
 * ====================================================================
 * Substitua o número abaixo pelo WhatsApp comercial do cliente.
 * Formato: DDI (55) + DDD (ex: 11) + Número (apenas dígitos).
 */
const CONFIG = {
  // Número comercial de WhatsApp (exemplo: '5511999998888')
  whatsapp: '5500000000000',

  // Mensagem padrão para contato geral
  defaultContactMessage: 'Oi, Velina! Quero conhecer as peças da coleção.',

  // Mensagem para cada peça específica
  productMessage: (productName) => Oi, Velina! Tenho interesse na peça . Pode me passar as cores, tamanhos e valores?
};

// Configuração dinâmica de todos os links de WhatsApp do site
function setupWhatsAppLinks() {
  // Links de compra rápida nos cards de produto
  document.querySelectorAll('.quick-buy').forEach(link => {
    const productName = link.dataset.product || 'peça do catálogo';
    link.href = https://wa.me/?text=;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  // Botão principal de contato da seção 'invite'
  const contactLink = document.getElementById('contact-link');
  if (contactLink) {
    contactLink.href = https://wa.me/?text=;
    contactLink.target = '_blank';
    contactLink.rel = 'noopener noreferrer';
  }

  // Link do rodapé da coleção
  const collectionFooterLink = document.querySelector('.collection-footer a');
  if (collectionFooterLink) {
    collectionFooterLink.href = https://wa.me/?text=;
    collectionFooterLink.target = '_blank';
    collectionFooterLink.rel = 'noopener noreferrer';
  }
}

// Filtros da coleção (Todos, Bodies, Blusas & regatas)
function setupFilters() {
  const filters = document.querySelectorAll('.filter');
  const products = document.querySelectorAll('.product');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(item => item.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.dataset.filter;
      products.forEach(card => {
        card.hidden = filterValue !== 'todos' && card.dataset.category !== filterValue;
      });
    });
  });
}

// Menu responsivo para dispositivos móveis
function setupMobileMenu() {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });

    document.querySelectorAll('.header nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  setupWhatsAppLinks();
  setupFilters();
  setupMobileMenu();
});
