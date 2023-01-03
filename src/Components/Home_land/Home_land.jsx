import React, { useEffect, useState } from "react";
import "./Home_land.css";
import play from "../Assets/play.svg";
import Connect_wallet from "../Connect_wallet/Connect_wallet";
import Button from "react-bootstrap/Button";
import eth from "../Assets/eth.svg";
import Buy_tokens from "../Buy_tokens/Buy_tokens";
import usdt from "../Assets/usdt.svg";
import metamask from "../Assets/metamask.png";
import { loadWeb3 } from "../apis/api";
import {
  contractabi,
  ico_contract,
  tokenabi,
  token_contract,
  USDTabi,
  USDT_contract,
} from "../../Contracts/contract";

function Home_land({BtTxt,setBtTxt}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [usdt, setUSDT] = useState("loading");
  const [ETH, setETH] = useState("loading");
  const [TokenBalance, setTokenBalance] = useState("loading");




  const getaccount = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("please install metamask");
    } else if (acc == "Wrong Network") {
      // toast.error('Wrong Network')
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);

      setBtTxt(myAcc);
      const web3 = window.web3; 
      let ICOContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USTContractOf = new web3.eth.Contract(USDTabi, USDT_contract);
      let tokenContractOf = new web3.eth.Contract(tokenabi, token_contract);

      let getUSDTValue = await USTContractOf.methods.balanceOf(ico_contract).call();
      let gettokenValue = await tokenContractOf.methods.balanceOf(ico_contract).call();

     let USDTvalue = (getUSDTValue/1000000).toString();
     let tokenvalue = web3.utils.fromWei(gettokenValue);
      let tokenpercentag= (tokenvalue/200000000*100);
      let tokenpercentag1= 100-tokenpercentag;

     setUSDT(USDTvalue);
     console.log(USDTvalue,"USDTValue");


     
     let ETHBalance=web3.eth.getBalance(ico_contract.toString())
     console.log(ETHBalance,"ETHBalance");
     setETH(ETHBalance);



     setTokenBalance(tokenpercentag1)
    

      


     
    }
  };


  return (
    <div>
      <div className="container-fluid main_home_land_bg">
        <div className="row">
          <div className="col-md-6 left_connent text-start">
            <span className="fisrt_heading">
              Built by Traders, for Traders.
            </span>
            <h1 className="main_home_heading">
              Maximise Your Trading Success with the Leading Crypto Signals, Bot
              & Analytics Platform Now.
            </h1>
            <p className="home_land_para">
              Dash 2 Trade is a crypto analytics platform built by traders, for
              traders. Dash 2 Trade provides trading signals, social analytics
              on-chain data to maximise your profits. Join our community of
              70,000 traders and invest in the D2T presale now
            </p>
            <div className="d-flex">
              <img src={play} alt="" />
              <h3 className="play_headig">Watch a short Explainer Video</h3>
            </div>
          </div>

          <div className="col-md-6 right_coonent mt-4 mt-md-0">
            <div className="right_content_card">
              <span className="card_heading_span">Presale ending soon</span>
              <div className="text_days fs-4 ">
                4 Days 8 Hours 59 Minutes remaining until presale ends
              </div>
              <div className="progress_bar_nav mt-3">
                <h4 className="progress_number">{TokenBalance}% SOLD</h4>
                <div className="lower_pro d-flex">
                  <div className="upper_pro"></div>
                </div>

                <div className="usdt_contntet text-white text-bold">
                  <span>
                    USDT Raised: <br />
                    {usdt} $ / {ETH} ETH
                  </span>
                </div>

                <div className="box_text text-white">
                  <span>
                    First CEX launch will go live on Wednesday 11th Jan 2023
                  </span>
                </div>

                {BtTxt !== "Connect" ? (
                  <>
                    <div className="d-flex justify-content-center my-4">
                      <button
                        onClick={() => setModalShow1(true)}
                        className="connect_to_wallet_home iso_btn"
                      >
                        {" "}
                        <img src={eth} alt="" /> Buy with ETH
                      </button>

                      <Buy_tokens
                        connect="convert to ETH"
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                        ethdata="true"
                      />
                    </div>
                    <div className="d-flex justify-content-center my-4">
                      <button
                        onClick={() => setModalShow2(true)}
                        className="connect_to_wallet_home iso_btn"
                      >
                        {" "}
                        <img src={usdt} alt="" /> Buy with USDT
                      </button>

                      <Buy_tokens
                        connect="convert to USDT"
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                        ethdata="false"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-center my-4">
                      <button
                        onClick={() => getaccount()}
                        className="connect_to_wallet_home iso_btn"
                      >
                        <img src={metamask} alt="" width="15%" /> connect wallet
                      </button>

                      {/* <Connect_wallet
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_land;
