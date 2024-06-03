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
    <div className="grid grid-cols-3 grid-rows-1 gap-4 bg-gray-100 px-8 pb-4 pt-10 text-black">
      <div>
        <h4 className="pb-2 text-sm font-light">Sign up</h4>
        <p className="text-sm font-light">
          Stay connected for the latest drops and exclusive brand updates.
        </p>

        <div className="pb-6 pt-4">
          <SignUpFooterForm />
          <div className="flex w-full flex-row items-center gap-14 px-2">
            <Instagram
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
              size={19}
              strokeWidth={1.7}
            />
            <Facebook
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
              size={19}
              strokeWidth={1.7}
            />
            <Twitter
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
              size={19}
              strokeWidth={1.7}
            />
            <Twitch
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
              size={19}
              strokeWidth={1.7}
            />
            <Youtube
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
              size={19}
              strokeWidth={1.7}
            />
            <Linkedin
              className="transition-colors duration-100 hover:cursor-pointer hover:text-gray-600"
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
