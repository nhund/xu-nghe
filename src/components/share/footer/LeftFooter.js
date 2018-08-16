import React from 'react'

class LeftFooter extends React.Component {
    render(){
        return(
            <div className="footer-left">
                <div className="box-bgGreen">
                    <div className="footer-txt">
                        <a href="#"><img src="images/logo-footer.png" /></a>
                        <h3 className="fs-Bold">Công ty TNHH Auchan Citizen Việt nam</h3>
                        <p><i className="fa fa-map-marker" />70 Đường số 45, Phường Tân Quy, Quận 7, Tp.HCM
                        </p><p><i className="fa fa-phone" />(+1)-800-555-6789</p>
                        <p><i className="fa fa-envelope-o" />sale@domain.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftFooter