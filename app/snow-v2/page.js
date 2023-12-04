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
    title: "1X Single-Stage Snow Blowers",
    copy: "Engineered to use a high-performance auger to quickly and easily remove up to 6 inches of snow from small, smooth areas.",
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
      copy: "Explore 1X snow blowers",
    },
  },
  {
    url: "https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers",
    img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/Troy-Bilt_Storm3090_13.jpg",
    title: "2X Two-Stage Snow Blowers",
    copy: "Engineered for clearing between 12-18 inches in powder and slush. If you measure snow in feet instead of inches, step up to the commercial-grade features on the 2X MAX.",
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
      copy: "Explore 2X snow blowers",
    },
  },
  {
    url: "https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers",
    img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/Troy-Bilt_Vortex%202610_13.jpg",
    title: "3X Three-Stage Snow Blowers",
    copy: "Engineered to clear deep snowfall faster than 2X models with its patented three-stage system. Designed to easily remove up to 23 inches of snowfall and bust through tough snow barriers.",
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
      copy: "Explore 3X snow blowers",
    },
  },
];

const machineExtreme = [
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-chute-control.svg",
    title: "Easy chute control",
    copy: "Throw snow in any direction with easy pitch and chute control from the operator’s station.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-light.svg",
    title: "Improved Visibility",
    copy: "Designed to help you see at dawn or dusk with headlights that shine bright and far.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-push-button.svg",
    title: "Push-button electric start",
    copy: "Eliminate pull starts and start blowing snow quickly with push-button electric start.",
  },
  {
    icon: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/icon-speed.svg",
    title: "Move at your speed",
    copy: "A high-performance auger-propelled drive system designed to work at your pace.",
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
            {/* <div className="mb-0 container px-0 relative z-10 min-h-[600px]">
							<div className="absolute top-2 lg:top-auto lg:bottom-8 lg:right-8 w-full lg:max-w-[480px] px-8 px-lg-0">
								{addPromo && (
									<>
										<a
											className="d-block text-white bg-black no-underline"
											href="https://www.cubcadet.com/en_US/financing"
											aria-label="See Details">
											<ul className="mb-0 list-unstyled grid grid-cols-[80px_1fr_120px] gap-2 items-stretch p-1">
												<li className="overflow-hidden relative">
													<ResponsiveImage
														id="financing-18"
														src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/cub-cadet-credit-card-new.jpg"
														alt=""
														className="position-absolute w-full h-full top-0 left-0  object-contain min-w-[60px]"
													/>
												</li>
												<li className="px-0 font-bold text-center lg:text-left">
													<span style={{ fontSize: "1.2em" }}>
														18 Month Financing Available
													</span>
													<br />
													<small>Restrictions apply</small>
												</li>
												<li className="">
													<Button
														copy="Learn More"
														className="p-1 border-0 bg-secondary w-full h-full text-black"
													/>
												</li>
											</ul>
										</a>
									</>
								)}
							</div>
						</div> */}

            <ResponsiveImage
              id="hero"
              src="https://outdoorecommassets.sbdcdn.sbd-prod.com//ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/PLLSNOW_StormTracker2690_desktop_1540x630.jpg"
              alt=""
              className="h-full w-full position-absolute object-cover top-0 left-0"
              hero
            />
          </div>
        </section>

        <section className="bg-black d-flex flex-column">
          <div className="wrapper text-center text-white p-2 lg:px-52 py-4 lg:py-10">
            <h1 className="text-white">Explore Snow Blowers</h1>
            <p className="lg:px-48 mt-1 lg:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non odio tristique, sollicitudin nibh id, efficitur nulla. Cras
              varius hendrerit arcu, ut ornare tortor feugiat vel. Fusce eget
              lacus ante. Phasellus id nunc nec lectus eleifend tincidunt vitae
              vel eros.
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

        {/* <section className="relative mb-6 flex flex-col-reverse">
					<div className="container relative z-10 pt-2 lg:pt-14 lg:pb-64">
						<QuoteBlock
							quote={{
								stars: 5,
								img: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vde16d024a27b8e0c81e1c6e963f0a6bf041c9496/snow-v2/31AH5EVZ596_3X30HD_Env03.jpg",
								title: "THIS THING WAS A BEAST.",
								copy: "“We just had our first blizzard of the season. No problem clearing our property, and helped a couple neighbors too. Over a foot of wet heavy snow and it did not intimidate this Cub.”",
								name: "Ryan from Sioux City, IA",
								unit: "3X<sup>®</sup> 30” HD",
							}}
							className="bg-white lg:p-4 lg:max-w-[40rem]"
						/>
					</div>

					<ResponsiveImage
						src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.jpg"
						// webp="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.webp"
						alt=""
						id="snowguy"
						className="lg:absolute top-0 left-0 z-0 w-full h-full object-cover"
						hero={false}
					/>
				</section> */}

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
              url: "hthttps://www.troybilt.com/en_US/knowledge-tb-snow-blower-maintenance-schedule-and-tips.html",
              res: (
                <ResponsiveImage
                  src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/snow-blowers/182_HowDoITroubleshoot_1100x572.jpg"
                  id="snow-thrower-operation-tips"
                  className="absolute w-full h-full object-cover"
                />
              ),
            },
            {
              title: "Snow Blower Troubleshooting Tip",
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

      {/* <AttchmentsAccessories
				className="container mt-8"
				imgType={imgType}
				attAcc={{
					h2: "Snow Blower Attachments & Accessories",
					blocks: [
						{
							img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg",
							title: "Universal Cab",
							item: "490-241-0032",
							price: "$132.99",
							url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html#q=490-241-0032&lang=en_US&start=0",
							res: (
								<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg" />
							),
							orig: (
								<img
									src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html?fitsOnModel=false"
									alt=""
								/>
							),
						},
						{
							img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-290-0010_1.jpg",
							title: "Snow Blower Cover",
							item: "490-290-0010",
							price: "$38.99",
							url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0",
							res: (
								<ResponsiveImage src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0" />
							),
							orig: (
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2a0b010e/products/Attachments_Accessories/490-290-0010_1.jpg?sw=280&sh=280&sm=fit"
									alt=""
								/>
							),
						},
						{
							img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg",
							title: "Drift Cutter Kit",
							item: "OEM-390-679",
							price: "$41.99",
							url: "https://www.cubcadet.com/en_US/snow-blower-accessories/drift-cutter-kit/OEM-390-679.html#q=OEM-390-679&lang=en_US&start=0",
							res: (
								<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg" />
							),
							orig: (
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw32dc42ff/products/Attachments_Accessories/OEM-390-679.jpg?sw=280&sh=280&sm=fit"
									alt=""
								/>
							),
						},
						{
							img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg",
							title: "LED Light Bar Kit",
							item: "753-08629A",
							price: "$135.89",
							url: "https://www.cubcadet.com/en_US/snow-blower-accessories/led-light-bar-kit/753-08629A.html#q=753-08629A&lang=en_US&start=0",
							res: (
								<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg" />
							),
							orig: (
								<img
									src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw301fe215/products/753-08629.jpg?sw=280&sh=280&sm=fit"
									alt=""
								/>
							),
						},
					],
				}}
			/> */}

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
              answer: `There are three types of snow blowers. The more stages, the more snow the machine can handle (when compared to a comparable model). Troy-Bilt <a href="https://www.troybilt.com/en_US/snow-blowers/single-stage-snow-blowers">Single-Stage Snow Blowers</a> are ideal for up to 6-inches of snowfall, <a href="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers">Two-Stage Snow Blowers</a> are great for up to 12-inches of snowfall and <a href="https://www.troybilt.com/en_US/snow-blowers/three-stage-snow-blowers">Three-Stage Snow Blowers</a> can handle up to 18-inches of snowfall. Single-stage snow blowers are ideal for smaller jobs like walkways and short driveways. They are light, compact and easy to handle. But if you get more snow, have unpaved surfaces with inclines or a longer driveway, you’ll want to consider a 2-stage or 3-stage snow blower that will help clear larger volumes in larger areas. This snow <a href="https://www.troybilt.com/en_US/troy-bilt-snow-blower-buying-guide.html">blower buyer’s guide</a> goes into more detail or use our <a href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html">snow blower product finder</a> for additional guidance.`,
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
