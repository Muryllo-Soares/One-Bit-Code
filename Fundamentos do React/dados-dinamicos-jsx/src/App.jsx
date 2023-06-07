import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import Styles from "./App.module.css"

export default function App(){
  return(
    <div className= {Styles.app}>
      <Title/>
      <Subtitle/>
      <StatusText/>
    </div>
  )
}
