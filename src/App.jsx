import './App.css'
import avatarAchi from './assets/avatar-achi.jpg'

function App() {

  return (
    <div className="container">
      <div className="social_links_card">
        <div className="social_links_img_container">
          <img src={avatarAchi} alt="Display pic for Achi Gyuse Achi" className="social_links_img" />
        </div>
        <div className="social_links_name_location">
          <h1 className="social_links_name inter-600">Achi Gyuse Achi</h1>
          <h2 className="social_links_location inter-700">Lagos, Nigeria</h2>
        </div>
        <div className="social_links_description_container">
          <p className="social_links_description inter-400">&quot;Front-end developer and anime lover.&quot;</p>
        </div>
        <div className="social_links_container">
          <a target='_blank' rel='noreferrer' href="https://github.com/Achigyus" className="social_link inter-700">Github</a>
          <a target='_blank' rel='noreferrer' href="https://www.frontendmentor.io/profile/Achigyus" className="social_link inter-700">Frontend Mentor</a>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/achi-achi-441297153/" className="social_link inter-700">LinkedIn</a>
          <a target='_blank' rel='noreferrer' href="https://x.com/ElUchihaAnbu" className="social_link inter-700">Twitter</a>
          <a href="#" className="social_link inter-700">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default App
