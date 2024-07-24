import Footer from "./footer";

function Gallery(){
    return <>
    <center style={{paddingTop:'80px'}}><h1>Photo Gallery</h1></center>

    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://c8.alamy.com/comp/J3CD0Y/caucasian-american-school-children-playing-game-of-the-amazons-board-J3CD0Y.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://studentreasures.com/wp-content/uploads/2022/09/diverse-small-schoolchildren-using-mobile-phone-at-classroom-picture-id1301605613-980x653.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://penntoday.upenn.edu/sites/default/files/2020-05/P-100877-Master-V1-009X.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://tammysteachingtools.com/wp-content/uploads/2019/03/Tammys-Teaching-Tools-Why-playing-games-Kids-building-blocks.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://indiabookofrecords.in/wp-content/uploads/2020/01/maximum-students-playing-traditional-games-together-at-single-venue-3.jpeg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://today.tamu.edu/wp-content/uploads/2021/09/file-20210902-13-1ewzc3d.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://imgix.bustle.com/scary-mommy/2019/12/classroom-games-for-kids.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://www.bowdoin.edu/baldwin-center/images/games-picture.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://j7i7x4q6.rocketcdn.me/wp-content/uploads/2022/06/Students-playing-a-board-game-during-a-language-class.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://fileserver.teachstarter.com/thumbnails/1406711-11-benefits-of-playing-games-in-the-classroom-resources-included-thumbnail-0-1200x628.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://media.edutopia.org/styles/responsive_2880px_original/s3fs/masters/d7_images/cover_media/choinacky-169hero-running-500px.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://i.pinimg.com/736x/b9/2b/51/b92b5105123c34b36a838778fd5056fe--pe-lessons-elementary-pe.jpg?b=t"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
}
export default Gallery;