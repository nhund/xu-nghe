import React from 'react';

import {Link} from 'react-router-dom';

class TopMenu  extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="top">
            <div className="row">
              <div className="top-left">
                <div className="register">
                  Hi! <Link to={'/dang-nhap'}>Đăng nhập</Link> hoặc <Link to={'/dang-ki'}>Đăng ký</Link>
                </div>
                <div className="top-sale">
                  <a href="#">Giảm giá trong ngày!</a>
                </div>
              </div>
              <div className="top-right">
                <div className="menu-mobile">
                  <div className="mobile-menu">
                    <a href="#menu">menu</a>
                  </div>
                </div>
                <div className="nav">
                  <ul>
                    <li><a href>Kiểm tra đơn hàng</a></li> 
                    <li><a href>Hướng dẫn mua hàng</a></li>        
                    <li><a href>Liên hệ</a></li>
                  </ul>
                </div>
                <div className="hotline">
                  0988 888 666
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default TopMenu