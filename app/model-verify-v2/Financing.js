"use client";

export default function Financing() {
	return (
		<div className="d-flex">
			<div className="prices finance">
				<div
					className="price"
					itemProp="offers"
					itemScope=""
					itemType="http://schema.org/Offer">
					<span>
						<meta itemProp="priceCurrency" content="USD" />
						<span className="sales">
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
			<div className="finance-estimation-container">
				<span className="finance-border-text">Or</span>
				<div className="td-estimation">
					<style
						dangerouslySetInnerHTML={{
							__html:
								"\n\n.disclosure  {\n\nfont-size: 10px;\nline-height: 12px;\n\n}\n\n",
						}}
					/>
					<div>
						<strong>
							$75/mo No interest if paid in full within 6 months<sup>1</sup>
						</strong>
						<p className="disclosure">
							Interest will be charged from the purchase date if the purchase
							balance is not paid in full at the end of the promotional period.
							Advertised minimum payment is greater than required minimum
							payment.{" "}
							<a
								href="javascript:void(0)"
								data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
								data-title="Details & Disclosures"
								className="td-payment-details">
								See details
							</a>
						</p>
					</div>
				</div>
				<a
					className="td-apply-finance btn btn-secondary"
					data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL"
					href="">
					Apply Now
				</a>
				<div className="cc-container">
					<img
						src="/on/demandware.static/Sites-cubcadet-Site/-/default/dw9d0dfd3a/images/cc-td-card-3d.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
