import Logo from "@/assets/Logo.png";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexSetting = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexSetting} z-99 fixed top-0 w-full py-6 `}>
        <div className={`${flexSetting} mx-auto w-5/6 `}>
          <div className={`${flexSetting} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" className="w-16" />
            {/* Right Side */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
