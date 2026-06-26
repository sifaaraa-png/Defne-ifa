# Defne Şifa

Şifalı bitkiler, doğal yaşam, sağlıklı beslenme ve Hatay yöresel ürünleri üzerine içerik sitesi.

## Teknoloji
- Eleventy (statik site)
- Decap CMS (içerik yönetimi — /admin)
- Netlify (hosting + Identity + Git Gateway)

## Geliştirme
npm install
npm run dev    # http://localhost:8080

## Yayın
npm run build  # _site/ klasörüne üretir

## İçerik Ekleme
1. Netlify'da site yayında olduktan sonra /admin adresine git
2. Netlify Identity ile giriş yap
3. "Makaleler" altından yeni yazı ekle, kategori seç, kaydet

## Yapılacaklar (sonraki adımlar)
- Gerçek Defne Şifa logosunu src/img/logo.png ve favicon.png olarak değiştir
- Netlify Identity + Git Gateway aktive et (CMS girişi için)
- Domain (defnesifa.com) DNS'ini Netlify'a yönlendir
- Yarı-otomatik içerik üretim akışı (taslak → onay → yayın)
