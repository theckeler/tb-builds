import AddCart from "./AddCart";
import Ratings from "./Ratings";

export default function ProductTile({ block }) {
	return (
		<div className="col-12 col-sm-6 col-lg-4" data-index={0}>
			<div className="grid-tile">
				<div
					className="product-tile"
					itemScope=""
					itemType="http://schema.org/Product"
					data-product-name=""
					data-product-extended-name=""
					data-monetate-pid=""
					data-monetate-producturl="">
					<div className="image-container">
						<div className="badge-row"></div>
						<a href="#top">
							<img className="tile-image" src={block.img} alt="" />
						</a>
						<a
							className="quickview btn btn-secondary hidden-sm-down"
							href="#top">
							Quickview
						</a>
					</div>
					<div className="tile-body tile-footer-xlg">
						<div className="pdp-link" itemProp="name">
							<a className="link" href="#top" itemProp="url">
								{block.title}
							</a>
						</div>
						<div className="product-extended-name " itemProp="name">
							<span className="name">{block.sub}</span>
						</div>

						<div className="price">
							<span>
								<span className="sales">
									<span className="formatted-price">${block.priceSale}</span>
								</span>
								<span className="strike-through list">
									<span className="value">${block.priceOrig}</span>
								</span>
							</span>
						</div>

						<Ratings />

						<div className="tile-attributes" itemProp="name">
							<ul>
								{block.desc.map(function (block, i) {
									return <li key={i}>{block}</li>;
								})}
							</ul>
						</div>
					</div>

					<AddCart />
				</div>
			</div>
		</div>
	);
}
