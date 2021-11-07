import {
  repository,
  login,
  personel,
  person,
  user,
  buyingNow,
  classes,
  units,
  datas,
  taken,
  buyingItem,
  sellingNow,
  sellingProcess,
  product,
  productProcess,
} from "../data";

const INITIAL_STATE = {
  repository,
  login,
  personel,
  person,
  user,
  buyingNow,
  classes,
  units,
  datas,
  taken,
  buyingItem,
  sellingNow,
  sellingProcess,
  product,
  productProcess,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      {
        state.personel.find((perns) => perns.userName === action.user)
          ? state.personel.find((perns) => perns.userName === action.user)
              .password === action.password
            ? console.log("login başarılı")
            : alert("şifre hatalı")
          : alert("kullanıcı adı hatalı");
      }
      return {
        ...state,

        user: state.personel.find((perns) => perns.userName === action.user)
          ? state.personel.find((perns) => perns.userName === action.user)
              .password === action.password
            ? state.personel.find((perns) => perns.userName === action.user)
            : { ...state.user }
          : { ...state.user },

        login: state.personel.find((perns) => perns.userName === action.user)
          ? state.personel.find((perns) => perns.userName === action.user)
              .password === action.password
            ? true
            : false
          : false,
      };

    case "LOGOUT":
      return {
        ...state,

        login: false,
        user: {
          userName: null,
          password: null,
          entry: false,
          checkOut: false,
          processes: false,
          authority: false,
        },
      };

    case "DEL":
      return {
        ...state,
        buyingNow: state.buyingNow.find((sil) => sil.id === action.payload)
          ? state.buyingNow.filter((filt) => filt.id !== action.payload)
          : [...state.buyingNow],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        sellingNow: state.sellingNow.find((sil) => sil.id === action.payload)
          ? state.sellingNow.filter((filt) => filt.id !== action.payload)
          : [...state.sellingNow],
      };

    case "BUYİNG":
      return {
        ...state,
        buyingNow: [...state.buyingNow, { ...action.payload, plus: 0 }],
      };

    case "SELLING":
      return {
        ...state,
        sellingNow: [...state.sellingNow, { ...action.payload, minus: 0 }],
      };

    case "NEW_PRODUCT":
      return {
        ...state,

        buyingNow: [
          buyingNow.filter((filter) => filter.id !== action.payload.id),
        ],
      };

    case "PRODUCT_CLASS":
      return {
        ...state,

        classes: [...classes, action.payload],
      };
    case "UNIT":
      return {
        ...state,
        units: [...units, action.payload],
      };

    case "ADD_NEW_PRODUCT":
      action.id === ""
        ? alert("Lütfen Seri No giriniz")
        : state.repository.find((item) => item.id === action.id)
        ? alert(
            "Bu Seri No zaten kullanılıyor. Lütfen Benzersiz bir Seri No giriniz."
          )
        : action.name === ""
        ? alert("Lütfen Ürün Adı giriniz")
        : action.classes === ""
        ? alert(
            "Lütfen Birim seçiniz. Listede yoksa Yeni Birim ekleyip seçiniz."
          )
        : action.unit === ""
        ? alert(
            "Lütfen Sınıf seçiniz. Listede yoksa Yeni Sınıf ekleyip seçiniz."
          )
        : action.photo === ""
        ? alert("Lütfen Fotoğraf Linki giriniz")
        : console.log(".");

      return {
        ...state,

        repository:
          action.id === ""
            ? [...state.repository]
            : state.repository.find((item) => item.id === action.id)
            ? [...state.repository]
            : action.name === ""
            ? [...state.repository]
            : action.classes === ""
            ? [...state.repository]
            : action.unit === ""
            ? [...state.repository]
            : action.photo === ""
            ? [...state.repository]
            : [
                ...state.repository,
                {
                  id: action.id,
                  productName: action.name,
                  productClass: action.classes,
                  productUnit: action.unit,
                  productPhoto: action.photo,
                  stock: 0,
                },
              ],
      };

    case "PLUS":
      return {
        ...state,

        buyingNow: state.buyingNow.map((cancel) =>
          cancel.id === action.item
            ? {
                ...cancel,
                plus: Number(action.value),
              }
            : { ...cancel }
        ),

        repository: state.repository.map((cancel) =>
          cancel.id === action.item
            ? {
                ...cancel,
                stock: cancel.stock + Number(action.value),
              }
            : { ...cancel }
        ),
      };

    case "MINUS":
      return {
        ...state,

        sellingNow: state.sellingNow.map((cancel) =>
          cancel.id === action.item
            ? {
                ...cancel,
                minus: Number(action.value),
              }
            : { ...cancel }
        ),

        repository: state.repository.map((cancel) =>
          cancel.id === action.item
            ? {
                ...cancel,
                stock: cancel.stock - Number(action.value),
              }
            : { ...cancel }
        ),
      };

    case "ADD":
      return {
        ...state,

        taken: [
          ...state.taken,
          [
            {
              costumer: action.costumer,
              company: action.company,
              explanation: action.explatation,
              DocumentNo: action.docNo,
              seller: action.seller,
              shoppingData: action.shoppingDate,
              userChecked: state.user.userName,
              dateChecked: new Date().toLocaleDateString(),
            },
            state.buyingNow,
          ],
        ],

        buyingNow: [],
      };

    case "PUSH":
      return {
        ...state,

        sellingProcess: [
          ...state.sellingProcess,
          [
            {
              costumer: action.costumer,
              company: action.company,
              explanation: action.explanation,
              DocumentNo: action.docNo,
              seller: action.seller,
              shoppingData: action.shopppingDate,
              userChecked: state.user.userName,
              dateChecked: new Date().toLocaleDateString(),
            },

            state.sellingNow,
          ],
        ],

        sellingNow: [],
      };

    case "CLEAR_DOC_BUY":
      return {
        ...state,
        buyingNow: [],
      };
    case "CLEAR_DOC_SELL":
      return {
        ...state,
        sellingNow: [],
      };

    case "BUYING_LINK":
      return {
        ...state,
        buyingItem: action.payload,
      };

    case "SELLING_LINK":
      return {
        ...state,
        sellingItem: action.payload,
      };

    case "CANCEL_BUYING":
      return {
        ...state,

        taken: state.taken.filter((buy) => buy[0].DocumentNo !== state.buyingItem),

        buyingItem: [],
      };

    case "CANCEL_SELLING":
      return {
        ...state,

        sellingProcess: state.sellingProcess.filter(
          (sell) => sell[0].DocumentNo !== state.sellingItem
        ),

        sellingItem: [],
      };

    case "CANCEL_PLUS":
      return {
        ...state,
        repository: state.repository.map((cancel) =>
          cancel.id === action.id
            ? {
                ...cancel,
                stock: cancel.stock - Number(action.value),
              }
            : { ...cancel }
        ),
      };

    case "CANCEL_MINUS":
      return {
        ...state,
        repository: state.repository.map((cancel) =>
          cancel.id === action.id
            ? {
                ...cancel,
                stock: cancel.stock + Number(action.value),
              }
            : { ...cancel }
        ),
      };

    case "CHANGE_ENTERY":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.userName === action.payload
            ? { ...pers, entry: !pers.entry }
            : { ...pers }
        ),
      };

    case "CHANGE_ESCAPE":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.userName === action.payload
            ? { ...pers, checkOut: !pers.checkOut }
            : { ...pers }
        ),
      };

    case "CHANGE_PROCESS":
      return {
        ...state,
        personel: state.personel.map((pers) =>
          pers.userName === action.payload
            ? { ...pers, processes: !pers.processes }
            : { ...pers }
        ),
      };

    case "ADD_PERSONEL":
      console.log(action);
      return {
        ...state,
        personel: [
          ...state.personel,
          {
            userName: action.payload,
            password: "asdfasdf",
            entry: action.entry,
            checkOut: action.checkOut,
            processes: action.process,
            authority: false,
          },
        ],
      };

    case "DELETE_PERSONEL":
      return {
        ...state,
        personel: state.personel.filter(
          (pers) => pers.userName !== action.payload
        ),
      };

    case "PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "ADD_PRODUCT_PROCESS":
      return {
        ...state,
        productProcess: [
          ...state.productProcess,
          {
            id: action.item,
            DocumentNo: action.docNo,
            process: "alış",
            values: action.value,
            costumer: action.costumer,
            company: action.company,
            shoppingData: action.shoppingDate,
          },
        ],
      };

    case "ADDING_PRODUCT_PROCESS":
      return {
        ...state,
        productProcess: [
          ...state.productProcess,
          {
            id: action.item,
            DocumentNo: action.docNo,
            process: "satış",
            values: action.value,
            costumer: action.costumer,
            company: action.company,
            shoppingData: action.shoppingDate,
          },
        ],
      };

    case "DELETE_PRODUCT_BUYYING":
      return {
        ...state,
        productProcess: state.productProcess.filter(
          (product) => product.DocumentNo !== action.payload
        ),
      };

    case "DELETE_PRODUCT_SELLING":
      return {
        ...state,
        productProcess: state.productProcess.filter(
          (product) => product.DocumentNo !== action.payload
        ),
      };

    default:
      return state;
  }
};
