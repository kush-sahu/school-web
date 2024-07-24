import "./about.css";
import Footer from "./footer";
function About() {
    return <>

        <div class="col-14 col-md-10 offset-md-1">
            <img
                src="https://www.barton.dalesmat.org/wp-content/uploads/2018/05/school-front.jpg"
                alt=""
                class="img-fluid"
            />
        </div>


        <div className="cards">

            <div className="cardin">
                <h1>History</h1>
                <p>Founded in 1985, Springdale Public School has consistently been at the forefront of quality education and holistic development. With a legacy of excellence, we have dedicated ourselves to nurturing the intellectual and personal growth of our students, preparing them to excel in an ever-changing world.</p>
            </div>
            <img src="https://www.gettingsmart.com/wp-content/uploads/2016/07/Modern-School-Building-Feature-Image.jpg" alt="" />
        </div>
        <div className="cards">
            <img src="https://www.frontlineinternationalschool.com/wp-content/uploads/2021/02/vision-1.png" alt="" />
            <div className="cardin">
                <h1>Vision</h1>
                <p>Our vision is to create a learning environment that not only promotes academic excellence but also encourages critical thinking and ethical values. We strive to develop well-rounded individuals who are equipped to make meaningful contributions to society.</p>
            </div>
        </div>

        <div className="cards">

            <div className="cardin">
                <h1>Mission
                </h1>
                <p>At Springdale Public School, our mission is to empower students with the knowledge, skills, and values essential for thriving in a dynamic global landscape. We are committed to providing a comprehensive education that prepares our students for success in all areas of life.</p>
            </div>
            <img src="https://lh3.googleusercontent.com/tCEN793Tlz5W8tp_Hv9kmjKe0VZ_KPASzyG_-sWe1094D9XEJPIC8C_Mc-Zf5pq7JXREAww4m7HpLRgvyROcGYPOJjl3WKxNyR-VoYIUAxWHttXKgJx90ZOI-Kevu1jIW_zCjMGiunw" alt="" />
        </div>
        <div className="cards">
            <img src="https://zahragrammar.nsw.edu.au/wp-content/uploads/2020/01/Principals-Message-01.jpg" alt="" />
            <div className="cardin">
                <h1>Principal's Message
                </h1>
                <p>
                    Our belief at Springdale is rooted in the idea that every student possesses unique potential. As we guide them towards their future, we are dedicated to nurturing their abilities and supporting their journey to success. Our focus is on holistic development and ensuring each student reaches their full potential.</p>
            </div>
        </div>


        <div className="cards">

            <center >
                <h1>Infrastructure and Facilities</h1>
                <h3>We are proud of our state-of-the-art infrastructure, which includes:</h3>
                <div className=" flex ">
                    <p> <strong>Science and Computer Labs:</strong> Our science labs are equipped with the latest instruments and technology, enabling hands-on experimentation and fostering a spirit of scientific inquiry. Our computer labs are furnished with modern computers and high-speed internet, providing students with the tools they need to excel in the digital age.</p>
                    <p><strong>Classrooms:</strong>Each classroom is designed to create a conducive learning environment. With ample space, ergonomic furniture, and advanced teaching aids such as smart boards and projectors, our classrooms facilitate effective teaching and active student engagement.</p>
                    <p><strong>Library:</strong>Our library is a treasure trove of knowledge, offering an extensive collection of books spanning various genres and subjects. Additionally, we provide access to a wealth of digital resources, including e-books, online journals, and research databases, supporting both academic and personal growth.

</p>
                    <p><strong>Sports Facilities:</strong>We believe in the importance of physical education and offer comprehensive sports facilities. Our school includes a well-maintained playground for outdoor sports, a fully equipped gymnasium for fitness activities, and a swimming pool for aquatic training. These facilities encourage students to participate in a variety of sports and physical activities, promoting health and teamwork.</p>
                </div>
            </center>
        </div>

        <Footer>
            
        </Footer>

    </>
}
export default About;