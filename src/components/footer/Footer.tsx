import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import SignUpFooterForm from "./SignUpFooterForm";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black grid grid-cols-3 grid-rows-1 gap-4 pt-10 pb-4 px-8">
      <div>
        <h4 className="text-sm font-light pb-2">Sign up</h4>
        <p className="text-sm font-light">
          Stay connected for the latest drops and exclusive brand updates.
        </p>

        <div className="pt-4 pb-6">
          <SignUpFooterForm />
          <div className="w-full flex flex-row gap-14 items-center px-2">
            <Instagram
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
            <Facebook
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
            <Twitter
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
            <Twitch
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
            <Youtube
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
            <Linkedin
              className="hover:cursor-pointer hover:text-gray-600 transition-colors duration-100"
              size={19}
              strokeWidth={1.7}
            />
          </div>
        </div>
        <p className="text-xs font-light text-gray-600">
          REPRESENT CLO | EU © 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
