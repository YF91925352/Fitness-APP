import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-lg  border-2 border-orange-100 bg-rose-50 px-5 py-16 text-center drop-shadow-md"
    >
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 rounded-full border-2 border-gray-100  bg-orange-100 p-4">
          {icon}
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
          className="text-base font-bold text-rose-400"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
