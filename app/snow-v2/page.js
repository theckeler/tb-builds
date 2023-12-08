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
    copy: "Troy-Bilt single-stage snow blowers are designed to clear light, powdery snow. They’re maneuverable, lightweight, and come with helpful features like push-button electric start.",
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
        copy: 'Up to 18" <br><small>(18–23" for EFI and MAX<sup>™</sup> units)</small>',
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
    copy: "These powerful machines crush snow and ice with a third-stage accelerator and come equipped with a heavy duty, fully sealed gearbox and large, powerful engines to take on the heaviest snow.",
    engFor: [
      {
        title: "Snowfall",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-23.svg",
        copy: 'Up to 23"',
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
    copy: "Adjust the direction of the snow discharge up to 190-degrees.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-light.svg",
    title: "Improved Visibility",
    copy: "LED headlights provide visibility in low light conditions.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-push-button.svg",
    title: "Push-button electric start",
    copy: "Start your machine at the push of the button instead of pulling a cord.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-speed.svg",
    title: "Move at your speed",
    copy: "AugerAssist™ single-stage drive system is designed to grip the ground for minimal pushing effort and maximum clearing capabilities.",
  },
];

const compare = [
  {
    row: [
      { copy: "Available Snow Blower Features" },
      {
        logo: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/logo-1x.svg",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-6.svg",
        copy: "Light Snowfall<br> Moderate Use",
      },
      {
        logo: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/logo-2x.svg",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-18.svg",
        copy: "Moderate Snowfall<br> Moderate Use",
      },
      {
        logo: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/logo-3x.svg",
        img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/icon-snowfall-up-23.svg",
        copy: "Heavy Snowfall<br> Frequent Use",
      },
    ],
  },
  {
    row: [
      {
        copy: "Push-button electric start comes equipped on all models",
        sub: false,
      },
      { active: true },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      { copy: "Heavy-duty gearbox for durability" },
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
      },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "LED light bar for visibility before and after dawn",
        sub: false,
      },
      { active: false },
      { active: true },
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "IntelliPower<sup>®</sup> for more available engine power to tackle heavy and wet snow",
        sub: false,
      },
      { active: false },
      { active: true },
      { active: false },
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
      { active: true },
    ],
  },
  {
    row: [
      {
        copy: "Backed by our limited residential warranty",
        sub: "See brochure for full warranty information",
      },
      { copy: "3-Year", className: "font-bold" },
      { copy: "5-Year", className: "font-bold" },
      { copy: "5-Year", className: "font-bold" },
    ],
  },
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
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com//ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/PLLSNOW_StormTracker2690_desktop_1540x630.jpg"
              alt="Person walking behind a Troy-Bilt gas powered snow blower clearing their driveway"
              className="h-full w-full position-absolute object-cover top-0 left-0"
              hero
            />
          </div>
        </section>

        <section className="bg-black d-flex flex-column">
          <div className="wrapper text-center text-white p-2 lg:px-52 py-4 lg:py-10">
            <h1 className="text-white">Explore Snow Blowers</h1>
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
            <h2 className="text-center">A Machine for the Extreme</h2>
            <p className="text-center">
              All Cub Cadet X Series models come with premium features to get
              your winter done right.
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
              Shop and Compare X Series Snow Blowers
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
            </div>
          </div>
        </section>
      </div>

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
              answer: `<a href="https://www.troybilt.com/en_US/snow-blowers">Troy-Bilt snow blowers</a> are engineered to remove snow from unwanted areas quickly. A snow blower can help make snow removal easier by eliminating the heavy lifting and repetitive strain that comes with shoveling snow. The various stages of snow blowers signify the steps a snow blower goes through to clear the snow. The more stages, or steps, a machine has, the more powerful and efficient it will be to clear more snow in less time.`,
            },
            {
              question: "What is the best type of snow blower for a driveway?",
              answer: `There’s no one-size-fits-all snow blower. Troy-Bilt has models ideal for up to <a href="https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers">6-in</a></a>, <a href="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers">12-in</a>, and <a href="https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers">18-in</a>. of snowfall, so consider how much snow is expected in your area to narrow down your selection. Another consideration is the type of terrain snow will be cleared from such as gravel surfaces, cracked pavement or smooth surfaces. From there, determine what kind of features you’d benefit from, such as trigger control power steering, electric start, or <a href="https://www.troybilt.com/en_US/snow-blower-attachments?prefn1=universal-part-category&prefv1=Heated%20Hand%20Grips">heated hand grips</a>, among other options. This <a href="https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html">snow blower buyer’s guide</a> goes into more detail or use our <a href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html">snow blower product</a> finder for additional guidance.`,
            },
            {
              question: "Do I need a single, two, or three-stage snow blower?",
              answer: `There are three types of snow blowers. The more stages, the more snow the machine can handle (when compared to a comparable model). Troy-Bilt <a href="https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers">Single-Stage Snow Blowers</a> are ideal for up to 6-inches of snowfall, <a href="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers">Two-Stage Snow Blowers</a> are great for up to 12-inches of snowfall and <a href="https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers">Three-Stage Snow Blowers</a> can handle up to 18-inches of snowfall. Single-stage snow blowers are ideal for smaller jobs like walkways and short driveways. They are light, compact and easy to handle. But if you get more snow, have unpaved surfaces with inclines or a longer driveway, you’ll want to consider a 2-stage or 3-stage snow blower that will help clear larger volumes in larger areas. This <a href="https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html">snow blower buyer’s guide</a> goes into more detail or use our <a href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html">snow blower product finder</a> for additional guidance.`,
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
