import Card from "./components/Card";
import swPosterImg from "../public/sw-poster.jpg"
import esbPosterImg from "../public/esb-poster.jpeg"
import rotjPosterImg from "../public/rotj-poster.jpeg"


export default function App(){
    return (
      <>
       <Card title = "Pôster: Star Wars (1977)" poster={swPosterImg} />
       <Card title = "Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
       <Card title = "Pôster: Return of the Jedi (1983)" poster = {rotjPosterImg} />
      </>
      
      
    )

}
