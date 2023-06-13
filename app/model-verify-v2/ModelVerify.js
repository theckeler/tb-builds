"use client";

import Default from "./results/Default";
import NotFit from "./results/NotFit";
import WillFit from "./results/WillFit";
import InStock from "./stock/InStock";
import Backorder from "./stock/Backorder";

import "./css/style.scss";

export default function ModelVerify({ fit, inStockCheck }) {
	console.log(fit);

	return (
		<div className="d-flex flex-column flex-sm-row justify-content-between">
			<div className="d-flex align-items-center stock-availability-wrapper">
				<span>
					<div className="row" style={{ fontSize: "0.8em" }}>
						{inStockCheck ? <InStock /> : <Backorder />}
					</div>
				</span>
			</div>

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
	);
}
