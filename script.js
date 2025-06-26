
// edit produk disini
const produkList = [
  { kategori: 'public', nama: 'RAM 1GB CPU 30%', harga: 1000, diskon: 0 },
  { kategori: 'public', nama: 'RAM 2GB CPU 60%', harga: 2000, diskon: 0 },
  { kategori: 'public', nama: 'RAM 3GB CPU 90%', harga: 3000, diskon: 0 },
  { kategori: 'public', nama: 'RAM 4GB CPU 110%', harga: 4000, diskon: 0 },
  { kategori: 'public', nama: 'RAM 5GB CPU 130%', harga: 5000, diskon: 0 },
  { kategori: 'public', nama: 'UNLIMITED RAM&CPU', harga: 7000, diskon: 0 },
  { kategori: 'public', nama: 'RESELLER PANEL', harga: 10000, diskon: 0 },
  { kategori: 'public', nama: 'OWNER RESELLER PANEL', harga: 15000, diskon: 0 },
  { kategori: 'public', nama: 'ADMIN PANEL', harga: 20000, diskon: 5 },
  { kategori: 'public', nama: 'PARTNER PANEL', harga: 25000, diskon: 10 },

  { kategori: 'private', nama: 'RAM 1GB CPU 30%', harga: 2000, diskon: 0 },
  { kategori: 'private', nama: 'RAM 2GB CPU 60%', harga: 3000, diskon: 0 },
  { kategori: 'private', nama: 'RAM 3GB CPU 90%', harga: 4000, diskon: 0 },
  { kategori: 'private', nama: 'RAM 4GB CPU 110%', harga: 5000, diskon: 0 },
  { kategori: 'private', nama: 'RAM 5GB CPU 130%', harga: 6000, diskon: 0 },
  { kategori: 'private', nama: 'UNLIMITED RAM&CPU', harga: 10000, diskon: 0 },
  { kategori: 'private', nama: 'RESELLER PANEL', harga: 15000, diskon: 0 },
  { kategori: 'private', nama: 'OWNER RESELLER PANEL', harga: 20000, diskon: 0 },

  { kategori: 'vps', nama: 'RAM 2GB CORE 2', harga: 25000, diskon: 0 },
  { kategori: 'vps', nama: 'RAM 4GB CORE 2', harga: 30000, diskon: 0 },
  { kategori: 'vps', nama: 'RAM 8GB CORE 4', harga: 40000, diskon: 0 },
  { kategori: 'vps', nama: 'RAM 16GB CORE 4', harga: 50000, diskon: 20 },

  { kategori: 'bot', nama: 'MASA AKTIF 1BULAN', harga: 15000, diskon: 0 },
  { kategori: 'bot', nama: 'MASA AKTIF 2BULAN', harga: 30000, diskon: 0 },
  { kategori: 'bot', nama: 'MASA AKTIF PERMANEN', harga: 50000, diskon: 20 }
];

const kategoriMap = {
  public: 'SERVER PUBLIC',
  private: 'SERVER PRIVATE',
  vps: 'DIGITAL OCEAN',
  bot: 'BOT WA'
};

let selectedProduct = '';
let selectedPrice = 0;
let selectedPayment = '';
let selectedKategori = '';
let darkMode = false;
let produkPromoId = '';

const altIconMap = {
  public: 'Pterodactyl',
  private: 'Pterodactyl',
  vps: 'Digital Ocean',
  bot: 'Bot WhatsApp'
};

const iconMap = {
  public: 'https://iili.io/FTuUKvV.md.png', 
  private: 'https://iili.io/FTuUKvV.md.png',
  vps: 'https://iili.io/FTuUFYQ.png',
  bot: 'https://iili.io/FT0en4t.png'
};

function renderProduk() {
  const containerPublic = document.getElementById('list-public');
  const containerPrivate = document.getElementById('list-private');
  const containerVps = document.getElementById('list-vps');
  const containerBot = document.getElementById('list-bot');
  
  containerPublic.innerHTML = '';
  containerPrivate.innerHTML = '';
  containerVps.innerHTML = '';
  containerBot.innerHTML = '';

  produkList.forEach(p => {
  const el = document.createElement('div');
  el.className = 'product';

  const hargaDiskon = p.diskon ? p.harga - (p.harga * p.diskon / 100) : p.harga;
  const hargaAsli = p.diskon ? `<span style="text-decoration: line-through; color: gray; font-size: 0.9rem;">Rp${formatCurrency(p.harga)}</span>` : '';
  const labelDiskon = p.diskon ? `<div style="position:absolute; top:10px; right:10px; background:red; color:white; padding:2px 6px; border-radius:4px; font-size:0.75rem;">-${p.diskon}%</div>` : '';

  el.innerHTML = `
    ${labelDiskon}
    <img src="${iconMap[p.kategori]}" alt="${altIconMap[p.kategori] || 'Icon'}">
    <h3>${p.nama}</h3>
    <p class="price">${hargaAsli} <br> <strong style="color:#28a745;">Rp<span>${formatCurrency(hargaDiskon)}</span></strong></p>
    <button onclick="selectProduct('${p.nama}', ${hargaDiskon}, '${p.kategori}')" data-title="${p.nama}">Beli</button>
  `;

  if (p.kategori === 'public') containerPublic.appendChild(el);
  if (p.kategori === 'private') containerPrivate.appendChild(el);
  if (p.kategori === 'vps') containerVps.appendChild(el);
  if (p.kategori === 'bot') containerBot.appendChild(el);
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

function showPromoPopup() {
  const produkDiskon = produkList.filter(p => p.diskon && p.diskon > 0);
  if (produkDiskon.length === 0) return;

  const best = produkDiskon.sort((a, b) => b.diskon - a.diskon)[0];
  const kategoriId = `list-${best.kategori}`;

  produkPromoId = best.nama;

  const isi = `Diskon ${best.diskon}% untuk <strong>${best.nama}</strong> di kategori <strong>${kategoriMap[best.kategori]}</strong>!`;
  document.getElementById('promo-content').innerHTML = isi;
  document.getElementById('popup-promo').style.display = 'flex';
}

function showPromoDiskonBaru() {
  const promoDitampilkan = JSON.parse(localStorage.getItem('promoTertampil')) || [];

  const produkDiskonBaru = produkList.filter(p => p.diskon > 0 && !promoDitampilkan.includes(p.nama));
  if (produkDiskonBaru.length === 0) return;

  const produk = produkDiskonBaru[0];
  produkPromoId = produk.nama;

  const isi = `Diskon ${produk.diskon}% untuk <strong>${produk.nama}</strong> di kategori <strong>${kategoriMap[produk.kategori]}</strong>!`;
  document.getElementById('promo-content').innerHTML = isi;
  document.getElementById('popup-promo').style.display = 'flex';

  promoDitampilkan.push(produk.nama);
  localStorage.setItem('promoTertampil', JSON.stringify(promoDitampilkan));
}

function goToDiskonProduk() {
  closePromo();

  const produkElements = document.querySelectorAll('.product');

  produkElements.forEach(p => {
    const title = p.querySelector('button')?.getAttribute('data-title');
    if (title === produkPromoId) {
      p.scrollIntoView({ behavior: 'smooth', block: 'center' });
      p.style.boxShadow = '0 0 15px 3px #00c8ff';
      setTimeout(() => {
        p.style.boxShadow = '';
      }, 2000);
    }
  });
}

function closePromo() {
  document.getElementById('popup-promo').style.display = 'none';
  localStorage.setItem('promoSeen', 'true');
}

function batalkanProgressPesanan() {
  localStorage.removeItem('progressPesanan');
  document.getElementById('lanjutkan-box').style.display = 'none';
  showToast('Pesanan dibatalkan.');
}

function updateSeringDilihatLabel() {
  const views = JSON.parse(localStorage.getItem('productViews')) || {};
  const productElements = document.querySelectorAll('.product');

  let maxViews = 0;
  let topProduct = '';

  for (const [product, count] of Object.entries(views)) {
    if (count > maxViews) {
      maxViews = count;
      topProduct = product;
    }
  }

  document.querySelectorAll('.label-sering').forEach(el => el.remove());

  productElements.forEach(p => {
    const button = p.querySelector('button');
    const title = button?.getAttribute('data-title') || '';

    if (title === topProduct && maxViews > 0) {
      const label = document.createElement('span');
      label.className = 'label-sering';
      label.innerText = 'Sering Dilihat';
      p.appendChild(label);
    }
  });
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

function formatCurrency(amount) {
  amount = Number(amount) || 0;
  return amount.toLocaleString('id-ID');
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
  showPromoDiskonBaru();

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
  const keyword = document.getElementById('search').value.toLowerCase().trim();
  const kategoriFilter = document.getElementById('filter-kategori').value;

  const products = document.querySelectorAll('.product');
  let found = 0;

  products.forEach(p => {
    const title = p.querySelector('h3')?.innerText.toLowerCase() || '';
    const category = p.querySelector('img')?.alt.toLowerCase() || '';
    const matchSearch = title.includes(keyword) || category.includes(keyword);

    const parentList = p.parentElement?.id || '';
    const matchKategori =
      !kategoriFilter ||
      (kategoriFilter === 'public' && parentList === 'list-public') ||
      (kategoriFilter === 'private' && parentList === 'list-private') ||
      (kategoriFilter === 'vps' && parentList === 'list-vps') ||
      (kategoriFilter === 'bot' && parentList === 'list-bot');

    const tampilkan = matchSearch && matchKategori;

    p.style.display = tampilkan ? 'block' : 'none';
    if (tampilkan) found++;
  });

  if (keyword && found === 0) {
    showAlert('Produk tidak ditemukan');
  }
}
