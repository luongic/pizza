import { useState } from "react";


function Loginsignup() {

    const [isLeft, setIsleft] = useState(false)


    return  <div className="login">

                <div className="login-container">

                    <div className="login-login">
                        <div className="login__heading">🍕 ĐĂNG NHẬP 🍕</div>
                        <div className="login__content">

                            <div className='login__content-input' >
                                <div className='login__content-label'>Email: * </div>
                                <input type="text" id='username' className='method-content__address-number' placeholder=''/>
                            </div>

                            <div className='login__content-input' >
                                <div className='login__content-label'>Mật khẩu: * </div>
                                <input type="password" id='password' className='method-content__address-number' placeholder=''/>
                            </div>

                            <div className="login__content-btn">Đăng nhập</div>

                        </div>
                        <div className="login__bottom">
                            <div >Bạn chưa có tài khoản ?</div>
                            <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng ký ngay</div>
                        </div>
                    </div>

                    <div className="login-signup">
                        <div className="login__heading">🍕 ĐĂNG KÝ 🍕</div>
                        <div className="login__content">

                            <div className='login__content-input' >
                                <div className='login__content-label'>Tên: * </div>
                                <input type="text" id='name' className='method-content__address-number' placeholder=''/>
                            </div>

                            <div className='login__content-input-2' >
                                <div className="login__content-input-wrap" >
                                    <div className='login__content-label'>Ngày sinh: * </div>
                                    <input type="date" id='birthday' className='method-content__address-number' placeholder=''/>
                                </div>

                                <div className="login__content-input-wrap" >
                                    <div className='login__content-label'>Giới tính: * </div>
                                    {/* <input type="text" id='gender' className='method-content__address-number' placeholder=''/> */}
                                    <select name="gender" className='login__content-input-selected'>
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                    </select>
                                </div>
                                
                            </div>

                            <div className='login__content-input-2' >
                                <div className="login__content-input-wrap" >
                                    <div className='login__content-label'>Số điện thoại: * </div>
                                    <input type="text" id='phone' className='method-content__address-number' placeholder=''/>
                                </div>

                                <div className="login__content-input-wrap" >
                                    <div className='login__content-label'>Email: * </div>
                                    <input type="text" id='email' className='method-content__address-number' placeholder=''/>
                                </div>
                                
                            </div>

                            <div className='login__content-input' >
                                <div className='login__content-label'>Mật khẩu: * </div>
                                <input type="password" id='password' className='method-content__address-number' placeholder=''/>
                            </div>

                            <div className='login__content-input' >
                                <div className='login__content-label'>Nhập lại mật khẩu: * </div>
                                <input type="password" id='password' className='method-content__address-number' placeholder=''/>
                            </div>

                            <div className="login__content-btn">Đăng ký</div>

                        </div>
                        <div className="login__bottom">
                            <div >Bạn đã có tài khoản ?</div>
                            <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng nhập ngay</div>
                        </div>
                    </div>

                    <div className={isLeft ? 'login-slide__left' : 'login-slide__right'} >
                        <img src="/img/loginPoster.jpg" alt="Đăng ký thành viên tích điểm cùng pizza hut" />
                    </div>
                    
                </div>

                
            </div>
}

export default Loginsignup;