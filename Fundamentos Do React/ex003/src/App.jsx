import Profile from "./Components/Profile"
import avatar from "./assets/profile.jpg"

export default function App(){
  return (
    <div className="app">
      <Profile
        avatar = {avatar}
        name = "Muryllo Soares"
        bio = "Full-stack javascript developer"
        phone = "+556699999-9999"
        email = "muryllo@email.com"
        githubUrl = "https://github.com/Muryllo-Soares"
        linkedinUrl = "https://www.linkedin.com/in/muryllo-soares-76a981118/"
        twitterUrl = "https://twitter.com/home"
      />
  
    </div>
  )
}