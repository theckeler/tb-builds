"use client";

import Default from "./results/Default";
import NotFit from "./results/NotFit";
import WillFit from "./results/WillFit";
import InStock from "./stock/InStock";
import Backorder from "./stock/Backorder";

// import "./css/style.scss";

export default function ModelVerify({ fit, inStockCheck }) {
	console.log(fit);

	return (
		<div className="d-flex flex-column flex-md-row justify-content-between">
			<div className="col-md-4 px-0 d-flex align-items-center stock-availability-wrapper mb-2 mb-md-0">
				<div
					className="row mx-0 align-items-center justify-content-center w-100"
					style={{ fontSize: "0.8em" }}>
					{inStockCheck ? <InStock /> : <Backorder />}
				</div>
			</div>
			<div className="col-md-8 px-0 border-top border-xl-top-0 mt-2 mt-sm-0 pt-2 pt-md-2">
				{(() => {
					switch (fit) {
						case "fits":
							return <WillFit />;
						case "not":
							return <NotFit />;
						default:
							return <Default />;
					}
				})()}
			</div>
		</div>
	);
}
