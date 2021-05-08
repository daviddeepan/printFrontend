import React from 'react';
import Slider from "react-slick";

export default function IndexPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
              <h1 style={{fontSize:"35px", fontWeight:"bolder"}}>Hand Picked Products</h1>

          <Slider {...settings}>
            
      <div className="items-stretch" style={{justifyContent: "center", alignItems: "center"}}>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Cards</a>
        </div>
        </div>
      </div>
      <div>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Buisness Cards</a>
        </div>
        </div>
      </div>
      <div>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Buisness Cards</a>
        </div>
        </div>
      </div>
      <div>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Buisness Cards</a>
        </div>
        </div>
      </div>
      <div>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Buisness Cards</a>
        </div>
        </div>
      </div>
      <div>
      <div style={{justifyContent: "center", alignItems: "center"}} className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                <div className="media-card__image" style={{backgroundImage: 'url(https://i.pinimg.com/originals/5f/03/05/5f030551ec27b8cf2cfa6951ed76663e.jpg)'}}>
                 <i className="ion-ios-play" />
                </div>
            </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Buisness Cards</a>
        </div>
        </div>
      </div>
    </Slider>
    </div>

  );
}
