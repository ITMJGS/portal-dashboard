(function () {
  var P = window.PORTAL || {};
  var DASHBOARDS = window.DASHBOARDS || [];
  var COLORS = ['--s1', '--s2', '--s3', '--s4'];
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c];
    });
  };
  var ok = function (d) { return /^https:\/\//.test(d.url || ''); };
  // Alamat dasar portal, mis. https://akun.github.io/portal-dashboard/
  var base = location.origin + location.pathname.replace(/[^/]*$/, '');

  if (P.judul) { $('judul').textContent = P.judul; document.title = P.judul; }
  $('eyebrow').textContent = P.eyebrow || '';
  $('subjudul').textContent = P.subjudul || '';

  /* Tema, sama seperti HK FO */
  var root = document.documentElement;
  var isDark = function () {
    return root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  };
  var paint = function () { $('themeBtn').textContent = isDark() ? 'Tema terang' : 'Tema gelap'; };
  try { if (localStorage.getItem('portal-theme')) root.dataset.theme = localStorage.getItem('portal-theme'); } catch (e) {}
  $('themeBtn').onclick = function () {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('portal-theme', root.dataset.theme); } catch (e) {}
    paint();
  };
  paint();

  function card(d, i) {
    var color = 'var(' + COLORS[i % COLORS.length] + ')';
    var head = '<div class="dept"><span class="key" style="background:' + color + '"></span>' + esc(d.departemen) + '</div>' +
      '<h2>' + esc(d.nama) + '</h2><p>' + esc(d.deskripsi) + '</p>';
    if (!ok(d)) {
      return '<div class="card off">' + head + '<div class="go"><span class="pill">Link belum diisi</span></div></div>';
    }
    var link = base + encodeURIComponent(d.id);
    return '<div class="card">' + head +
      '<div class="short">' + esc(link) + '</div>' +
      '<div class="go"><a class="main" href="' + esc(link) + '">Buka dashboard →</a>' +
      '<a class="nt" href="' + esc(link) + '" target="_blank" rel="noopener">Tab baru ↗</a></div></div>';
  }

  // ?d=<id> yang tidak dikenal atau link-nya belum diisi
  var id = new URLSearchParams(location.search).get('d');
  var picked = id && DASHBOARDS.find(function (x) { return x.id === id; });
  var view = $('view');
  if (id && (!picked || !ok(picked))) {
    view.innerHTML = '<div class="focus"><div class="card"><h2>Dashboard tidak ditemukan</h2>' +
      '<p>' + (picked ? 'Link untuk "' + esc(picked.nama) + '" belum diisi.' : 'Tidak ada dashboard dengan kode "' + esc(id) + '".') + '</p>' +
      '<a class="btn" href="' + esc(base) + '">Lihat semua dashboard</a></div></div>';
    return;
  }
  view.innerHTML = '<div class="sec">Dashboard</div><div class="sec-sub">' + DASHBOARDS.length +
    ' dashboard tersedia. Klik kartu untuk membuka.</div><div class="grid">' + DASHBOARDS.map(card).join('') + '</div>';
})();
