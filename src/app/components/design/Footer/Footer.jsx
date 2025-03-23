import "./Footer.css";
import Contact_Info from "@design/contact/Contact_Info/Contact_Info";
import Privacy from "@design/contact/Privacy/Privacy";
import Services_Info from "@design/contact/Services_Info/Services_Info";
import Title from "@design/contact/Title/Title";


const Footer = () => {
    return (
       <>
       <div className="footer">
        <div>
        <Title/>
        </div>

        <div>
        <Services_Info/>
        </div>
        
        <div>
        <Contact_Info/>
        </div>

       </div>

       <div>
            <Privacy/>
        </div>
       </>
    );
};

export default Footer;