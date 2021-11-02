import {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
  bilgiler,
  yapılanAlışlar,
  alınıyor2,
  satılıyor,
  yapılanSatışlar,
  urun2,
  urunHareketleri,
} from "../data";

const INITIAL_STATE = {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
  bilgiler,
  yapılanAlışlar,
  alınıyor2,
  satılıyor,
  yapılanSatışlar,
  urun2,
  urunHareketleri,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GİRİŞ":
      { state.personel.find((perns) => perns.kullanıcıAdı === action.gkullanıcı)
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? console.log("giriş başarılı")
            : alert("şifre hatalı")
          : alert("kullanıcı adı hatalı");
      }

      return {
        ...state,

        kullanıcı: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? state.personel.find(
                (perns) => perns.kullanıcıAdı === action.gkullanıcı
              )
            : { ...state.kullanıcı }
          : { ...state.kullanıcı },

        giriş: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? true
            : false
          : false,
      };

    case "KALK":
      return {
        ...state,

        giriş: false,
        kullanıcı: {
          kullanıcıAdı: null,
          şifre: null,
          giriş: false,
          çıkış: false,
          işlemler: false,
          yetkilendirme: false,
        },
      };

    case "SIL":
      return {
        ...state,
        alınıyor: state.alınıyor.find((sil) => sil.id === action.payload)
          ? state.alınıyor.filter((filt) => filt.id !== action.payload)
          : [...state.alınıyor],
      };
    case "SIL2":
      return {
        ...state,
        satılıyor: state.satılıyor.find((sil) => sil.id === action.payload)
          ? state.satılıyor.filter((filt) => filt.id !== action.payload)
          : [...state.satılıyor],
      };

    case "ALINIYOR":
      return {
        ...state,
        alınıyor: [...state.alınıyor, { ...action.payload, artı: 0 }],
      };
    case "SATILIYOR":
      return {
        ...state,
        satılıyor: [...state.satılıyor, { ...action.payload, eksi: 0 }],
      };

    case "YENI_URUN":
      return {
        ...state,

        alınıyor: [alınıyor.filter((saas) => saas.id !== action.payload.id)],
      };

    case "SINIF":
      return {
        ...state,

        sınıflar: [...sınıflar, action.payload],
      };
    case "BİRİM":
      return {
        ...state,

        birimler: [...birimler, action.payload],
      };

    case "YENİ_ÜRÜN_EKLE":

      action.id === ""
        ? alert("Lütfen Seri No giriniz")
        : state.data.find((item) => item.id === action.id)
        ? alert(
            "Bu Seri No zaten kullanılıyor. Lütfen Benzersiz bir Seri No giriniz."
          )
        : action.ad === ""
        ? alert("Lütfen Ürün Adı giriniz")
        : action.snf === ""
        ? alert(
            "Lütfen Birim seçiniz. Listede yoksa Yeni Birim ekleyip seçiniz."
          )
        : action.brm === ""
        ? alert(
            "Lütfen Sınıf seçiniz. Listede yoksa Yeni Sınıf ekleyip seçiniz."
          )
        : action.foto === ""
        ? alert("Lütfen Fotoğraf Linki giriniz")
        : console.log(".");

      return {
        ...state,

        data:
          action.id === ""
            ? [...state.data]
            : state.data.find((item) => item.id === action.id)
            ? [...state.data]
            : action.ad === ""
            ? [...state.data]
            : action.snf === ""
            ? [...state.data]
            : action.brm === ""
            ? [...state.data]
            : action.foto === ""
            ? [...state.data]
            : [
                ...state.data,
                {
                  id: action.id,
                  ürün: action.ad,
                  sınıf: action.snf,
                  birim: action.brm,
                  fotograf: action.foto,
                  stok: 0,
                }
              ],
      };

    case "BELGE_EKLE":
      return {
        ...state,
      };

    case "ARTILARI_EKLEME":
      return {
        ...state,

        alınıyor: state.alınıyor.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                artı: Number(action.değer),
              }
            : { ...içerik }
        ),

        data: state.data.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                stok: içerik.stok + Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "ARTILARI_EKLEME2":
      return {
        ...state,

        satılıyor: state.satılıyor.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                eksi: Number(action.değer),
              }
            : { ...içerik }
        ),

        data: state.data.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                stok: içerik.stok - Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "SON_EKLEME":
      return {
        ...state,

        yapılanAlışlar: [
          ...state.yapılanAlışlar,
          [
            {
              alıcı: action.alıcı,
              alınanŞirket: action.alınanŞirket,
              açıklama: action.açıklama,
              belgeNo: action.belgeNo,
              satıcı: action.satıcı,
              tarih: action.tarih,
              onayVerenKullanıcı: state.kullanıcı.kullanıcıAdı,
              onayTarihi: new Date().toLocaleDateString(),
            },
            state.alınıyor,
          ],
        ],

        alınıyor: [],
      };
    case "SON_EKLEME2":
      return {
        ...state,

        yapılanSatışlar: [
          ...state.yapılanSatışlar,
          [
            {
              alıcı: action.alıcı,
              alınanŞirket: action.alınanŞirket,
              açıklama: action.açıklama,
              belgeNo: action.belgeNo,
              satıcı: action.satıcı,
              tarih: action.tarih,
              onayVerenKullanıcı: state.kullanıcı.kullanıcıAdı,
              onayTarihi: new Date().toLocaleDateString(),
            },
            state.satılıyor,
          ],
        ],

        satılıyor: [],
      };

    case "EKLEME_HATASI":
      return {
        ...state,
      };
    case "EKLEME_HATASI2":
      return {
        ...state,
      };
    case "BELGEYİ_TEMİZLE":
      return {
        ...state,
        alınıyor: [],
      };
    case "BELGEYİ_TEMİZLE2":
      return {
        ...state,
        satılıyor: [],
      };

    case "LİNK":
      return {
        ...state,
        alınıyor2: action.payload,
      };

    case "LİNK2":
      return {
        ...state,
        satılıyor2: action.payload,
      };

    case "ALIŞ_İŞLEMİ_SİLME":
      return {
        ...state,

        yapılanAlışlar: state.yapılanAlışlar.filter(
          (alış) => alış[0].belgeNo !== state.alınıyor2
        ),

        alınıyor2: [],
      };

    case "SATIŞ_İŞLEMİ_SİLME":
      return {
        ...state,

        yapılanSatışlar: state.yapılanSatışlar.filter(
          (alış) => alış[0].belgeNo !== state.satılıyor2
        ),

        satılıyor2: [],
      };

    case "ARTILARI_SİLME":
      return {
        ...state,
        data: state.data.map((içerik) =>
          içerik.id === action.id
            ? {
                ...içerik,
                stok: içerik.stok - Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "ARTILARI_SİLME2":
      return {
        ...state,
        data: state.data.map((içerik) =>
          içerik.id === action.id
            ? {
                ...içerik,
                stok: içerik.stok + Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "GİRİŞ_DEĞİŞ":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.kullanıcıAdı === action.payload
            ? { ...pers, giriş: !pers.giriş }
            : { ...pers }
        ),
      };

    case "ÇIKIŞ_DEĞİŞ":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.kullanıcıAdı === action.payload
            ? { ...pers, çıkış: !pers.çıkış }
            : { ...pers }
        ),
      };

    case "İŞLEM_DEĞİŞ":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.kullanıcıAdı === action.payload
            ? { ...pers, işlemler: !pers.işlemler }
            : { ...pers }
        ),
      };
    case "KULLANICI_EKLE":
      return {
        ...state,
        personel: [
          ...state.personel,
          {
            kullanıcıAdı: action.payload,
            şifre: "asdfasdf",
            giriş: action.girş,
            çıkış: action.çıkş,
            işlemler: action.işlm,
            yetkilendirme: false,
          },
        ],
      };
    case "PERSONELİ_SİL":
      return {
        ...state,
        personel: state.personel.filter(
          (pers) => pers.kullanıcıAdı !== action.payload
        ),
      };
    case "URUN2":
      return {
        ...state,
        urun2: action.payload,
      };

    case "URUN_HAREKETI_EKLE":
      return {
        ...state,
        urunHareketleri: [
          ...state.urunHareketleri,
          {
            id: action.item,
            belgeNo: action.belgeNo,
            işlem: "alış",
            değer: action.değer,
            alıcı: action.alıcı,
            alınanŞirket: action.alınanŞirket,
            tarih: action.tarih,
          },
        ],
      };

    case "URUN_HAREKET_EKLEME":
      return {
        ...state,
        urunHareketleri: [
          ...state.urunHareketleri,
          {
            id: action.item,
            belgeNo: action.belgeNo,
            işlem: "satış",
            değer: action.değer,
            alıcı: action.alıcı,
            alınanŞirket: action.alınanŞirket,
            tarih: action.tarih,
          },
        ],
      };

    case "URUN_HAREKETI_ALIS_SILME":
      return {
        ...state,
        urunHareketleri: 
          state.urunHareketleri.filter(
            (urun) => urun.belgeNo !== action.payload
          )
        
      };

    case "URUN_HAREKETI_SATIŞ_SILME":
      return {
        ...state,
        urunHareketleri: 
          state.urunHareketleri.filter(
            (urun) => urun.belgeNo !== action.payload
          )
      };

    default:
      return state;
  }
};
