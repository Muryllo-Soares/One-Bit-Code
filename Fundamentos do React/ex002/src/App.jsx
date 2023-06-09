import { Card } from "./components/Card/Card";
import hfPosterImg from "../public/homem-de-ferro.jpg";
import haPosterImg from "../public/Homem-Aranha.png";
import hfoPosterImg from "../public/Homem-Formiga.jpg";

export default function App() {
  return (
    <>
      <Card title="Pôster: Homem De Ferro" posterImg = {hfPosterImg} text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <Card title="Pôster: Homem Aranha" posterImg = {haPosterImg} text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Card title="Pôster: Homem Formiga" posterImg = {hfoPosterImg} text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </>
  );
}
