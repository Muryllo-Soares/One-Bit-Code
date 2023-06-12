import Profile from "./Components/Profile/Profile"
import avatarProfile from "./assets/foto-perfil.jpeg"

export default function App(){
  return(
    <Profile 
    title = "Avatar Profile" 
    avatar = {avatarProfile}
    name = "Muryllo Soares"
    bio = "Full-Stack javaScript Developer at Acme Inc."
    phone = "+556699999-9999"
    email = "muryllo@email.com"
    GitHub = "GitHub"
    Linkedin = "LinkedIn"
    twitter = "Twitter"
    />
  )
}