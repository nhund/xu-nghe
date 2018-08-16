import React from 'react'

import MainFooter from '../share/footer/MainFooter'
import MainHeader from '../share/menu/MainHeader'

class Contact extends React.Component {
    render(){
        return(
            <div id="wrapper">
             <MainHeader />
             <div className="head-tlt">
                <div className="container text-center">
                <h1 className="tlt fs-Bold"><span>Liên hệ</span></h1>
                </div>
             </div>
             <div id="main">
                <div className="container">
                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.9778544983!2d105.8019440055065!3d21.022736016267988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1505010861586" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
                <div className="contact-txt">
                    <h2 className="fs-Bold">Thông tin liên hệ</h2>
                    <p>Landmark is a professional WordPress theme designed for real estate agents and companies. Engage visitors and potential clients with custom
                    Visual Composer modules, header options, different listings and property templates. With Landmark, you just need to sit back and let the
                    properties speak for themselves. Try Landmark now!</p>
                </div>
                <div className="contact clearfix">
                    <div className="contact-left">
                    <div className="contact-txt-fl">
                        <table>
                        <tbody><tr>
                            <td className="text-right">Hotline</td>
                            <td><span>(+1)-800-555-6789</span></td>
                            </tr>
                            <tr>
                            <td className="text-right">Email</td>
                            <td>sale@domain.com</td>
                            </tr>
                            <tr>
                            <td className="text-right">Working hours</td>
                            <td>
                                Mon – Fri 9:00 am – 5:30 pm, Sat 9:00 am – 1:00 pm<br />
                                We are closed on 1st &amp; 3rd Sat of every month,<br />
                                Sundays &amp; public holidays
                            </td>
                            </tr>
                        </tbody></table>
                    </div>
                    </div>
                    <div className="contact-right">
                    <div className="box-group-form">
                        <div className="group-form">
                        <div className="group-form-input">
                            <input className="form-control" placeholder="Họ và tên" />
                        </div>
                        <div className="group-form-input">
                            <input className="form-control" placeholder="Email" />
                        </div>
                        <div className="group-form-input">
                            <input className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="group-form-radio">
                            <label className="custom-control custom-checkbox">
                            <input defaultChecked name="checkbox" type="radio" className="custom-control-input" />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Nam</span>
                            </label>
                            <label className="custom-control custom-checkbox">
                            <input name="checkbox" type="radio" className="custom-control-input" />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Nữ</span>
                            </label>
                        </div>
                        <div className="group-form-input">
                            <textarea className="form-control" name="txtcontent" placeholder="Nội dung" defaultValue={""} />
                        </div>
                        </div>
                        <div className="btn-send">
                        <button type="button">Gửi đi</button>
                        </div>
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

export default Contact