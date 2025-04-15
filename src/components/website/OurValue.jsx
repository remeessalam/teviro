import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-tertiary/95 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Values" />
          <h2 data-aos="fade-up" className="heading-2 mx-0">
            Innovation at Our Core,
            <br /> Integrity in Every Line of Code
          </h2>
          <p data-aos="fade-up" className="desc">
            At Teviro AI Technologies, our values shape everything we do. From
            the way we collaborate with clients to how we build our technology,
            we’re guided by principles that prioritize creativity, trust, and
            quality.
          </p>

          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Innovation</h6>
              <p className="desc">
                We thrive on pushing boundaries with creative thinking and
                cutting-edge tech to build future-ready solutions.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Collaboration</h6>
              <p className="desc">
                We work closely with our clients, fostering strong partnerships
                and open communication every step of the way.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Integrity</h6>
              <p className="desc">
                We build trust through transparency, accountability, and
                delivering on our promises—every time.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Excellence</h6>
              <p className="desc">
                From start to finish, we commit to the highest
                standards—delivering solutions that are not only functional, but
                beautifully crafted.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-secondary flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Custom Software</p>
              <p className="font-medium">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">AI Integration</p>
              <p className="font-medium">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">UI/UX Design</p>
              <p className="font-medium">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Chatbot Development</p>
              <p className="font-medium">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
