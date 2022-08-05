import { useState } from "react";

import Validator from "../functions/validator";

function Loginsignup() {

    const [isLeft, setIsleft] = useState(false)

    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
          Validator.isRequired('#name', 'Vui lòng nhập tên đầy đủ của bạn'),
          Validator.isRequired('#phone', 'Vui lòng nhập SĐT'),
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


    return  <div className="login">

                <div className="login-container">

                    <div className="login-login">
                        <div className="login__heading">🍕 ĐĂNG NHẬP 🍕</div>
                        <div className="login__content">

                            

                            <div className='login__content-input' >
                                <div className='login__content-label'>Email: * </div>
                                <input type="text" id='username' className='method-content__address-number form-control' placeholder=''/>
                            </div>

                            <div className='login__content-input' >
                                <div className='login__content-label'>Mật khẩu: * </div>
                                <input type="password" id='password' className='method-content__address-number form-control' placeholder=''/>
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

                            <form action="" method="POST" className="form" id="form-1">
                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Tên: * <span className ="form-message"></span> </div> 
                                    <input type="text" id='name' className='method-content__address-number form-control' placeholder=''/>
                                </div>

                                <div className='login__content-input-2' >
                                    <div className="login__content-input-wrap form-group" >
                                        <div className='login__content-label'>Ngày sinh: * <span className ="form-message"></span> </div> 
                                        <input type="date" id='birthday' className='method-content__address-number form-control' placeholder=''/>
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
                                        <input type="text" id='phone' className='method-content__address-number form-control' placeholder=''/>
                                    </div>

                                    <div className="login__content-input-wrap form-group" >
                                        <div className='login__content-label'>Email: * <span className ="form-message"></span></div>
                                        <input type="text" id='email' className='method-content__address-number form-control' placeholder=''/>
                                    </div>
                                    
                                </div>

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Mật khẩu: * <span className ="form-message"></span></div>
                                    <input type="password" id='password' className='method-content__address-number form-control' placeholder=''/>
                                </div>

                                <div className='login__content-input form-group' >
                                    <div className='login__content-label'>Nhập lại mật khẩu: * <span className ="form-message"></span></div>
                                    <input type="password" id='password_confirmation' className='method-content__address-number form-control' placeholder=''/>
                                </div>

                                <button className="login__content-btn form-submit">Đăng ký</button>
                            </form>

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