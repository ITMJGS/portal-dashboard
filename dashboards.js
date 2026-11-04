/*
 * Daftar dashboard di portal.
 * Untuk menambah dashboard: salin satu blok { ... }, ganti isinya, simpan (commit).
 *
 * id  → dipakai untuk link pendek:  https://<akun>.github.io/<repo>/<id>
 *        contoh: .../portal-dashboard/fo  atau  .../portal-dashboard/?d=fo
 * url → link Web app (Apps Script) atau link dashboard lain.
 * bingkai → true: dashboard tampil di dalam halaman GitHub, alamat di browser tetap alamat GitHub.
 *           Syarat: doGet di Apps Script-nya memakai
 *           .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
 *           false: pengunjung dialihkan ke alamat Apps Script.
 */
window.PORTAL = {
  judul: 'Portal Dashboard',
  eyebrow: 'Mercure Jakarta Gatot Subroto',
  subjudul: 'Pilih dashboard yang ingin dibuka.',
};

window.DASHBOARDS = [
  {
    id: 'fo',
    nama: 'Performa Front Office',
    departemen: 'Front Office & Housekeeping',
    deskripsi: 'Check-in dan check-out, jam sibuk, asal tamu, request & issue, housekeeping.',
    url: 'https://script.google.com/macros/s/AKfycbzw9eEpvS9MKyNAJ-Fn-2uRhJhpsyQulb14uUEYU1cdwmlA1jRH4bkNAd2e4rAmOJZ2/exec',
    bingkai: true,
  },
  {
    id: 'sales',
    nama: 'Produksi Perusahaan & Event',
    departemen: 'Sales',
    deskripsi: 'Room nights, revenue, event Fullboard/Fullday/Halfday dan tier perusahaan per bulan.',
    url: 'https://script.google.com/macros/s/AKfycbzaKeGPq-ediA7cwyQEbv-Jny5kKuZNznEbibO97-8FVYpX2rKG3SWFTqeYbvPCv4ix/exec',
    bingkai: true,
  },
  {
    id: 'fnb',
    nama: 'Penjualan F&B',
    departemen: 'Food & Beverage',
    deskripsi: 'Pendapatan, transaksi, tamu dan rata-rata per check untuk 7 restoran, per menu dan waktu makan.',
    url: 'https://script.google.com/macros/s/AKfycbzi9DJUwi2j81Xi0dvzvKaN8srhfc1uH7n82YQgVgra_BxlKEr3cb63SrhelD2rQ38/exec',
    bingkai: true,
  },
];
