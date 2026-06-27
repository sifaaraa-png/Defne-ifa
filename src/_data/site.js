module.exports = {
  ad: "Defne Şifa",
  slogan: "Doğanın şifası, Hatay'ın bereketi",
  aciklama: "Şifalı bitkiler, doğal yaşam, sağlıklı beslenme ve Hatay'ın yöresel şifa kaynakları üzerine güvenilir, sade ve faydalı bilgi.",
  url: "https://defnesifa.com",
  whatsapp: "905458213922",
  whatsappGorunen: "0545 821 39 22",
  eposta: "info@defnesifa.com",
  konum: "İskenderun, Hatay",
  yazar: "Defne Şifa Ekibi",
  yil: new Date().getFullYear(),
  // Sosyal medya — linkleri sonra doldurulacak. Boş bırakılanlar sitede gösterilmez.
  sosyal: {
    instagram: "",
    youtube: "",
    pinterest: "",
    facebook: ""
  },
  kategoriler: [
    { slug: "sifali-bitkiler", ad: "Şifalı Bitkiler", aciklama: "Bitkilerin faydaları, kullanımı ve doğru bilgiler." },
    { slug: "saglikli-beslenme", ad: "Sağlıklı Beslenme", aciklama: "Dengeli beslenme, doğal gıdalar ve mutfak bilgisi." },
    { slug: "yasam-kalitesi", ad: "Yaşam Kalitesi", aciklama: "Beden, zihin ve günlük yaşam için iyi gelen öneriler." },
    { slug: "hatay-yoresel", ad: "Hatay Yöresel", aciklama: "Defne, zahter, zeytin ve Hatay'ın doğal hazineleri." },
    { slug: "dogal-yasam", ad: "Doğal Yaşam", aciklama: "Doğala dönüş, ev yapımı tarifler ve sade yaşam." },
    { slug: "hatayi-kesfet", ad: "Hatay'ı Keşfet", aciklama: "Gezilecek yerler, tarihi mekanlar, türbeler ve doğal güzellikler." }
  ],
  // Otomatik kategori sayfası üretilecekler (hatayi-kesfet'in özel sayfası var, hariç)
  anaKategoriler: [
    { slug: "sifali-bitkiler", ad: "Şifalı Bitkiler", aciklama: "Bitkilerin faydaları, kullanımı ve doğru bilgiler." },
    { slug: "saglikli-beslenme", ad: "Sağlıklı Beslenme", aciklama: "Dengeli beslenme, doğal gıdalar ve mutfak bilgisi." },
    { slug: "yasam-kalitesi", ad: "Yaşam Kalitesi", aciklama: "Beden, zihin ve günlük yaşam için iyi gelen öneriler." },
    { slug: "hatay-yoresel", ad: "Hatay Yöresel", aciklama: "Defne, zahter, zeytin ve Hatay'ın doğal hazineleri." },
    { slug: "dogal-yasam", ad: "Doğal Yaşam", aciklama: "Doğala dönüş, ev yapımı tarifler ve sade yaşam." }
  ],
  // Hatay'ı Keşfet alt türleri (dropdown menü için)
  kesfetTurleri: [
    { slug: "gezilecek-yerler", ad: "Gezilecek Yerler", ikon: "🏞️" },
    { slug: "tarihi-yerler", ad: "Tarihi Yerler", ikon: "🏛️" },
    { slug: "turbeler", ad: "Türbe ve Makamlar", ikon: "🕌" },
    { slug: "dogal-guzellikler", ad: "Doğal Güzellikler", ikon: "🌄" }
  ],
  // Hatay ilçeleri (dropdown menü için)
  ilceler: [
    "İskenderun", "Antakya", "Defne", "Dörtyol", "Payas", "Arsuz",
    "Belen", "Kırıkhan", "Reyhanlı", "Samandağ", "Yayladağı",
    "Altınözü", "Hassa", "Kumlu", "Erzin"
  ]
};
