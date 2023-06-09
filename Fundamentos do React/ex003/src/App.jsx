import Profile from "./Components/Profile/Profile"
import avatarProfile from "./assets/foto-perfil.jpeg"

export default function App(){
  return(
    <Profile 
    title = "Avatar Profile" 
    avatar = {avatarProfile}
    name = "Muryllo Soares"
    />
  )
}