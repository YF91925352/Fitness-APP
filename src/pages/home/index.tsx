import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className=" bg-gray-20 py-8  md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="md:h-6/7 mx-auto w-5/6 items-center  justify-center md:flex "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="mt-20  md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:-mb-9">
              <img alt="home-page-text" src={HomePageText} />
            </div>
            <p className="my-8 font-mono text-sm text-amber-700">
              Unrivaled Gym ! Unparalleled Training Fitness Classes ! Get Your
              Dream Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
        </div>

        {/* Images */}
        <div className=" md: flex basis-3/5 md:ml-36 md:mt-16 md:mb-2 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-grphic" />
        </div>
      </motion.div>
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
