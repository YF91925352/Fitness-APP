import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className=" bg-gray-20 py-8  md:h-full md:pb-0">
      {/* Image and main header */}
      <div className="md:h-6/7 mx-auto w-5/6 items-center  justify-center md:flex ">
        {/* Main Header */}
        <div className="mt-20  md:basis-3/5">
          {/* Headings */}
          <div className="flex flex-col items-center gap-8">
            <div className="md:-mb-9">
              <img alt="home-page-text" src={HomePageText} />
            </div>
            <p className="my-8 font-mono text-sm text-amber-700">
              Unrivaled Gym ! Unparalleled Training Fitness Classes ! Get Your
              Dream Body Now.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-12">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-base font-bold text-rose-400"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* Images */}
        <div className=" md: flex basis-3/5 md:ml-36 md:mt-16 md:mb-2 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-grphic" />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreen && (
        <div className=" w-full bg-primary-100 py-4">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8">
              <img
                src={SponsorRedBull}
                alt="redbull-sponsor"
                className="w-[60px]"
              />
              <img
                src={SponsorForbes}
                alt="forbes-sponsor"
                className="w-[60px]"
              />
              <img
                src={SponsorFortune}
                alt="fortune-sponsor"
                className="w-[60px]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
