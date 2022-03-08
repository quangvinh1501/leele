import Navbar from './NavBar';
import BreadCrumPage from './BreadCrumPage';
import ContactDetails from './ContactDetails';
import FooterPage from './FooterPage';
import './css/material-design-iconic-font.min.css'
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <BreadCrumPage/>
      <ContactDetails/>
      <FooterPage/>
    </>
  );
};
export default ContactPage;
