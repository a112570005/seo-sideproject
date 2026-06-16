// 六六的鞋子專賣店 - 主互動邏輯

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header 捲動效果
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. 手機版選單切換
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // 3. 購物車邏輯 (使用 localStorage 共享狀態)
  initializeCart();

  // 4. 首頁及列表頁的直接加入購物車按鈕點擊監聽
  setupAddToCartButtons();
});

// 初始化購物車數量
function initializeCart() {
  let cartCount = parseInt(localStorage.getItem('liuliu_cart_count') || '0');
  updateCartBadge(cartCount);
}

// 更新購物車顯示徽章
function updateCartBadge(count) {
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count === 0) {
      badge.style.display = 'none';
    } else {
      badge.style.display = 'flex';
    }
  });
}

// 加入商品到購物車
function addToCart(qty = 1) {
  let cartCount = parseInt(localStorage.getItem('liuliu_cart_count') || '0');
  cartCount += qty;
  localStorage.setItem('liuliu_cart_count', cartCount.toString());
  updateCartBadge(cartCount);
  
  // 顯示自定義加入成功通知
  showCartAlert(`已成功加入購物車！(目前共有 ${cartCount} 件商品)`);
}

// 設置購物車按鈕點擊事件
function setupAddToCartButtons() {
  document.addEventListener('click', (e) => {
    // 尋找點擊目標是否為 .btn-add-cart
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      e.preventDefault();
      addToCart(1);
    }
  });
}

// 自定義提示視窗
function showCartAlert(message) {
  // 檢查是否已存在提示，有的話先移除
  let alertEl = document.querySelector('.cart-alert');
  if (!alertEl) {
    alertEl = document.createElement('div');
    alertEl.className = 'cart-alert';
    document.body.appendChild(alertEl);
  }
  
  alertEl.textContent = message;
  alertEl.classList.add('show');
  
  setTimeout(() => {
    alertEl.classList.remove('show');
  }, 3000);
}

// 模擬結帳視窗控制
function openSimulatedCheckout() {
  let cartCount = parseInt(localStorage.getItem('liuliu_cart_count') || '0');
  if (cartCount === 0) {
    showCartAlert("您的購物車目前是空的，請先選購商品！");
    return;
  }
  
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeSimulatedCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('active');
    // 結帳後清空購物車
    localStorage.setItem('liuliu_cart_count', '0');
    updateCartBadge(0);
  }
}

