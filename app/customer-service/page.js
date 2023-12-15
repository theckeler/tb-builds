"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import IconAwards from "@/components/icons/IconAwards";
import IconBelt from "@/components/icons/IconBelt";
import IconBlades from "@/components/icons/IconBlades";
import IconChat from "@/components/icons/IconChat";
import IconLevel from "@/components/icons/IconLevel";
import IconMagGlassBolt from "@/components/icons/IconMagGlassBolt";
import IconManuals from "@/components/icons/IconManuals";
import IconPhone from "@/components/icons/IconPhone";
import IconScrewdriverWrench from "@/components/icons/IconScrewdriverWrench";

const howToContent = {
  blocks: [
    {
      icon: <IconBelt className="w-full max-h-[80px] h-full" />,
      title: "How to Change the Deck Belt on a Riding Mower",
      href: "https://www.troybilt.com/en_US/knowledge-tb-how-to-change-the-deck-belt-on-a-troy-bilt-riding-mower.html",
    },
    {
      icon: <IconBlades className="w-full h-full" />,
      title: "How to Change the Blades on a Riding Mower",
      href: "https://www.troybilt.com/en_US/knowledge-tb-how-to-change-the-blade-on-your-troy-bilt-rider.html",
    },
    {
      icon: <IconLevel className="w-full max-h-[50px] h-full" />,
      title: "How to Level the Deck on a Riding Mower",
      href: "https://www.troybilt.com/en_US/How+Do+I+Level+the+Deck+on+My+Riding+Mower%3F.html",
    },
  ],
  button: {
    copy: "See all how-to content",
    url: "https://www.troybilt.com/en_US/knowledge-center/",
  },
};

const popularHelpLinks = {
  blocks: [
    {
      icon: <IconMagGlassBolt className="w-full h-[100px]" />,
      copy: "Search parts for your machine or view diagrams",
      button: [
        {
          href: "https://www.troybilt.com/en_US/service-and-parts",
          copy: "Find parts",
        },
      ],
    },
    {
      icon: <IconManuals className="w-full h-[100px]" />,
      copy: "Use your model number to download your Operator’s Manual",
      button: [
        {
          href: "https://www.troybilt.com/en_US/operatorsmanuals",
          copy: "Find manuals",
        },
      ],
    },
    {
      icon: <IconScrewdriverWrench className="w-full h-[100px]" />,
      copy: "Find a licensed mechanic at a service center near you ",
      button: [
        {
          href: "https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Stores-FindService",
          copy: "Find service",
        },
      ],
    },
    {
      icon: <IconAwards className="w-full h-[100px]" />,
      copy: "Find warranty information",
      button: [
        {
          href: "https://www.troybilt.com/en_US/warranty-details.html",
          copy: "Warranty FAQs",
        },
        // {
        //   href: "https://www.cubcadet.com/en_US/ew-info-page.html",
        //   copy: "Extended Warranty",
        // },
      ],
      // href: "https://www.cubcadet.com/en_US/warranty-faqs.html",
      // button: {
      //   copy: "Warranty FAQs",
      // },
    },
  ],
};

const findSupport = {
  h2: "Find Support by Model",
  blocks: [
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw26941dc0/products/Equipment/Troy-Bilt_Bronco46K_2000x2000_1.jpg",
      id: "Bilt_Bronco46K_2000x2000_1",
      title: "Lawn Mowers",
      url: "https://www.troybilt.com/en_US/riding-mower/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc4e99be2/products/Equipment/Troy-Bilt_MustangZ54_2000x2000_6.jpg",
      id: "Bilt_MustangZ54_2000x2000_6",
      title: "Zero-Turn",
      url: "https://www.troybilt.com/en_US/riding-lawn-mowers/zero-turn-mowers",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw93aa9e08/products/Equipment/Troy-Bilt_TB230BXP_2000x2000_6.jpg",
      id: "Bilt_TB230BXP_2000x2000_6",
      title: "Walk-Behind Mowers",
      url: "https://www.troybilt.com/en_US/walk-behind-mower/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg",
      id: "Cadet_ProZ_972SD_1",
      title: "Tillers",
      url: "https://www.troybilt.com/en_US/tillers/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg",
      id: "MX550",
      title: "Chipper Shredders",
      url: "https://www.troybilt.com/en_US/chipper-shredders/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw87e9edff/products/Equipment/Troy-Bilt_TB51BP_2000x2000_1.jpg",
      title: "Leaf Blowers",
      id: "Cadet_3X_30HD_3",
      url: "https://www.troybilt.com/en_US/leaf-blowers/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwad09d29f/products/Equipment/Troy-Bilt_Vortex%202610_13.jpg",
      id: "Cub_Cadet_CS16E_2000x2000_4",
      title: "Snow",
      url: "https://www.troybilt.com/en_US/snow-how-to/",
    },
    {
      img: "https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg",
      id: "CC19A30018100",
      title: "Attachments",
      url: "https://www.troybilt.com/en_US/service-and-parts#attachments",
    },
  ],
};

export default function CustomerService({}) {
  return (
    <div id="sdb-container">
      <section className="bg-[#c00] mt-6">
        <div className="container px-3 py-4">
          <h1 className="text-center mb-0 text-white text-5xl">
            Help & Support
          </h1>
          <p className="mt-2 mb-0 text-center text-white max-w-3xl mx-auto">
            We provide value to our Troy-Bilt owners with support content to
            help you feel confident to tackle simple tasks or advice to extend
            the lifetime of your machine
          </p>
        </div>
      </section>

      <section className="mt-3">
        <div className="container">
          <ul className="grid gap-3 lg:grid-cols-3">
            {howToContent.blocks.map((block, i) => {
              return (
                <li
                  className=""
                  key={i}
                >
                  <a
                    href={block.href}
                    className="no-underline flex flex-col p-2 h-full bg-neutral-100"
                  >
                    <div className="h-[100px] w-full flex items-center">
                      {block.icon}
                    </div>
                    <div className="text-center mt-auto font-bold pt-2">
                      {block.title}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-2">
            <a
              href={howToContent.button.url}
              className="text-center w-full block font-bold uppercase"
            >
              {howToContent.button.copy}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <ul className="grid gap-3 lg:grid-cols-2 justify-content-center">
            <li className=" p-6 h-100 bg-neutral-100">
              <form
                action="https://www.troybilt.com/en_US/track-my-order"
                className="h-full flex flex-col"
                method="GET"
                name="trackorder-form"
              >
                <h2 className="text-center">Track My Order</h2>
                <p className="track-order-header-text text-center">
                  Looking to track your order? Look no further! Simply click
                  below to get started and stay up-to-date on the whereabouts of
                  your purchase.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://www.troybilt.com/en_US/track-my-order"
                    className="button text-uppercase font-weight-bold text-decoration-none d-inline-block btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0 w-100"
                    style={{ padding: "0.625rem 2.5rem" }}
                  >
                    Track My Order
                  </a>
                </div>
              </form>
            </li>
            <li className="flex flex-col p-6 h-100 bg-neutral-100">
              <form
                action="/on/demandware.store/Sites-troybilt-Site/en_US/Search-Show"
                className="needs-validation flex flex-col h-100"
                method="get"
                name="simpleSearch"
                novalidate=""
                role="search"
              >
                <h2 className="text-center">Find Support by Model</h2>
                <p className="text-center">
                  Your model number is essential to finding the right
                  replacement parts, product manuals, or locating parts on your
                  machine.
                </p>
                <label htmlFor="search-by-number">
                  Model #, Part # or Item #
                </label>
                <input
                  autoComplete="off"
                  className="form-control search-field"
                  id="search-by-number"
                  name="q"
                  type="search"
                  aria-describedby="16680858695420"
                />
                <button
                  className="underline my-1 text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#find-model-number")
                      .classList.toggle("hidden");
                  }}
                >
                  HOW DO I FIND MY SERIAL NUMBER?
                </button>
                <div
                  className="mt-3 hidden"
                  id="find-model-number"
                >
                  <img
                    src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/customer-service/Find_Model_Number_Troy_Bilt.jpg"
                    alt=""
                    className="ml-auto mr-auto"
                  />
                  <p className="my-2">
                    The Model number is eleven characters long and is printed on
                    the left of the product identification label. Characters can
                    include numbers, letters or hyphens.
                  </p>
                </div>
                <button
                  className="btn btn-secondary btn-pf-search mt-auto py-2 px-5 border-0"
                  type="submit"
                >
                  Find Support
                </button>
              </form>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-5 px-3 bg-neutral-800">
        <div className="container mx-auto text-white">
          <h2 className="text-center text-white">
            Don&apos;t have an account?
          </h2>
          <div className="text-center lg:px-32">
            Find information related to your mower with ease when you{" "}
            <a
              href="https://www.troybilt.com/en_US/login"
              style={{ color: "#fff" }}
              className="font-bold"
            >
              create an account
            </a>{" "}
            and{" "}
            <a
              href="https://www.troybilt.com/en_US/registration.html"
              style={{ color: "#fff" }}
              className="font-bold"
            >
              register your mower
            </a>
            . Benefits include: Proof of purchase for insurance, find warranty
            information, view safety information and get timely maintenance
            reminders.
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container px-3 py-6">
          <h2 className="text-center mb-3 ">Popular Help Links</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {popularHelpLinks.blocks.map(({ href, copy, icon, button }, i) => {
              return (
                <li
                  className="h-full flex flex-col"
                  key={i}
                >
                  {icon}
                  <div className="text-center mt-auto pt-3">{copy}</div>

                  <div className="mt-auto pt-2">
                    {button.map(({ copy, href }, i) => {
                      return (
                        <a
                          href={href}
                          key={i}
                          className="btn w-full font-bold bg-black text-white mt-2"
                        >
                          {copy}
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="">
        <div className="container px-3 py-6">
          <h2 className="text-center">Find Support by Model</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {findSupport.blocks.map(({ img, title, url, id }, i) => {
              return (
                <li
                  className="d-flex flex-col"
                  key={i}
                >
                  <a
                    href={url}
                    className="flex flex-col no-underline items-center p-2 bg-neutral-100"
                  >
                    <h3 className="">{title}</h3>
                    <div className="bg-white p-1">
                      <ResponsiveImage
                        id={id}
                        src={img}
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-7 py-5 bg-[#c00]">
        <div
          className="container"
          style={{ maxWidth: 700 }}
        >
          <h2 className="text-center text-white">
            Didn’t Find What You Were Looking For?
          </h2>
          <p className="text-center text-white">
            Our team is available between 8:30AM - 5:00PM ET, Monday-Friday.
          </p>
          <ul className="row list-unstyled mx-auto">
            <li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
              <div className="d-flex flex-column p-0">
                <a
                  href="tel:800-828-5500"
                  className="d-flex justify-content-center align-items-center py-2 px-5 border-0 no-underline"
                  style={{
                    background: "rgb(0, 0, 0)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <span
                    className="mr-1"
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: 8,
                    }}
                  >
                    <IconPhone className="fill-white" />
                  </span>
                  800-828-5500
                </a>
              </div>
            </li>
            <li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
              <div className="d-flex flex-column p-0">
                <button
                  className="d-flex justify-content-center align-items-center py-2 px-5 border-0"
                  style={{
                    background: "rgb(0, 0, 0)",
                    color: "rgb(255, 255, 255)",
                  }}
                  onclick="startChat()"
                >
                  <span
                    className="mr-1"
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: 8,
                    }}
                  >
                    <IconChat className="fill-white" />
                  </span>
                  Live chat
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
