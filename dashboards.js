/*
 * Daftar dashboard di portal.
 * Untuk menambah dashboard: salin satu blok { ... }, ganti isinya, simpan (commit).
 *
 * id  → dipakai untuk link pendek:  https://<akun>.github.io/<repo>/<id>
 *        contoh: .../portal-dashboard/fo  atau  .../portal-dashboard/?d=fo
 * url → link Web app (Apps Script) atau link dashboard lain.
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
  },
  {
    id: 'sales',
    nama: 'Produksi Perusahaan & Event',
    departemen: 'Sales',
    deskripsi: 'Room nights, revenue, event Fullboard/Fullday/Halfday dan tier perusahaan per bulan.',
    url: 'https://script.google.com/macros/s/AKfycbzaKeGPq-ediA7cwyQEbv-Jny5kKuZNznEbibO97-8FVYpX2rKG3SWFTqeYbvPCv4ix/exec',
  },
];
