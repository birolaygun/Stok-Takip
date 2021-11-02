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
  alışİşlemiSilme,
  artılarıSilme,
  ürünHareketiAlışSilme,
  urun2
} from "../actions";

const Alışişlemi = (props) => {
  let aa = props.mydata.kullanıcı.yetkilendirme ? " to='/işlemler'" : "";

  let alış = props.mydata.yapılanAlışlar.find(
    (alış) => alış[0].belgeNo === props.mydata.alınıyor2
  );

  return (
    <div>
      <h3 className="anaBaşlık"> Satın Alma Belgesi</h3>
      <br />
      <div style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <div style={{ padding: "5px" }}>
          <h4 className="my-3">
            {" "}
            <b>Belge No: {alış[0].belgeNo}</b>
          </h4>
          <h6 className="my-2">
            {" "}
            <b> Tarih:</b> {alış[0].tarih}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satın Alan:</b> {alış[0].alıcı}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satışı Yapan:</b> {alış[0].satıcı}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Açıklama:</b> {alış[0].açıklama}
          </h6>
          <br />
          <h6>
            {" "}
            Bu belge <b>{alış[0].onayVerenKullanıcı}</b> tarafından{" "}
            <b>{alış[0].onayTarihi} </b> tarihinde sisteme girilmiştir
          </h6>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody className="deneme3">
            {alış[1].map((item) => (
              <tr key={Math.random()}>

                <Link className="idid" to={`/${item.id}`.toLowerCase()}>
                  <th onClick={(e)=>
                  props.urun2(e.target.innerHTML)
                  } 
                  className="idid1 ortala1">{item.id}</th>
                </Link>

                <td className="idid1">{item.ürün}</td>
                <td className="idid1">
                  <img className="listemm" width={"40"} src={item.fotograf} />
                </td>
                <td className="idid1">{item.sınıf}</td>
                <td className="idid1">{item.artı}</td>
                <td className="idid1">{item.birim}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-4">
        <Link
          to="/işlemler"
          className={
            props.mydata.kullanıcı.yetkilendirme ? " " : "disabled-link"
          }
        >
          <button
            className={`m-2 btn btn-danger ${
              props.mydata.kullanıcı.yetkilendirme ? "" : "disabled"
            } `}
            onClick={(enn) => {
              let eksi = 0;

              for (let i = 1; i < alış[1].length + 1; i++) {
                if (
                  props.mydata.data.find(
                    (kontrol) =>
                      kontrol.id ===
                      document.querySelector(
                        `.deneme3 > tr:nth-child( ${i} ) > a > th:nth-child(1)`
                      ).innerHTML
                  ).stok <
                  Number(
                    document.querySelector(
                      `.deneme3 > tr:nth-child( ${i} ) > td:nth-child(5)`
                    ).innerHTML
                  )
                ) {
                  eksi = 1;
                  break;
                }
              }

              if (eksi === 0) {
                if (
                  window.confirm("Belgeyi silmek istediğinizden emin misiniz ?")
                ) {
                  for (let i = 1; i < alış[1].length + 1; i++) {
                    props.artılarıSilme(
                      enn,
                      document.querySelector(
                        `.deneme3 > tr:nth-child( ${i} ) > a > th:nth-child(1)`
                      ).innerHTML,
                      document.querySelector(
                        `.deneme3 > tr:nth-child( ${i} ) > td:nth-child(5)`
                      ).innerHTML
                    );
                  }
                  props.alışİşlemiSilme(props.mydata.alınıyor2);
                  props.ürünHareketiAlışSilme(alış[0].belgeNo);
                }
              }

              if (eksi === 1) {
                eksi = 0;
                if (
                  window.confirm(
                    "Bu belgeyi silerseniz bazı ürünler eksi (-) 'ye düşecek. yine de bu belgeyi silmek istiyor musunuz ?"
                  )
                ) {
                  for (let i = 1; i < alış[1].length + 1; i++) {
                    props.artılarıSilme(
                      enn,
                      document.querySelector(
                        `.deneme3 > tr:nth-child( ${i} ) > a > th:nth-child(1)`
                      ).innerHTML,
                      document.querySelector(
                        `.deneme3 > tr:nth-child( ${i} ) > td:nth-child(5)`
                      ).innerHTML
                    );
                  }
                  props.alışİşlemiSilme();
                  props.ürünHareketiAlışSilme(alış[0].belgeNo);
                }
              }
            }}
          >
            Belgeyi Sil
          </button>
        </Link>

        <p style={{ color: "grey" }}>
          {" "}
          <b className="m-2 ">Bu belgeyi yalnızca Admin silebilir.</b>{" "}
        </p>
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
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  alışİşlemiSilme,
  artılarıSilme,
  ürünHareketiAlışSilme,
  urun2
})(Alışişlemi);
