"use client";
import { useEffect } from "react";

import Articles from "@/components/ArticlesV2";
import Faqs from "@/components/Faqs";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";
import CompareRow from "./elements/CompareRow";
import IconTextBlock from "./elements/IconTextBlock";
import Lineup from "./elements/Lineup";

const lineup = [
  {
    url: "https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers",
    img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/Troy-Bilt_Squall179E_3.jpg",
    alt: "",
    title: "Single-Stage Snow Blowers",
    copy: "Troy-Bilt single-stage snow blowers are designed to clear light, powdery snow. They’re maneuverable, lightweight, and come with helpful features.",
    engFor: [
      {
        title: "Snowfall",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-6.svg",
        copy: 'Up to 6"',
      },
      {
        title: "Driveway",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-driveway-up-8.svg",
        copy: "Up to 8 cars",
      },
      {
        title: "Surfaces",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-surfaces-smooth.svg",
        copy: "Smooth",
      },
    ],
    button: {
      copy: "Shop All Single-Stage Snow Blowers",
    },
  },
  {
    url: "https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers",
    img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/Troy-Bilt_Storm3090_13.jpg",
    alt: "Troy-Bilt two-stage, walk-behind snow blower product image",
    title: "Two-Stage Snow Blowers",
    copy: "Designed to tackle heavy, wet snow, Troy-Bilt two-stage models can handle deep snowfalls on a variety of surfaces. Select models include Just One Hand™ operation and trigger-controlled power steering.",
    engFor: [
      {
        title: "Snowfall",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-18.svg",
        copy: 'Up to 12" of snow',
      },
      {
        title: "Driveway",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-driveway-up-15.svg",
        copy: "Up to 15 cars",
      },
      {
        title: "Surfaces",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-surfaces-smooth-gravel.svg",
        copy: "Smooth & gravel",
      },
    ],
    button: {
      copy: "Shop All Two-Stage Snow Blowers",
    },
  },
  {
    url: "https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers",
    img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/Troy-Bilt_Vortex%202610_13.jpg",
    alt: "Man walking behind Troy-Bilt three-stage, heavy duty snow blower clearing sidewalk of snow",
    title: "Three-Stage Snow Blowers",
    copy: "These powerful machines crush snow and ice with a third-stage accelerator and come equipped with large, powerful engines to take on heavy snow.",
    engFor: [
      {
        title: "Snowfall",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-23.svg",
        copy: 'Up to 18"of snow',
      },
      {
        title: "Driveway",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-driveway-up-15-plus.svg",
        copy: "Up to 15+ cars",
      },
      {
        title: "Surfaces",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-surfaces-smooth-gravel.svg",
        copy: "Smooth & gravel",
      },
    ],
    button: {
      copy: "Explore all Three-Stage Snow Blowers",
    },
  },
];

const machineExtreme = [
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-chute-control.svg",
    title: "Easy chute control",
    copy: "Troy-Bilt offers EZ-Chute™ control with 190-degree rotation on single-stage models.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-light.svg",
    title: "Improved Visibility",
    copy: "Headlight provides visibility in low light conditions on select models",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-push-button.svg",
    title: "Push-button electric start",
    copy: "Start your machine at the push of the button instead of pulling a cord on select models.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-speed.svg",
    title: "Quickly change direction",
    copy: "Touch N' Turn™ Power Steering allows you to quickly adjust your direction with one finger on select models.",
  },
];

const compare = [
  {
    row: [
      { copy: "Available Snow Blower Features" },
      {
        title: "Single-Stage",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-6.svg",
        copy: "Light Snowfall<br> Moderate Use",
      },
      {
        title: "Two-Stage",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-18.svg",
        copy: "Moderate Snowfall<br> Moderate Use",
      },
      {
        title: "Three-Stage",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-23.svg",
        copy: "Heavy Snowfall<br> Frequent Use",
      },
    ],
  },
  {
    row: [
      {
        copy: "Push-button electric start available",
        sub: false,
      },
      { active: true },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      { copy: "Heavy-duty gearbox for durability", asterisk: true },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "Trigger-control power steering for easy maneuverability",
        sub: false,
        asterisk: true,
      },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "Heated hand grips for comfortable operation",
        sub: false,
        asterisk: true,
      },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "LED headlight for visibility before and after dawn",
        sub: false,
        asterisk: true,
      },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "Track drive system, designed for severe weather conditions",
        sub: false,
      },
      { active: false },
      { active: true },
      { active: false },
    ],
  },
  // {
  //   row: [
  //     {
  //       copy: "Backed by our limited warranty",
  //       sub: "See brochure for full warranty information",
  //     },
  //     { copy: "3-Year", className: "font-bold" },
  //     { copy: "5-Year", className: "font-bold" },
  //     { copy: "5-Year", className: "font-bold" },
  //   ],
  // },
];

export default function SnowV2({}) {
  const imgType = "res";

  useEffect(() => {
    document.querySelectorAll("#finder-script").forEach(function (elem) {
      elem.remove();
    });
    const html = `
	<script>
(function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/troy-bilt-snow/recommendation.min.js","cfl651");
</script>`;
    const scriptEl = document.createRange().createContextualFragment(html);
    document.body.appendChild(scriptEl);
  });

  // const addPromo = false;

  return (
    <div
      id="sdb-container"
      className="mt-4"
    >
      <div className="upper">
        <section className="relative section-1 d-flex flex-column align-items-stretch">
          <div className="relative min-h-[600px]">
            <ResponsiveImage
              id="hero"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com//ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/31AM5FP4B66_Storm2890_env4.jpg"
              alt="Person walking behind a Troy-Bilt gas powered snow blower clearing their driveway"
              className="h-full w-full position-absolute object-cover top-0 left-0"
              hero
            />
          </div>
        </section>

        <section className="bg-black d-flex flex-column">
          <div className="wrapper text-center text-white p-2 lg:px-52 py-4 lg:py-10">
            <h2 className="text-white">Explore Snow Blowers</h2>
            <p className="lg:px-48 mt-1 lg:mt-4">
              Whether you experience a light snowfall or a heavy story,
              Troy-Bilt® is here to help with single-, two-, and three-stage gas
              powered snow blowers designed to help clear the way during winter.
              Our product finder can help you find the right snow blower for
              your needs.
            </p>
          </div>
        </section>

        <section className="">
          <div className="wrapper">
            <div className="container py-4 lg:py-10">
              <ul className="grid gap-4 lg:grid-cols-3 list-unstyled">
                {lineup.map((block, i) => (
                  <li
                    className="flex flex-col"
                    key={i}
                  >
                    <Lineup
                      block={block}
                      imgType={imgType}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="snow-picker">
          <div id="snow-blower-product-finder" />
        </section>

        <section className="mb-8">
          <div className="container">
            <h2 className="text-center">Features Designed To Help</h2>
            <p className="text-center">
              Troy-Bilt snow blowers come with features designed to help you
              clear snow efficiently.
            </p>
            <ul className="grid gap-4 lg:grid-cols-2 mt-6">
              {machineExtreme.map((block, i) => (
                <li
                  className=""
                  key={i}
                >
                  <IconTextBlock
                    block={block}
                    imgType={imgType}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <div className="container">
            <h2 className="text-center">
              Shop and Compare Troy-Bilt Snow Blowers
            </h2>

            <div className="max-w-screen overflow-x-auto">
              <ul className="grid grid-cols-[20rem_10rem_10rem_10rem] lg:grid-cols-[1fr_16rem_16rem_16rem] mt-4">
                {compare.map((block, i) => {
                  return (
                    <CompareRow
                      block={block}
                      numRows={compare.length}
                      rowNum={i}
                      key={i}
                    />
                  );
                })}
              </ul>
              <div className="text-center text-sm mt-2">
                *Select models only
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="container mb-4">
        <ul className="grid lg:grid-cols-3 gap-3">
          <li>
            <div className="relative bg-[#e41938]">
              <div className="text-white uppercase flex justify-center items-center min-h-[300px] font-bold text-2xl py-24 mx-auto max-w-[180px] text-center">
                3-Year Limited Warranty
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 334.01 272.03"
                className="w-full h-full absolute top-0 left-0"
              >
                <path
                  fill="#fff"
                  d="M249.89 0c2.47 1.74 4.93 3.49 7.4 5.22 18.89 13.21 34.11 29.79 45.78 49.67 10.6 18.05 17.29 37.46 19.98 58.18 4.53 34.85-1.76 67.69-18.98 98.37-1.92 3.43-4.03 6.76-6.21 10.02-.49.74-1.65 1.46-2.5 1.46-19.75.09-39.51.08-59.27.07-.32 0-.63-.11-1.37-.25.5-.98.9-1.81 1.35-2.61 16.43-29.01 32.88-58.02 49.29-87.04 4.7-8.31 5.98-16.92 1.79-25.86-.54-1.14-1.28-2.19-2.13-3.6-3.42 4.91-6.59 9.45-9.98 14.32-.65-.83-1.18-1.39-1.6-2.03-12.17-18.57-24.34-37.14-36.48-55.73-5.87-8.98-11.6-18.05-17.52-27-5.47-8.28-12.88-13.4-23.17-13.46-.33 0-.66.02-.98.06-.15.02-.29.11-.79.32 2.41 4.54 4.81 9.06 7.41 13.95-1.18.09-2.03.22-2.89.22-30.08 0-60.17-.08-90.25.06-4.53.02-9.23.49-13.55 1.75-7.11 2.07-12.46 6.64-15.73 14.05h16.19c-1.36 2.76-2.45 5-3.57 7.22-10.5 20.76-20.99 41.52-31.52 62.27-3.15 6.21-6.42 12.35-9.61 18.54-4.42 8.59-5.34 17.29-.71 26.13.4.77.97 1.46 1.65 2.45l8.44-13.49c.76.96 1.35 1.59 1.82 2.3 12.82 19.42 25.64 38.84 38.43 58.27 4.28 6.5 8.46 13.06 12.75 19.56 5 7.59 11.77 12.44 21.05 13.26 1.18.1 2.37.01 4.02.01-2.6-4.91-4.95-9.34-7.52-14.19h158.8c-.99 1.27-1.65 2.16-2.37 3-12.34 14.62-26.91 26.55-43.55 35.96-.28.16-.52.38-.78.58H91.5c-7.51-5.11-15.33-9.82-22.46-15.42-22.5-17.68-38.76-40.15-48.78-66.89-12.07-32.2-13.66-65.03-4.22-98.23C26.37 55.17 47.19 26.34 78.06 4.7c2.2-1.54 4.36-3.13 6.55-4.7h165.28z"
                />
              </svg>
            </div>
            <div className="bg-neutral-100 p-2">
              <div className="font-bold text-lg text-center mb-1">
                BUILT FOR LIFE®
              </div>
              <div className="text-center">
                All Troy-Bilt snow blowers come with a 3 year-limited warranty.
              </div>
            </div>
          </li>
          <li className="">
            <div className="relative bg-[#e41938]">
              <div className="text-white uppercase flex justify-center items-center min-h-[300px] flex-col text-2xl py-22 mx-auto text-center">
                <span className="font-bold text-7xl">5-Year</span>
                <span className="font-bold text-3xl">Limited warranty</span>
                <span>on auger gearbox</span>
              </div>
            </div>
            <div className="bg-neutral-100 p-2">
              <div className="font-bold text-lg text-center mb-1">
                BUILT FOR LIFE®
              </div>
              <div className="text-center">
                Available on select two and three-stage Troy-Bilt snow blowers.
              </div>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="relative bg-[#e41938]">
              <div className="text-white uppercase flex justify-center items-center min-h-[300px] font-bold flex-col text-2xl py-22 mx-auto max-w-[180px] text-center">
                Limited Lifetime Warranty
                <div className="text-xs">On Extended Polymer Chute</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 334.01 272.03"
                className="w-full h-full absolute top-0 left-0"
              >
                <path
                  fill="#fff"
                  d="M249.89 0c2.47 1.74 4.93 3.49 7.4 5.22 18.89 13.21 34.11 29.79 45.78 49.67 10.6 18.05 17.29 37.46 19.98 58.18 4.53 34.85-1.76 67.69-18.98 98.37-1.92 3.43-4.03 6.76-6.21 10.02-.49.74-1.65 1.46-2.5 1.46-19.75.09-39.51.08-59.27.07-.32 0-.63-.11-1.37-.25.5-.98.9-1.81 1.35-2.61 16.43-29.01 32.88-58.02 49.29-87.04 4.7-8.31 5.98-16.92 1.79-25.86-.54-1.14-1.28-2.19-2.13-3.6-3.42 4.91-6.59 9.45-9.98 14.32-.65-.83-1.18-1.39-1.6-2.03-12.17-18.57-24.34-37.14-36.48-55.73-5.87-8.98-11.6-18.05-17.52-27-5.47-8.28-12.88-13.4-23.17-13.46-.33 0-.66.02-.98.06-.15.02-.29.11-.79.32 2.41 4.54 4.81 9.06 7.41 13.95-1.18.09-2.03.22-2.89.22-30.08 0-60.17-.08-90.25.06-4.53.02-9.23.49-13.55 1.75-7.11 2.07-12.46 6.64-15.73 14.05h16.19c-1.36 2.76-2.45 5-3.57 7.22-10.5 20.76-20.99 41.52-31.52 62.27-3.15 6.21-6.42 12.35-9.61 18.54-4.42 8.59-5.34 17.29-.71 26.13.4.77.97 1.46 1.65 2.45l8.44-13.49c.76.96 1.35 1.59 1.82 2.3 12.82 19.42 25.64 38.84 38.43 58.27 4.28 6.5 8.46 13.06 12.75 19.56 5 7.59 11.77 12.44 21.05 13.26 1.18.1 2.37.01 4.02.01-2.6-4.91-4.95-9.34-7.52-14.19h158.8c-.99 1.27-1.65 2.16-2.37 3-12.34 14.62-26.91 26.55-43.55 35.96-.28.16-.52.38-.78.58H91.5c-7.51-5.11-15.33-9.82-22.46-15.42-22.5-17.68-38.76-40.15-48.78-66.89-12.07-32.2-13.66-65.03-4.22-98.23C26.37 55.17 47.19 26.34 78.06 4.7c2.2-1.54 4.36-3.13 6.55-4.7h165.28z"
                />
              </svg>
            </div>
            <div className="bg-neutral-100 p-2 grow">
              <div className="text-center">
                Available on most Two-Stage and Three-Stage Troy-Bilt snow
                blowers.
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <div
          className="container flex justify-center items-center bg-neutral-200"
          style={{ minHeight: "1000px" }}
        >
          For PLP
        </div>
      </section>

      <Articles
        imgType={imgType}
        articles={{
          h2: "Snow Blower Articles & How To’s",
          blocks: [
            {
              title: "Snow Blower Buying Guide",
              copy: "If you live in areas where snowfall is frequent or heavy, shoveling becomes part of your daily routine. Ditching your shovel, along with the heavy lifting and repetitive strain that comes with shoveling snow, in favor of a snow blower can save you time and energy. A couple of reasons to justify a snow blower…",
              url: "https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html",
              res: (
                <ResponsiveImage
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/31AS6KN2B23-Storm2420-env3-mobile.jpg"
                  id="Hero_LineUp_01"
                  className="absolute w-full h-full object-cover"
                />
              ),
            },
            {
              title: "Get Your Snow Blower Ready for Winter",
              copy: "In order to be ready and able to take on winter, follow these snow blower preparation and maintenance tips to help extend the life of your equipment and ensure your snow blower can handle all the season throws its way.",
              url: "https://www.troybilt.com/en_US/knowledge-tb-snow-blower-preparation-maintenance.html",
              res: (
                <ResponsiveImage
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/SnowBlowerMaint_1100x572.jpg?sw=1116"
                  id="recommended-snow-thrower-back-up-parts"
                  className="absolute w-full h-full object-cover"
                />
              ),
            },
            {
              title: "Snow Blower Maintenance Schedule",
              copy: "Come winter, snow blowers take the form of seasonal lifelines, keeping walkways and paths free of snow, and preventing buildup and dangerous outdoor conditions. And depending on geographic locations, a snow blower's use can vary greatly - from several times a season to a dozen-plus.",
              url: "https://www.troybilt.com/en_US/knowledge-tb-snow-blower-maintenance-schedule-and-tips.html",
              res: (
                <ResponsiveImage
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/182_HowDoITroubleshoot_1100x572.jpg"
                  id="snow-thrower-operation-tips"
                  className="absolute w-full h-full object-cover"
                />
              ),
            },
            {
              title: "Snow Blower Troubleshooting Tips",
              copy: "Winter can be filled with intense weather conditions that place snow removal at the top of many to-do lists all season long. While snow blowers are often used to clear snow quickly and easily, unanticipated equipment issues can occur, setting you back on time, as ice and snow continue to build up outdoors.",
              url: "https://www.troybilt.com/en_US/knowledge-tb-snow-blower-troubleshooting-tips.html",
              res: (
                <ResponsiveImage
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/117_ImproveSnowRoutine_1100x572.jpg"
                  id="snow-thrower-safety-tips"
                  className="absolute w-full h-full object-cover"
                />
              ),
            },
          ],
        }}
        numRows={4}
        className="container mt-8"
      />

      <RelatedLinks
        relatedCats={{
          h3: "Related Categories",
          list: [
            {
              title: "Single-Stage Snow Blowers",
              href: "https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers",
            },
            {
              title: "Two-Stage Snow Blowers",
              href: "https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers",
            },
            {
              title: "Three-Stage Snow Blowers",
              href: "https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers",
            },
            {
              title: "Snow Blower Accessories",
              href: "https://www.troybilt.com/en_US/snow-blower-attachments",
            },
          ],
        }}
        className="container mt-8"
      />

      <RelatedLinks
        relatedCats={{
          h3: "Related Searches",
          list: [
            {
              title: "Financing",
              href: "https://www.troybilt.com/en_US/financing",
            },
            {
              title: "Warranty",
              href: "https://www.troybilt.com/en_US/warranty-details.html",
            },
            {
              title: "Register My Product",
              href: "https://www.troybilt.com/en_US/registration.html",
            },
            {
              title: "Operator’s Manual",
              href: "https://www.troybilt.com/en_US/operatorsmanuals",
            },
            {
              title: "Snow Plow Blade Attachment",
              href: " https://www.troybilt.com/en_US/lawn-mower-attachments/46-inch-snow-plow-blade-attachment/19A30017OEM.html",
            },
          ],
        }}
        className="container mt-8"
      />

      <RelatedLinks
        relatedCats={{
          h3: "Snow Blower Maintenance",
          p: "When customers buy Snow Blowers they often buy or consider:",
          list: [
            {
              title: "Shear Pins",
              href: " https://www.troybilt.com/en_US/snow-blower-snow-thrower-parts/snow-blower-shear-pins",
            },
            {
              title: "Belts",
              href: "https://www.troybilt.com/en_US/snow-blower-snow-thrower-parts/snow-blower-belts",
            },
            {
              title: "Shave Plates",
              href: "https://www.troybilt.com/en_US/snow-blower-snow-thrower-parts/snow-blower-shave-plates",
            },
            {
              title: "Slide Shoes",
              href: "https://www.troybilt.com/en_US/snow-blower-snow-thrower-parts/snow-blower-slide-shoes",
            },
            {
              title: "Tires and Wheels",
              href: "https://www.troybilt.com/en_US/snow-blower-snow-thrower-parts/snow-blower-tires-and-wheels",
            },
            {
              title: "All Snow Blower Parts",
              href: "https://www.troybilt.com/en_US/snow-blower-parts",
            },
          ],
        }}
        className="container mt-8"
      />

      <div className="container mt-8">
        <h3 className="mt-6">Questions & Answers</h3>
        <Faqs
          className="border-t"
          faqs={[
            {
              question: "What does a snow blower do?",
              answer: `<a href="https://www.troybilt.com/en_US/snow-blowers">Troy-Bilt snow blowers</a> are engineered to remove snow from unwanted areas quickly. A snow blower can help make snow removal easy by reducing the heavy lifting and repetitive strain that comes with shoveling snow. The various stages of snow blowers signify the steps a snow blower goes through to clear the snow.`,
            },
            {
              question: "What is the ideal type of snow blower for a driveway?",
              answer: `There’s no one-size-fits-all snow blower. Troy-Bilt has models ideal for up to <a href="https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers">6-in</a></a>, <a href="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers">12-in</a>, and <a href="https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers">18-in</a>. of snowfall, so consider how much snow is expected in your area to narrow down your selection. Another consideration is the type of terrain snow will be cleared from such as gravel surfaces, cracked pavement or smooth surfaces. From there, determine what kind of features you’d benefit from, such as trigger control power steering, electric start, or <a href="https://www.troybilt.com/en_US/snow-blower-attachments?prefn1=universal-part-category&prefv1=Heated%20Hand%20Grips">heated hand grips</a>, among other options. This <a href="https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html">snow blower buyer’s guide</a> goes into more detail or use our <a href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html">snow blower product</a> finder for additional guidance.`,
            },
            {
              question: "Do I need a single, two, or three-stage snow blower?",
              answer: `There are three types of snow blowers. The more stages, the more snow the machine can handle (when compared to a comparable model). Troy-Bilt <a href="https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers">Single-Stage Snow Blowers</a> are ideal for up to 6-inches of snowfall, <a href="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers">Two-Stage Snow Blowers</a> are great for up to 12-inches of snowfall and <a href="https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers">Three-Stage Snow Blowers</a> are recommended for up to 18-inches of snowfall. Single-stage snow blowers are ideal for smaller jobs like walkways and short driveways. Troy-Bilt single-stage snow blowers are light, compact and easy to handle. But if you get a lot of snow, have unpaved surfaces with inclines or a longer driveway, you’ll want to consider a 2-stage or 3-stage snow blower that will help clear larger volumes in larger areas.  This <a href="https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html">snow blower buyer’s guide</a> goes into more detail or use our <a href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html">snow blower product finder</a> for additional guidance.`,
            },
            {
              question: "How do I finance a Troy-Bilt snow blower?",
              answer: `Troy-Bilt offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.troybilt.com/en_US/financing">Click here</a> for more details.`,
            },
            {
              question: "How do I store my snow blower in the offseason?",
              answer: `Always refer to your <a href="https://www.troybilt.com/en_US/operatorsmanuals">operator’s manual</a> for comprehensive instructions on maintenance and storage. Instructions will differ depending on the type of snow blower but <a href="https://www.troybilt.com/en_US/knowledge-tb-how-to-prepare-a-snow-blower-for-storage-in-the-off-season.html">this guide</a> can help walk you through some of the most common steps.`,
            },
            {
              question: "How do I register my Troy-Bilt snow blower?",
              answer: `Once you’ve purchased a Troy-Bilt snow blower, you can register your machine <a href="https://www.troybilt.com/en_US/registration.html">here</a>.
							`,
            },
          ]}
        />
      </div>
    </div>
  );
}
