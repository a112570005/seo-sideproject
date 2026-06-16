// 六六的鞋子專賣店 - 動態渲染邏輯

document.addEventListener('DOMContentLoaded', () => {
  // 1. 渲染首頁精選商品
  const featuredContainer = document.getElementById('featured-products');
  if (featuredContainer) {
    renderFeaturedProducts(featuredContainer);
  }

  // 2. 渲染分類頁面商品
  const categoryContainer = document.getElementById('category-products');
  if (categoryContainer) {
    const category = categoryContainer.getAttribute('data-category');
    renderCategoryProducts(categoryContainer, category);
  }

  // 3. 渲染商品詳細頁 (PDP)
  const pdpContainer = document.getElementById('pdp-container');
  if (pdpContainer) {
    renderProductDetail(pdpContainer);
  }
});

// 首頁精選商品 (前4款熱銷商品)
function renderFeaturedProducts(container) {
  // 選取前 4 雙鞋子
  const featured = products.slice(0, 4);
  container.innerHTML = featured.map(p => createProductCardHtml(p)).join('');
}

// 分類頁面商品
function renderCategoryProducts(container, category) {
  const filtered = getProductsByCategory(category);
  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-products">此分類目前沒有商品。</div>`;
    return;
  }
  container.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
}

// 生成單個產品 Card 的 HTML
function createProductCardHtml(product) {
  const discountLabel = product.originalPrice ? `<span class="product-tag">SALE</span>` : '';
  const priceOriginalHtml = product.originalPrice ? `<span class="product-price-original">NT$ ${product.originalPrice.toLocaleString()}</span>` : '';
  
  return `
    <div class="product-card">
      <div class="product-img-wrapper">
        <a href="product.html?id=${product.id}">
          <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        ${discountLabel}
      </div>
      <div class="product-info">
        <a href="product.html?id=${product.id}">
          <h3>${product.name}</h3>
        </a>
        <p class="product-desc">${product.description}</p>
        <div class="product-price-row">
          <div>
            <span class="product-price">NT$ ${product.price.toLocaleString()}</span>
            ${priceOriginalHtml}
          </div>
          <button class="btn-add-cart" aria-label="加入購物車" onclick="addToCart(1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// 渲染產品詳情頁
function renderProductDetail(container) {
  // 解析 URL 參數
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    window.location.href = 'index.html';
    return;
  }

  const product = getProductById(id);
  if (!product) {
    container.innerHTML = `
      <div style="text-align: center; padding: 100px 0;">
        <h2>找不到該商品</h2>
        <p style="color: hsl(var(--text-grey)); margin-top:15px;">抱歉，您所尋找的商品可能已下架或不存在。</p>
        <a href="index.html" class="btn btn-primary" style="margin-top:30px;">返回首頁</a>
      </div>
    `;
    return;
  }

  // 更新網頁 Title
  document.title = `${product.name} - 六六的鞋子專賣店`;

  // 格式化細節與規格
  const specsHtml = product.details.map(detail => `<li><span>${detail.split('：')[0]}：</span><span>${detail.split('：')[1] || ''}</span></li>`).join('');
  
  // 尺寸選擇器 HTML
  const sizesHtml = product.sizes.map((size, idx) => `
    <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize(this, '${size}')">${size}</button>
  `).join('');

  // 產品主體 HTML
  container.innerHTML = `
    <div class="pdp-grid">
      <!-- 左側：產品主圖 -->
      <div class="pdp-gallery">
        <div class="pdp-main-img-wrapper">
          <img id="main-pdp-image" class="pdp-main-img" src="${product.image}" alt="${product.name}">
        </div>
      </div>
      
      <!-- 右側：產品資訊 -->
      <div class="pdp-info">
        <span class="pdp-category-tag">${getCategoryName(product.category)}</span>
        <h1 class="pdp-title">${product.name}</h1>
        
        <div class="pdp-price-row">
          <span class="pdp-price">NT$ ${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="pdp-price-original">NT$ ${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        
        <p class="pdp-desc">${product.description}</p>
        
        <!-- 尺寸選擇 -->
        <div class="pdp-options">
          <div class="pdp-option-title">
            <span>選擇規格 / 尺寸</span>
            <span id="selected-size-label" style="color: hsl(var(--accent-gold)); font-weight: 600;">已選擇: ${product.sizes[0]}</span>
          </div>
          <div class="size-selector">
            ${sizesHtml}
          </div>
        </div>
        
        <!-- 數量選擇與加入購物車 -->
        <div class="qty-row">
          <div class="qty-selector">
            <button class="qty-btn" onclick="adjustQty(-1)">-</button>
            <span class="qty-val" id="qty-value">1</span>
            <button class="qty-btn" onclick="adjustQty(1)">+</button>
          </div>
          <button class="btn btn-primary pdp-buy-btn" onclick="handlePdpAddToCart()">加入購物車</button>
        </div>
        
        <!-- 頁籤詳細介紹 -->
        <div class="pdp-tabs">
          <div class="tabs-nav">
            <span class="tab-link active" onclick="switchTab(this, 'tab-specs')">規格說明</span>
            <span class="tab-link" onclick="switchTab(this, 'tab-shipping')">配送與退換貨</span>
          </div>
          
          <div id="tab-specs" class="tab-panel active">
            <ul class="specs-list">
              ${specsHtml}
            </ul>
          </div>
          
          <div id="tab-shipping" class="tab-panel">
            <p><strong>【配送時間】</strong><br>
            • 宅配：商品寄出後約 1-2 個工作天內送達（不含例假日與國定假日）。<br>
            • 超商取貨：商品寄出後約 2-3 天送達指定門市。<br><br>
            <strong>【退換貨政策】</strong><br>
            • 六六鞋專賣店提供「七天鑑賞期」服務，只要商品保持全新未落地、包裝完整（含鞋盒與吊牌），均可申請退換貨。<br>
            • 請注意：退回之商品如有磨損、髒污、包裝損毀，恕無法辦理退換貨。</p>
          </div>
        </div>
        
      </div>
    </div>
  `;
}

// 獲取中文分類名稱
function getCategoryName(category) {
  const cats = {
    'casual': '休閒服飾',
    'formal': '正式服飾',
    'jewelry': '飾品',
    'accessories': '配件',
    'others': '其它類'
  };
  return cats[category] || '熱銷推薦';
}

// PDP 規格選擇狀態切換
let activeSelectedSize = '';
function selectSize(btn, size) {
  const container = btn.closest('.size-selector');
  container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const label = document.getElementById('selected-size-label');
  if (label) {
    label.textContent = `已選擇: ${size}`;
  }
}

// PDP 數量調節
function adjustQty(amount) {
  const qtyVal = document.getElementById('qty-value');
  if (qtyVal) {
    let val = parseInt(qtyVal.textContent);
    val += amount;
    if (val < 1) val = 1;
    qtyVal.textContent = val;
  }
}

// PDP 加入購物車按鈕點擊處理
function handlePdpAddToCart() {
  const qtyVal = document.getElementById('qty-value');
  const qty = qtyVal ? parseInt(qtyVal.textContent) : 1;
  addToCart(qty);
}

// PDP 頁籤切換
function switchTab(tabLink, panelId) {
  const tabsNav = tabLink.closest('.tabs-nav');
  tabsNav.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
  tabLink.classList.add('active');

  const pdpInfo = tabLink.closest('.pdp-info');
  pdpInfo.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  
  const targetPanel = document.getElementById(panelId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
}
