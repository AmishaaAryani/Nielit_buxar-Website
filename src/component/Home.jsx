import React from 'react'
import Slider from './Slider'


const Home = () => {
  return (
    <>
  <Slider/>
      <div classname="content-outer" id="COntentDiv">

        <div classname="content">

          <div classname="left-item-lf" >

            <div classname="latestnewstitle">Latest News</div>

            <div id="nt-example1-container">
              <div classname="arrow-box">
                <img id="play-puse-news" classname="stop-button-pause" data-state="play" src="../../nielit.gov.in/sites/all/themes/berry/images/pause.gif" />
                <i classname="fa fa-arrow-down" id="nt-example1-prev"></i>
                <i classname="fa fa-arrow-up" id="nt-example1-next"></i>
              </div>

              <ul id="nt-example1" style={{ "paddingLeft": "0px", "height": "130px", "overflow": "hidden" }}>

                <li style={{ "marginTop": "0px" }}><p><a title="Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses" href="../sites/default/files/headquarter/Course_adv10022023.png" style={{ "borderBottom": "none" }}>
                  Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses.</a></p></li></ul>
              <div style={{ "height": "30px" }}><span classname="latest-news-span"><a href="latest_news.html">View More</a></span></div>
            </div>


            <div classname="focus-panel">

              <div classname="tab-panel">

                <div classname="tabs example-a js-tabs"><p classname="js-tabs_control-text">Use the tab and enter or arrow keys to move between tabs</p><ul classname="js-tabs_control" role="tablist"><li role="presentation" classname="js-tabs_control-item--active"><button aria-selected="true" data-controls="js-tabs_panel--00" id="js-tabs_control-item--00" role="tab">News</button></li><li role="presentation"><button aria-selected="false" data-controls="js-tabs_panel--01" id="js-tabs_control-item--01" role="tab">What's New</button></li></ul>

                  <h3 style={{ "display": "none" }}>News</h3>
                  <div style={{ "paddingTop": "15px", "display": "block" }} classname="js-tabs_panel" aria-hidden="false" aria-labelledby="js-tabs_control-item--00" id="js-tabs_panel--00" role="tabpanel">


                    <div classname="bottom-panel-box">

                      <div classname="bottom-panel-box-pic"><img alt="News" src="assets/image/academic-news_0.jpg" /></div>

                      <div classname="bottom-panel-box-content">

                        <h2> Academic News</h2>
                        <ul style={{ "paddingLeft": "20px" }}>
                          <li><a href="#">Guidelines for establishment of Examination Centres for the conduct of the online examination</a></li>
                        </ul>
                        {/* <a href="academic_news_1.html" classname="readmorelinknews">View More</a> */}
                      </div>

                      <div classname="clear"></div>
                    </div>


                    <div classname="bottom-panel-box">

                      <div classname="bottom-panel-box-pic"><img alt="News" src="assets/image/nielit-news.jpg" /></div>

                      <div classname="bottom-panel-box-content">

                        <h2>NIELIT News</h2>
                        <ul style={{ "paddingLeft": "20px" }}>
                          <li><a href="#">Inauguration of the five day training program on digital Marketing for ‘Warli’ Artists, M</a></li>
                        </ul>
                        <a href="nielit-news.html" classname="readmorelinknews">View More</a>
                      </div>

                      <div classname="clear"></div>
                    </div>


                    <div classname="bottom-panel-box">

                      <div classname="bottom-panel-box-pic"><img alt="News" src="assets/image/press.jpg" /></div>

                      <div classname="bottom-panel-box-content">

                        <h2>NIELIT in Press</h2>
                        <ul style={{ "paddingLeft": "20px" }}>
                          <li><a href="#">Var India : 24th September, 2015 HUDCO and NIELIT savour the Digitization Dream</a></li>
                        </ul>
                        <a href="nielit-press.html" classname="readmorelinknews">View More</a>
                      </div>

                      <div classname="clear"></div>
                    </div>

                  </div>

                  <h3 style={{ "display": "none" }}>What's New</h3>
                  <div classname="js-tabs_panel" aria-hidden="true" aria-labelledby="js-tabs_control-item--01" id="js-tabs_panel--01" role="tabpanel" style={{ "display": "none" }}>
                    <div classname="whatsnew">
                      <ul>

                        <li><p><a href="../sites/default/files/headquarter/Course_adv10022023.png" title="Course Adv">Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses</a></p>
                        </li>

                      </ul>

                      <p><a href="latest_news.html" style={{ "fontWeight": "bold" }}>View More</a></p>

                    </div>
                  </div>


                </div>


              </div>

              <div classname="clear"></div>
            </div>
          </div>

          <div classname="right-item-rf">
            <div classname="events-panel">
              <div id="multilines">
                <div style={{ "floatRight width": "100px", "marginTop": "5px", "height": "30px" }}>
                  <div style={{ "textAlign": "right", "marginRight": "15px" }}>
                    <div id="img1">
                      <a classname="stop-button" onclick="return display_con(1);">
                        <img alt="pause" src="../../nielit.gov.in/sites/all/themes/berry/images/pause.gif" /></a></div>
                    <div id="img2" style={{ "display": "none" }}>
                      <a onclick="display_con(2);" classname="start-button"><img alt="play" src="../../nielit.gov.in/sites/all/themes/berry/images/play.gif" />
                      </a></div>
                  </div>
                </div>
                {/* <h1 style={{ "marginTop": "10px" }}>Latest Events</h1> */}

                <div classname="container">
                  <ul classname="newsticker" style={{ "height": "530px", "overflow": "hidden" }}>
                  </ul>
                </div>
              </div>

              <div>
                <span classname="latest-news-span" style={{ "float": "Right", "marginTop": "25px", "paddingRight": "26px" }}>
                  <a href="nielit-news.html">View More: NIELIT News</a>
                </span>
              </div>

            </div>

            <div classname="clear"></div>


            <div classname="panels">

              <div classname="clear"></div>
            </div>


          </div>
        </div>
      </div>
    </>





  )
}

export default Home
