import React, { useEffect } from "react";
import nftImage from "../../assets/images/nft.jpg";
import Card from "../../components/card";
import Modal from "../../components/modal";
import { itemService } from "../../mixins/api";
import "./style.css";
export default function HomePage() {
  const [items, setItems] = React.useState([]);
  const [detail, setDetail] = React.useState("");
  useEffect(() => {
    const fetchItem = async () => {
      try {
        let res = await itemService.getItems();
        const { nfts, contract } = res.data;
        console.log(res, "ress");
        setItems(nfts);
        setDetail(contract);
      } catch (err) {
        console.log(err.message, "err");
      }
    };

    fetchItem();
  }, []);

  return (
    <>
      <main className="main container-fluid">
        <Modal detail={detail} />

        <div className="banner container">
          <div>
            <h1 style={{ textAlign: "center" }}>NFT Market Place</h1>
            <p>Your number one NFT market place, get your NFTs right here!</p>
          </div>
          <div className="nftImage">
            <img src={nftImage} style={{}} alt="" />
          </div>
        </div>
        <div className="container card-container">
          {items ? (
            items.slice(0, 50).map((item, idx) => {
              return <Card item={item} idx={idx} />;
            })
          ) : (
            <p className="" style={{ textAlign: "center" }}>
              No NFT Available
            </p>
          )}
        </div>
      </main>
    </>
  );
}
