
export const login = (e, user, password) => {
  return { type: "LOGIN", payload: e, user, password };
};

export const logout = () => {
  return { type: "LOGOUT"};
};

export const del = (e) => {
  return { type: "DEL", payload: e };
};
export const deleteItem
 = (e) => {
  return { type: "DELETE_ITEM", payload: e };
};

export const buying = (e) => {
  return { type: "BUYİNG", payload: e };
};
export const selling = (e) => {
  return { type: "SELLING", payload: e };
};

export const newProduct = (e) => {
  return { type: "NEW_PRODUCT", payload: e };
};

export const productClass
 = (e) => {
  return { type: "PRODUCT_CLASS", payload: e };
};

export const unit = (e) => {
  return { type: "UNIT", payload: e };
};
export const addNewProduct = (even, id, name, unit, classes, photo) => {
  return {
    type: "ADD_NEW_PRODUCT",
    payload: even,
    id,
    name,
    unit,
    classes,
    photo,
  };
};

export const plus = (e, item, value) => {
  return {
    type: "PLUS",
    payload: e,
    item,
    value,
  };
};
export const minus = (e, item, value) => {
  return {
    type: "MINUS",
    payload: e,
    item,
    value,
  };
};
export const add = (
  e,
  costumer,
  company,
  explatation,
  docNo,
  seller,
  shoppingDate
) => {
  return {
    type: "ADD",
    payload: e,
    costumer,
    company,
    explatation,
    docNo,
    seller,
    shoppingDate,
  };
};

export const push = (
  e,
  costumer,
  company,
  explanation,
  docNo,
  seller,
  shopppingDate
) => {
  return {
    type: "PUSH",
    payload: e,
    costumer,
    company,
    explanation,
    docNo,
    seller,
    shopppingDate,
  };
};

export const clearDocBuy = () => {
  return {
    type: "CLEAR_DOC_BUY",
  };
};
export const clearDocSell = () => {
  return {
    type: "CLEAR_DOC_SELL",
  };
};

export const buyyingLink = (e) => {
  return {
    type: "BUYING_LINK",
    payload: e,
  };
};
export const sellingLink = (e) => {
  return {
    type: "SELLING_LINK",
    payload: e,
  };
};
export const cancelBuyying = (e) => {
  return {
    type: "CANCEL_BUYING",
    payload: e,
  };
};
export const cancelSelling = (e) => {
  return {
    type: "CANCEL_SELLING",
    payload: e,
  };
};
export const cancelPlus = (e, id, value) => {
  return {
    type: "CANCEL_PLUS",
    payload: e,
    id,
    value,
  };
};

export const cancelMinus = (e, id, value) => {
  return {
    type: "CANCEL_MINUS",
    payload: e,
    id,
    value,
  };
};
export const changeEntery = (person) => {
  return {
    type: "CHANGE_ENTERY",
    payload: person,
  };
};
export const changeEscape = (person) => {
  return {
    type: "CHANGE_ESCAPE",
    payload: person,
  };
};
export const changeProcess = (person) => {
  return {
    type: "CHANGE_PROCESS",
    payload: person,
  };
};
export const addPersonel = (user, entry, checkOut, process) => {
  return {
    type: "ADD_PERSONEL",
    payload: user,
    entry,
    checkOut,
    process,
  };
};
export const deletePersonel = (user) => {
  return {
    type: "DELETE_PERSONEL",
    payload: user,
  };
};
export const product = (id) => {
  return {
    type: "PRODUCT",
    payload: id,
  };
};

export const addProductProcess = (
  e,
  costumer,
  company,
  explatation,
  docNo,
  seller,
  shoppingDate,
  item,
  value
) => {
  return {
    type: "ADD_PRODUCT_PROCESS",
    payload: e,
    costumer,
    company,
    explatation,
    docNo,
    seller,
    shoppingDate,
    item,
    value,
  };
};

export const addingProductProcess = (
  e,
  costumer,
  company,
  explatation,
  docNo,
  seller,
  shoppingDate,
  item,
  value
) => {
  return {
    type: "ADDING_PRODUCT_PROCESS",
    payload: e,
    costumer,
    company,
    explatation,
    docNo,
    seller,
    shoppingDate,
    item,
    value,
  };
};

export const deleteProductBuyying = (docNo) => {
  return {
    type: "DELETE_PRODUCT_BUYYING",
    payload: docNo,
  };
};


export const deleteProductSelling = (docNo) => {
  return {
    type: "DELETE_PRODUCT_SELLING",
    payload: docNo,
  };
};


