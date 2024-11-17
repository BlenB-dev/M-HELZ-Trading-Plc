import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 mt-13 px-4 text-white">
      <div className="container mx-auto">
        <div className="container mx-auto  -mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* About Us Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="text-white space-y-2">
              <li>
                <p>
                  <span className="font-bold">
                    Importation of Pharmaceuticals
                  </span>
                  <p>
                    Sourcing a wide range of medications, (including generics
                    and branded products), Medical Equipments, Devices,
                    Instruments and Supplies.
                  </p>
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold "> Regulatory Compliance</span>{" "}
                  <p>
                    {" "}
                    Navigating the complexities of Ethiopian pharmaceutical
                    regulations to ensure smooth import processes
                  </p>
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Market Insights</span>
                  <p>
                    {" "}
                    Providing valuable market intelligence to our partners for
                    informed decision-making.
                  </p>
                </p>
              </li>
            </ul>
          </div>

          {/* Our Core Values */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Why Partner with Us?</h3>
            <ul className="text-white space-y-2">
              <li>
                <p>
                  <span className="font-bold">Local Expertise</span>
                  <p>
                    In-depth knowledge of the Ethiopian market and regulatory
                    environment.
                  </p>
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold ">Established Network</span>
                  <p>
                    Strong relationships with healthcare providers and
                    distributors across Ethiopia and the african continent.
                  </p>
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Commitment to Quality</span>
                  <p>
                    Rigorous quality control measures to ensure product safety
                    and efficacy.
                  </p>
                </p>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <ul className="text-white space-y-2">
              <li>
                {" "}
                <span className="font-bold ">Location</span> Summit fiyelbet
                road
              </li>
              <li>📧 mhelztrading@gmail.com</li>
              <li>
                <p>
                  📞 + 251 96 821 4723{" "}
                  <p className="mt-[-25px] ml-[170px]">Dr. Helen</p>{" "}
                </p>

                <p>
                  📞 +251946724253
                  <p className="mt-[-25px] ml-[170px]">Dr. Edil</p>
                </p>
                <p>
                  <div className="mt-4 absolute">
                    <FaTwitter />
                  </div>
                  <p className="mt-[10px] absolute ml-[26px]">Dr. Helen</p>{" "}
                </p>
                <p>
                  <div className="mt-10 absolute">
                    <FaInstagram />
                  </div>
                  <p className="mt-[38px] absolute ml-[26px]">Dr. Edil</p>{" "}
                </p>

                {/* <a href="#" className="hover:text-gray-300">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedinIn />
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center mt-8">
        <p className="text-lg text-black">
          &copy;2024 Biz-Connect. All rights reserved.
        </p>

        <div className="flex space-x-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
