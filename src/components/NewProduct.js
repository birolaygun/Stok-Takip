import React, { useState } from "react";
import { connect } from "react-redux";
import {
  login,
  logout,
  del,
  deleteItem,
  buying,
  selling,
  newProduct,
  productClass,
  unit,
  addNewProduct,
  
  plus,
  minus,
  add,
  push,
  
  
  clearDocBuy,
  clearDocSell,
  buyyingLink,
  sellingLink,
  cancelBuyying,
  cancelSelling,
  cancelPlus,
  cancelMinus,
  changeEntery,
  changeEscape,
  changeProcess,
  addPersonel,
  deletePersonel,
  product,
  addProductProcess,
  addingProductProcess,
  deleteProductBuyying,
  deleteProductSelling,
} from "../actions";

const NewProduct = (props) => {
  const [add, setAdd] = useState("");
  const [addUnit, setAddUnit] = useState("");
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [addClass, setaAddClass] = useState("");
  const [productPhoto, setProductPhoto] = useState("");
  const [productUnit, setProductUnit] = useState("");
  return (
    <div>
      <div className="accordion-item addNew">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed bg-primary "
            style={{ color: "white" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Yeni Ürün Ekle
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form
              onSubmit={(e) => {
                setProductName("");
                setProductId("");
                setaAddClass("");
                setProductPhoto("");
                setProductUnit("");
                e.preventDefault();
                props.addNewProduct(
                  e,
                  productId,
                  productName,
                  productUnit,
                  addClass,
                  productPhoto
                );
              }}
            >
              <input
                onChange={(e) => setProductId(e.target.value)}
                style={{ margin: "2px", width: "345px", height: "38px" }}
                type="text"
                placeholder="Seri No"
                value={productId}
              />
              <input
                onChange={(e) => setProductName(e.target.value)}
                style={{ margin: "2px", width: "345px", height: "38px" }}
                type="text"
                placeholder="Ürün Adı"
                value={productName}
              />

              <div
                style={{
                  margin: "2px",
                  width: "345px",
                  height: "38px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <select
                  key={Math.random()}
                  style={{ width: "295px", height: "38px" }}
                  className="form-select"
                  aria-label="Default select example"
                  value={productUnit}
                  onChange={(e) => setProductUnit(e.target.value)}
                >
                  <option key={Math.random()} defaultValue>
                    Birim Seç
                  </option>
                  {props.mydata.units.map((unit) => (
                    <option key={Math.random()} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>

                <div
                  className="input-group mb-3 "
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <button
                    onClick={() => {
                      if (addUnit === "") {
                        alert("Lütfen eklemek istediğiniz birimi girin");
                      } else if (addUnit === null) {
                        alert("Lütfen eklemek istediğiniz birimi girin");
                      } else if (
                        window.confirm(`${addUnit} birim olarak eklensin mi?`)
                      ) {
                        props.unit(addUnit);
                        setAddUnit("");
                      }
                    }}
                    className="btn btn-outline-secondary btn-primarybtn btn-primary"
                    type="button"
                    style={{ border: "1px solid black" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                  </button>
                  <input
                    style={{ width: "120px" }}
                    placeholder="Yeni Birim Ekle"
                    value={addUnit}
                    type="text"
                    onChange={(e) => {
                      setAddUnit(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  margin: "2px",
                  width: "345px",
                  height: "38px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <select
                  key={Math.random()}
                  style={{ width: "295px", height: "38px" }}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setaAddClass(e.target.value)}
                  value={addClass}
                >
                  <option key={Math.random()} defaultValue>
                    Sınıf Seç
                  </option>
                  {props.mydata.classes.map((classes) => (
                    <option key={Math.random()} value={classes}>
                      {classes}
                    </option>
                  ))}
                </select>

                <div
                  className="input-group mb-3 "
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <button
                    onClick={() => {
                      if (add === "") {
                        alert("Lütfen eklemek istediğiniz sınıfı girin");
                      } else if (add === null) {
                        alert("Lütfen eklemek istediğiniz sınıfı girin");
                      } else if (
                        window.confirm(`${add} sınıf olarak eklensin mi?`)
                      ) {
                        props.productClass(add);
                        setAdd("");
                      }
                    }}
                    className="btn btn-outline-secondary btn-primary"
                    type="button"
                    style={{ border: "1px solid black" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                  </button>
                  <input
                    style={{ width: "120px" }}
                    placeholder="Yeni Sınıf Ekle"
                    value={add}
                    type="text"
                    onChange={(e) => setAdd(e.target.value)}
                  />
                </div>
              </div>

              <input
                onChange={(e) => setProductPhoto(e.target.value)}
                value={productPhoto}
                style={{
                  margin: "2px",
                  width: "345px",
                  height: "38px",
                  display: "flex",
                  flexDirection: "row",
                }}
                type="text"
                placeholder="Fotograf Linki"
              />
              <button className="btn btn-primary w-100" type="submit">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {
  login,
  logout,
  del,
  deleteItem,
  buying,
  selling,
  newProduct,
  productClass,
  unit,
  addNewProduct,

  plus,
  minus,
  add,
  push,

  clearDocBuy,
  clearDocSell,
  buyyingLink,
  sellingLink,
  cancelBuyying,
  cancelSelling,
  cancelPlus,
  cancelMinus,
  changeEntery,
  changeEscape,
  changeProcess,
  addPersonel,
  deletePersonel,
  product,
  addProductProcess,
  addingProductProcess,
  deleteProductBuyying,
  deleteProductSelling,
})(NewProduct);
