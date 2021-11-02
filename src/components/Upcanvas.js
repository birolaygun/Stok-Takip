import React, { useState } from "react";
import { connect } from "react-redux";
import {
  sil,
  giriş,
  alınıyor,
  yeniUrun,
  sınıf,
  birim,
  yeniÜrünEkle,
} from "../actions";

const Upcanvas = (props) => {
  const [ekle, setEkle] = useState("");
  const [ekleBirim, setEkleBirim] = useState("");
  const [urunAdı, setUrunAdı] = useState("");
  const [urunId, setUrunId] = useState("");
  const [urunSınıf, setUrunSınıf] = useState("");
  const [urunFoto, setUrunFoto] = useState("");
  const [urunBirim, setUrunBirim] = useState("");
  return (
    <div>
      <div className="accordion-item yeniEkle">
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
                setUrunAdı("");
                setUrunId("");
                setUrunSınıf("");
                setUrunFoto("");
                setUrunBirim("");
                e.preventDefault();
                props.yeniÜrünEkle(
                  e,
                  urunId,
                  urunAdı,
                  urunBirim,
                  urunSınıf,
                  urunFoto
                );
              }}
            >
              <input
                onChange={(e) => setUrunId(e.target.value)}
                style={{ margin: "2px", width: "345px", height: "38px" }}
                type="text"
                placeholder="Seri No"
                value={urunId}
              />
              <input
                onChange={(e) => setUrunAdı(e.target.value)}
                style={{ margin: "2px", width: "345px", height: "38px" }}
                type="text"
                placeholder="Ürün Adı"
                value={urunAdı}
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
                  value={urunBirim}
                  onChange={(e) => setUrunBirim(e.target.value)}
                >
                  <option key={Math.random()} defaultValue>
                    Birim Seç
                  </option>
                  {props.mydata.birimler.map((birim) => (
                    <option key={Math.random()} value={birim}>
                      {birim}
                    </option>
                  ))}
                </select>

                <div
                  className="input-group mb-3 "
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <button
                    onClick={() => {
                      if (ekleBirim === "") {
                        alert("Lütfen eklemek istediğiniz birimi girin");
                      } else if (ekleBirim === null) {
                        alert("Lütfen eklemek istediğiniz birimi girin");
                      } else if (
                        window.confirm(`${ekleBirim} birim olarak eklensin mi?`)
                      ) {
                        props.birim(ekleBirim);
                        setEkleBirim("");
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
                    value={ekleBirim}
                    type="text"
                    onChange={(e) => {
                      setEkleBirim(e.target.value);
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
                  onChange={(e) => setUrunSınıf(e.target.value)}
                  value={urunSınıf}
                >
                  <option key={Math.random()} defaultValue>
                    Sınıf Seç
                  </option>
                  {props.mydata.sınıflar.map((sınıf) => (
                    <option key={Math.random()} value={sınıf}>
                      {sınıf}
                    </option>
                  ))}
                </select>

                <div
                  className="input-group mb-3 "
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <button
                    onClick={() => {
                      if (ekle === "") {
                        alert("Lütfen eklemek istediğiniz sınıfı girin");
                      } else if (ekle === null) {
                        alert("Lütfen eklemek istediğiniz sınıfı girin");
                      } else if (
                        window.confirm(`${ekle} sınıf olarak eklensin mi?`)
                      ) {
                        props.sınıf(ekle);
                        setEkle("");
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
                    value={ekle}
                    type="text"
                    onChange={(e) => setEkle(e.target.value)}
                  />
                </div>
              </div>

              <input
                onChange={(e) => setUrunFoto(e.target.value)}
                value={urunFoto}
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
  sil,
  giriş,
  alınıyor,
  yeniUrun,
  sınıf,
  birim,
  yeniÜrünEkle,
})(Upcanvas);
