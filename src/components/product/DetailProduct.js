import React from 'react'

import MainFooter from '../share/footer/MainFooter'
import MainHeader from '../share/menu/MainHeader'
import {Link} from 'react-router-dom'
class DetailProduct extends React.Component {
    render(){
        return(
            <div id="wrapper">
            <MainHeader />
            <div id="main" className="row">
            <div className="hows">
              <div className="col-md">
                <div className="list">
                  <div className="title-list"><a href="#">Tất cả danh mục</a></div>
                  <div className="menu-popup menu-dropdown">
                    <ul>
                      <li>
                        <a href="#">
                          <h4><Link to={'xu-nghe'}>Làm đẹp</Link></h4>
                          <h5>Mỹ phẩm ...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Sức khỏe</h4>
                          <h5>Thực phẩm chức năng ...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-1" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1, height: '178.571px'}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1, height: '234.375px'}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Thể thao</h4>
                          <h5>Giầy đá bóng, vợt tennis ...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-2" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Gia dụng</h4>
                          <h5>Bếp, tủ ...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-3" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Thiết bị văn phòng</h4>
                          <h5>Máy tính, máy in...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-4" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Trẻ em</h4>
                          <h5>Lego, ...</h5>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-5" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <h4>Tất cả danh mục</h4>
                        </a>
                        <div className="menu-dropdown-sub">
                          <div className="col-ms menu-sub">
                            <span>Máy tính và mạng</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div id="scroll-6" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                  <li><a href>Phụ kiện máy tính bảng</a></li>
                                  <li><a href>CD, DVD, HDD, MO Driver</a></li>
                                  <li><a href>Laptop</a></li>
                                  <li><a href>Máy tính bảng</a></li>
                                  <li><a href>Macbook</a></li>
                                  <li><a href>Netbook</a></li>
                                  <li><a href>Linh kiện server</a></li>
                                  <li><a href>Linh, phụ kiện laptop</a></li>
                                  <li><a href>Linh, phụ kiện destop</a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>	
                          <div className="col-ms menu-sub">
                            <span>Thương hiệu</span>
                            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '99%', height: 300}}><div className="scroll" style={{overflow: 'hidden', width: '99%', height: 300}}>
                                <ul className="menu-sub-ul">
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th1.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th2.png" /></a></li>
                                  <li><a href><img src="images/adv/logo-th3.png" /></a></li>
                                </ul>
                              </div><div className="slimScrollBar ui-draggable" style={{background: 'rgb(215, 215, 215)', width: 5, position: 'absolute', top: 0, opacity: 1, display: 'block', borderRadius: 5, zIndex: 99, right: 1}} /><div className="slimScrollRail" style={{width: 5, height: '100%', position: 'absolute', top: 0, display: 'block', borderRadius: 5, background: 'rgb(204, 204, 204)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
                          </div>
                          <div className="banner-menu">
                            <a href><img src="images/adv/banner-menu.png" /></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-970">
                <div className="nav-menu"><a href>Trang chủ</a><span>» Làm đẹp</span><span>» Thời trang nữ</span>
                  <span>» Áo sơ mi công sở</span></div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="bg-box">
              <div className="hows">
                <div className="col-854">
                  <div className="hows">
                    <div className="col-350">
                      <div className="zoom-section">    	  
                        <div className="zoom-small-image">
                          <div id="wrap" style={{top: 0, zIndex: 9999, position: 'relative'}}><a href="images/products/pro_detail.png" className="cloud-zoom" id="zoom1" rel="position:'inside',showTitle:false,adjustX:0,adjustY:0" style={{position: 'relative', display: 'block'}}>
                              <img src="images/products/pro_detail.png" alt title="Sản phẩm 1" style={{display: 'block'}} /></a><div className="mousetrap" style={{backgroundImage: 'url(".")', zIndex: 999, position: 'absolute', width: 350, height: 350, left: 0, top: 0, cursor: 'move'}} /></div>
                        </div>
                        <div className="zoom-desc">
                          <a href="images/products/pro_detail1.png" className="cloud-zoom-gallery" title="Red" rel="useZoom: 'zoom1', smallImage: 'images/products/pro_detail1.png' ">
                            <img className="zoom-tiny-image" src="images/products/pro_detail1.png" alt="Thumbnail 1" /></a>
                          <a href="images/products/pro_detail2.png" className="cloud-zoom-gallery" title="Blue" rel="useZoom: 'zoom1', smallImage: 'images/products/pro_detail2.png'">
                            <img className="zoom-tiny-image" src="images/products/pro_detail2.png" alt="Thumbnail 2" /></a>                  
                          <a href="images/products/pro_detail.png" className="cloud-zoom-gallery" title="Blue" rel="useZoom: 'zoom1', smallImage: 'images/products/pro_detail.png' ">
                            <img className="zoom-tiny-image" src="images/products/pro_detail.png" alt="Thumbnail 3" /></a>
                          <a href="images/products/pro_detail1.png" className="cloud-zoom-gallery" title="Red" rel="useZoom: 'zoom1', smallImage: 'images/products/pro_detail1.png' ">
                            <img className="zoom-tiny-image" src="images/products/pro_detail1.png" alt="Thumbnail 1" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-474">
                      <div className="detail">
                        <h1>Áo sơ mi công sở</h1>
                        <p>Thương hiệu : <strong>Tiến Sport</strong> <a href>« Xem các sản phẩm cùng thương hiệu</a></p>
                        <p>Giá thị trường : <span className="detail-span">179.000 <small><sup>đ</sup></small></span></p>
                        <p>Giá bán : <span className="detail-span1">250.000 <small><sup>đ</sup></small></span> (Đã có VAT)</p>
                        <p>Bảo hành : <strong>24 tháng</strong></p>
                        <p>Chất liệu : Cotton, Voan</p>
                        <p>Xuất xứ : Hàn Quốc</p>
                      </div>
                      <div className="number">
                        <div className="number-fl">Số lượng :</div>
                        <input id="quantity79" className="number-inputboxquantity" defaultValue={1} name="quantity[]" type="text" />
                        <div className="number-fl-input">
                          <input className="number-quantity_box_button_down" onclick="var qty_el = document.getElementById('quantity79'); 
                                        var qty = qty_el.value; if( !isNaN( qty ) && qty > 0 ) qty_el.value--;return false;" type="button" />
                          <input className="number-quantity_box_button_up" onclick="var qty_el = document.getElementById('quantity79'); 
                                        var qty = qty_el.value; if( !isNaN( qty )) qty_el.value++;return false;" type="button" />
                        </div>
                      </div>
                      <div className="share"><img src="images/share.png" /></div>
                      <div className="button-box">
                        <div className="button-box-cart button-box-fl"><a href><span />Thêm vào giỏ hàng</a></div>
                        <div className="button-box-cart button-box-fl"><a href><span />Mua ngay</a></div>
                        <div className="button-box-favorite button-box-fl"><a href><span />Thêm vào yêu thích</a></div>
                      </div>
                      <div className="hotline-fl">Hỗ trợ mua hàng <span>0988 777 888</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-280">
                  <div className="box-txt txt-detail">
                    <p>Thời gian giao hàng 2 ngày.</p>
                    <ul>
                      <li className="icon-1">
                        Shop <span>MIỄN PHÍ VẬN CHUYỂN</span>
                        cho đơn hàng từ <span>300,000 <small><sup>đ</sup></small></span> trở lên
                      </li>
                      <li className="icon-2">
                        Đổi trả trong vòng 15 ngày
                      </li>
                      <li className="icon-3">
                        Cam kết sản phẩm chính hãng	
                      </li>
                    </ul>
                  </div>
                  <div className="box-txt box-txt-detail">
                    Bộ phận bán hàng và giao hàng SHOP làm việc từ 8h00 sáng đến 7h00 tối tất cả các ngày trong tuần. 
                  </div>
                </div>
              </div>
              <div className="hows">
                <div className="fl boxtvsi">
                  <div className="fl box-dbtt">
                    <div className="title-tab">
                      <ul className="fl dbttab">
                        <li><a className="nor active" rel="dbtthose">Chi tết sản phẩm</a></li>
                        <li><a className="nor" rel="dbtthnx">Thông số kỹ thuật</a></li>
                        <li><a className="nor" rel="dbtthny">Thông tin thương hiệu</a></li>
                      </ul>
                    </div>
                    <div className="fl ctdbtt">
                      <div style={{display: 'block'}} className="fl dbtthose">
                        <div className="fl chrwrap">
                          <div className="detail_txt">
                            <h2 style={{fontSize: 18}}>THÔNG TIN SẢN PHẨM</h2>
                            <p>Kiểu dáng: áo sơ mi cổ bẻ bo nút ở tay, có thể phối với quần tây, 
                              quần jean hay chân váy để mặc đi làm đề đẹp</p>
                            <p>màu sắc: đỏ đô như hình</p>
                            <p>xuất sứ; việt nam</p>
                            <p>chất liệu: vải kate silk thấm hút mồ hôi và thoáng mát</p>
                            <p>Size: M (45-53kg) tùy chiều cao</p>
                            <p>đảm bảo sản phẩm đẹp về kiểu dáng và chất lượng</p>
                            <p>Bảng thông số size tham khảo:</p>
                            <img src="images/products/pro_detail.png" />
                          </div>
                        </div>
                      </div>
                      <div style={{display: 'none'}} className="fl dbtthnx hide">
                        <div className="fl chrwrap">
                          <div className="detail_txt">
                            <h2 style={{fontSize: 18}}>THÔNG TIN SẢN PHẨM</h2>
                            <p>Kiểu dáng: áo sơ mi cổ bẻ bo nút ở tay, có thể phối với quần tây, 
                              quần jean hay chân váy để mặc đi làm đề đẹp</p>
                            <p>màu sắc: đỏ đô như hình</p>
                            <p>xuất sứ; việt nam</p>
                            <p>chất liệu: vải kate silk thấm hút mồ hôi và thoáng mát</p>
                            <p>Size: M (45-53kg) tùy chiều cao</p>
                            <p>đảm bảo sản phẩm đẹp về kiểu dáng và chất lượng</p>
                            <p>Bảng thông số size tham khảo:</p>
                            <img src="images/products/pro_detail1.png" />
                          </div>
                        </div>
                      </div>
                      <div style={{display: 'none'}} className="fl dbtthny hide">
                        <div className="fl chrwrap">
                          <div className="detail_txt">
                            <h2 style={{fontSize: 18}}>THÔNG TIN SẢN PHẨM</h2>
                            <p>Kiểu dáng: áo sơ mi cổ bẻ bo nút ở tay, có thể phối với quần tây, 
                              quần jean hay chân váy để mặc đi làm đề đẹp</p>
                            <p>màu sắc: đỏ đô như hình</p>
                            <p>xuất sứ; việt nam</p>
                            <p>chất liệu: vải kate silk thấm hút mồ hôi và thoáng mát</p>
                            <p>Size: M (45-53kg) tùy chiều cao</p>
                            <p>đảm bảo sản phẩm đẹp về kiểu dáng và chất lượng</p>
                            <p>Bảng thông số size tham khảo:</p>
                            <img src="images/products/pro_detail2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hows">
              <div className="title"><h2>Sản phẩm cùng <span>Thương hiệu</span></h2></div>
              <div className="box">
                <div className="hows-products">
                  <div id="owl-example" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                    <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: 3584, left: 0, display: 'block', transition: 'all 800ms ease', transform: 'translate3d(-224px, 0px, 0px)'}}><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div></div></div>
                    <div className="owl-controls clickable" style={{display: 'block'}}><div className="owl-pagination"><div className="owl-page active"><span className /></div><div className="owl-page"><span className /></div></div></div></div>
                  <a id="prev" className="prev-fl" />
                  <a id="next" className="next-fl" />
                </div>
              </div>
            </div>
            <div className="hows">
              <div className="title"><h2>Sản phẩm <span>Ưa chuộng</span></h2></div>
              <div className="box">
                <div className="hows-products">
                  <div id="owl-example-1" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                    <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: 3584, left: 0, display: 'block', transition: 'all 800ms ease', transform: 'translate3d(-224px, 0px, 0px)'}}><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 224}}><div className="item">
                            <div className="products-hot">
                              <div className="products-hot-img">
                                <a href>
                                  <img src="images/products/pro.png" />
                                  <span>-30%</span>
                                </a>
                              </div>
                              <div className="products-hot-txt">
                                <h3><a href>Sữa Abbott Pediasure B/A 1.6 Kg</a></h3>
                                <p>575.000 <small><sup>đ</sup></small></p>
                                <p>375.000 đ</p>
                              </div>
                            </div>
                          </div></div></div></div>
                    <div className="owl-controls clickable" style={{display: 'block'}}><div className="owl-pagination"><div className="owl-page active"><span className /></div><div className="owl-page"><span className /></div></div></div></div>
                  <a id="prev-1" className="prev-fl" />
                  <a id="next-1" className="next-fl" />
                </div>
              </div>
            </div>
          </div>
          <MainFooter />
          </div>
        );
    }
}

export default DetailProduct