import React from 'react'
import "./Home_land.css"
import play from "../Assets/play.svg"
import Connect_wallet from '../Connect_wallet/Connect_wallet';
import Button from 'react-bootstrap/Button';  
import eth from "../Assets/eth.svg"  
import Buy_tokens from '../Buy_tokens/Buy_tokens';
import usdt from "../Assets/usdt.svg"


function Home_land() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <div>
        <div className="container-fluid main_home_land_bg">
            <div className="row">
                <div className="col-md-6 left_connent text-start">
                    <span className='fisrt_heading'>
                    Built by Traders, for Traders.
                    </span>
                    <h1 className='main_home_heading'>Maximise Your Trading Success with the Leading Crypto Signals, Bot & Analytics Platform Now.</h1>
<p className='home_land_para'>Dash 2 Trade is a crypto analytics platform built by traders, for traders. Dash 2 Trade provides trading signals, social analytics on-chain data to maximise your profits. Join our community of 70,000 traders and invest in the D2T presale now</p>
               <div className="d-flex">
                <img src={play} alt="" />
                <h3 className='play_headig'>Watch a short Explainer Video</h3>

               </div>
               
                </div>

                <div className="col-md-6 right_coonent mt-4 mt-md-0">
                    <div className="right_content_card">
                        <span className='card_heading_span'>Presale ending soon</span>
                        <div className="text_days fs-4 ">4 Days 8 Hours 59 Minutes remaining until presale ends</div>
<div className='progress_bar_nav mt-3'>
    <h4 className='progress_number'>89.87% SOLD</h4>
    <div className="lower_pro d-flex">
        <div className="upper_pro">

        </div>
    </div>

    <div className="usdt_contntet text-white text-bold">
        <span>USDT Raised: <br />$12,003,270.56 / $13,420,750</span>
    </div>

    <div className="box_text text-white">
        <span>First CEX launch will go live on Wednesday 11th Jan 2023</span>

    </div>

    <div className='d-flex justify-content-center my-4'>
        <button onClick={() => setModalShow(true)} className='connect_to_wallet_home'>connect  wallet</button>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <Connect_wallet
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    <div className='d-flex justify-content-center my-4'>
        <button onClick={() => setModalShow1(true)} className='connect_to_wallet_home'> <img src={eth} alt="" /> Buy with ETH</button>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <Buy_tokens
         connect='convert to ETH'
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </div>
    <div className='d-flex justify-content-center my-4'>
        <button  onClick={() => setModalShow1(true)} className='connect_to_wallet_home'> <img src={usdt} alt="" /> Buy with USDT</button>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <Buy_tokens 
       connect='convert to USDT'
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </div>

</div>
                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Home_land
