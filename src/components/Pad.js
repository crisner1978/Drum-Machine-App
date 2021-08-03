import { useEffect, useState } from "react";

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
    <div className="btn-group">
      <div
        onClick={playSound}
        className={`btn btn-secondary p-3 m-2 drum-pad ${
          active && "btn-warning border border-5 border-dark rounded"
        }`}
        id={clip.id}>
        <audio src={clip.url} className="clip" id={clip.keyTrigger} />
        {clip.keyTrigger}
      </div>
    </div>
  );
};
export default Pad;
