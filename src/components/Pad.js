import { useEffect, useState } from "react";
import { ButtonWrapper } from "./PadElements";

const Pad = ({ clip, setDisplay }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, []);

  const handlePress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.currentTime = 0;
    audioTag.play();
    setDisplay(clip.id);
  };

  return (
    // <div className="btn-group">
      <ButtonWrapper onClick={playSound} id={clip.id}>
        <audio src={clip.url} className="clip" id={clip.keyTrigger} />
        {clip.keyTrigger}
      </ButtonWrapper>
    // </div>
  );
};
export default Pad;
