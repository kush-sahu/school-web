import "./about.css"
import Footer from "./footer";
function Teacher({para,url,name}) {
    return <>

        <div >
            <div className="card teacherCard" style={{ width: '18rem' }}>
                <img src={url} className="card-img-top" alt="Sunset Over the Sea" />
                <div className="card-body">
                    <center><h3>{name}</h3>
                    <p className="card-text">{para}</p>
                    <button type="button" className="btn btn-success">Read More</button>
                    </center>
                </div>
            </div>
        </div>

    

    </>
}
export default Teacher;