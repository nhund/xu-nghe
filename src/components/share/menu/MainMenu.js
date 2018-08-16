import React from 'react';
import {Link} from 'react-router-dom'

class MainMenu extends React.Component {
    render(){
        return (
            <div className="bg-navigation fixed">
        <div className="row">
          <div className="col-md">
            <div className="logo">
              <a href><img src="images/logo.png" /></a>
            </div>
          </div>
          <div className="col-md-1 col-fx">
            <div className="search">
              <div className="box-search">
                <div className="keyword">
                  <input className="text-search" type="text" onfocus="if(this.value=='Từ khóa cần tìm') this.value='';" onblur="if(this.value=='') this.value='Từ khóa cần tìm';" defaultValue="Từ khóa cần tìm" alt="Search" name />
                </div>
                <div className="header_search_text">
                  <div id="dd" className="wrapper-dropdown-3" tabIndex={1}>
                    <span>Mỹ phẩm</span>
                    <ul className="dropdown">
                      <li><a href="#">Quần áo</a></li>
                      <li><a href="#">Sức khỏe</a></li>
                      <li><a href="#">Khác</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <input className="btn-search btn" type="button" name defaultValue="Search" title="Search" />
            </div>
          </div>
          <div className="col-md-2 col-fx-1">
            <div className="header-cart-favorite">
              <ul>
                <li>
                  <a href>
                    <div className="header-cart">
                      <span>1</span>
                    </div>
                    Giỏ hàng
                  </a>
                </li>
                <li>
                  <a href>
                    <div className="header-favorite">
                      <span>4</span>
                    </div>
                    Yêu thích
                  </a>
                  <div className="favorite-sub">
                    <ul>
                      <li>
                        <div>
                          <a href><img src="images/products/pro.png" /></a>
                          <span>X</span>
                        </div>
                        <a href>Sữa Abbott Pediasure B/A 1.6 Kg</a>
                      </li>
                      <li>
                        <div>
                          <a href><img src="images/products/pro.png" /></a>
                          <span>X</span>
                        </div>
                        <a href>Sữa Abbott Pediasure B/A 1.6 Kg</a>
                      </li>
                      <li>
                        <div>
                          <a href><img src="images/products/pro.png" /></a>
                          <span>X</span>
                        </div>
                        <a href>Sữa Abbott Pediasure B/A 1.6 Kg</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default MainMenu