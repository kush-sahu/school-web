import Teacher from "./teacher";
import Footer from "./footer";
function Faculty() {

    const teacher = [
        { url: 'https://thumbs.dreamstime.com/b/female-teacher-24389882.jpg', name: 'John deo', para: 'Principal, M.Ed, 20 years of experience in educational administration.' },
        { url: 'https://static9.depositphotos.com/1011643/1138/i/950/depositphotos_11388757-stock-photo-female-school-teacher-working-in.jpg', name: 'Jame Smith', para: ' Vice Principal, M.Sc. in Physics, 15 years of teaching experience.' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.Y04Jkg_VJQLs-PV7Itca-QHaHa&pid=Api&P=0&h=180', name: 'Emily Johnson', para: 'English Teacher, M.A. in English, 10 years of teaching ' },
        { url: 'http://edushyster.com/wp-content/uploads/2012/10/swf.jpg', name: 'Michael Brown', para: 'Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.' },
        { url: 'https://cdn.axar.az/2017/07/31/math_teacher_news1.jpg', name: 'Sophia Davis', para: 'Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.' },
        { url: 'https://www.pngall.com/wp-content/uploads/4/Female-Teacher-PNG-Free-Download.png', name: 'David Wilson', para: 'Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.' },
    ]

    return <>
    <div style={{width:'100vw',paddingTop:'10%'}}>
    <center><h1>Our Teacher</h1></center>
    <div className="flex ">
        
    {teacher.map((teacher,index)=>(
        <Teacher 
        key={index}
        para={teacher.para}
        url={teacher.url}
        name={teacher.name}
        />
    ))}
        
</div>
</div>
<Footer/>
    </>
}
export default Faculty;