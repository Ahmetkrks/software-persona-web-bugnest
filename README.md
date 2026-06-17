# BugNest - Mini Hata ve Geri Bildirim Takip Uygulaması

BugNest, yazılım projelerinde hata, geliştirme isteği ve geri bildirim kayıtlarını takip etmek için geliştirilmiş basit bir React uygulamasıdır. Web Development / JavaScript staj projesi olarak hazırlanmıştır ve React ile temel CRUD işlemlerinin nasıl uygulanacağını gösterir.

Uygulama backend, API veya kimlik doğrulama kullanmaz. Veriler tarayıcıdaki LocalStorage alanında saklanır.

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- Pure CSS
- LocalStorage

## Özellikler

- Hata kaydı ekleme
- Hata kayıtlarını listeleme
- Hata kaydı güncelleme
- Hata kaydı silme
- Durum ve tür bazlı filtreleme
- Başlık ve açıklama içinde arama
- Temel istatistikleri gösterme
- Verileri LocalStorage içinde saklama
- Açık / koyu tema seçimi
- Türkçe / İngilizce dil seçimi

## CRUD İşlemleri

### Create / Ekleme

Kullanıcı form üzerinden yeni bir hata kaydı oluşturabilir. Başlık, açıklama, tür, öncelik, durum ve atanan kişi bilgileri kaydedilir.

### Read / Listeleme

Kayıtlar kart yapısında listelenir. LocalStorage boşsa uygulama örnek kayıtlarla başlar.

### Update / Güncelleme

Kullanıcı mevcut bir kaydı düzenleme modunda açabilir ve bilgilerini güncelleyebilir. Ayrıca kayıt durumu doğrudan kart üzerinden değiştirilebilir.

### Delete / Silme

Kullanıcı istediği hata kaydını silebilir. Silinen kayıt LocalStorage içinden de kaldırılır.

## Proje Klasör Yapısı

```text
src/
  components/
    EmptyState.jsx
    FilterBar.jsx
    Header.jsx
    IssueCard.jsx
    IssueForm.jsx
    StatsPanel.jsx
  pages/
    About.jsx
    Home.jsx
  interfaces/
    issueModel.js
  utils/
    localStorage.js
    translations.js
  App.jsx
  main.jsx
  index.css
```

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak Vite geliştirme sunucusunda çalışır:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Build çıktısı `dist` klasöründe oluşturulur.

## Deployment Notu

Bu proje statik bir React + Vite uygulamasıdır. Netlify, Vercel veya benzer statik hosting servislerine kolayca deploy edilebilir.

Netlify için:

- Build command: `npm run build`
- Publish directory: `dist`

## Ekran Görüntüsü

Proje ekran görüntüsü bu alana eklenebilir.
