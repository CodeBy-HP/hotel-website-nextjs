"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"} // Use animate instead of whileInView
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image src={"/about/img2.png"} width={559} height={721} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate={inView ? "show" : "hidden"} // Use animate instead of whileInView
            viewport={{ once: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at et
              voluptatem rem repellat accusamus unde? Temporibus, nemo.
              Voluptatibus vitae adipisci nam provident nisi laboriosam eius
              perspiciatis quaerat esse. Expedita.
            </p>
            {/* stats */}
            <div className=" my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              mollitia minima ipsam voluptas neque recusandae voluptate ad,
              tenetur iusto dolorem et omnis nisi distinctio consectetur?
            </p>
            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
