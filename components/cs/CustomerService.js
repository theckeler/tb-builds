import React from "react";
import jsonData from "./data/customerservice.json";
import "../../scss/main.scss";
import "../../scss/customerservice.scss";

import Button from "../elements/Button";
import SupportModel from "../elements/SupportModel";
import TrackOrder from "../elements/TrackOrder";

import { ReactComponent as IconBelt } from "../../images/icon-belt.svg";
import { ReactComponent as IconBlades } from "../../images/icon-blades.svg";
import { ReactComponent as IconLevel } from "../../images/icon-level.svg";
import { ReactComponent as IconAward } from "../../images/icon-award.svg";
import { ReactComponent as IconScrewdriverWrench } from "../../images/icon-screwdriver-wrench.svg";
import { ReactComponent as IconManuals } from "../../images/icon-manuals.svg";
import { ReactComponent as IconMagGlassBolt } from "../../images/icon-mag-glass-bolt.svg";
import { ReactComponent as IconPhone } from "../../images/icon-phone.svg";
import { ReactComponent as IconChat } from "../../images/icon-chat.svg";

const App = () => {
	const IconMap = {
		iconBelt: IconBelt,
		iconBlades: IconBlades,
		iconLevel: IconLevel,
		iconAward: IconAward,
		iconScrewdriverWrench: IconScrewdriverWrench,
		iconManuals: IconManuals,
		iconMagGlassBolt: IconMagGlassBolt,
	};

	return (
		<div className="customer-service">
			{/* HERO */}
			<section className="section-1 bg-red mt-6">
				<div className="wrapper px-3 py-4">
					<h1
						className="text-center mb-0 text-white"
						dangerouslySetInnerHTML={{ __html: jsonData.section1.h1 }}></h1>
					<p
						className="mt-2 mb-0 text-center text-white"
						dangerouslySetInnerHTML={{ __html: jsonData.section1.copy }}></p>
				</div>
			</section>

			{/* Three Blocks */}
			<section className="section-2">
				<div className="wrapper px-3 py-6">
					<ul className="row list-unstyled">
						{jsonData.section2.blocks.map((block, i) => {
							let ComponentName = IconMap[`${block.img}`];

							return (
								<li
									className="flex flex-column col-12 col-sm-12 col-md-4 p-1"
									key={i}>
									<a
										href={block.url}
										className="flex flex-column p-6 h-100 text-decoration-none bg-grey justify-content-center">
										<div
											className="icon w-75 mx-auto flex flex-column justify-content-center"
											style={{ minHeight: "130px" }}>
											<ComponentName />
										</div>
										<p
											className="text-center mt-4 mb-0 fw-bold"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>
									</a>
								</li>
							);
						})}
					</ul>
					<a
						href={jsonData.section2.button.url}
						className="text-uppercase fw-bold flex justify-content-center">
						{jsonData.section2.button.copy}
					</a>
				</div>
			</section>

			{/* Track Order / Find Support */}
			<section className="section-3">
				<div className="wrapper px-3 py-6">
					<ul className="row list-unstyled">
						<li className="flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="flex flex-column p-6 h-100 bg-grey">
								<TrackOrder
									title={jsonData.section3.findOrder.h2}
									sub={jsonData.section3.findOrder.copy}
									addclassName=""
									addStyle=""
								/>
							</div>
						</li>
						<li className="flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="flex flex-column p-6 h-100 bg-grey">
								<SupportModel
									title={jsonData.section3.findModel.h2}
									sub={jsonData.section3.findModel.copy}
									addclassName=""
									addStyle=""
								/>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="section-4 bg-black py-5 px-3">
				<div className="wrapper">
					<h2
						className="text-center text-white"
						dangerouslySetInnerHTML={{ __html: jsonData.section4.h2 }}
					/>
					<p
						className="mx-auto text-white"
						style={{ maxWidth: "840px" }}
						dangerouslySetInnerHTML={{ __html: jsonData.section4.copy }}
					/>
				</div>
			</section>

			<section className="section-5 py-4">
				<div className="wrapper px-3 py-6">
					<h2
						className="text-center mb-3"
						dangerouslySetInnerHTML={{ __html: jsonData.section5.h2 }}
					/>
					<ul className="row list-unstyled">
						{jsonData.section5.blocks.map((block, i) => {
							let ComponentName = IconMap[`${block.img}`];

							return (
								<li
									className="flex flex-column col-12 col-sm-12 col-md-6 col-lg-3 p-1"
									key={i}>
									<a
										href={block.url}
										className="flex flex-column p-2 h-100 text-decoration-none justify-content-center">
										<div className="icon mx-auto flex justify-content-center pb-4">
											<ComponentName
												style={{
													width: "100%",
													height: "140px",
												}}
											/>
										</div>
										<p
											className="text-center mb-0 mt-auto pb-2"
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}
										/>
										<Button
											copy={block.button.copy}
											addclassName="bg-black mt-1"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<section className="section-6">
				<div className="wrapper px-3 py-6">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section6.h2 }}
					/>
					<ul className="row list-unstyled">
						{jsonData.section6.blocks.map((block, i) => {
							return (
								<li
									className="flex flex-column col-12 col-sm-12 col-md-6 col-lg-3 p-1"
									key={i}>
									<a
										href={block.url}
										className="flex flex-column p-3 h-100 text-decoration-none justify-content-center">
										<h3
											className="text-center mt-4 mb-0"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>
										<img src={block.img} alt="" />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<section className="section-7 bg-red py-5">
				<div className="wrapper" style={{ maxWidth: "700px" }}>
					<h2
						className="text-center text-white"
						dangerouslySetInnerHTML={{ __html: jsonData.section7.h2 }}
					/>
					<p
						className="text-center text-white"
						dangerouslySetInnerHTML={{ __html: jsonData.section7.copy }}
					/>

					<ul className="row list-unstyled mx-auto">
						<li className="flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="flex flex-column p-0">
								<button className="bg-black flex justify-content-center align-items-center">
									<span className="icon mr-1">
										<IconPhone />
									</span>
									800-828-5500
								</button>
							</div>
						</li>
						<li className="flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="flex flex-column p-0">
								<button
									className="bg-black flex justify-content-center align-items-center"
									onclick="openChat()">
									<span className="icon mr-1">
										<IconChat />
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
};

export default App;
