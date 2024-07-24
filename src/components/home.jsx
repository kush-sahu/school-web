import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './card';
import school from '../assets/homeschool.png' ;
import parents from '../assets/parents.png';
import Footer from './footer.jsx'
import "./nav.css";

const images = [
    { url: 'https://internationalteacherstraining.com/blog/wp-content/uploads/2018/08/171219-teacher-stock.jpg', alt: 'School Image 1' },
    { url: 'https://c.stocksy.com/a/u5DA00/z9/2433618.jpg', alt: 'School Image 2' },
    { url: 'https://lerablog.org/wp-content/uploads/2020/02/College-Education.jpg', alt: 'School Image 3' },
    { url: 'https://wallpaperaccess.com/full/2245162.jpg', alt: 'School Image 4' },

];

const App = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    let card = [
        { text: 'Welcom', para: 'A unique caring and nurturing environment for your child', bt_text: 'Read More', col: 'rgb(255 194 0)' },
        { text: 'Enquiry', para: 'We know choosing the best care and education for your child is important', bt_text: 'Read More', col: 'red' },
        { text: 'WelcomEnrolment', para: 'It’s never too early to make an enquiry – we welcome you to book a time to visit us.', bt_text: 'Read More', col: 'green' },
        { text: 'Our location', para: 'Were located in the heart of Mullumbimby.', bt_text: 'Read More', col: '#692ed7' },
    ];

    return (
        <div>

            <Slider {...settings} style={{ width: '100vw', overflow: 'hidden', }}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='sliderkush' src={image.url} alt={image.alt} style={{  padding: '40px', margin: 'auto', marginTop: '2%' }} />
                    </div>
                ))}
            </Slider>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '4px', width: '80vw', margin: 'auto', alignItems: 'center', flexWrap: 'wrap' }}>

                {card.map((card, index) => (
                    <Card
                        key={index}
                        text={card.text}
                        para={card.para}
                        bt_text={card.bt_text}
                        col={card.col}
                    />
                ))}

                <div className="col-12 col-md-9 offset-md-1">
                    <img
                        src="https://static.wixstatic.com/media/1e7c2e_eaf18b8f5ead4ed0808df41e9a840607~mv2.jpg/v1/crop/x_0,y_172,w_2048,h_662/fill/w_1225,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/405286626_1099738271035183_7612277447021.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </div>

                <center >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <h1 className="text-center">
                                    Welcome to Springdale Public School, where we nurture young minds for a brighter future.
                                </h1>
                                <p className="text-center">
                                    "Welcome to Springdale Public School, where we nurture young minds for a brighter future." At Springdale, we believe that every child possesses unique potential waiting to be unlocked. Our dedicated educators foster a supportive and stimulating environment that encourages curiosity, creativity, and critical thinking. By blending innovative teaching methods with a strong foundation of core values, we ensure our students are well-equipped for the challenges of tomorrow.
                                </p>
                                <p className="text-center">
                                    Join us in our mission to cultivate the leaders, thinkers, and innovators of the future. At Springdale Public School, we guide each student on their path to success and fulfillment, providing them with the tools and confidence they need to excel in an ever-evolving world. Together, we are committed to building a brighter future for our students and the community.
                                </p>
                            </div>
                        </div>




                    </div>
                </center>
            </div>
            <img src={school} alt=""  style={{width:'100vw'}}/>
           < img src={parents} alt=""  style={{width:'100vw'}}/>
           <Footer/>
        </div>
    );
};

export default App;
