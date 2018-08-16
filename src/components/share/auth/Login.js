import React from 'react';
import MainFooter from '../footer/MainFooter'
import MainHeader from '../menu/MainHeader'
import MultiMenu from '../menu/MultiMenu'

class Login extends React.Component {
    render() {
      return (
        <div id="wrapper">
            <MainHeader />
            <MultiMenu/>
            <div className="box-register">
            <div className="title-main"><h1>Đăng nhập</h1></div>   
            <div className="register-fl">
            <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody><tr>
                    <td className="register-fl-td" width="30%">Tên đăng nhập</td>
                    <td><input className="register-fl-input" type="text" name /></td>
                </tr>
                <tr>
                    <td className="register-fl-td">Mật khẩu</td>
                    <td><input className="register-fl-input" type="text" name /></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                    <label>
                        <div className="input-checkbox">
                        <input className="register-fl-input-checkbox" name type="checkbox" defaultValue />
                        </div>
                        Đăng nhập tự động
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                    <input className="register-fl-input-submit" type="submit" defaultValue="Đăng nhập" />
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td><a href>Đăng ký</a> / <a href>Quên mật khẩu</a></td>
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

  export default Login