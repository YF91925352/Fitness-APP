import Logo from "@/assets/Logo.png";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexSetting = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
      <div className={`${flexSetting} z-99 fixed top-0 w-full py-6 `}>
        <div className={`${flexSetting} mx-auto w-5/6 `}>
          <div className={`${flexSetting} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" className="w-16" />
            {/* Right Side */}
            {isAboveMediumScreen ? (
              <div className={`${flexSetting} w-full`}>
                <div className={`${flexSetting} text-m gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexSetting} text-m gap-4`}>
                  <p>Sign In</p>
                  <button>Become a member</button>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
