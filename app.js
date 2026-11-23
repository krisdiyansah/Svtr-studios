/**
 * SAVITAR.STUDIOS // APP CORE ENGINE
 * E-Commerce Fullstack Streetwear Application
 * Brand: savitar.studios | Monogram: SVTR
 */

// -----------------------------------------------------------------------------
// 1. DEFAULT SEED DATA (OFFICIAL SHOPEE DROPS - SAVITAR STUDIOS)
// -----------------------------------------------------------------------------
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'SAVITAR STUDIOS | 8 Ball Baggy Balloon Pants',
    category: 'Pants',
    price: 239000,
    stock: 24,
    description: 'Celana baggy balloon cutting unisex dari Savitar Studios. Bahan premium fleece tebal dengan detail bordir 8-Ball & logo Savitar, tali pinggang adjustable, dan kontras jahitan putih khas streetwear.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-1-8ball-baggy-pants.jpg',
    isActive: true
  },
  {
    id: 2,
    name: 'SAVITAR STUDIOS | MONOCHROME PLAID JACKET',
    category: 'Outerwear',
    price: 300000,
    stock: 16,
    description: 'Jaket hoodie motif plaid / tartan monokrom hitam putih khas Y2K streetwear. Siluet fleksibel, bahan katun tartan ringan berkualitas, ritsleting depan, dan hoodie berlapis ganda.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-2-monochrome-plaid.jpg',
    isActive: true
  },
  {
    id: 3,
    name: 'SAVITAR STUDIOS | Savitar Crowned Flannel Shirt',
    category: 'Flannel',
    price: 185000,
    stock: 20,
    description: 'Kemeja flannel oversized bernuansa streetwear Y2K dengan grafis print lettering Savitar di dada. Bahan flannel wool blend halus, nyaman untuk daily wear maupun skena gigs.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-3-crowned-flannel.jpg',
    isActive: true
  },
  {
    id: 4,
    name: 'SAVITAR STUDIOS | PLAID JACKET ALL VARIAN',
    category: 'Outerwear',
    price: 300000,
    stock: 12,
    description: 'Koleksi lengkap jaket tartan Savitar Studios dalam semua varian warna (Monochrome Black, Electric Blue, Dark Night, dan Earth Brown). Desain modular, ritsleting kuat, dan cutting boxy.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-4-plaid-all-varian.jpg',
    isActive: true
  },
  {
    id: 5,
    name: 'SAVITAR STUDIOS | Tshirt Boxy Color Riot Putih',
    category: 'Tees',
    price: 115000,
    stock: 15,
    description: 'T-shirt cutting boxy oversized putih bersih dengan grafis Color Riot SVTR warna-warni kontras tinggi. Katun combed 24s adem dengan kerah rib tebal 3cm.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-5-color-riot-putih.jpg',
    isActive: true
  },
  {
    id: 6,
    name: 'SAVITAR STUDIOS | ELECTRIC BLUE PLAID JACKET',
    category: 'Outerwear',
    price: 300000,
    stock: 14,
    description: 'Jaket hoodie motif tartan electric blue kontras tinggi. Detail unik dengan saku dada multifungsi, tali serut hoodie, dan pergelangan tangan elastis.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-6-electric-blue-plaid.jpg',
    isActive: true
  },
  {
    id: 7,
    name: 'SAVITAR STUDIOS | Tshirt Boxy Meltdown Putih',
    category: 'Tees',
    price: 115000,
    stock: 18,
    description: 'T-shirt boxy warna putih dengan grafis tangan meleleh Meltdown hitam brutalist di bagian dada. Sablon plastisol pekat dan tahan cuci berkali-kali.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-7-meltdown-putih.jpg',
    isActive: true
  },
  {
    id: 8,
    name: 'SAVITAR STUDIOS | Outlaw Cross Work Jacket',
    category: 'Outerwear',
    price: 370000,
    stock: 8,
    description: 'Work jacket hitam pekat dengan bordir grafis gothic Outlaw Iron Cross bertuliskan monogram SVTR besar di punggung serta deretan aksen bunga / bintang di lengan kiri. Material kanvas drill kokoh berfuring satin.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-8-outlaw-cross-jacket.jpg',
    isActive: true
  },
  {
    id: 9,
    name: 'SAVITAR STUDIOS | 8 Ball Oversize Half Zip Hoodie',
    category: 'Hoodie',
    price: 239000,
    stock: 9,
    description: 'Hoodie half-zip dengan saku kanguru dan aksen bordir 8-Ball & artwork tribal di lengan. Bahan fleece katun berat 330 GSM dengan zipper logam Y2K.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-9-8ball-half-zip.jpg',
    isActive: true
  },
  {
    id: 10,
    name: 'SAVITAR STUDIOS | GRAPHITE PLAID JACKET',
    category: 'Outerwear',
    price: 300000,
    stock: 11,
    description: 'Jaket hoodie tartan edisi Graphite abu-abu gelap kehitaman. Siluet relax fit fleksibel, saku tersembunyi, dan tahan angin ringan.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-10-graphite-plaid.jpg',
    isActive: true
  },
  {
    id: 11,
    name: 'SAVITAR STUDIOS | IVORY PLAID JACKET',
    category: 'Outerwear',
    price: 300000,
    stock: 6,
    description: 'Jaket hoodie motif tartan Ivory krem muda dengan garis kotak hitam kontras. Desain hood bisa diatur dan tali serut kokoh.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-11-ivory-plaid.jpg',
    isActive: true
  },
  {
    id: 12,
    name: 'SAVITAR STUDIOS | Worldwide Collegiate Tracksuit Set',
    category: 'Outerwear',
    price: 349000,
    stock: 5,
    description: 'Setelan tracksuit hoodie & jogger pants cokelat earth tone dengan bordir Worldwide Collegiate penuh. Siluet santai untuk tampilan streetwear sehari-hari.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-12-worldwide-tracksuit.jpg',
    isActive: true
  },
  {
    id: 13,
    name: 'SAVITAR STUDIOS | PLAID SHORT BOXER',
    category: 'Accessories',
    price: 55000,
    stock: 30,
    description: 'Celana pendek boxer santai motif tartan plaid katun poplin adem. Pinggang elastis nyaman untuk outfit santai di rumah maupun skena nongkrong.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-13-plaid-short-boxer.jpg',
    isActive: true
  },
  {
    id: 14,
    name: 'SAVITAR STUDIOS | Essential Boxy Hoodie',
    category: 'Hoodie',
    price: 270000,
    stock: 0,
    description: 'Hoodie hitam pullover dengan grafis monogram oval SVTR di dada tengah. Koleksi archive terbatas, habis terjual di drop resmi.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-14-essential-boxy-hoodie.jpg',
    isActive: true
  },
  {
    id: 15,
    name: 'SAVITAR STUDIOS | Workshirt Boxy Crop Iron Cross',
    category: 'Outerwear',
    price: 155000,
    stock: 0,
    description: 'Kemeja kerja lengan pendek boxy crop dengan grafis bordir Iron Cross gothic di punggung dan saku depan ganda.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-15-workshirt-iron-cross.jpg',
    isActive: true
  },
  {
    id: 16,
    name: 'SAVITAR STUDIOS | Double Knee Pants Camo',
    category: 'Pants',
    price: 235000,
    stock: 0,
    description: 'Celana panjang tactical double knee dengan corak kamuflase abu-abu malam. Jahitan penguat tiga baris dan kancing logam bermerek.',
    shopeeUrl: 'https://shopee.co.id/shop/1524620975',
    imageUrl: 'assets/products/prod-16-double-knee-camo.jpg',
    isActive: true
  }
];

// -----------------------------------------------------------------------------
// 2. STORAGE ENGINE (LOCALSTORAGE SYNC)
// -----------------------------------------------------------------------------
const STORAGE_KEY = 'savitar_studios_inventory_v4';
const OFFICIAL_SHOPEE_DEFAULT = 'https://shopee.co.id/shop/1524620975';

function getStoredProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveProducts(INITIAL_PRODUCTS);
      return INITIAL_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      saveProducts(INITIAL_PRODUCTS);
      return INITIAL_PRODUCTS;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to read from localStorage:', e);
    return INITIAL_PRODUCTS;
  }
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

// -----------------------------------------------------------------------------
// 3. AUTHENTICATION SERVICE (ADMIN ENCRYPTED LOGIN & RESET SECURITY)
// -----------------------------------------------------------------------------
const ADMIN_CRED_STORAGE_KEY = 'savitar_admin_credentials_v1';
const DEFAULT_ADMIN_CREDENTIALS = {
  username: 'admin',
  passwordPlain: 'savitar2026!',
  passwordHash: 'aa357eba08f50ff3388ef4b38dda25dec78088811243b0972ada59ef64e4f900',
  recoveryKey: 'SVTR-RECOVERY-KEY-2026'
};

function getAdminCredentials() {
  try {
    const raw = localStorage.getItem(ADMIN_CRED_STORAGE_KEY);
    if (raw) {
      return Object.assign({}, DEFAULT_ADMIN_CREDENTIALS, JSON.parse(raw));
    }
  } catch (e) {
    console.error('Failed to parse admin credentials from storage:', e);
  }
  return DEFAULT_ADMIN_CREDENTIALS;
}

function saveAdminCredentials(creds) {
  try {
    localStorage.setItem(ADMIN_CRED_STORAGE_KEY, JSON.stringify(creds));
  } catch (e) {
    console.error('Failed to save admin credentials to storage:', e);
  }
}

// Global active credentials accessor
let ADMIN_CREDENTIALS = getAdminCredentials();

async function sha256(text) {
  try {
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (err) {
    console.warn('Web Crypto Subtle unavailable, fallback to comparison:', err);
  }
  return null;
}

function isAdminAuthenticated() {
  return sessionStorage.getItem('savitar_admin_auth') === 'true';
}

function setAdminAuthenticated(val) {
  if (val) {
    sessionStorage.setItem('savitar_admin_auth', 'true');
    sessionStorage.setItem('savitar_admin_login_at', new Date().toISOString());
  } else {
    sessionStorage.removeItem('savitar_admin_auth');
    sessionStorage.removeItem('savitar_admin_login_at');
  }
}

// -----------------------------------------------------------------------------
// 4. FORMATTERS & UX UTILITIES
// -----------------------------------------------------------------------------
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span style="font-size: 1.1rem;">${type === 'success' ? '⚡' : '⚠️'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// -----------------------------------------------------------------------------
// 5. BUYER VIEW LOGIC (INDEX.HTML)
// -----------------------------------------------------------------------------
let activeCategory = 'All';
let searchKeyword = '';

function initBuyerView() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return; // Not on buyer page

  // Category navigation listeners
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'All';
      renderBuyerCatalog();
    });
  });

  // Search input listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderBuyerCatalog();
    });
  }

  // Initial render
  renderBuyerCatalog();
  setupModalEvents();

  // Secret Admin Access Shortcut (Ctrl + Alt + A or 3x click brand monogram)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'a' || e.key === 'A')) {
      const targetUrl = window.location.protocol === 'file:' ? 'admin.html' : '/svtr-portal-master';
      window.location.href = targetUrl;
    }
  });

  const brandLogo = document.querySelector('.nav-brand .brand-monogram');
  if (brandLogo) {
    let clickCount = 0;
    let clickTimer = null;
    brandLogo.addEventListener('click', (e) => {
      clickCount++;
      clearTimeout(clickTimer);
      if (clickCount >= 3) {
        e.preventDefault();
        clickCount = 0;
        const targetUrl = window.location.protocol === 'file:' ? 'admin.html' : '/svtr-portal-master';
        window.location.href = targetUrl;
      } else {
        clickTimer = setTimeout(() => { clickCount = 0; }, 1200);
      }
    });
  }
}

function renderBuyerCatalog() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  const products = getStoredProducts().filter(p => p.isActive !== false);

  const filtered = products.filter(item => {
    const matchesCat = (activeCategory === 'All') || (item.category.toLowerCase() === activeCategory.toLowerCase());
    const matchesSearch = (item.name.toLowerCase().includes(searchKeyword)) ||
                          (item.description && item.description.toLowerCase().includes(searchKeyword));
    return matchesCat && matchesSearch;
  });

  const countBadge = document.getElementById('catalogCount');
  if (countBadge) {
    countBadge.innerText = `[${filtered.length} ARTIKEL AKTIF]`;
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; border: 1px dashed var(--border-medium); border-radius: 6px; background: var(--bg-card);">
        <p style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 0.5rem;">TIDAK ADA ARTIKEL DITEMUKAN</p>
        <p style="color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(item => {
    // Stock badge computation
    let stockBadgeHtml = '';
    let isSoldOut = item.stock <= 0;

    if (isSoldOut) {
      stockBadgeHtml = `<span class="product-badge-stock badge-sold-out">SOLD OUT</span>`;
    } else if (item.stock <= 5) {
      stockBadgeHtml = `<span class="product-badge-stock badge-low-stock">SISA ${item.stock} PCS</span>`;
    } else {
      stockBadgeHtml = `<span class="product-badge-stock badge-in-stock">READY: ${item.stock}</span>`;
    }

    const shopeeLink = item.shopeeUrl || OFFICIAL_SHOPEE_DEFAULT;

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-thumb-wrap">
          <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'" />
          ${stockBadgeHtml}
          <span class="product-category-tag">${item.category}</span>
        </div>
        <div class="product-info">
          <h3 class="product-title" title="${item.name}">${item.name}</h3>
          <div class="product-price">${formatRupiah(item.price)}</div>
          <p class="product-desc-snippet">${item.description || 'Savitar Studios official archive garment.'}</p>
          <div class="product-actions">
            <button class="btn-detail" onclick="openProductModal(${item.id})">DETAIL / SIZING</button>
            ${isSoldOut ? `
              <button class="btn-order-shopee disabled" onclick="showToast('Artikel ini habis terjual. Tunggu restock drop berikutnya!', 'danger')">
                SOLD OUT
              </button>
            ` : `
              <a href="${shopeeLink}" target="_blank" rel="noopener noreferrer" class="btn-order-shopee">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/>
                </svg>
                ORDER SHOPEE
              </a>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 6. DETAIL & SIZE CHART MODAL (BUYER)
// -----------------------------------------------------------------------------
function setupModalEvents() {
  const overlay = document.getElementById('productModalOverlay');
  if (!overlay) return;

  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProductModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeProductModal();
    }
  });
}

function openProductModal(productId) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('productModalOverlay');
  const modalContent = document.getElementById('modalDynamicContent');
  if (!overlay || !modalContent) return;

  const isSoldOut = product.stock <= 0;
  const shopeeLink = product.shopeeUrl || OFFICIAL_SHOPEE_DEFAULT;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div>
        <div class="modal-thumb">
          <img src="${product.imageUrl}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'" />
        </div>
        <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); line-height: 1.5;">
          <div><strong>KATEGORI:</strong> ${product.category}</div>
          <div style="margin-top: 0.25rem;">
            <strong>STATUS:</strong> 
            <span style="color: ${isSoldOut ? 'var(--accent-red)' : (product.stock <= 5 ? 'var(--accent-orange)' : 'var(--accent-lime)')}; font-weight: 700;">
              ${isSoldOut ? 'HABIS TERJUAL' : `TERSEDIA (${product.stock} UNIT)`}
            </span>
          </div>
        </div>
      </div>
      <div>
        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-lime); text-transform: uppercase;">// OFFICIAL ARCHIVE ARTICLE</span>
        <h2 style="font-family: var(--font-display); font-size: 1.3rem; margin: 0.35rem 0 0.5rem; text-transform: uppercase; line-height: 1.2;">${product.name}</h2>
        <div style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem;">
          ${formatRupiah(product.price)}
        </div>
        
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
          ${product.description}
        </p>

        <div style="border-top: 1px solid var(--border-light); padding-top: 1rem;">
          <h4 style="font-family: var(--font-display); font-size: 0.85rem; letter-spacing: 0.05em; margin-bottom: 0.5rem;">TABEL UKURAN (SIZE CHART - CM)</h4>
          <p style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.5rem;">*Fit Boxy Oversized khas skena streetwear (Toleransi 1-2 cm)</p>
          <table class="size-chart-table">
            <thead>
              <tr>
                <th>SIZE</th>
                <th>LEBAR DADA</th>
                <th>PANJANG BADAN</th>
                <th>PANJANG LENGAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>54 cm</td>
                <td>70 cm</td>
                <td>23 cm</td>
              </tr>
              <tr>
                <td>M</td>
                <td>57 cm</td>
                <td>73 cm</td>
                <td>24 cm</td>
              </tr>
              <tr>
                <td>L</td>
                <td>60 cm</td>
                <td>76 cm</td>
                <td>25 cm</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>63 cm</td>
                <td>78 cm</td>
                <td>26 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem;">
          ${isSoldOut ? `
            <button class="btn-order-shopee disabled" style="width: 100%; padding: 0.8rem; font-size: 0.85rem;">
              STOK HABIS (SOLD OUT)
            </button>
          ` : `
            <a href="${shopeeLink}" target="_blank" rel="noopener noreferrer" class="btn-order-shopee" style="width: 100%; padding: 0.8rem; font-size: 0.85rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/>
              </svg>
              ORDER SEKARANG VIA SHOPEE RESMI
            </a>
          `}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

// -----------------------------------------------------------------------------
// 7. ADMIN DASHBOARD & CRUD LOGIC (ADMIN.HTML)
// -----------------------------------------------------------------------------
let adminSearchKeyword = '';
let adminCategoryFilter = 'All';
let editingProductId = null;

function initAdminView() {
  const loginSection = document.getElementById('adminLoginSection');
  const dashboardSection = document.getElementById('adminDashboardSection');
  if (!loginSection || !dashboardSection) return; // Not on admin page

  // Check auth state
  if (isAdminAuthenticated()) {
    showDashboard();
  } else {
    showLoginForm();
  }

  // Setup login handler
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleAdminLogin);
  }

  // Setup reset password handler
  const resetForm = document.getElementById('adminResetPasswordForm');
  if (resetForm) {
    resetForm.addEventListener('submit', handleAdminResetPassword);
  }

  // Setup change password handler (dashboard modal)
  const changePasswordForm = document.getElementById('changePasswordDashboardForm');
  if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', handleChangePasswordDashboard);
  }

  // Setup logout handler
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleAdminLogout);
  }

  // Setup search & filter
  const adminSearchInput = document.getElementById('adminSearchInput');
  if (adminSearchInput) {
    adminSearchInput.addEventListener('input', (e) => {
      adminSearchKeyword = e.target.value.toLowerCase().trim();
      renderAdminTable();
    });
  }

  const adminCatFilter = document.getElementById('adminCategoryFilter');
  if (adminCatFilter) {
    adminCatFilter.addEventListener('change', (e) => {
      adminCategoryFilter = e.target.value;
      renderAdminTable();
    });
  }

  // Setup Product Modal (Create/Edit)
  const productForm = document.getElementById('productForm');
  if (productForm) {
    productForm.addEventListener('submit', handleProductFormSubmit);
  }

  const btnOpenCreate = document.getElementById('btnOpenCreateModal');
  if (btnOpenCreate) {
    btnOpenCreate.addEventListener('click', () => openProductFormModal(null));
  }

  const btnCloseProductModal = document.getElementById('closeProductFormBtn');
  if (btnCloseProductModal) {
    btnCloseProductModal.addEventListener('click', closeProductFormModal);
  }

  // Reset to default seeds button
  const btnResetData = document.getElementById('btnResetData');
  if (btnResetData) {
    btnResetData.addEventListener('click', () => {
      if (confirm('Pulihkan data produk ke katalog bawaan awal? Perubahan manual akan direset.')) {
        saveProducts(INITIAL_PRODUCTS);
        showToast('Katalog berhasil dipulihkan ke data default.', 'success');
        renderAdminDashboard();
      }
    });
  }
}

function showLoginForm() {
  const loginSection = document.getElementById('adminLoginSection');
  const dashboardSection = document.getElementById('adminDashboardSection');
  if (loginSection) loginSection.style.display = 'flex';
  if (dashboardSection) dashboardSection.style.display = 'none';
}

function showDashboard() {
  const loginSection = document.getElementById('adminLoginSection');
  const dashboardSection = document.getElementById('adminDashboardSection');
  if (loginSection) loginSection.style.display = 'none';
  if (dashboardSection) dashboardSection.style.display = 'block';
  renderAdminDashboard();
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('adminUsername').value.trim();
  const passwordInput = document.getElementById('adminPassword').value.trim();
  const errorMsg = document.getElementById('loginErrorMessage');

  if (errorMsg) errorMsg.style.display = 'none';

  if (!usernameInput || !passwordInput) {
    if (errorMsg) {
      errorMsg.innerText = 'Username dan password wajib diisi.';
      errorMsg.style.display = 'block';
    }
    return;
  }

  const activeCreds = getAdminCredentials();
  const inputHash = await sha256(passwordInput);

  const isUsernameMatch = usernameInput.toLowerCase() === activeCreds.username.toLowerCase();
  const isPasswordMatch = (inputHash === activeCreds.passwordHash) || 
                          (passwordInput === activeCreds.passwordPlain);

  if (isUsernameMatch && isPasswordMatch) {
    // If running on a live server, authenticate session cookie via API
    if (window.location.protocol.startsWith('http')) {
      try {
        fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: usernameInput, password: passwordInput })
        }).catch(() => {});
      } catch (err) {}
    }

    setAdminAuthenticated(true);
    showToast('Akses Admin Terverifikasi. Selamat datang!', 'success');
    showDashboard();
  } else {
    if (errorMsg) {
      errorMsg.innerText = 'Kredensial tidak valid. Silakan periksa username & password atau gunakan Reset Password.';
      errorMsg.style.display = 'block';
    }
    showToast('Login gagal: Kredensial tidak cocok', 'danger');
  }
}

function fillAdminCredentials() {
  const activeCreds = getAdminCredentials();
  const usernameInput = document.getElementById('adminUsername');
  const passwordInput = document.getElementById('adminPassword');
  const errorMsg = document.getElementById('loginErrorMessage');
  if (usernameInput) usernameInput.value = activeCreds.username;
  if (passwordInput) passwordInput.value = activeCreds.passwordPlain;
  if (errorMsg) errorMsg.style.display = 'none';
  showToast('Kredensial admin telah otomatis diisikan.', 'success');
}

// -----------------------------------------------------------------------------
// RESET PASSWORD & SECURITY CONTROLS
// -----------------------------------------------------------------------------
function showResetPasswordView() {
  const loginForm = document.getElementById('adminLoginForm');
  const resetForm = document.getElementById('adminResetPasswordForm');
  const resetError = document.getElementById('resetErrorMessage');
  if (loginForm) loginForm.style.display = 'none';
  if (resetForm) {
    resetForm.style.display = 'block';
  }
  if (resetError) resetError.style.display = 'none';
}

function showLoginView() {
  const loginForm = document.getElementById('adminLoginForm');
  const resetForm = document.getElementById('adminResetPasswordForm');
  if (resetForm) resetForm.style.display = 'none';
  if (loginForm) loginForm.style.display = 'block';
}

function toggleInputVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerText = '🙈';
  } else {
    input.type = 'password';
    if (btn) btn.innerText = '👁️';
  }
}

async function handleAdminResetPassword(e) {
  e.preventDefault();
  const username = document.getElementById('resetUsername').value.trim();
  const recoveryKey = document.getElementById('resetRecoveryKey').value.trim();
  const newPassword = document.getElementById('resetNewPassword').value;
  const confirmPassword = document.getElementById('resetConfirmPassword').value;
  const errorEl = document.getElementById('resetErrorMessage');

  if (errorEl) errorEl.style.display = 'none';

  if (!username || !recoveryKey || !newPassword || !confirmPassword) {
    if (errorEl) {
      errorEl.innerText = 'Semua kolom formulir wajib diisi.';
      errorEl.style.display = 'block';
    }
    return;
  }

  const activeCreds = getAdminCredentials();

  // Verifikasi Master Recovery Key
  if (recoveryKey !== activeCreds.recoveryKey && recoveryKey !== 'SVTR-RECOVERY-KEY-2026') {
    if (errorEl) {
      errorEl.innerText = 'Master Recovery Key tidak valid. Hubungi administrator sistem.';
      errorEl.style.display = 'block';
    }
    showToast('Reset ditolak: Recovery Key salah!', 'danger');
    return;
  }

  if (newPassword.length < 6) {
    if (errorEl) {
      errorEl.innerText = 'Password baru minimal 6 karakter demi keamanan.';
      errorEl.style.display = 'block';
    }
    return;
  }

  if (newPassword !== confirmPassword) {
    if (errorEl) {
      errorEl.innerText = 'Konfirmasi password baru tidak cocok.';
      errorEl.style.display = 'block';
    }
    return;
  }

  // Generate SHA-256 hash
  const newHash = await sha256(newPassword);

  // Update credentials
  activeCreds.username = username;
  activeCreds.passwordPlain = newPassword;
  activeCreds.passwordHash = newHash;
  saveAdminCredentials(activeCreds);
  ADMIN_CREDENTIALS = activeCreds;

  // Sync dengan live server backend jika tersedia
  if (window.location.protocol.startsWith('http')) {
    try {
      fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          recoveryKey: recoveryKey,
          newPassword: newPassword
        })
      }).catch(() => {});
    } catch (err) {}
  }

  showToast('Password admin berhasil direset! Silakan login kembali.', 'success');

  // Pre-fill login form dan kembali ke tampilan login
  showLoginView();
  const userField = document.getElementById('adminUsername');
  const passField = document.getElementById('adminPassword');
  if (userField) userField.value = username;
  if (passField) passField.value = newPassword;

  // Reset form reset password
  e.target.reset();
}

function openChangePasswordModal() {
  const modal = document.getElementById('changePasswordModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeChangePasswordModal() {
  const modal = document.getElementById('changePasswordModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  const form = document.getElementById('changePasswordDashboardForm');
  if (form) form.reset();
}

async function handleChangePasswordDashboard(e) {
  e.preventDefault();
  const curPass = document.getElementById('currentPassword').value;
  const newPass = document.getElementById('dashboardNewPassword').value;
  const confirmPass = document.getElementById('dashboardConfirmPassword').value;

  const activeCreds = getAdminCredentials();
  const curHash = await sha256(curPass);

  const isCurrentValid = (curPass === activeCreds.passwordPlain) || (curHash === activeCreds.passwordHash);

  if (!isCurrentValid) {
    alert('Password saat ini salah. Silakan periksa kembali.');
    return;
  }

  if (newPass.length < 6) {
    alert('Password baru minimal harus 6 karakter.');
    return;
  }

  if (newPass !== confirmPass) {
    alert('Konfirmasi password baru tidak cocok.');
    return;
  }

  const newHash = await sha256(newPass);
  activeCreds.passwordPlain = newPass;
  activeCreds.passwordHash = newHash;
  saveAdminCredentials(activeCreds);
  ADMIN_CREDENTIALS = activeCreds;

  // Sync to live server if online
  if (window.location.protocol.startsWith('http')) {
    try {
      fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: curPass, newPassword: newPass })
      }).catch(() => {});
    } catch (err) {}
  }

  closeChangePasswordModal();
  showToast('Password admin berhasil diperbarui!', 'success');
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('adminPassword');
  const toggleBtn = document.getElementById('togglePasswordBtn');
  if (!passwordInput) return;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    if (toggleBtn) toggleBtn.innerText = '🙈';
  } else {
    passwordInput.type = 'password';
    if (toggleBtn) toggleBtn.innerText = '👁️';
  }
}

function handleAdminLogout() {
  if (confirm('Keluar dari panel administrasi Savitar Studios?')) {
    setAdminAuthenticated(false);
    showToast('Anda telah logout dari sesi admin.', 'success');
    showLoginForm();
  }
}

function renderAdminDashboard() {
  renderMetrics();
  renderAdminTable();
}

function renderMetrics() {
  const products = getStoredProducts();
  const totalArticles = products.length;
  const totalStockUnits = products.reduce((acc, curr) => acc + (parseInt(curr.stock) || 0), 0);
  const lowStockCount = products.filter(p => p.stock > 0 && p.stock <= 5).length;
  const soldOutCount = products.filter(p => p.stock <= 0).length;

  const elTotal = document.getElementById('metricTotalArticles');
  const elUnits = document.getElementById('metricTotalUnits');
  const elLow = document.getElementById('metricLowStock');
  const elSold = document.getElementById('metricSoldOut');

  if (elTotal) elTotal.innerText = totalArticles;
  if (elUnits) elUnits.innerText = totalStockUnits;
  if (elLow) elLow.innerText = lowStockCount;
  if (elSold) elSold.innerText = soldOutCount;
}

function renderAdminTable() {
  const tableBody = document.getElementById('adminInventoryBody');
  if (!tableBody) return;

  const products = getStoredProducts();

  const filtered = products.filter(item => {
    const matchesCat = (adminCategoryFilter === 'All') || (item.category.toLowerCase() === adminCategoryFilter.toLowerCase());
    const matchesSearch = item.name.toLowerCase().includes(adminSearchKeyword) ||
                          item.id.toString().includes(adminSearchKeyword);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); font-family: var(--font-mono);">
          Tidak ada produk yang cocok dengan pencarian / filter inventaris.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(item => {
    let statusBadge = '';
    if (item.stock <= 0) {
      statusBadge = `<span style="display:inline-block; padding: 2px 8px; border-radius: 3px; background: rgba(255,42,42,0.15); color: var(--accent-red); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700;">SOLD OUT (0)</span>`;
    } else if (item.stock <= 5) {
      statusBadge = `<span style="display:inline-block; padding: 2px 8px; border-radius: 3px; background: rgba(255,119,0,0.15); color: var(--accent-orange); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700;">MENIPIS (${item.stock})</span>`;
    } else {
      statusBadge = `<span style="display:inline-block; padding: 2px 8px; border-radius: 3px; background: rgba(204,255,0,0.1); color: var(--accent-lime); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700;">AMAN (${item.stock})</span>`;
    }

    return `
      <tr>
        <td>
          <div class="table-product-cell">
            <img class="table-thumb" src="${item.imageUrl}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'" />
            <div>
              <div class="table-prod-name">${item.name}</div>
              <div class="table-prod-cat">ID: #${item.id} • ${item.category}</div>
            </div>
          </div>
        </td>
        <td style="font-family: var(--font-mono); font-weight: 600;">
          ${formatRupiah(item.price)}
        </td>
        <td>
          <div class="stock-stepper">
            <button class="btn-step" title="Kurangi Stok (Keluar)" onclick="adjustQuickStock(${item.id}, -1)">−</button>
            <span class="stock-value-cell">${item.stock}</span>
            <button class="btn-step" title="Tambah Stok (Masuk)" onclick="adjustQuickStock(${item.id}, 1)">+</button>
          </div>
        </td>
        <td>
          ${statusBadge}
        </td>
        <td>
          <a href="${item.shopeeUrl || OFFICIAL_SHOPEE_DEFAULT}" target="_blank" rel="noopener noreferrer" style="color: var(--shopee-orange); font-family: var(--font-mono); font-size: 0.72rem; display: inline-flex; align-items: center; gap: 4px;">
            Link Shopee ↗
          </a>
        </td>
        <td>
          <div class="table-action-btns">
            <button class="btn-table-action" onclick="openProductFormModal(${item.id})">Edit</button>
            <button class="btn-table-action delete" onclick="deleteProductById(${item.id})">Hapus</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 8. CRUD ACTIONS: CREATE, UPDATE, QUICK STOCK ADJUST, DELETE
// -----------------------------------------------------------------------------
function adjustQuickStock(productId, delta) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const newStock = Math.max(0, (parseInt(product.stock) || 0) + delta);
  product.stock = newStock;
  saveProducts(products);

  showToast(`Stok "${product.name.substring(0, 20)}..." diubah menjadi ${newStock} unit.`, 'success');
  renderAdminDashboard();
}

function openProductFormModal(productId = null) {
  editingProductId = productId;
  const overlay = document.getElementById('productFormModalOverlay');
  const title = document.getElementById('modalFormTitle');
  if (!overlay) return;

  const nameInput = document.getElementById('inputProdName');
  const catInput = document.getElementById('inputProdCategory');
  const priceInput = document.getElementById('inputProdPrice');
  const stockInput = document.getElementById('inputProdStock');
  const descInput = document.getElementById('inputProdDesc');
  const shopeeInput = document.getElementById('inputProdShopee');
  const imageInput = document.getElementById('inputProdImage');

  if (productId) {
    const products = getStoredProducts();
    const item = products.find(p => p.id === productId);
    if (!item) return;

    if (title) title.innerText = 'EDIT ARTIKEL PRODUK';
    nameInput.value = item.name || '';
    catInput.value = item.category || 'Tees';
    priceInput.value = item.price || 0;
    stockInput.value = item.stock || 0;
    descInput.value = item.description || '';
    shopeeInput.value = item.shopeeUrl || OFFICIAL_SHOPEE_DEFAULT;
    imageInput.value = item.imageUrl || '';
  } else {
    if (title) title.innerText = 'TAMBAH PRODUK STREETWEAR BARU';
    nameInput.value = '';
    catInput.value = 'Tees';
    priceInput.value = '';
    stockInput.value = '10';
    descInput.value = '';
    shopeeInput.value = OFFICIAL_SHOPEE_DEFAULT;
    imageInput.value = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductFormModal() {
  const overlay = document.getElementById('productFormModalOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  editingProductId = null;
}

function handleProductFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('inputProdName').value.trim();
  const category = document.getElementById('inputProdCategory').value;
  const price = parseFloat(document.getElementById('inputProdPrice').value) || 0;
  const stock = parseInt(document.getElementById('inputProdStock').value) || 0;
  const description = document.getElementById('inputProdDesc').value.trim();
  const shopeeUrl = document.getElementById('inputProdShopee').value.trim() || OFFICIAL_SHOPEE_DEFAULT;
  const imageUrl = document.getElementById('inputProdImage').value.trim() || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80';

  if (!name || price <= 0) {
    showToast('Nama artikel dan harga valid wajib diisi.', 'danger');
    return;
  }

  const products = getStoredProducts();

  if (editingProductId) {
    // UPDATE
    const index = products.findIndex(p => p.id === editingProductId);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        name,
        category,
        price,
        stock,
        description,
        shopeeUrl,
        imageUrl,
        updatedAt: new Date().toISOString()
      };
      saveProducts(products);
      showToast(`Artikel "${name}" berhasil diperbarui.`, 'success');
    }
  } else {
    // CREATE
    const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: nextId,
      name,
      category,
      price,
      stock,
      description,
      shopeeUrl,
      imageUrl,
      isActive: true,
      createdAt: new Date().toISOString()
    };
    products.unshift(newProduct);
    saveProducts(products);
    showToast(`Artikel baru "${name}" berhasil ditambahkan ke inventaris.`, 'success');
  }

  closeProductFormModal();
  renderAdminDashboard();
}

function deleteProductById(productId) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (confirm(`Apakah Anda yakin ingin menghapus artikel "${product.name}" dari katalog? Tindakan ini tidak dapat dibatalkan.`)) {
    const updated = products.filter(p => p.id !== productId);
    saveProducts(updated);
    showToast(`Artikel "${product.name}" telah dihapus.`, 'success');
    renderAdminDashboard();
  }
}

// -----------------------------------------------------------------------------
// 9. AUTOMATIC INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initBuyerView();
  initAdminView();
});
