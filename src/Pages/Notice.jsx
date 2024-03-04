import '../App.css'
import ReCAPTCHA from "react-google-recaptcha";
import { BiErrorCircle } from "react-icons/bi";

const Notice = ({seletData}) => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className='backgroud-color'>

            <div className="text-center notic-height " >
                <p>Notice here</p>
            </div>
            <div className='m-4'>
                <h1 className='text-color'>Request testnet LINK</h1>
                <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract
                </p>
            </div>
            <div className='nd2Color '>
                <form>
                    <div className="mb-3">
                        <div className='d-flex gap-3 align-items-center'>
                            <BiErrorCircle className='text-color' />
                            <p>Your wallet is connected to <span><b>{seletData}</b></span>, so you are requesting <span><b>{seletData}</b></span> Link/ETH</p>
                        </div>
                        <label className="form-label text-color">Wallet Address</label>
                        <input type="text" className="form-control w-50" />
                        <label className="form-label text-color">Request Type</label>
                        <div className='d-flex gap-3'>
                            <input type="text" placeholder="Test link" name="test_link" disabled="" className="input_class" value="20 Test Link" />
                            <input type="text" placeholder="ETH" name="eth" disabled="" className="input_class" value="0.5 ETH" />
                        </div>
                        <ReCAPTCHA
                            className='mt-3'
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                    </div>
                    <button type="Send Request" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Notice;