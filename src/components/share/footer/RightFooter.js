import React from 'react';

class RightFooter extends React.Component{
    render(){
        return(
            <div className="footer-right">
                <div className="box-bgGreen">
                    <div className="footer-txt-form text-center">
                        <h3 className="fs-Bold">ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN TƯ VẤN</h3>
                        <p>Dự án Dự án Khu trung tâm Khu đô thị Tây Hồ Tây (STARLAKE)</p>
                    </div>
                    <div className="form-registration">
                        <ul>
                        <li><input className="form-control" type="text" placeholder="Họ và tên" /></li>
                        <li><input className="form-control" type="email" placeholder="Email" /></li>
                        <li><input className="form-control" type="tel" placeholder="Số điện thoại" /></li>
                        <li><button className="btn btn-block" type="button">ĐĂNG KÝ NGAY</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightFooter