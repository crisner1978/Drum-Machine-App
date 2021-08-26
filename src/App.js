import { useState } from "react";
import "./App.css";
import Pad from "./components/Pad";
import styled from "styled-components";

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  padding-bottom: 5rem;
  height: 100vh;
  background: -webkit-linear-gradient(to left, #c21500, #ffc500);
  background: linear-gradient(to top, black, #c21500, #ffc500);
`;

const TitleWrapper = styled.div`
  text-shadow: 2px 14px 9px rgba(0, 0, 0, 0.6);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 120px;
  text-align: center;


 h3 {
   line-height: 2.4rem;
 }
`;
const DrumContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 350px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55%;
`;

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <Container>
      <TitleWrapper>
        <h1 className="display-4">DRUM MACHINE</h1>
        <h3 id="display">{display}</h3>
      </TitleWrapper>
      <DrumContent id="drum-machine">
        {audioClips.map((clip) => (
          <Pad key={clip.id} clip={clip} setDisplay={setDisplay} />
        ))}
      </DrumContent>
    </Container>
  );
}

export default App;
