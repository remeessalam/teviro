import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Empowering Business with Intelligent Digital Solutions
              </h2>
              <p className="desc">
                At <b></b>, we're passionate about building transformative
                digital solutions that make a meaningful impact. From startups
                to enterprises, we partner with businesses to deliver
                high-quality, custom-built software powered by innovation and
                integrity. Our experienced team of developers, designers, and
                strategists collaborates closely with clients to craft solutions
                that drive growth, streamline operations, and spark innovation.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-[2rem]">
          <h2 className="text-xl font-medium">
            Where Technology Meets Purpose
          </h2>
          <p className="desc mt-2">
            We don’t just build digital tools—we build trust, transformation,
            and technology that lasts. Our commitment to integrity, creativity,
            and excellence fuels everything we do. With every project, we aim to
            deliver solutions that not only solve current problems but also
            prepare businesses for the future. From custom software and AI to
            game development and CRM solutions, we turn your vision into
            real-world impact.
          </p>
        </div>

        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Visionary Goals
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                Our vision is to be a trusted global partner, helping
                organizations unlock new possibilities through intelligent
                digital solutions. We see a future where technology is
                seamlessly integrated into every business, making operations
                smarter, decisions faster, and customer experiences richer.
                <br />
                <br />
                Headquartered in the heart of innovation, our expert team is
                driven by curiosity and a desire to push boundaries. We strive
                to empower businesses across industries to innovate with
                confidence and embrace change through purpose-driven technology.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <TrustWorthySection />
      <section className="wrapper py-[3rem] bg-tertiary">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc">
              Our mission is to deliver cutting-edge technology solutions that
              are not only innovative but also practical and tailored to the
              unique needs of our clients. At <b></b>, we are committed to
              helping businesses grow by providing exceptional products and
              services that solve real-world challenges, enhance efficiency, and
              drive long-term success. We believe in building smart, scalable,
              and sustainable digital ecosystems that adapt to evolving market
              needs.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      {/* <section className="text-white wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>AI Company</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-tertiary text-center text-white">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
