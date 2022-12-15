import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/bootstrap.png";
import meter5 from "../assets/img/c++.png";
import meter6 from "../assets/img/java.png";
import meter7 from "../assets/img/comm.png";
import meter8 from "../assets/img/leadership.png";
import meter9 from "../assets/img/speaker.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>All time I tried to level up both my hard and soft skills <br></br>as they play an important part in shaping one's personality.<br></br>Some of my skills are listed below.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>GOOD COMMUNICATOR</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>LEADERSHIP QUALITIES</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>GOOD ORATOR</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
