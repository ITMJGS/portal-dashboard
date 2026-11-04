# Portal Dashboard

Satu link untuk semua dashboard. Dibuat sebagai situs statis di GitHub Pages.

## Link yang tersedia

Misalnya repo bernama `portal-dashboard` di akun `nama-akun`:

| Link | Hasil |
|---|---|
| `https://nama-akun.github.io/portal-dashboard/` | Halaman portal berisi semua dashboard |
| `https://nama-akun.github.io/portal-dashboard/fo` | Langsung ke Dashboard Performa Front Office |
| `https://nama-akun.github.io/portal-dashboard/sales` | Langsung ke Dashboard Produksi Perusahaan & Event |
| `https://nama-akun.github.io/portal-dashboard/?d=fo` | Sama seperti `/fo` |

## Memasang di GitHub (lewat browser, tanpa install apa pun)

1. Masuk ke github.com → tombol **New** (repository baru).
   Nama: `portal-dashboard`, pilih **Public**, centang *Add a README file*, lalu **Create repository**.
2. Di repo tersebut: **Add file → Upload files**, seret semua file dari folder ini
   (`index.html`, `404.html`, `dashboards.js`, `portal.js`, `style.css`, `.nojekyll`, `README.md`),
   lalu **Commit changes**.
3. **Settings → Pages** → *Source*: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.
4. Tunggu 1–2 menit. Link portal muncul di bagian atas halaman Settings → Pages.

## Menambah atau mengubah dashboard

Edit `dashboards.js` langsung di GitHub (ikon pensil), salin satu blok `{ ... }`,
ganti `id`, `nama`, `departemen`, `deskripsi` dan `url`, lalu **Commit changes**.
Perubahan tampil dalam 1–2 menit. Tidak perlu membuat file atau folder baru untuk link pendek.

## Catatan

- Repo dan GitHub Pages pada akun gratis bersifat **publik**: siapa pun yang tahu link-nya bisa melihat
  daftar dashboard dan alamat Web app-nya. Data di dalam dashboard tetap dilindungi oleh pengaturan akses
  masing-masing Web app (Google akan meminta login bila perlu).
- Link pendek (`/fo`, `/sales`, `/fnb`) bekerja lewat `404.html`: GitHub Pages menampilkan halaman itu untuk
  alamat yang tidak ada, lalu dashboard yang sesuai ditampilkan di dalam bingkai. Alamat di browser tetap
  alamat GitHub.
- Supaya bisa tampil di dalam bingkai, setiap Apps Script harus mengizinkannya. Di fungsi `doGet`, tambahkan
  `.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)` pada `HtmlOutput` yang dikembalikan, lalu
  **Deploy → Manage deployments → Edit → Version: New version**. Tanpa baris ini bingkainya kosong;
  tombol **Buka di tab penuh ↗** tetap bisa dipakai.
- Web app sebaiknya di-deploy dengan akses **Anyone**. Halaman login Google tidak bisa tampil di dalam
  bingkai, jadi akses yang mewajibkan login bisa membuat bingkai kosong bagi yang belum login.
