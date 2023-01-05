import React, { useEffect, useState } from "react";
import "./Home_land.css";
import play from "../Assets/play.svg";
import Connect_wallet from "../Connect_wallet/Connect_wallet";
import Button from "react-bootstrap/Button";
import eth from "../Assets/eth.svg";
import Buy_tokens from "../Buy_tokens/Buy_tokens";
import usd from "../Assets/usd.svg";
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
import NavBar_header from "../NavBar_header/NavBar_header";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';




const providerOptions = {
	binancechainwallet: {
		package: true
	  },
	walletconnect: {
		package: WalletConnectProvider,
		options: {
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc"
		}
	  },
	  walletlink: {
		package: WalletLink, 
		options: {
		  appName: "Net2Dev NFT Minter", 
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc", 
		  rpc: "", 
		  chainId: 5, 
		  appLogoUrl: null, 
		  darkMode: true 
		}
	  },
};

const web3Modal = new Web3Modal({
  network: "GoerliETH",
  theme: "light",
  cacheProvider: true,
  providerOptions 
});



function Home_land({ BtTxt, setBtTxt }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [usdt, setUSDT] = useState("--");
  const [ETH, setETH] = useState("--");
  const [TokenPercentce, setTokenPercent] = useState("--");

  const getaccount = async () => {
    let acc = await loadWeb3();
    // if (acc == "No Wallet") {
    //   // toast.error('please install metamask')
    //   setBtTxt("please install metamask");
    // } else if (acc == "Wrong Network") {
    //   // toast.error('Wrong Network')
    //   setBtTxt("Wrong Network");
    // } else {
      var provider = await web3Modal.connect();
      var web3 = new Web3(provider); 
      await window.ethereum.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      let account = accounts[0]; 
      let myAcc =
        account?.substring(0, 4) + "..." + account?.substring(account?.length - 4);

      setBtTxt(myAcc);
      // const web3 = window.web3;
      let ICOContractOf = new web3.eth.Contract(contractabi, ico_contract);
      let USTContractOf = new web3.eth.Contract(USDTabi, USDT_contract);
      let tokenContractOf = new web3.eth.Contract(tokenabi, token_contract);

      let getUSDTValue = await USTContractOf.methods
        .balanceOf(ico_contract)
        .call();
      let gettokenValue = await tokenContractOf.methods
        .balanceOf(ico_contract)
        .call();

      let USDTvalue = (getUSDTValue / 1000000).toString();
      let tokenvalue = web3.utils.fromWei(gettokenValue);
      let tokenpercentag = (tokenvalue / 200000000) * 100;
      let tokenpercentag1 = 100 - tokenpercentag;

      setUSDT(USDTvalue);
      console.log(USDTvalue, "USDTValue");

      let ETHBalance = await web3.eth.getBalance(ico_contract.toString());
      let ETHValue = web3.utils.fromWei(ETHBalance);
      console.log(ETHValue, "ETHBalance");
      setETH(ETHValue);

      setTokenPercent(tokenpercentag1);
    // }
  };


  async function connectwallet() { 
	  var provider = await web3Modal.connect();
      var web3 = new Web3(provider); 
      await window.ethereum.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      let account = accounts[0]; 
      console.log("Account",account);
    
      // contract = new web3.eth.Contract(ABI, ADDRESS);
}
  return (
    <div>
      {/* <NavBar_header BtTxt={BtTxt} /> */}

      <div className="container-fluid main_home_land_bg">
        <div className="text-left" style={{textAlign:"end"}}>
          {BtTxt == "Connect" ? (
            <></>
          ) : (
            <>
              <button className="wallet_button_header text-white">
                {BtTxt}
              </button>
            </>
          )}
        </div>
        <div className="row">
          <div className="col-md-6 left_connent text-start">
            <h1 className="main_home_heading text-white">
              Welcome to the PreSale of Boston Dynamics Inu
            </h1>
            <p className="home_land_para text-white">
              Swap your ETH for $BD1NU at a very discounted price in this
              Prosaic. You will not regret it. You will get rich. This is an
              example text. this text will be changes. for test design purposes
              only.
            </p>
            {/* <button  className="btn btn-success" onClick={()=>connectWallet()}>Connect </button> */}
            {/* <div className="d-flex">
              <img src={play} alt="" />
              <h3 className="play_headig">Watch a short Explainer Video</h3>
            </div> */}
          </div>

          <div className="col-md-6 right_coonent mt-4 mt-md-0">
            <div className="right_content_card">
              <span className="card_heading_span">Presale ending soon</span>
              <div className="text_days fs-4 ">
                4 Days 8 Hours 59 Minutes remaining until presale ends
              </div>
              <div className="progress_bar_nav mt-3">
                <h4 className="progress_number">{TokenPercentce}% SOLD</h4>
                <div className="lower_pro d-flex">
                  <div
                    className="upper_pro"
                    style={{ "--width": `${TokenPercentce}%` }}
                  ></div>
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
                        <img src={usd} alt="" /> Buy with USDT
                      </button>

                      <Buy_tokens
                        connect="convert to USDT"
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                        ethdata="false"
                      />

                    </div>
                    <div className="new_btn text-white">
                      <p>How to Buy</p>
                      <p>New to Crypto?</p>
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
                    <div className="new_btn text-white">
                      <p>How to Buy</p>
                      <p>New to Crypto?</p>
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
