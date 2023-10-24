"use client";

import SearchResults from "./SearchResults";
import HeroPromo from "@/components/HeroPromo";

export default function Promotion({}) {
	return (
		<div id="main">
			<link
				rel="stylesheet"
				href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/search.css"
			/>
			{/* <div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="search-breadcrumb">
							<div className="row">
								<div className="col">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/en_US/search?cgid=discounted-equipment">Sale</a>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="pl-browse-1 pl-browse mt-3">
				<div className="cat-landing-1 cat-landing mb-0">
					<div className="hero-caro slick-initialized" style={{}}>
						<div className="slick-list">
							<div className="" style={{ opacity: 1 }}>
								<div
									className="hero pb-0"
									data-slick-index={0}
									aria-hidden="false"
									style={{
										position: "relative",
										left: 0,
										top: 0,
										zIndex: 999,
										opacity: 1,
									}}>
									<HeroPromo
										{...{
											content: {
												title: '42" and 46" Riding Mowers',
												copy: "Troy-Bilt<sup>®</sup> riding lawn mowers are designed with features to help you tackle yard work. The 42-in. and 46-in. riding mowers feature smooth operating transmissions, rugged steel cutting decks, and powerful engines that help the work get done quickly.",
											},
											img: {
												src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/42inch-and-46inch-riding-mowers/13AL78BTA66_Bronco46I_env2.jpg",
												className: "h-100 w-100",
												style: { objectFit: "cover" },
											},
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SearchResults />

			<div className="container mt-4" style={{ fontSize: "12px" }}>
				<p>
					<strong>
						<sup>*</sup>$100.00 off full retail price of Troy-Bilt® Storm™2420
						Two-Stage Snow Blower.
					</strong>{" "}
					Offer valid 11/12/23 – 12/2/23 at select retail locations and on
					shipments in the US 48 contiguous states on troybilt.com. Cannot be
					combined with any other discount or promotion. Discount does not apply
					to tax or shipping and handling. If you return the merchandise, the
					value of this promotion is not refunded or credited to your account.
					Does not apply to prior or future purchases. No cash value, except
					where prohibited. Promotion is subject to change. Other restrictions
					may apply.
				</p>
				<p>
					<strong>
						<sup>**</sup>$50.00 off full retail price of Troy-Bilt® Storm™ 2620
						Two-Stage Snow Blower, Troy-Bilt® Storm™ 2890 Two-Stage Snow Blower
						and Troy-Bilt® Storm™ 3090 Two-Stage Snow Blower.
					</strong>{" "}
					Offer valid 11/12/23 – 11/30/23 at select retail locations and on
					shipments in the US 48 contiguous states on troybilt.com. Cannot be
					combined with any other discount or promotion. Discount does not apply
					to tax or shipping and handling. If you return the merchandise, the
					value of this promotion is not refunded or credited to your account.
					Does not apply to prior or future purchases. No cash value, except
					where prohibited. Promotion is subject to change. Other restrictions
					may apply.
				</p>
			</div>
		</div>
	);
}
