import TextImage from './TextImage';

import landImg from '../assets/land-img.png';

const Landing = () => {
    return (
        <TextImage 
            heading={"For people who love organized progress"}
            text={"Project management simplified"}
            enablebutton={true}
            rowReverse={false}
            image={landImg}
        />
    );
};

export default Landing;
