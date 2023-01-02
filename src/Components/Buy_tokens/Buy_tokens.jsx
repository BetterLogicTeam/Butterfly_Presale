import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { loadWeb3 } from '../apis/api';
import eth from "../Assets/eth.svg"
import dt from "../Assets/dt.svg"

function Buy_tokens(props ,connect) {
  
  return (
    <div>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='connect_to_wallet_bgh' closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center text-white">
            <span className='text-white'>
            EXCHANGE

            </span>
      
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='selleing_input'>
      <label htmlFor="selling" className='labal_heading fw-bold'>Selling</label>
      <div className="seeling_tokens">
        <input type="text" className='selling_input' value="" />
        <span className='input_img '> <img src={eth} alt="" />
    <span className='ms-1 fw-bold'>ETH</span></span>

      </div>
      </div>
        <div className='selleing_input mt-4'>
      <label htmlFor="selling" className='labal_heading fw-bold'>Buying</label>
      <div className="seeling_tokens">
        <input type="text" className='selling_input' value="" />
        <span className='input_img '> <img src={dt} className='dt2' alt="" />
    <span className='ms-1 fw-bold'>D2T</span></span>

      </div>
      </div>
      </Modal.Body>
      <Modal.Footer className=' py-2 d-block'>
        {/* <Button onClick={props.onHide}>Close</Button> */}
<div className="d-flex justify-content-center">
    <button  onClick={props.onHide} className=' convert_to_eth iso_btn'>{props.connect}</button>

</div>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default Buy_tokens
