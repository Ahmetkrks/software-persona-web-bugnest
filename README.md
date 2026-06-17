# BugNest

BugNest, yazılım projeleri için hazırlanmış mini bir issue, bug ve geri bildirim takip uygulamasıdır. Kullanıcı; kayıt oluşturabilir, issue kartlarını listeleyebilir, mevcut kayıtları güncelleyebilir, silebilir ve durum takibi yapabilir.

## Teknolojiler

- React + Vite
- JavaScript
- Pure CSS
- LocalStorage
- Netlify uyumlu statik build

## Özellikler

- Issue ekleme
- Issue listeleme
- Issue düzenleme
- Issue silme
- Durum değiştirme
- Status ve type filtreleme
- Başlık/açıklama üzerinden arama
- Toplam, open, in review, resolved ve critical istatistikleri
- LocalStorage ile kalıcı veri saklama
- Boş sonuç durumunda EmptyState gösterimi

## CRUD Açıklaması

- Create: Form üzerinden yeni issue oluşturulur ve listeye eklenir.
- Read: LocalStorage'dan gelen veya örnek olarak üretilen issue kayıtları kart olarak listelenir.
- Update: Edit butonu ile form aynı kaydı düzenleme modunda açar ve Update Issue ile kayıt güncellenir.
- Delete: Delete butonu ilgili issue kaydını listeden ve LocalStorage'dan kaldırır.

## Klasör Yapısı

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

Build almak için:

```bash
npm run build
```

## Netlify Deployment Notu

Netlify üzerinde build command olarak `npm run build`, publish directory olarak `dist` seçilmelidir. Proje backend veya API kullanmadığı için statik olarak yayınlanabilir.

## Ekran Görüntüsü

![BugNest ekran goruntusu](./screenshot-placeholder.png)

## Yazar

Ahmet Karaköse
