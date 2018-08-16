import React from 'react';
import MainFooter from '../footer/MainFooter'
import MainHeader from '../menu/MainHeader'
import MultiMenu from '../menu/MultiMenu'

class Register extends React.Component {
    render() {
      return (
        <div id="wrapper">
            <MainHeader />
            <MultiMenu/>
            <div className="box-register">
        <div className="title-main"><h1>Đăng ký tài khoản</h1></div>   
        <div className="register-fl">
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            <tbody><tr>
                <td className="register-fl-td" width="30%">Email</td>
                <td><input className="register-fl-input" type="text" name /></td>
              </tr>
              <tr>
                <td className="register-fl-td">Mật khẩu</td>
                <td><input className="register-fl-input" type="text" name /></td>
              </tr>
              <tr>
                <td className="register-fl-td">Nhập lại mật khẩu</td>
                <td><input className="register-fl-input" type="text" name /></td>
              </tr>
              <tr>
                <td className="register-fl-td">Giới tính</td>
                <td>
                  <label><input name="radio" type="radio" defaultValue />Nam</label>
                  <label><input name="radio" type="radio" defaultValue />Nữ</label>
                </td>
              </tr>
              <tr>
                <td className="register-fl-td">Mã xác nhận</td>
                <td>
                  <input className="register-fl-input register-fl-input-fl" type="text" name />
                  <img src="images/captcha.png" />
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <input className="register-fl-input-submit" type="submit" defaultValue="Đăng ký" />
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Bạn đã có tài khoản? <a href>Đăng nhập</a></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <label>
                    <div className="input-checkbox">
                      <input className="register-fl-input-checkbox" name type="checkbox" defaultValue />
                    </div>
                    Nhận các thông tin và chương trình khuyến mãi
                    của SHOP qua email.
                  </label>
                </td>
              </tr>
            </tbody></table>
        </div> 	
        <div className="register-fb">
          <a href><span />Login with Facebook</a>
        </div>
      </div>
        <MainFooter />
        </div>
      );
    }
  }

  export default Register