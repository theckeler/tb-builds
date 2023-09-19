"use client";
import React, { useState, useEffect } from "react";

import jsonDataUS from "./home.json";

import IconCopyBlock from "@/c/IconCopyBlock";
import QuoteBlock from "@/c/QuoteBlock";
import HowToMaintence from "@/c/HowToMaintence";
// import Articles from "@/c/Articles";
import ProductBlock from "@/c/ProductBlock";
import ImgCopyBlock from "@/c/ImgCopyBlock";
// import Button from "@/c/Button";
import HeroImg from "@/c/HeroImg";
//import BuildMenu from "@/c/BuildMenu";
import Faqs from "@/c/Faqs";
import CTABlock from "@/components/CTABlock";

const XTEnduroSeriesHome = () => {
	const [jsonData, setJsonData] = useState({ ...jsonDataUS });

	return (
		<>
			{/* Head */}
			<div className="mtd-page">
				{/* HERO */}
				<section className="position-relative">
					<HeroImg hero={jsonData.hero} />
				</section>

				{/* copyBlock */}
				<section className="mt-0 mb-4 text-white bg-primary">
					<div className="container p-3 text-left text-lg-center">
						<h2
							className="h1 d-block text-white"
							dangerouslySetInnerHTML={{
								__html: jsonData.copyBlock.h1,
							}}
						/>
						<p
							className=""
							dangerouslySetInnerHTML={{
								__html: jsonData.copyBlock.copy,
							}}></p>
					</div>
				</section>

				{/* lineup */}
				<section className="container d-flex flex-column p-1 mt-8 mb-4">
					<h1
						className="h2 d-block text-center mb-8"
						style={{ fontSize: "2.375rem" }}
						dangerouslySetInnerHTML={{
							__html: jsonData.lineup.h2,
						}}
					/>

					<ul className="row list-unstyled">
						{jsonData.lineup.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-6">
									<ProductBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* powerLevel */}
				<section className="container d-flex flex-column p-1 mt-3">
					<ul
						className="row list-unstyled p-2 no-gutters"
						style={{ backgroundColor: "#efefef" }}>
						{jsonData.powerLevel.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6 p-2">
									<IconCopyBlock
										{...{ block }}
										//addStyle={{ maxHeight: "3em" }}
									/>
								</li>
							);
						})}
					</ul>
				</section>

				<section className="mt-6 py-4 bg-primary">
					<CTABlock
						block={{
							className: "container py-4 mb-0 text-center",
							title: {
								copy: "Looking for something bigger?",
								className: "text-white",
							},
							button: {
								copy: "Explore 42” in Mowers",
								url: "https://www.troybilt.com/en_US/lawn-and-garden-tractors/42inch-riding-mowers",
								className: " bg-white mx-auto mt-4",
							},
						}}
					/>
				</section>

				{/* forEveryJob */}
				<section className="container d-flex flex-column align-items-center p-0 mt-8">
					<h2 className="text-center mb-3 p-1">{jsonData.forEveryJob.h2}</h2>
					<p className="text-center mb-6 p-1">{jsonData.forEveryJob.copy}</p>
					<ul className="flex flex-column flex-md-row list-unstyled">
						{jsonData.forEveryJob.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-4 mb-2 mb-lg-0">
									<ImgCopyBlock {...{ block }} linkable={false} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* QuoteBlock */}
				<section
					className="d-flex flex-column p-0 mt-8 position-relative"
					style={{ background: "#000" }}>
					<HeroImg
						hero={jsonData.quote.hero}
						className="position-absolute"
						style={{ opacity: "0.7" }}
					/>
					<div
						className="container w-100 p-1 pb-9 pb-lg-9 position-relative d-flex justify-content-end"
						style={{ zIndex: "2", paddingTop: "3em", minHeight: "35em" }}>
						<QuoteBlock
							quote={jsonData.quote}
							className="position-relative text-white pb-9 pb-lg-9"
							style={{ maxWidth: "600px", zIndex: 1 }}
							stackStars={true}
							starFill="#fff"
						/>
					</div>
				</section>
			</div>

			{/* Footer */}
			<div className="container">
				<HowToMaintence centerH2={true} {...{ jsonData }} />
				{/* <Articles {...{ jsonData }} /> */}

				<h2 className="text-center mb-3 p-1">Questions & Answers</h2>
				<Faqs faqs={jsonData.faqs} id="faqs-financing" className="p-2 p-lg-4" />
			</div>
		</>
	);
};

export default XTEnduroSeriesHome;
