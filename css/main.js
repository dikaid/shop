const produkList = [
  { kategori: 'public', nama: 'PANEL RAM 1GB CPU 30%', harga: 1000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'PANEL RAM 2GB CPU 60%', harga: 2000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'PANEL RAM 3GB CPU 90%', harga: 3000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'PANEL RAM 4GB CPU 110%', harga: 4000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'PANEL RAM 5GB CPU 130%', harga: 5000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'PANEL UNLIMITED RAM&CPU', harga: 7000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'public', nama: 'RESELLER PANEL', harga: 10000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/vasfu0.jpg"] },
  { kategori: 'public', nama: 'OWNER RESELLER PANEL', harga: 15000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/vasfu0.jpg"] },
  { kategori: 'public', nama: 'ADMIN PANEL', harga: 20000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/l2hp1q.jpg"] },
  { kategori: 'public', nama: 'PARTNER PANEL', harga: 25000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/l2hp1q.jpg"] },

  { kategori: 'private', nama: 'PANEL RAM 1GB CPU 30%', harga: 2000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'PANEL RAM 2GB CPU 60%', harga: 3000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'PANEL RAM 3GB CPU 90%', harga: 4000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'PANEL RAM 4GB CPU 110%', harga: 5000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'PANEL RAM 5GB CPU 130%', harga: 6000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'PANEL UNLIMITED RAM&CPU', harga: 10000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/y1bqkj.jpg"] },
  { kategori: 'private', nama: 'RESELLER PANEL', harga: 15000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/vasfu0.jpg"] },
  { kategori: 'private', nama: 'OWNER RESELLER PANEL', harga: 20000, img: ["https://files.catbox.moe/sxxeyt.jpg","https://files.catbox.moe/vasfu0.jpg"] },

  { kategori: 'vps', nama: 'VPS RAM 2GB CORE 2', harga: 25000, img: ['https://files.catbox.moe/zuq7o2.jpg'] },
  { kategori: 'vps', nama: 'VPS RAM 4GB CORE 2', harga: 30000, img: ['https://files.catbox.moe/zuq7o2.jpg'] },
  { kategori: 'vps', nama: 'VPS RAM 8GB CORE 4', harga: 40000, img: ['https://files.catbox.moe/zuq7o2.jpg'] },
  { kategori: 'vps', nama: 'VPS RAM 16GB CORE 4', harga: 50000, img: ['https://files.catbox.moe/zuq7o2.jpg'] },

  { kategori: 'bot', nama: 'BOT MASA AKTIF 1BULAN', harga: 10000, img: ['https://files.catbox.moe/abit7j.jpg'] },
  { kategori: 'bot', nama: 'BOT MASA AKTIF 2BULAN', harga: 15000, img: ['https://files.catbox.moe/abit7j.jpg'] },
  { kategori: 'bot', nama: 'BOT MASA AKTIF PERMANEN', harga: 25000, img: ['https://files.catbox.moe/abit7j.jpg'] },
  
  { kategori: 'script', nama: 'BRUTALITY V8 GEN 2 [NO ADMIN DB]', harga: 15000, img: ['https://files.catbox.moe/jvt7s3.jpg','https://files.catbox.moe/29n4c2.jpg'] },
  { kategori: 'script', nama: 'BRUTALITY V8 GEN 2 [ADMIN DB]', harga: 30000, img: ['https://files.catbox.moe/jvt7s3.jpg','https://files.catbox.moe/29n4c2.jpg'] }
];

const kategoriMap = {
  public: 'SERVER PUBLIC',
  private: 'SERVER PRIVATE',
  vps: 'DIGITAL OCEAN',
  bot: 'BOT WA'
  script: 'SCRIPT BOT WA'
};

let selectedProduct = '';
let selectedPrice = 0;
let selectedPayment = '';
let selectedKategori = '';
let darkMode = false;
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;
let isZoomed = false;
let currentTranslate = 0;
let previewImages = [];
let currentImageIndex = 0;
let startX = 0;
let currentX = 0;
let diffX = 0;
let isTouching = false;
let dragStartX = 0;
let dragStartY = 0;
let offsetX = 0;
let offsetY = 0;
let lastOffsetX = 0;
let lastOffsetY = 0;

const previewImg = document.getElementById('preview-img');

const altIconMap = {
  public: 'Pterodactyl',
  private: 'Pterodactyl',
  vps: 'Digital Ocean',
  bot: 'Bot WhatsApp', 
  script: 'Script'
};

const iconMap = {
  public: 'https://iili.io/FTuUKvV.md.png', 
  private: 'https://iili.io/FTuUKvV.md.png',
  vps: 'https://iili.io/FTuUFYQ.png',
  bot: 'https://iili.io/FT0en4t.png',
  script: 'https://iili.io/FERliHx.md.png'
};

function formatCurrency(amount) {
  amount = Number(amount) || 0;
  return amount.toLocaleString('id-ID');
}

function renderProduk() {
  const containerMap = {
    public: document.getElementById('list-public'),
    private: document.getElementById('list-private'),
    vps: document.getElementById('list-vps'),
    bot: document.getElementById('list-bot'), 
    script: document.getElementById('list-script')
  };

  // Kosongkan semua kontainer
  Object.values(containerMap).forEach(container => {
    container.innerHTML = '';
  });

  // Ambil data produk yang sering dilihat
  const views = JSON.parse(localStorage.getItem('productViews')) || {};
  let maxViews = 0;
  let topProduct = '';

  for (const [product, count] of Object.entries(views)) {
    if (count > maxViews) {
      maxViews = count;
      topProduct = product;
    }
  }

  produkList.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';

    // Gambar produk (logo kecil)
    const img = document.createElement('img');
    img.src = iconMap[p.kategori]; // ✅ gunakan logo sesuai kategori
    img.alt = altIconMap[p.kategori] || 'Icon';
    img.loading = 'lazy';
    el.appendChild(img);

    // Judul
    const title = document.createElement('h3');
    title.textContent = p.nama;
    el.appendChild(title);

    // Harga
    const priceP = document.createElement('p');
    priceP.className = 'price';
    const strong = document.createElement('strong');
    strong.style.color = '#28a745';
    strong.innerHTML = `Rp<span>${formatCurrency(p.harga)}</span>`;
    priceP.appendChild(strong);
    el.appendChild(priceP);

    // Tombol Beli
    const button = document.createElement('button');
    button.textContent = 'Beli';
    button.setAttribute('data-title', p.nama);
    button.onclick = () => selectProduct(p.nama, p.harga, p.kategori);
    el.appendChild(button);

    // Tombol Preview
    const previewBtn = document.createElement('button');
    previewBtn.textContent = 'Preview';
    previewBtn.style.background = '#6c757d';
    previewBtn.onclick = () => openPreview(p.img); // ✅ hanya pakai p.img
    el.appendChild(previewBtn);

    // Label "Sering Dilihat"
    if (p.nama === topProduct && maxViews > 0) {
      const label = document.createElement('span');
      label.className = 'label-sering';
      label.textContent = 'Sering Dilihat';
      el.appendChild(label);
    }

    // Masukkan ke dalam kategori
    const targetContainer = containerMap[p.kategori];
    if (targetContainer) {
      targetContainer.appendChild(el);
    }
  });
}

function toggleTheme() {
  darkMode = !darkMode;
  document.documentElement.style.setProperty('--bg-color', darkMode ? '#121212' : '#fff');
  document.documentElement.style.setProperty('--text-color', darkMode ? '#fff' : '#000');
  document.documentElement.style.setProperty('--card-bg', darkMode ? '#1e1e1e' : '#f9f9f9');
  document.documentElement.style.setProperty('--popup-bg', darkMode ? '#1e1e1e' : '#fff');
  document.body.classList.toggle('dark', darkMode);
  const search = document.getElementById('search');
  const filter = document.getElementById('filter-kategori');

  if (search) {
    search.style.backgroundColor = darkMode ? '#1e1e1e' : '#fff';
    search.style.color = darkMode ? '#fff' : '#000';
    search.style.border = darkMode ? '1px solid #444' : '1px solid #ccc';
  }

  if (filter) {
    filter.style.backgroundColor = darkMode ? '#1e1e1e' : '#fff';
    filter.style.color = darkMode ? '#fff' : '#000';
    filter.style.border = darkMode ? '1px solid #444' : '1px solid #ccc';
  }

  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerText = darkMode ? '☀️' : '🌙';
  }

  localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
}

function applyTheme() {
  document.documentElement.style.setProperty('--bg-color', darkMode ? '#121212' : '#fff');
  document.documentElement.style.setProperty('--text-color', darkMode ? '#fff' : '#000');
  document.documentElement.style.setProperty('--card-bg', darkMode ? '#1e1e1e' : '#f9f9f9');
  document.documentElement.style.setProperty('--popup-bg', darkMode ? '#1e1e1e' : '#fff');
  document.getElementById('search').style.backgroundColor = darkMode ? '#1e1e1e' : '#fff';
  document.getElementById('search').style.color = darkMode ? '#fff' : '#000';
  document.getElementById('search').style.border = darkMode ? '1px solid #444' : '1px solid #ccc';
  document.getElementById('filter-kategori').style.backgroundColor = darkMode ? '#1e1e1e' : '#fff';
  document.getElementById('filter-kategori').style.color = darkMode ? '#fff' : '#000';
  document.getElementById('filter-kategori').style.border = darkMode ? '1px solid #444' : '1px solid #ccc';
  
  document.querySelector('.theme-toggle').innerText = darkMode ? '☀️' : '🌙';
}

function toggleAudio() {
  const audio = document.getElementById('bg-audio');
  const icon = document.getElementById('audio-icon');

  if (audio.paused) {
    audio.play();
    icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; // pause icon
    localStorage.setItem('audioStatus', 'on');
  } else {
    audio.pause();
    icon.innerHTML = '<path d="M8 5v14l11-7z"/>'; // play icon
    localStorage.setItem('audioStatus', 'off');
  }
}

function selectProduct(product, price, kategori = '') {
  selectedProduct = product;
  selectedPrice = price;
  selectedKategori = kategori;

  const kategoriTampil = kategoriMap[kategori] || kategori;

  const views = JSON.parse(localStorage.getItem('productViews')) || {};
  views[product] = (views[product] || 0) + 1;
  localStorage.setItem('productViews', JSON.stringify(views));

  document.getElementById('item-kategori').innerText = kategoriTampil;
  document.getElementById('item-title').innerText = product;
  document.getElementById('total-price').innerText = formatCurrency(price);

  document.getElementById('main-page').style.display = 'none';
  document.getElementById('payment-page').style.display = 'block';

  updateSeringDilihatLabel();
  
  localStorage.setItem('progressPesanan', JSON.stringify({
  produk: selectedProduct,
  harga: selectedPrice,
  kategori: selectedKategori
}));
}

function batalkanProgressPesanan() {
  localStorage.removeItem('progressPesanan');
  document.getElementById('lanjutkan-box').style.display = 'none';
  showToast('Pesanan dibatalkan.');
}

function updateSeringDilihatLabel() {
  renderProduk(); // render ulang dan perbarui label berdasarkan data views
}

function openPreview(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  previewImages = images;
  currentImageIndex = 0;

  updatePreviewImage();
  document.getElementById('preview-popup').style.display = 'flex';
}

function updatePreviewImage() {
  const img = document.getElementById('preview-img');
  img.src = previewImages[currentImageIndex];
  renderPreviewDots(); // Tambahkan ini
}

previewImg.addEventListener('touchstart', (e) => {
  if (!isZoomed || e.touches.length !== 1) return;
  isTouching = true;
  dragStartX = e.touches[0].clientX;
  dragStartY = e.touches[0].clientY;
}, { passive: false });

previewImg.addEventListener('touchmove', (e) => {
  if (!isTouching || !isZoomed) return;
  e.preventDefault();

  const moveX = e.touches[0].clientX - dragStartX;
  const moveY = e.touches[0].clientY - dragStartY;

  offsetX = lastOffsetX + moveX;
  offsetY = lastOffsetY + moveY;

  previewImg.style.transform = `scale(2.2) translate(${offsetX}px, ${offsetY}px)`;
}, { passive: false });

previewImg.addEventListener('touchend', () => {
  isTouching = false;
  lastOffsetX = offsetX;
  lastOffsetY = offsetY;
});

function toggleZoom(img, event) {
  if (event && event.target.closest('.nav-button')) return;

  isZoomed = !isZoomed;

  if (isZoomed) {
    img.classList.add('zoomed');
    offsetX = 0;
    offsetY = 0;
    lastOffsetX = 0;
    lastOffsetY = 0;
    previewImg.style.transform = `scale(2.2) translate(0px, 0px)`;
    img.style.cursor = 'grab';
  } else {
    img.classList.remove('zoomed');
    offsetX = 0;
    offsetY = 0;
    lastOffsetX = 0;
    lastOffsetY = 0;
    previewImg.style.transform = `scale(1) translate(0px, 0px)`;
    img.style.cursor = 'zoom-in';
  }
}

function renderPreviewDots() {
  const dotsContainer = document.getElementById('preview-dots');
  dotsContainer.innerHTML = '';

  previewImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.background = index === currentImageIndex ? '#007BFF' : '#bbb';
    dot.style.cursor = 'pointer';
    dot.style.transition = 'background 0.3s';
    
    dot.onclick = () => {
      currentImageIndex = index;
      updatePreviewImage();
      renderPreviewDots();
    };

    dotsContainer.appendChild(dot);
  });
}

function handleSwipe() {
  const threshold = 50; // minimum jarak swipe
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      nextImage();
    } else {
      prevImage();
    }
  }
}

function nextImage() {
  if (previewImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % previewImages.length;
  updatePreviewImage();
}

function prevImage() {
  if (previewImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + previewImages.length) % previewImages.length;
  updatePreviewImage();
}

function closePreview() {
  document.getElementById('preview-popup').style.display = 'none';
  isZoomed = false;
  previewImg.classList.remove('zoomed');
  previewImg.style.transform = 'scale(1) translate(0, 0)';
  previewImg.style.cursor = 'zoom-in';
  offsetX = 0;
  offsetY = 0;
  lastOffsetX = 0;
  lastOffsetY = 0;
}

function filterByKategori() {
  doSearch();
}

function selectPayment(method) {
  selectedPayment = method;
  const data = JSON.parse(localStorage.getItem('progressPesanan')) || {};
  data.metode = method;
  localStorage.setItem('progressPesanan', JSON.stringify(data));
  let info = '';
  if (method === 'DANA') {
    const danaPopup = document.getElementById('popup-dana');
    danaPopup.style.display = 'flex';
    danaPopup.querySelector('div').classList.add('fade-in');
  } else if (method === 'QRIS') {
    const qrisPopup = document.getElementById('popup-qris');
    qrisPopup.style.display = 'flex';
    qrisPopup.querySelector('div').classList.add('fade-in');
  }
  document.getElementById('payment-info').innerHTML = info;
}

function copyRekening() {
  const rekening = document.getElementById('nomor-dana').innerText;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(rekening)
      .then(() => showToast('Nomor rekening berhasil disalin!'))
      .catch(() => showToast('Gagal menyalin, coba manual.'));
  } else {
    try {
      const tempInput = document.createElement('input');
      tempInput.value = rekening;
      document.body.appendChild(tempInput);
      tempInput.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (copied) {
        showToast('Nomor rekening berhasil disalin!');
      } else {
        showToast('Gagal menyalin, coba manual.');
      }
    } catch (e) {
      showToast('Gagal menyalin, coba manual.');
    }
  }
}

function lanjutkanPesanan() {
  const data = JSON.parse(localStorage.getItem('progressPesanan'));
  if (!data) return;

  selectedProduct = data.produk;
  selectedPrice = data.harga;
  selectedKategori = data.kategori;
  selectedPayment = data.metode || '';

  document.getElementById('item-kategori').innerText = kategoriMap[selectedKategori] || selectedKategori;
  document.getElementById('item-title').innerText = selectedProduct;
  document.getElementById('total-price').innerText = formatCurrency(selectedPrice);

  document.getElementById('main-page').style.display = 'none';
  document.getElementById('payment-page').style.display = 'block';

  updateSeringDilihatLabel();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function confirmCancel() {
  document.getElementById('popup-cancel').style.display = 'flex';
}

function closeCancelPopup() {
  document.getElementById('popup-cancel').style.display = 'none';
}

function proceedCancel() {
  closeCancelPopup();
  localStorage.removeItem('progressPesanan');
  goBack();

  document.getElementById('lanjutkan-box').style.display = 'none';
}

function confirmPayment() {
  closeDanaPopup();
  closeQrisPopup();

  document.getElementById('popup-confirm').style.display = 'flex';
}

function proceedWhatsApp() {
  if (!selectedProduct || !selectedPayment) {
    showAlert('Lengkapi pesanan sebelum konfirmasi!');
    return;
  }

  closePopup();

  const kategoriTampil = kategoriMap[selectedKategori] || selectedKategori;

  const message = `Halo Admin, Saya telah melakukan pembayaran untuk pesanan berikut:

Produk: ${selectedProduct}
Kategori: ${kategoriTampil}
Harga: Rp${formatCurrency(selectedPrice)}
Payment: ${selectedPayment}

Mohon konfirmasinya, terima kasih`;

  navigator.clipboard.writeText(message);

  document.getElementById('main-page').style.display = 'none';
  document.getElementById('payment-page').style.display = 'none';
  document.getElementById('confirmation-page').style.display = 'block';

  setTimeout(() => {
    window.location.href = `https://wa.me/6283841442290?text=${encodeURIComponent(message)}`;
  }, 100);
  
  localStorage.removeItem('progressPesanan');
}

window.addEventListener('DOMContentLoaded', () => {
  // ======= DARK MODE SETTING =======
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme) {
    darkMode = savedTheme === 'enabled';
  }
  applyTheme();

  // ======= RENDER DATA =======
  renderProduk();
  updateSeringDilihatLabel();

  // ======= HALAMAN KONFIRMASI =========
  const confirmed = localStorage.getItem('hasConfirmed');
  if (confirmed === 'true') {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('confirmation-page').style.display = 'block';
    localStorage.removeItem('hasConfirmed');
  }

  // ======= LANJUTKAN PESANAN =======
  const last = JSON.parse(localStorage.getItem('progressPesanan') || 'null');
  if (
    last &&
    typeof last === 'object' &&
    last.produk &&
    last.kategori &&
    last.produk !== '' &&
    last.kategori !== ''
  ) {
    document.getElementById('lanjutkan-box').style.display = 'block';
  } else {
    document.getElementById('lanjutkan-box').style.display = 'none';
  }

  // ======= AUDIO ICON & AUTOPLAY FIX =======
  const audio = document.getElementById('bg-audio');
  const icon = document.getElementById('audio-icon');
  const status = localStorage.getItem('audioStatus');

  if (status === 'on') {
    audio.play().then(() => {
      icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    }).catch(() => {
      icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
      localStorage.setItem('audioStatus', 'off');
    });
  } else {
    icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
});

function returnToMain() {
  document.getElementById('confirmation-page').style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
  
  setTimeout(updateSeringDilihatLabel, 50);
}

function closeDanaPopup() {
  const danaPopup = document.getElementById('popup-dana');
  danaPopup.querySelector('div').classList.remove('fade-in');
  danaPopup.style.display = 'none';
}

function closeQrisPopup() {
  const qrisPopup = document.getElementById('popup-qris');
  qrisPopup.querySelector('div').classList.remove('fade-in');
  qrisPopup.style.display = 'none';
}

function closePopup() {
  document.getElementById('popup-confirm').style.display = 'none';
}

function goBack() {
  document.getElementById('payment-page').style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
  
  setTimeout(updateSeringDilihatLabel, 50);
}

function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
  document.getElementById('popup-alert').style.display = 'flex';
}

function closeAlert() {
  document.getElementById('popup-alert').style.display = 'none';
}

let searchTimeout;

function delayedSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    doSearch();
  }, 500);
}

function doSearch() {
  const rawKeyword = document.getElementById('search').value;
  const keyword = rawKeyword.replace(/[<>]/g, '').toLowerCase().trim();
  const kategoriFilter = document.getElementById('filter-kategori').value;

  const products = document.querySelectorAll('.product');
  let found = 0;

  products.forEach(p => {
    const title = p.querySelector('h3')?.innerText.toLowerCase() || '';
    const category = p.querySelector('img')?.alt.toLowerCase() || '';
    const matchSearch = title.includes(keyword) || category.includes(keyword);

    const parentId = p.parentElement?.id || '';
    const matchKategori =
      !kategoriFilter ||
      (kategoriFilter === 'public' && parentId === 'list-public') ||
      (kategoriFilter === 'private' && parentId === 'list-private') ||
      (kategoriFilter === 'vps' && parentId === 'list-vps') ||
      (kategoriFilter === 'bot' && parentId === 'list-bot') ||
      (kategoriFilter === 'script' && parentId === 'list-script');

    const tampilkan = matchSearch && matchKategori;

    p.style.display = tampilkan ? 'block' : 'none';
    if (tampilkan) found++;
  });

  if (keyword && found === 0) {
    showAlert('Produk tidak ditemukan');
  }
}