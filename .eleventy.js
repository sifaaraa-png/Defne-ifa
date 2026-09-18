module.exports = function (eleventyConfig) {
  // Statik klasörleri kopyala
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Tarih formatı (Türkçe)
  eleventyConfig.addFilter("tarih", function (date) {
    const aylar = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
    const d = new Date(date);
    return `${d.getDate()} ${aylar[d.getMonth()]} ${d.getFullYear()}`;
  });

  // Kategoriye göre yazı koleksiyonları
  const kategoriler = [
    "sifali-bitkiler",
    "saglikli-beslenme",
    "yasam-kalitesi",
    "hatay-yoresel",
    "dogal-yasam"
  ];

  kategoriler.forEach((kat) => {
    eleventyConfig.addCollection(kat, function (collectionApi) {
      return collectionApi
        .getFilteredByGlob("src/posts/*.md")
        .filter((item) => item.data.kategori === kat)
        .sort((a, b) => b.date - a.date);
    });
  });

  // Tüm yazılar
  eleventyConfig.addCollection("tumYazilar", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });


  // ISO tarih (sitemap, schema)
  eleventyConfig.addFilter("iso", function (date) {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  });

  // İlk N öğe
  eleventyConfig.addFilter("head", function (array, n) {
    if (!Array.isArray(array)) return [];
    return array.slice(0, n);
  });

  // İlgili yazılar (aynı kategoriden, kendisi hariç)
  eleventyConfig.addFilter("ilgili", function (collection, currentUrl, kategori) {
    return collection
      .filter((item) => item.data.kategori === kategori && item.url !== currentUrl)
      .slice(0, 3);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
