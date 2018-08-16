import React from 'react'

import MainFooter from '../share/footer/MainFooter'
import MainHeader from '../share/menu/MainHeader'

class DetailNews extends React.Component {
    render(){
        return(
            <div id="wrapper">
                <MainHeader />
                <div id="main">
                    <div className="container">
                    <div className="content-wh">
                        <div className="blog-detail">
                        <h1 className="fs-Bold">Top 99 Restaurants</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 196.
                        </p>
                        <p><img src="images/news/block5.png" /></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 196.
                        </p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p style={{textAlign: 'right', color: '#959595'}}>Lorem ipsum</p>
                        </div>
                        <div className="share-events clear-both">
                        <a className="google-plus" target="_blank" href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a className="twitter" target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a className="facebook" target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        </div>
                    </div>
                    <div className="events-other">
                        <h3 className="fs-Bold">Tin khác</h3>
                    </div>
                    <div className="block-news grid-gallery" id="grid-gallery">
                        <section className="grid-wrap">
                        <ul className="grid" style={{position: 'relative', height: 517}}>
                            <li style={{position: 'absolute', left: 0, top: 0}}>
                            <div className="block-news-box">
                                <a href="#"><img src="images/news/block1.png" /></a>
                                <div className="block-fl clear-both">
                                <div className="block-time"><i className="fa fa-clock-o" aria-hidden="true" />May 6, 2017</div>
                                <div className="block-cmt"><i className="fa fa-commenting-o" aria-hidden="true" />32</div>
                                </div>
                                <div className="block-news-txt">
                                <h2><a href="#">Top 99 Restaurants</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                                </div>
                            </div>
                            </li>
                            <li style={{position: 'absolute', left: 292, top: 0}}>
                            <div className="block-news-box">
                                <a href="#"><img src="images/news/block.png" /></a>
                                <div className="block-fl clear-both">
                                <div className="block-time"><i className="fa fa-clock-o" aria-hidden="true" />May 6, 2017</div>
                                <div className="block-cmt"><i className="fa fa-commenting-o" aria-hidden="true" />32</div>
                                </div>
                                <div className="block-news-txt">
                                <h2><a href="#">Top 99 Restaurants</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                                </div>
                            </div>
                            </li>
                            <li style={{position: 'absolute', left: 585, top: 0}}>
                            <div className="block-news-box">
                                <a href="#"><img src="images/news/block2.png" /></a>
                                <div className="block-fl clear-both">
                                <div className="block-time"><i className="fa fa-clock-o" aria-hidden="true" />May 6, 2017</div>
                                <div className="block-cmt"><i className="fa fa-commenting-o" aria-hidden="true" />32</div>
                                </div>
                                <div className="block-news-txt">
                                <h2><a href="#">Top 99 Restaurants</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                                </div>
                            </div>
                            </li>
                            <li style={{position: 'absolute', left: 877, top: 0}}>
                            <div className="block-news-box">
                                <a href="#"><img src="images/news/block.png" /></a>
                                <div className="block-fl clear-both">
                                <div className="block-time"><i className="fa fa-clock-o" aria-hidden="true" />May 6, 2017</div>
                                <div className="block-cmt"><i className="fa fa-commenting-o" aria-hidden="true" />32</div>
                                </div>
                                <div className="block-news-txt">
                                <h2><a href="#">Top 99 Restaurants</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </section>
                        <section className="slideshow">
                        <ul>
                            <li>&nbsp;</li>
                        </ul>
                        </section>
                    </div>
                    </div>
                </div>
                <MainFooter />
            </div>
        );
    }
}

export default DetailNews