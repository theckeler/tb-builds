"use client";

export default function Financing() {
	return (
		<div className="d-flex flex-column flex-md-row">
			<div className="col-md-4 pl-0 prices finance d-flex align-items-center border-md-right pr-md-1 py-0 mt-0 d-flex justify-content-center justify-content-md-start">
				<div
					className="price"
					itemProp="offers"
					itemScope=""
					itemType="http://schema.org/Offer">
					<span>
						<meta itemProp="priceCurrency" content="USD" />
						<span
							className="sales"
							style={{
								fontSize: "1.4em",
							}}>
							<span className="value" itemProp="price" content="449.99" />
							<span className="msrp-text d-none">From</span>
							<span className="formatted-price">$449.99</span>
							<span className="msrp-text d-none">MSRP</span>
							<span className="info-icon msrp-info">
								<span
									className="icon"
									data-toggle="tooltip"
									title=""
									data-original-title="Manufacturer’s buy online price. Taxes are additional and vary by location. Freight, setup, delivery, PDI, and other dealer specific charges are not included in the pricing and vary by dealer. Prices shown are in U.S dollars and valid only in the United States."></span>
							</span>
						</span>
					</span>
				</div>
			</div>
			<div className="col-md-8 pl-lg-5 pr-0 pl-0">
				<div
					className="td-estimation w-100 pl-md-4 position-relative"
					style={{ backgroundColor: "#efefef", padding: "10px" }}>
					<div
						className="finance-border-text position-md-absolute p-1 bg-primary text-white top-md-50 left-md-0 transform-50-50 text-center mb-2 mb-md-0"
						style={{
							//top: "50%",
							//left: 0,
							//transform: "translate(-50%, -50%)",
							fontSize: "0.8em",
						}}>
						OR
					</div>

					<strong className="d-block mb-1" style={{ fontSize: "1.2em" }}>
						<img
							src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dw1259b6d8/images/tb-cc2x.png"
							alt=""
							className="float-right"
							style={{
								maxWidth: "80px",
								//transform: "translate(26px, -20px)",
							}}
						/>
						$75/mo No interest if paid in full within 6 months<sup>1</sup>
					</strong>
					<p
						className="disclosure"
						style={{ fontSize: "0.6em", lineHeight: 1 }}>
						Interest will be charged from the purchase date if the purchase
						balance is not paid in full at the end of the promotional period.
						Advertised minimum payment is greater than required minimum payment.
						<a
							href="javascript:void(0)"
							className="ml-1"
							data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
							data-title="Details & Disclosures"
							style={{ fontSize: "1em", lineHeight: 1 }}>
							See details
						</a>
					</p>

					<a
						className="td-apply-finance btn btn-secondary w-100 py-1"
						data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL"
						href="">
						Apply Now
					</a>
				</div>
			</div>
		</div>
	);
}
