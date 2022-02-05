import TextImage from "./TextImage";

import tile1 from '../assets/tile1.png';

const Tile1 = () => {
  return (
      <TextImage 
        heading={"Collaboration within Team made easier"}
        text={"Deligate tasks easily among the team for fast and organized development"}
        enablebutton={false}
        rowReverse={true}
        image={tile1}
    />
  );
};

export default Tile1;
