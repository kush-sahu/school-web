// function Students(){
//     return <>
//     <h1>this is Students page</h1>
//     </>
// }
// export default Students;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';

const Students = () => {
    return (

        <>          
        <div className="container mt-5" style={{paddingTop:'80px'}}>

                
            <h2 className="text-center mb-4">Student Life at Springdale Public School</h2>

            <div className="row mb-5">
                <div className="col-lg-6 mb-4">
                    <img src="https://files.schudio.com/carrhillschool/images/gallery/STUDENTS_ACHIEVEMENTS_1.jpg" className="img-fluid rounded" alt="Extracurricular Activities" />
                </div>
                <div className="col-lg-6">
                    <h4>Extracurricular Activities</h4>
                    <p>
                        Our school offers a wide range of extracurricular activities that allow students to explore their interests and talents. From sports teams to music and arts clubs, there’s something for everyone.
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6 order-lg-2 mb-4">
                    <img src="https://www.pridesurveys.com/wp-content/uploads/2018/06/student-academic-success.jpeg" className="img-fluid rounded" alt="Achievements and Accolades" />
                </div>
                <div className="col-lg-6 order-lg-1">
                    <h4>Achievements and Accolades</h4>
                    <p>
                        Our students consistently achieve outstanding results in various fields. From academic excellence to winning sports championships and art competitions, we are proud of our students' accomplishments.
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6 mb-4">
                    <img src="https://www.braybrooksc.vic.edu.au/uploaded_files/media/dsc_1568min.jpg" className="img-fluid rounded" alt="Student Council" />
                </div>
                <div className="col-lg-6">
                    <h4>Student Council and Leadership Opportunities</h4>
                    <p>
                        We believe in empowering our students with leadership opportunities. The Student Council plays a crucial role in shaping the school community, providing students with the chance to develop leadership skills and represent their peers.
                    </p>
                </div>
            </div>
            
                    

            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Students;
