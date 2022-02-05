import './footer.css';

const Footer = () => {
    return (

        <div className="row footer g-0">
            <div className="col-sm contact">
                <h4>Contact US</h4>
                <ul>
                    <li><a href='https://www.gmail.com' target={"_blank"}>Gmail</a></li>
                    <li><a href='https://www.fb.com' target={"_blank"}>Facebook</a></li>
                    <li><a href='https://www.instagram.com' target={"_blank"}>Instagram</a></li>
                    <li><a href='https://www.twitter.com' target={"_blank"}>Twitter</a></li>
                </ul>
            </div>
            <div className="col-sm about">
                <h4>About US</h4>
                <ul>
                    <li>Meet the Team</li>
                    <li>Testimonials</li>
                    <li>Newsletter</li>
                </ul>
            </div>
            <div className="col-sm review">
                <h4>Review US</h4>
                <input className='review-mail' placeholder="Please enter your email ID" type={"email"} />
                <textarea className='review-text' placeholder='Please enter valuable input' />
            </div>
        </div>
    );
};

export default Footer;
