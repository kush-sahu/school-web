import "./about.css";
function Form() {
    return <>
        <div className="discrip">
            <ul >
                <center><h1>Process</h1>
                
                <p>Admission forms are available for download on our website. Submit the completed form along with the required documents at the school office. Our admissions team is available to assist with any queries and guide you through the process.</p>
                </center>
                <center><h1>Criteria</h1>
                
                <p>Admission is based on merit and the availability of seats. For certain grades, entrance tests may be conducted to assess the suitability of the applicant. We aim to ensure a fair and transparent admission process.</p>
                </center>
                <li>Admission Form Availability:<spam className="text-danger">March 1st</spam>
                </li>
                <li>Last Date for Submission: <spam className="text-danger">March 31st</spam></li>
                <li>
                    Entrance Test:<span className="text-danger"> April 15th</span></li>
                <li>
                    Announcement of Results:<span className="text-danger"> April 30th</span> </li>
            </ul>
        </div>
       
        <div className="formaccademic">

            <form className="container mt-5">
                <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input type="text" className="form-control" id="country" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" className="form-control" id="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="institutionName">Institution Name *</label>
                    <input type="text" className="form-control" id="institutionName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title *</label>
                    <input type="text" className="form-control" id="jobTitle" required />
                </div>
                <div className="form-group">
                    <label htmlFor="schoolType">Select School Type *</label>
                    <select className="form-control" id="schoolType" required>
                        <option value="">Select...</option>
                        <option value="primary">Primary School</option>
                        <option value="secondary">Secondary School</option>
                        <option value="higher">Higher Education</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="schoolURL">School URL *</label>
                    <input type="url" className="form-control" id="schoolURL" required />
                </div>
                <div className="form-group">
                    <label htmlFor="courseAreas">What course areas would you like to learn more about? *</label>
                    <textarea className="form-control" id="courseAreas" rows="3" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="targetAudience">This course is intended for *</label>
                    <textarea className="form-control" id="targetAudience" rows="3" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="questions">Questions?</label>
                    <textarea className="form-control" id="questions" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="commitment">HEM is committed to *</label>
                    <textarea className="form-control" id="commitment" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>

        </div>

       




    </>
}
export default Form;