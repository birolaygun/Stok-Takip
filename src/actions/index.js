
export const giriş = (eventq, gkullanıcı, gşifre) => {
  return { type: "GİRİŞ", payload: eventq, gkullanıcı, gşifre };
};

export const kalk = (eventq) => {
  return { type: "KALK", payload: eventq };
};

export const sil = (eventq) => {
  return { type: "SIL", payload: eventq };
};
export const sil2 = (eventq) => {
  return { type: "SIL2", payload: eventq };
};

export const alınıyor = (eventq) => {
  return { type: "ALINIYOR", payload: eventq };
};
export const satılıyor = (eventq) => {
  return { type: "SATILIYOR", payload: eventq };
};

export const yeniUrun = (eventq) => {
  return { type: "YENI_URUN", payload: eventq };
};

export const sınıf = (eventq) => {
  return { type: "SINIF", payload: eventq };
};

export const birim = (eventq) => {
  return { type: "BİRİM", payload: eventq };
};
export const yeniÜrünEkle = (even, id, ad, brm, snf, foto) => {
  return { type: "YENİ_ÜRÜN_EKLE", payload: even, id, ad, brm, snf, foto };
};

export const belgeEkle = (
  e,
alıcı,
  alınanŞirket,
  açıklama,
  belgeNo,
  satıcı,
  tarih
) => {
  return {
    type: "BELGE_EKLE",
    payload: e,
    alıcı,
    alınanŞirket,
    açıklama,
    belgeNo,
    satıcı,
    tarih,
  };
};



export const artılarıEkleme = (
  eventq,
  item,
  değer,

) => {
  return {
    type: "ARTILARI_EKLEME",
    payload: eventq,
    item,
    değer,

  };
};
export const artılarıEkleme2 = (
  eventq,
  item,
  değer,

) => {
  return {
    type: "ARTILARI_EKLEME2",
    payload: eventq,
    item,
    değer,

  };
};
export const sonEkleme = (
  eventq,
  alıcı,
  alınanŞirket,
  açıklama,
  belgeNo,
  satıcı,
  tarih
) => {
  return {
    type: "SON_EKLEME",
    payload: eventq,
    alıcı,
    alınanŞirket,
    açıklama,
    belgeNo,
    satıcı,
    tarih,
  };
};
export const sonEkleme2 = (
  eventq,
  alıcı,
  alınanŞirket,
  açıklama,
  belgeNo,
  satıcı,
  tarih
) => {
  return {
    type: "SON_EKLEME2",
    payload: eventq,
    alıcı,
    alınanŞirket,
    açıklama,
    belgeNo,
    satıcı,
    tarih,
  };
};

export const eklemeHatası = (
  eventq,
) => {
  return {
    type: "EKLEME_HATASI",
    payload: eventq
  };
};
export const eklemeHatası2 = (
  eventq,
) => {
  return {
    type: "EKLEME_HATASI2",
    payload: eventq
  };
};


export const belgeyiTemizle = () => {
  return {
    type: "BELGEYİ_TEMİZLE"
  };
};
export const belgeyiTemizle2 = () => {
  return {
    type: "BELGEYİ_TEMİZLE2"
  };
};

export const link = (evev) => {
  return {
    type: "LİNK",
    payload: evev
  };
};
export const link2 = (evev) => {
  return {
    type: "LİNK2",
    payload: evev
  };
};
export const alışİşlemiSilme = (evev) => {
  return {
    type: "ALIŞ_İŞLEMİ_SİLME",
    payload: evev,
  };
};
export const satışİşlemiSilme = (evev) => {
  return {
    type: "SATIŞ_İŞLEMİ_SİLME",
    payload: evev,
  };
};
export const artılarıSilme = (enn, id, değer) => {
  return {
    type: "ARTILARI_SİLME",
    payload: enn,
    id,
    değer,
  };
};

export const artılarıSilme2 = (enn, id, değer) => {
  return {
    type: "ARTILARI_SİLME2",
    payload: enn,
    id,
    değer,
  };
};
export const girişDeğiş = (person) => {
  return {
    type: "GİRİŞ_DEĞİŞ",
    payload: person,
  };
};
export const çıkışDeğiş = (person) => {
  return {
    type: "ÇIKIŞ_DEĞİŞ",
    payload: person,
  };
};
export const işlemDeğiş = (person) => {
  return {
    type: "İŞLEM_DEĞİŞ",
    payload: person,
  };
};
export const kullanıcıEkle = (kullanıcı, girş, çıkş, işlm) => {
  return {
    type: "KULLANICI_EKLE",
    payload: kullanıcı,
    girş,
    çıkş,
    işlm,
  };
};
export const personeliSil = (kullanıcıAdı) => {
  return {
    type: "PERSONELİ_SİL",
    payload: kullanıcıAdı,
  };
};
export const urun2 = (seri) => {
  return {
    type: "URUN2",
    payload: seri,
  };
};

export const urunHareketiEkle = (
  enn,
  alıcı,
  alınanŞirket,
  açıklama,
  belgeNo,
  satıcı,
  tarih,
  item,
  değer
) => {
  return {
    type: "URUN_HAREKETI_EKLE",
    payload: enn,
    alıcı,
    alınanŞirket,
    açıklama,
    belgeNo,
    satıcı,
    tarih,
    item,
    değer,
  };
};

export const ürünHareketiEkleme = (
  enn,
  alıcı,
  alınanŞirket,
  açıklama,
  belgeNo,
  satıcı,
  tarih,
  item,
  değer,
) => {
  return {
    type: "URUN_HAREKET_EKLEME",
    payload: enn,
    alıcı,
    alınanŞirket,
    açıklama,
    belgeNo,
    satıcı,
    tarih,
    item,
    değer,
  };
};

export const ürünHareketiAlışSilme = (belgeNo) => {
  return {
    type: "URUN_HAREKETI_ALIS_SILME",
    payload: belgeNo,
  };
};


export const ürünHareketleriSatışIplal = (belgeNo) => {
  return {
    type: "URUN_HAREKETI_SATIŞ_SILME",
    payload: belgeNo,
  };
};


