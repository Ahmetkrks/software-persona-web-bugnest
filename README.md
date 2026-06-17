# BugNest

BugNest, yazilim projeleri icin hazirlanmis mini bir issue, bug ve geri bildirim takip uygulamasidir. Kullanici; kayit olusturabilir, issue kartlarini listeleyebilir, mevcut kayitlari guncelleyebilir, silebilir ve durum takibi yapabilir.

## Teknolojiler

- React + Vite
- JavaScript
- Pure CSS
- LocalStorage
- Netlify uyumlu statik build

## Ozellikler

- Issue ekleme
- Issue listeleme
- Issue duzenleme
- Issue silme
- Durum degistirme
- Status ve type filtreleme
- Baslik/aciklama uzerinden arama
- Toplam, open, in review, resolved ve critical istatistikleri
- LocalStorage ile kalici veri saklama
- Bos sonuc durumunda EmptyState gosterimi

## CRUD Aciklamasi

- Create: Form uzerinden yeni issue olusturulur ve listeye eklenir.
- Read: LocalStorage'dan gelen veya ornek olarak uretilen issue kayitlari kart olarak listelenir.
- Update: Edit butonu ile form ayni kaydi duzenleme modunda acar ve Update Issue ile kayit guncellenir.
- Delete: Delete butonu ilgili issue kaydini listeden ve LocalStorage'dan kaldirir.

## Klasor Yapisi

```text
src/
  components/
    EmptyState.jsx
    FilterBar.jsx
    Header.jsx
    IssueCard.jsx
    IssueForm.jsx
    StatsPanel.jsx
  interfaces/
    issueModel.js
  pages/
    About.jsx
    Home.jsx
  utils/
    localStorage.js
  App.jsx
  index.css
  main.jsx
```

## Kurulum

```bash
npm install
npm run dev
```

Build almak icin:

```bash
npm run build
```

## Netlify Deployment Notu

Netlify uzerinde build command olarak `npm run build`, publish directory olarak `dist` secilmelidir. Proje backend veya API kullanmadigi icin statik olarak yayinlanabilir.

## Ekran Goruntusu

![BugNest ekran goruntusu](./screenshot-placeholder.png)

## Yazar

Ahmet Karakose
