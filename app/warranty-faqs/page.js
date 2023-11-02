"use client";

import jsonData from "./home.json";

import Faqs from "@/components/Faqs";
import ResponsiveImage from "@/components/ResponsiveImage";

const WarrantyFaqs = () => {
	return (
		<div className="mtd-page">
			<section class="bg-secondary">
				<div class="container text-center">
					<ul
						className="list-unstyled flex align-items-center"
						style={{ overflow: "hidden" }}>
						<li className="col-4 position-relative flex justify-content-end">
							<div
								className="bg-white"
								style={{
									clipPath: "circle(56% at 50% 50%)",
									height: "200px",
									width: "300px",
								}}>
								<svg
									viewBox="0 0 800 800"
									className="w-100 h-100 p-4"
									style={{ zIndex: 11 }}
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M400 100C234.585 100 100 234.585 100 400C100 450.154 112.8 499.692 137.077 543.938L100.892 670.585C98.5846 678.646 100.831 687.323 106.769 693.231C111.169 697.631 117.046 700 123.077 700C125.2 700 127.323 699.723 129.415 699.108L256.062 662.923C300.308 687.231 349.846 700 400 700C565.415 700 700 565.415 700 400C700 234.585 565.415 100 400 100ZM400 653.846C354.769 653.846 310.123 641.538 270.831 618.215C267.231 616.092 263.138 614.985 259.046 614.985C256.923 614.985 254.8 615.292 252.708 615.877L156.646 643.323L184.092 547.262C185.846 541.169 184.985 534.615 181.754 529.138C158.462 489.877 146.123 445.2 146.123 399.969C146.154 260.031 260.031 146.154 400 146.154C539.969 146.154 653.846 260.031 653.846 400C653.846 539.969 539.969 653.846 400 653.846ZM424.308 498.769C425.538 501.538 426.154 504.615 426.154 507.692C426.154 513.846 423.692 519.692 419.385 524C415.077 528.308 408.923 530.769 403.077 530.769C400 530.769 396.923 530.154 394.154 528.923C391.385 527.692 388.923 526.154 386.769 524C384.615 521.846 382.769 519.385 381.538 516.615C380.615 513.846 380 510.769 380 507.692C380 504.615 380.615 501.538 381.538 498.769C382.769 496 384.615 493.538 386.769 491.385C388.923 489.231 391.385 487.692 394.154 486.462C399.692 484 406.154 484 411.692 486.462C414.769 487.692 417.231 489.231 419.385 491.385C421.538 493.538 423.077 496 424.308 498.769ZM480.646 319.477C488.615 342.646 484.4 368.185 469.385 387.785C468.585 388.831 467.692 389.785 466.769 390.677L430.677 424.092C427.662 428.554 426.092 433.569 426.092 438.769C426.092 451.508 415.754 461.846 403.015 461.846C390.277 461.846 379.938 451.508 379.938 438.769C379.938 422.831 385.138 407.569 395.015 394.677C395.815 393.631 396.708 392.677 397.662 391.785L433.754 358.369C438.615 351.231 439.785 342.615 437.015 334.492C434 325.785 426.892 319.354 417.508 316.923C408.215 314.462 400.892 315.015 395.108 318.462C385.631 324.154 380.677 337.292 379.6 341.877C376.615 354.185 364.277 362.031 351.938 359.077C339.6 356.246 331.846 344.092 334.585 331.723C335.385 328.123 343.138 296.154 370.892 279.2C382.431 272.154 401.969 265.2 429.2 272.277C453.477 278.615 472.708 296.246 480.708 319.508L480.646 319.477Z"
										fill="#1e1e1e"
									/>
								</svg>
							</div>
						</li>
						<li className="col-8 text-white">
							<h1 className="text-white">Warranty FAQs</h1>
							<p className="px-xl-9">
								Got a question about warranties? Troy-Bilt® can help by
								answering some of the most commonly asked questions.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="container">
				<Faqs faqs={jsonData.faqs} id="warranty-faqs" className="p-2 p-lg-4" />
			</section>
		</div>
	);
};

export default WarrantyFaqs;
