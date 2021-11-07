
import React, {useState} from "react";
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

const Authority = (props) => {
  const [user, setUser] = useState("")
  const [entry, setEntry] = useState(false)
  const [checkOut, setCheckOut] = useState(false);
  const [process, setProcess] = useState(false);


  return (
    <div className="adminPanel">
      <h2 className="mainHead">Personel Yetkilendirme</h2>
      <br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Personel</th>
              <th scope="col">Alış</th>
              <th scope="col">Satış</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>

          <tbody>
            {props.mydata.personel.map((person) => (
              <tr
                key={Math.random()}
                className={person.userName === "Admin" ? "d-none " : ""}
              >
                <th>{person.userName}</th>
                <td>
                  {person.entry ? (
                    <svg
                      onClick={() => props.changeEntery(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.changeEntery(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
                <td>
                  {person.checkOut ? (
                    <svg
                      onClick={() => props.changeEscape(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.changeEscape(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
                <td>
                  {" "}
                  {person.processes ? (
                    <svg
                      onClick={() => props.changeProcess(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.changeProcess(person.userName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="m-2">
          {" "}
          Tüm personeliniz Depo içerisindeki envanteri görebilmektedir.{" "}
        </p>
      </div>

      <button
        className="btn btn-primary d-block m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Personel Ekle
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div>
          <div className="p-4">
            <p>
              {" "}
              Lütfen yeni personelin kullanıcı adını ve yetkilerini giriniz.
              Personelin şifresi "asdfasdf" olacaktır ve isterse kendisi
              değiştirebilir.
            </p>
            <input
              type="name"
              value={user}
              style={{ width: "350px", marginBottom: "5px" }}
              placeholder="kullanıcı Adı"
              onChange={(e) => setUser(e.target.value)}
            />

            <div className="py-1 ">
              {entry ? (
                <svg
                  onClick={() => setEntry(!entry)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline bi bi-square"
                  onClick={() => setEntry(!entry)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">Giriş</p>
            </div>

            <div className="py-1 ">
              {checkOut ? (
                <svg
                  onClick={() => setCheckOut(!checkOut)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline bi bi-square"
                  onClick={() => setCheckOut(!checkOut)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">Çıkış</p>
            </div>

            <div className="py-1 ">
              {process ? (
                <svg
                  onClick={() => setProcess(!process)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline bi bi-square"
                  onClick={() => setProcess(!process)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">İşlemler</p>
            </div>

            <button
              className="btn btn-primary my-2"
              onClick={() => {
                if (user === "") {
                  alert("Lütfen Kullanıcı Adı giriniz");
                } else if (
                  props.mydata.personel.find(
                    (pers) => pers.userName === user
                  )
                ) {
                  alert(
                    "Bu Kullanıcı Adı zaten kullanılıyor. Lütfen yeni bir Kullanıcı Adı giriniz."
                  );
                } else {
                  if (
                    window.confirm(
                      user +
                        " " +
                        "adlı personeli sisteme kaydetmek istediğinizden emin misiniz?"
                    ) === true
                  ) {
                    props.addPersonel(user, entry, checkOut, process);
                    setUser("");
                    setEntry(false);
                    setCheckOut(false);
                    setProcess(false);
                  }
                }
              }}
            >
              Personeli Ekle
            </button>
          </div>
        </div>
      </div>

      <button
        className="btn btn-danger d-block m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight1"
        aria-controls="offcanvasRight"
      >
        Personel Sil
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="m-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Seçim</th>
                <th scope="col">Personel</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.personel.map((person) => (
                <tr
                  key={Math.random()}
                  className={person.userName === "Admin" ? "d-none " : ""}
                >
                  <td>
                    <svg
                      onClick={() => {
                        if (
                          window.confirm(
                            person.userName +
                              " " +
                              "adlı kullanıcının sistemden silinmesini onaylıyor musunuz ?"
                          )
                        ) {
                          props.deletePersonel(person.userName);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                      color="red"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                    </svg>
                  </td>

                  <th>{person.userName}</th>
                </tr>
              ))}
            </tbody>
          </table>
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
})(Authority);
