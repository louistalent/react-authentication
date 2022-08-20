import React, { useState } from 'react';
import Layout from '../../components/Layout';

import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import './Sign.scss';

const proxy = process.env.REACT_APP_ENDPOINT || '';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState();

    const history = useHistory();

    const responseGoogle = (response: any) => {
        let { email, name, googleId, imageUrl } = response.profileObj;
        console.log('response.profileObj : \n \n \n \n \n ');
        console.log(response.profileObj)
        setName(name);
        setEmail(email);
        setImageUrl(imageUrl);

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
    const requestSignup = async () => {
        alert('signup')
        // registryapi: /api/registry
        // {
        //     name: "xxx",
        //     email: "xxx",
        //     password: "xxx"
        // }

        let res = await axios.post(proxy + '/api/registry', {
            name,
            email,
            password
        });
        toast('Success')
        // 

        // history.push({
        //     pathname: "/signup",
        //     // state: {
        //     //     personDetail: { ...personDetail }
        //     // }
        // });
    }

    return <Layout >
        <section className='exchange-section normal-bg'>
            <div className='pb4 mo-mt0-desk-mt4'>
                <div className='row ml0 mr0'>
                    <div className='pt5 pb5 col-sm-12 col-md-6 overflow-h justify tc' style={{ background: "url('/assets/images/sign/create.png')", backgroundSize: 'cover' }} >
                        {/* <img className='po-ab' style={{ left: '0', right: '0', top: '0', bottom: '0' }} src="/assets/images/sign/create-bg.png" alt="" /> */}
                        <h1 className='bold white-color'>
                            Create your account & send payment with now fee
                        </h1>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='exchange-container mo-w10-desk-w9'>
                            <div className='tc'>
                                <h1>Create an Account</h1>
                                <p className='black-color bold'>
                                    Connected Wallet
                                </p>
                            </div>

                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Email Address</div>
                                    <div>
                                        <input onChange={(e: any) => setEmail(e.target.value)} className='sign-input' placeholder='ex: louistalent@gmail.com' style={{ fontSize: '16px' }} type="input" defaultValue={name} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Full name</div>
                                    <div>
                                        <input onChange={(e: any) => setName(e.target.value)} className='sign-input' placeholder='ex: louis talent' style={{ fontSize: '16px' }} type="input" defaultValue={email} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt2 justify-s'>
                                <div className='w10'>
                                    <div className='grey-color' style={{ fontSize: '10pxs' }}>Password</div>
                                    <div>
                                        <input onChange={(e: any) => setPassword(e.target.value)} className='sign-input' placeholder='' style={{ fontSize: '16px' }} type="password" defaultValue={password} />
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
                                    <button onClick={() => requestSignup()} className='btn primary-bg w10'>Create Account</button>
                                </div>
                            </div>
                            <div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
                            <div className='mt2 justify'>
                                {/* 
                                    type of responseGoogle = function
                                    roll of responseGoogle = send data of google account
                                    cookiePolicy           = fixed value for react-google-login npm : single_host_origin
                                */}

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

    </Layout >;
};

export default Signup;