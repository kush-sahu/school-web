
import Form from "./form";
import './about.css';
import Footer from "./footer";

const arr = [

    { url: 'https://i.pinimg.com/originals/09/ca/cd/09cacd20eb917e72fdae13e6e255fc11.jpg' },
    { url: 'https://www.com.edu/_assets/sitecontent/page-hero-academics.jpg' },
    { url: 'https://mediaschool.indiana.edu/images/academics/degrees/game-design/academics-bs-gamedesign-sm.jpg' },
    { url: 'https://inspiredschools.co.uk/wp-content/uploads/Playground-Ideas-to-Keep-Kids-Physically-Active-in-School-Blog.jpeg' },
    {url:'https://tse4.mm.bing.net/th?id=OIP.o8u2svi2Ub8YvTeMjUuLoAHaE9&pid=Api&P=0&h=180'},
    {url:'https://tse4.mm.bing.net/th?id=OIP.dDOpIHTD84c-WSjN_4y_nQHaDt&pid=Api&P=0&h=180'},
    {url:'https://tse1.mm.bing.net/th?id=OIP.v4BK9qaA5WsYAVWokb4z1wHaFj&pid=Api&P=0&h=180'},
    {url:'https://tse1.mm.bing.net/th?id=OIP.pLX74xuyttLVuWbn7Bz6hQHaFj&pid=Api&P=0&h=180'},
    {url:'https://www.mlive.com/resizer/uC4F3gX7PqnW6SDTxD-eFtiPkVc=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/ada-cascade/photo/academic-games-trophiesjpg-92318864eb99384c.jpg'}
]

function Accademic() {
    return <>
        <div className="col-12 col-md-8 offset-md-2">
            <img
                src="https://www.whsb.essex.sch.uk/_site/data/files/images/auto_upload/news-story/F195E0670F96BB90777B29DF3BA5B72B.jpg"
                alt=""
                className="img-fluid"
            />
        </div>

        <div className="Aarr">
            <center><h1>Accademic</h1></center>
            
            <div className="arr">

                {arr.map((arr, index) => (
                    <div key={index} className="arrEle">
                        <img className="arrimg" src={arr.url} alt="" style={{  height: '35vh '}}/>
                    </div>
                ))}
            </div>

        </div>
  <Footer></Footer>
    </>
}
export default Accademic;