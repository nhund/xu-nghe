import React from 'react'

import MainFooter from '../share/footer/MainFooter'
import MainHeader from '../share/menu/MainHeader'
import MultiMenu from '../share/menu/MultiMenu'

class XuNghe extends React.Component {
    render(){
        return(
            <div id="wrapper">
                <MainHeader />
                <MultiMenu/>
                <div className="banner">
                    <div className="callbacks_container">
                    <ul className="rslides callbacks callbacks1" id="slider1">
                        <li id="callbacks1_s0" className style={{display: 'block', float: 'none', position: 'absolute', opacity: 0, zIndex: 1, transition: 'opacity 800ms ease-in-out'}}><img src="images/banner.jpg" /></li>
                        <li id="callbacks1_s1" style={{float: 'left', position: 'relative', opacity: 1, zIndex: 2, display: 'list-item', transition: 'opacity 800ms ease-in-out'}} className="callbacks1_on"><img src="images/banner1.jpg" /></li>
                        <li id="callbacks1_s2" style={{float: 'none', position: 'absolute', opacity: 0, zIndex: 1, display: 'list-item', transition: 'opacity 800ms ease-in-out'}} className><img src="images/banner.jpg" /></li>
                    </ul><a href="#" className="callbacks_nav callbacks1_nav prev">Previous</a><a href="#" className="callbacks_nav callbacks1_nav next">Next</a>
                    </div>
                    <div className="banner-news">
                    <div className="container">
                        <div className="banner-txt">
                        <h2 className="fs-Bold"><a href="#">1450 Cloudcroft Drop</a></h2>
                        <p>Landmark is a professional designed for real estate agents and companies. Engage visitors and potential clients with custom Visual Composer modules, header options, different listings and property templates.</p>
                        <div className="more">
                            <a className="fs-Bold btn" href="#">Xem chi tiết</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="icon-scroll-link"><a href="#" /></div>
                </div>

                <div id="main">
                    
                    <div className="box-bgGray px-3" id="section">
                    <div className="container">
                        <div className="title text-center">
                        <h2 className="fs-Bold">về chúng tôi</h2>
                        <div className="tlt-txt">
                            <p>Landmark is a professional WordPress theme designed for real estate agents and companies. Engage visitors and potential clients with custom<br /> Visual Composer modules, header options, different listings and property templates. With Landmark, you just need to sit back and let the<br /> properties speak for themselves. Try Landmark now!</p>
                        </div>
                        </div>
                        <div className="about-list list-col-3">
                        <ul>
                            <li>
                            <div className="text-center">
                                <img src="images/icon-01.png" />
                                <h2><a href="#">Tầm nhìn - Sứ mệnh</a></h2>
                                <p>Sứ mệnh: Kiến tạo môi trường sống, mang lại giá trị nhân văn cho Cộng đồng - Tầm nhìn đến 2020: Gia nhập hàng ngũ Công ty có giá trị 'Tỷ Đôla'</p>
                            </div>
                            </li>
                            <li>
                            <div className="text-center">
                                <img src="images/icon-02.png" />
                                <h2><a href="#">GIÁ TRỊ CỐT LÕI</a></h2>
                                <p>Sứ mệnh: Kiến tạo môi trường sống, mang lại giá trị nhân văn cho Cộng đồng - Tầm nhìn đến 2020: Gia nhập hàng ngũ Công ty có giá trị 'Tỷ Đôla'</p>
                            </div>
                            </li>
                            <li>
                            <div className="text-center">
                                <img src="images/icon-03.png" />
                                <h2><a href="#">LỊCH SỬ PHÁT TRIỂN</a></h2>
                                <p>Sứ mệnh: Kiến tạo môi trường sống, mang lại giá trị nhân văn cho Cộng đồng - Tầm nhìn đến 2020: Gia nhập hàng ngũ Công ty có giá trị 'Tỷ Đôla'</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="px-3">
                    <div className="container">
                        <div className="title text-center">
                        <h2 className="fs-Bold">Dự án nổi bật</h2>
                        <div className="tlt-txt">
                            <p>Landmark is a professional designed for real estate agents and companies. Engage visitors and potential clients with<br />custom Visual Composer modules, header options, different listings and property templates.</p>
                        </div>
                        </div>
                        <div className="project-main clearfix">
                        <a href="#"><img src="images/img-da.png" /></a>
                        <h2 className="fs-Bold"><a href="#">Tên dự án Lanmark</a></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="fs-Bold"><a href="#"><i className="fa fa-map-marker" />Hoàng Hoa Thám, Ba Đình, Hà Nội</a></p>
                        </div>
                        <div className="project-list list-col-3">
                        <ul>
                            <li>
                            <div className="project-list-box">
                                <a href="#"><img src="images/img-da01.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Tên dự án Lanmark</a></h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p className="fs-Bold"><a href="#"><i className="fa fa-map-marker" />Hoàng Hoa Thám, Ba Đình, Hà Nội</a></p>
                            </div>
                            </li>
                            <li>
                            <div className="project-list-box">
                                <a href="#"><img src="images/img-da02.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Tên dự án Lanmark</a></h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p className="fs-Bold"><a href="#"><i className="fa fa-map-marker" />Hoàng Hoa Thám, Ba Đình, Hà Nội</a></p>
                            </div>
                            </li>
                            <li>
                            <div className="project-list-box">
                                <a href="#"><img src="images/img-da03.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Tên dự án Lanmark</a></h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p className="fs-Bold"><a href="#"><i className="fa fa-map-marker" />Hoàng Hoa Thám, Ba Đình, Hà Nội</a></p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="box-bgGray px-3">
                    <div className="container">
                        <div className="title text-center">
                        <h2 className="fs-Bold">Tin tức mới</h2>
                        <div className="tlt-txt">
                            <p>Xem một số bài đăng tin tức gần đây</p>
                        </div>
                        </div>
                        <div className="list-news list-col-3">
                        <ul>
                            <li>
                            <div className="list-news-box">
                                <a href="#"><img src="images/img-news.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Lorem Post With Image Format</a></h2>
                                <p className="time-upadate">Update: 06/19/2018</p>
                                <p className="list-news-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p><a href="#">Xem thêm <i className="fa fa-caret-right" /></a></p>
                            </div>
                            </li>
                            <li>
                            <div className="list-news-box">
                                <a href="#"><img src="images/img-news01.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Lorem Post With Image Format</a></h2>
                                <p className="time-upadate">Update: 06/19/2018</p>
                                <p className="list-news-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p><a href="#">Xem thêm <i className="fa fa-caret-right" /></a></p>
                            </div>
                            </li>
                            <li>
                            <div className="list-news-box">
                                <a href="#"><img src="images/img-news02.png" /></a>
                                <h2 className="fs-Bold"><a href="#">Lorem Post With Image Format</a></h2>
                                <p className="time-upadate">Update: 06/19/2018</p>
                                <p className="list-news-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <p><a href="#">Xem thêm <i className="fa fa-caret-right" /></a></p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="px-3">
                    <div className="container">
                        <div className="cooperate clearfix">
                        <div className="cooperate-left">
                            <img src="images/img-cooperate.png" />
                        </div>
                        <div className="cooperate-right">
                            <div className="cooperate-txt">
                            <h2 className="fs-Bold tlt">HỢP TÁC ĐẦU TƯ</h2>
                            <h3 className="tlt-txt">Chúng tôi là một đơn vị chuyên phát triển<br /> dự án Đất nhà ở Nhà chung cư,<br /> văn phòng...</h3>
                            <p>Daniel Hill is the Director of the Reality Property at The Agency. Jon sold over $45 mil in the 1st quarter of 2017, ranking him among the top agents in the company. As a Los Angeles native, Jon is intimately familiar with the city where he has spent his entire life. He boasts 14 years of experience as a Realtor, Developer and (formerly) Mortgage Broker, and as such, he understands every facet of the real estate business.</p>
                            <div className="more"><a className="btn" href="#">LIÊN HỆ HỢP TÁC</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="box-bgGray px-3">
                    <div className="container">
                        <div className="title text-center">
                        <h2 className="fs-Bold">Đối tác</h2>
                        <div className="tlt-txt">
                            <p>Dưới đây là một số đối tác chiến lược của chúng tôi</p>
                        </div>
                        </div>
                        <div className="slider_owl partners-fl">
                        <div id="owl-demo" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                            <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: 4680, left: 0, display: 'block'}}><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt01.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt02.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt03.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt04.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt01.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt02.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt03.png" /></a>
                                    </div>
                                </div></div><div className="owl-item" style={{width: 234}}><div className="item">
                                    <div className="text-center partners">
                                    <a href="#"><img src="images/logo-dt04.png" /></a>
                                    </div>
                                </div></div></div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <MainFooter/>
            </div>
        );
    }
}

export default XuNghe