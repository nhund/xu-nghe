import React from 'react';

import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';

class MainFooter extends React.Component {
    render(){
        return(
            <div id="footer">
            <div className="row">
              <div className="footer-top">
                <div className="col-ft">
                  <div className="list-footer">
                    <h3>Hỗ trợ khách hàng</h3>
                    <ul>
                      <li>Hotline:1900-6035</li>
                      <li>(1000 đồng/phút, 8-21h kể cả T7, CN)</li>
                      <li><a href>Hướng dẫn đặt hàng</a></li>
                      <li><a href>Phương thức vận chuyển</a></li>
                      <li><a href>Chính sách đổi trả</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-ft">
                  <div className="list-footer">
                    <h3>Tài khoản của bạn</h3>
                    <ul>
                      <li><a href>Xem trạng thái đơn hàng</a></li>
                      <li><a href>Lịch sử đơn hàng</a></li>
                      <li><a href>Thông tin tài khoản</a></li>
                      <li><a href>Chính sách bảo mật</a></li>
                      <li><a href>Điều khoản sử dụng</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-ft">
                  <div className="list-footer">
                    <h3>Thanh Toán An Toàn Tại ...</h3>
                    <div className="bank"><img src="images/adv/bank.png" /></div>
                  </div>
                </div>
                <div className="col-ft">
                  <div className="like-box"><img src="images/adv/like-box.png" /></div>
                </div>
              </div>
              <div className="footer-list">
                <h3>Danh mục và nhãn hàng được yêu thích</h3>
                <a href>mẹ và bé</a> 
                <a href>áo thun nam</a> 
                <a href>xe đẩy cho bé</a>
                <a href>mỹ phẩm hàn quốc</a>
                <a href>giày nam</a>
                <a href>thời trang công sở</a>
                <a href>đồ chơi trẻ em</a>
                <a href>quần áo trẻ em</a> 
                <a href>jumpsuit</a> 
                <a href>balo</a>
                <a href>đồng hồ nam</a>
                <a href>áo khoác nam</a>
                <a href>đầm dự tiệc</a>
                <a href>đầm công sở</a>
                <a href>áo đôi</a>
                <a href>áo sơ mi nam</a>
                <a href>áo vest nữ</a>
                <a href>áo vest nam</a>
                <a href>quần jean nam</a>
                <a href>túi xách nam</a>
                <a href>giày da nam</a>
                <a href>áo thun nữ</a>
                <a href>đầm dạ hội</a>
                <a href>sandal nam</a>
                <a href>áo kiểu nữ</a>
                <a href>giày đế xuồng</a>
                <a href>áo khoác len</a>
                <a href>đầm ôm</a>
                <a href>quần áo sơ sinh</a>
                <a href>thời trang bé gái</a>
                <a href>mua sắm trực tuyến</a>
                <a href>máy hâm sữa</a>
              </div>
              <div className="footer">
                <div className="footer-txt">
                  <h3>Công ty TNHH phát triển thương mại abc</h3>
                  <p>Mã số thuế: 0106033661, cấp ngày 14/11/2012, nơi cấp: Sở kế hoạch &amp; đầu tư thành phố Hà Nội.</p>
                  <p>Trụ sở chính: Tầng 2, tòa nhà Oceanpark số 01 Đào Duy Anh, phường Phương Mai, quận Đống Đa, thành phố Hà Nội.</p>
                </div>
                <div className="input-group-fl-register">
                  <h3>Đăng ký Email nhận những ưu đãi</h3>
                  <input type="text" placeholder="Nhập Email" className="form-control input-txt" />
                  <input id="submit_contact" className="main-button" type="submit" defaultValue="Đăng ký" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default MainFooter;
