import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

 const Repo = (props) => {

    return (
      <div className="repo">
        <br />

        <h2 className="mainHead">Depoda Bulunan Envanterler</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Stok</th>
              <th scope="col">Birim</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Fotograf</th>
            </tr>
          </thead>

          <tbody className="tableBudy">
            {props.mydata.repository.map((item) => (
              <tr key={Math.random()}>
                <th className="margin" onClick={() => props.product(item.id)}>
                  <Link className="links" to={`/${item.id}`.toLowerCase()}>
                    {item.id}
                  </Link>
                </th>

                <td className="margin">{item.productName}</td>
                <td className="margin">{item.stock}</td>
                <td className="margin">{item.productUnit}</td>
                <td className="margin">{item.productClass}</td>
                <td>
                  <img
                    className="list"
                    width={"40"}
                    src={item.productPhoto}
                    alt="photo2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

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
})(Repo);
