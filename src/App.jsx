import './App.css'

function App() {

  return (
    <div className="container">
      <div className="social_links_card">
        <div className="social_links_img_container">
          <img src="" alt="Display pic for Achi Gyuse Achi" className="scoial_links_img" />
        </div>
        <div className="social_links_name_location">
          <h1 className="social_links_name">Achi Gyuse Achi</h1>
          <h2 className="social_links_location">Lagos, Nigeria</h2>
        </div>
        <div className="social_links_description_container">
          <p className="social_links_description">&quot;Front-end developer and anime lover.&quot;</p>
        </div>
        <div className="social_links_container">
          <a href="#" className="social_link">Github</a>
          <a href="#" className="social_link">Frontend Mentor</a>
          <a href="#" className="social_link">LinkedIn</a>
          <a href="#" className="social_link">Twitter</a>
          <a href="#" className="social_link">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default App
