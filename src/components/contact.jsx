// function Contact(){
//     return <>
//     <h1>this is Contact page</h1>
//     </>
// }
// export default Contact;


import React from 'react';
import Footer from './footer';

function Contact() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>

            <div className="row">
                <div className="col-md-6">
                    <h2>Get in Touch</h2>
                    <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>

                    <h3 className="mt-4">Contact Form</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2>Find Us on the Map</h2>
                    <iframe 
                        title="Google Maps Location" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3667827623974!2d-122.08624668467623!3d37.42199897982682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4a1c76817c1%3A0x2f9e4c3b3b8eae22!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1627682174083!5m2!1sen!2sus" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
