import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid sm:space-y-10 lg:grid-cols-3 bg-gray-200 p-5">
      <div className="flex flex-col items-center justify-center my-9">
        <div>
          <h6 className="footer-title">Art Category</h6>
          <li>Wooden Furniture & Sculptures</li>
          <li>Wooden Home Decor</li>
          <li>Jute and wooden jewellery</li>
          <li>Jute Kitchenware & utensils</li>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h6 className="footer-title">ArtCraft Location</h6>
        <p>Address: 285 Main Street, Cityville, State</p>
        <p>Phone: +559-123-4567</p>
        <p>Email: info@landnest.com</p>
      </div>
      <div className="mx-auto">
        <h6 className="footer-title ml-5">Social</h6>
        <div className="flex items-center justify-center border space-x-4">
          <FaFacebook className="text-blue-500" />
          <FaLinkedin />
          <FaTwitter className="text-blue-500" />
          <FaInstagram className="text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
