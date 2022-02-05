import TextImage from "./TextImage";

import tile2 from '../assets/tile2.png';

const Tile2 = () => {
  return (
      <TextImage 
        heading={"Break big task in smaller parts"}
        text={"DIvide development work in small managable stories with priority and multiple development stages to avoid procrastination and track story progress."}
        enablebutton={false}
        rowReverse={false}
        image={tile2}
    />
  );
};

export default Tile2;
