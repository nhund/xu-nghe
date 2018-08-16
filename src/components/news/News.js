import React from 'react'

import MainFooter from '../share/footer/MainFooter'
import MainHeader from '../share/menu/MainHeader'
import {Link} from 'react-router-dom'

class News extends React.Component {
    render(){
        return(
            <div id="wrapper">
                <MainHeader />
                <div className="head-tlt">
                    <div className="container text-center">
                        <h1 className="tlt fs-Bold"><span>Tin tức</span></h1>
                    </div>
                </div>

                <div id="main">
                        <div className="container">
                        <div className="block-news grid-gallery" id="grid-gallery">
                            <section className="grid-wrap">
                            <ul className="grid" style={{position: 'relative', height: '1381.78px'}}>
                                <li style={{position: 'absolute', left: 0, top: 0}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block1.png" /></a>
                                    <div className="block-fl clear-both">
                                    <div className="block-time"><i className="fa fa-clock-o" aria-hidden="true" />May 6, 2017</div>
                                    <div className="block-cmt"><i className="fa fa-commenting-o" aria-hidden="true" />32</div>
                                    </div>
                                    <div className="block-news-txt">
                                    <h2><Link to={'/thong-tin-chi-tiet'}>Top 99 Restaurants</Link></h2>
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
                                <li style={{position: 'absolute', left: 585, top: 432}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block3.png" /></a>
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
                                <li style={{position: 'absolute', left: 0, top: 432}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block4.png" /></a>
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
                                <li style={{position: 'absolute', left: 292, top: 517}}>
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
                                <li style={{position: 'absolute', left: 877, top: 517}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block3.png" /></a>
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
                                <li style={{position: 'absolute', left: 585, top: 864}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block3.png" /></a>
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
                                <li style={{position: 'absolute', left: 0, top: 864}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block4.png" /></a>
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
                                <li style={{position: 'absolute', left: 292, top: 949}}>
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
                                <li style={{position: 'absolute', left: 877, top: 949}}>
                                <div className="block-news-box">
                                    <a href="#"><img src="images/news/block3.png" /></a>
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
                        <div className="page text-center">
                            <ul>
                            <li><a href="#"><i className="fa fa-chevron-left" aria-hidden="true" /></a></li>
                            <li>1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>

                <MainFooter/>
            </div>
        );
    }
}

export default News