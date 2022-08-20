import { connected } from 'process';
import React, { useState } from 'react';
import { BsFillPersonPlusFill, BsFillPersonCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <header className='white'>
            <div className='container dis-f'>
                <div className='dis-f ai-c jc-s flex1 row-reverse-991'>
                    <div className='dis-f ai-c'>
                        <div onClick={() => setIsMobile(true)} className='hamburger-icon-container'>
                            <AiOutlineMinus className='' style={{ position: 'absolute', top: '0%' }} fontSize={'25px'} />
                            <AiOutlineMinus className='' style={{ position: 'absolute', top: '20%' }} fontSize={'25px'} />
                            <AiOutlineMinus className='' style={{ position: 'absolute', top: '40%' }} fontSize={'25px'} />
                        </div>
                        <img className='' style={{ width: '48px', height: '48px' }} src='/logo.png' alt='' />
                    </div>
                    <div className={`${isMobile ? 'hamburger-box' : ''} justify`}>
                        <div className={`${isMobile ? 'hamburger-cancel-container' : ''} dis-n`}>
                            <AiOutlineClose onClick={() => setIsMobile(false)} className='cu-po hamburger-cancel-btn' fontSize={'35px'} color="white-color" />
                        </div>
                        <ul className='hamburger justify li-none-style'>
                            <li className='hamburger-list'>Send</li>
                            <li className='hamburger-list'>Receive</li>
                            <li className='hamburger-list'>Find locations</li>
                            <li className='hamburger-list'>Track a transfer</li>
                            <li className='hamburger-list'>Help</li>
                        </ul>

                    </div>
                    <div onClick={() => setIsMobile(false)} className={`${isMobile ? 'hamburger-bg' : ''} dis-n`}></div>
                </div>
                <div className='dis-f ai-c flex1'>
                    <div className='justify jc-e flex1 gap20'>
                        <Link to='/signup' className='td-n'>
                            <button className='gap5 btn-small purple-bg'>
                                <div className='justify gap5'>
                                    <BsFillPersonPlusFill className='primary-color' fontSize={'25px'} />
                                </div>
                                <div className='bold white-color'>Sign up</div>
                            </button>
                        </Link>
                        <Link to='/signin' className='td-n'>
                            <button className='gap5 btn-small primary-bg'>
                                <div className='justify gap5'>
                                    <BsFillPersonCheckFill className='purple-color' fontSize={'25px'} />
                                </div>
                                <div className='bold white-color'>Sign in</div>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
};

export default Header;