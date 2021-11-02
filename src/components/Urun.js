import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  sil,
  giriş,
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  link2,
  alışİşlemiSilme,
  artılarıSilme,
  urun2,
} from "../actions";

const Urun = (props) => {

 
  return (
    <div>
      <h2 className="anaBaşlık">{props.mydata.urun2}</h2>

      {props.mydata.data.find((item) => item.id === props.mydata.urun2) ? (
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column  justify-content-around">
              <p>
                <b>Seri No: </b>{" "}
                {
                  props.mydata.data.find(
                    (item) => item.id === props.mydata.urun2
                  ).id
                }
              </p>
              <p>
                <b> Ürün Adı:</b>{" "}
                {
                  props.mydata.data.find(
                    (item) => item.id === props.mydata.urun2
                  ).ürün
                }
              </p>
              <p>
                <b>Birimi: </b>{" "}
                {
                  props.mydata.data.find(
                    (item) => item.id === props.mydata.urun2
                  ).birim
                }
              </p>
              <p>
                <b> Sınıfı:</b>{" "}
                {
                  props.mydata.data.find(
                    (item) => item.id === props.mydata.urun2
                  ).sınıf
                }
              </p>
            </div>
            <div>
              <img
                width="300px"
                src={
                  props.mydata.data.find(
                    (item) => item.id === props.mydata.urun2
                  ).fotograf
                }
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="özet">
            <h2 className="anaBaşlık my-2">Ürün Hareketleri</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Belge No</th>
                  <th scope="col">İşlem</th>
                  <th scope="col">Şirket</th>
                  <th scope="col">Tarih</th>
                  <th scope="col">Miktar</th>
                  <th scope="col">Birim</th>
                </tr>
              </thead>

              <tbody>
                {props.mydata.urunHareketleri
                  .filter((hareketi) => hareketi.id === props.mydata.urun2)
                  .map((hareket) => (
                    <tr
                      key={Math.random()}
                      className={` ${
                        hareket.işlem === "alış" ? "alışş" : "satışş"
                      } `}
                    >
                      <Link
                        className="idid"
                        to={`/işlemler/${
                          hareket.işlem === "alış" ? "alış_" : "satış_"
                        }${hareket.belgeNo}`.toLowerCase()}
                      >
                        <th

                          onClick={(e) => {
                            if (hareket.işlem === "alış") {
                              props.link(e.target.innerHTML);
                            } else if (hareket.işlem === "satış") {
                              props.link2(e.target.innerHTML);
                            }
                          }}
                         
                          className="idid1 ortala"
                        >
                          {hareket.belgeNo}
                        </th>
                      </Link>
                      <td className="idid1">{hareket.işlem}</td>
                      <td className="idid1">{hareket.alınanŞirket}</td>
                      <td className="idid1">{hareket.tarih}</td>
                      <td className="idid1">
                        {` ${hareket.işlem === "satış" ? "-" : ""} `}
                        {hareket.değer}
                      </td>
                      <td className="idid1">
                        {
                          props.mydata.data.find((bul) => bul.id === hareket.id)
                            .birim
                        }
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p className="m-4 özetleme">
              Bu üründen stoğunuzda şu anda{" "}
              <b className="imary">
                {
                  props.mydata.data.find((bul) => bul.id === props.mydata.urun2)
                    .stok
                }{" "}
                {
                  props.mydata.data.find((bul) => bul.id === props.mydata.urun2)
                    .birim
                }
              </b>{" "}
              bulunmaktadır.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
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
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  link2,
  alışİşlemiSilme,
  artılarıSilme,
})(Urun);
