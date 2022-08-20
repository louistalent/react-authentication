import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { GoogleLogin } from "react-google-login";
import { Link, useHistory } from "react-router-dom";

import './Sign.scss';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [imageUrl, setImageUrl] = useState();

    const history = useHistory();

    const responseGoogle = (response) => {
        let { email, name, googleId, imageUrl } = response.profileObj;
        console.log('response.profileObj : \n \n \n \n \n ');
        console.log(response.profileObj)
        let personDetail = {
            email,
            name,
            googleId,
            imageUrl
        };
        console.log(personDetail);
        // history.push({
        //     pathname: "/signup",
        //     state: {
        //         personDetail: { ...personDetail }
        //     }
        // });
    };
    const requestSignin = () => {
        alert('signin')

        // history.push({
        //     pathname: "/signup",
        //     // state: {
        //     //     personDetail: { ...personDetail }
        //     // }
        // });
    }

    return <Layout className="home" >
        <section className='exchange-section normal-bg'>
            <div className='pb4 mo-mt0-desk-mt4'>
                <div className='row ml0 mr0'>
                    <div className='pt5 pb5 col-sm-12 col-md-6 overflow-h justify tc' style={{ backgroundImage: "url('/assets/images/sign/sign.png'), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172)", backgroundSize: 'cover' }} >
                        {/* <img className='po-ab' style={{ left: '0', right: '0', top: '0', bottom: '0' }} src="/assets/images/sign/create-bg.png" alt="" /> */}
                        <h1 className='bold white-color'>
                            Please Login with your account now
                        </h1>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='exchange-container mo-w10-desk-w9'>
                            <div className='tc'>
                                <h1>Login with your account</h1>
                                <p className='black-color bold'>
                                    Connected Wallet
                                </p>
                            </div>

                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Email Address</div>
                                    <div>
                                        <input onChange={(e: any) => setEmail(e.target.value)} className='sign-input' placeholder='ex: louistalent@gmail.com' style={{ fontSize: '16px' }} type="input" defaultValue={email} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Password</div>
                                    <div>
                                        <input onChange={(e: any) => setPass(e.target.value)} className='sign-input' placeholder='' style={{ fontSize: '16px' }} type="password" defaultValue={pass} />
                                    </div>
                                </div>
                            </div>

                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='grey-color'>Your password should be at least 8 characters, and include 1 upper case letter, 1 lower case letter and 1 number.</div>
                                </div>
                            </div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <button onClick={() => requestSignin()} className='btn primary-bg w10'>Login Account</button>
                                </div>
                            </div>
                            <div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
                            <div className='mt2 justify'>
                                <GoogleLogin
                                    className="google-sign-button"
                                    style={{ padding: '5px !important', boxShadow: 'none' }}
                                    clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
                                    buttonText="Sign in with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                />
                            </div>

                            <div className='mt2 justify'>
                                <button disabled={true} className='cu-dis btn black-bg w10 grey-border'>
                                    <div className='sign-button'>
                                        <div className=''>
                                            <img className='' src="/assets/images/sign/apple.png" alt="apple" />
                                        </div>
                                        <div className='sign-button-text'>
                                            <span className='white-color'>Signup with Apple </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='mt2 justify'>
                                <button disabled={true} className='cu-dis btn transparent-bg w10 grey-border'>
                                    <div className='sign-button'>
                                        <div className=''>
                                            <img className='' src="/assets/images/sign/binance.png" alt="binance" />
                                        </div>
                                        <div className='sign-button-text'>
                                            <span className='black-color'>Signup with Binance </span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    </Layout>;
};

export default Signin;