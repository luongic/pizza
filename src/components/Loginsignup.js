import { useEffect, useState } from "react";

import Validator from "../functions/validator";

function Loginsignup() {

    const [isLeft, setIsleft] = useState(false)

    const [hiddenLogin, setHiddenLogin] = useState(true)
    const [hiddenSignup, setHiddenSignup] = useState(true)
    const [hiddenRepeat, setHiddenRepeat] = useState(true)

    useEffect(()=>{
        Validator({
            form: '#form-2',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#email', 'Vui lòng nhập email'),
                Validator.isEmail('#email'),
                Validator.isRequired('#password', 'Vui lòng nhập mật khẩu'),
                Validator.minLength('#password', 6),
            ],
            onSubmit: function (data) {
                // Call API
                console.log(data);
            }
        });
    
        Validator({
            form: '#form-1',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
              Validator.isRequired('#name', 'Vui lòng nhập tên đầy đủ của bạn'),
              Validator.isRequired('#birthday', 'Chọn ngày sinh'),
              Validator.isOver16('#birthday'),
              Validator.isRequired('#phone', 'Vui lòng nhập SĐT'),
              Validator.isPhone('#phone'),
              Validator.isEmail('#email'),
              Validator.minLength('#password', 6),
              Validator.isRequired('#password_confirmation'),
              Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
              }, 'Mật khẩu không khớp')
            ],
            onSubmit: function (data) {
                // Call API
                console.log(data);
            }
        });
    }, [])

    return  <div className="login">

                <div className={isLeft ? 'login-container isLeft' : 'login-container '}>

                    <div className="login-login">
                        <div className="login__heading">🍕 ĐĂNG NHẬP 🍕</div>
                        <div className="login__content">

                            <form action="" method="POST" className="form" id="form-2" >

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Email: * <span className ="form-message"></span></div>
                                    <input type="text" name="email" id='email' className='method-content__address-number form-control' placeholder=''/>
                                </div>

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Mật khẩu: * <span className ="form-message"></span></div>
                                    <input type={hiddenLogin ? 'password' : 'text'} name="password" id='password' className='method-content__address-number form-control' placeholder=''/>
                                    <div className="login__content-hiden" onClick={() => setHiddenLogin(!hiddenLogin)}>
                                        <i className={hiddenLogin ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                    </div>
                                </div>

                                <div className='login__content-passwordoption' >
                                    <div className="login__content-passwordsave">
                                        <div className="login__content-passwordsave-checkbox">
                                            <input type="checkbox" id="savepass" />
                                        </div>
                                        <label htmlFor='savepass' className="login__content-passwordoption-text">Lưu mật khẩu</label>
                                    </div>
                                    <div className="login__content-forgotpass">
                                        <div className="login__content-passwordoption-text">Quên mật khẩu ?</div>
                                    </div>
                                </div>

                                <button className="login__content-btn form-submit" type="submit">Đăng nhập</button>

                            </form>

                        </div>

                        <div className="login__bottom">
                            <div >Bạn chưa có tài khoản ?</div>
                            <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng ký ngay</div>
                        </div>
                    </div>

                    <div className="login-signup">
                        <div className="login__heading">🍕 ĐĂNG KÝ 🍕</div>
                        <div className="login__content">

                            <form action="" method="POST" className="form" id="form-1">
                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Tên: * <span className ="form-message"></span> </div> 
                                    <input type="text" id='name' name="fullname" className='method-content__address-number form-control' placeholder=''/>
                                </div>

                                <div className='login__content-input-2' >
                                    <div className="login__content-input-wrap form-group" >
                                        <div className='login__content-label'>Ngày sinh: * <span className ="form-message"></span> </div> 
                                        <input type="date" name="birtday" id='birthday' className='method-content__address-number form-control' placeholder=''/>
                                    </div>

                                    <div className="login__content-input-wrap" >
                                        <div className='login__content-label'>Giới tính: * </div>
                                        {/* <input type="text" id='gender' className='method-content__address-number form-control' placeholder=''/> */}
                                        <select name="gender" className='login__content-input-selected' defaultValue={'male'}>
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                        </select>
                                    </div>
                                    
                                </div>

                                <div className='login__content-input-2' >
                                    <div className="login__content-input-wrap form-group" >
                                        <div className='login__content-label'>Điện thoại: * <span className ="form-message"></span> </div> 
                                        <input type="text" id='phone' name="phone" className='method-content__address-number form-control' placeholder=''/>
                                    </div>

                                    <div className="login__content-input-wrap form-group" >
                                        <div className='login__content-label'>Email: * <span className ="form-message"></span></div>
                                        <input type="text" id='email' name="email" className='method-content__address-number form-control' placeholder=''/>
                                    </div>
                                    
                                </div>

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Mật khẩu: * <span className ="form-message"></span></div>
                                    <input type={hiddenSignup ? 'password' : 'text'} id='password' name="password" className='method-content__address-number form-control' placeholder=''/>
                                    <div className="login__content-hiden" onClick={() => setHiddenSignup(!hiddenSignup)}>
                                        <i className={hiddenSignup ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                    </div>
                                </div>

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Nhập lại mật khẩu: * <span className ="form-message"></span></div>
                                    <input type={hiddenRepeat ? 'password' : 'text'} id='password_confirmation' className='method-content__address-number form-control' placeholder=''/>
                                    <div className="login__content-hiden" onClick={() => setHiddenRepeat(!hiddenRepeat)}>
                                        <i className={hiddenRepeat ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} ></i>
                                    </div>
                                </div>
 

                                <button className="login__content-btn form-submit">Đăng ký</button>
                            </form>

                        </div>
                        <div className="login__bottom">
                            <div >Bạn đã có tài khoản ?</div>
                            <div className="signup__link" onClick={() => setIsleft(!(isLeft))} >Đăng nhập ngay</div>
                        </div>
                    </div>

                    {/* <div className={isLeft ? 'login-slide__left' : 'login-slide__right'} >
                        <img src="/img/loginPoster.jpg" alt="Đăng ký thành viên tích điểm cùng pizza hut" />
                    </div> */}
                    
                </div>
            </div>
}

export default Loginsignup;