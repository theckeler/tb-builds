"use client";
import { useState, useEffect } from "react";

import "@/scss/model-verify.scss";
import InStock from "@/app/components/icons/InStock";
import Check from "@/app/components/icons/Check";
import Backordered from "@/app/components/icons/Backordered";
import X from "@/app/components/icons/X";
import Fits from "./Fits";

export default function ModelVerifyBlock({ className, id = null }) {
	const [verify, setVerify] = useState(false);
	const [loadingCheck, setLoadingCheck] = useState(false);
	const [modelNum, setModelNum] = useState(0);

	useEffect(() => {
		//console.log("loadingCheck:", loadingCheck);
		if (loadingCheck) {
			document
				.querySelector("#parts-finder-loading")
				.classList.remove("d-none");
		} else {
			document.querySelector("#parts-finder-loading").classList.add("d-none");
		}
	}, [loadingCheck]);

	return (
		<div className={`modify-verify ${className}`} id={id}>
			<ul className="list-unstyled d-flex flex-column flex-xl-row">
				<li className="col-xl-5 pl-0">
					<div className="pr-1 h-100 d-flex flex-column justify-content-center align-items-center border-xl-right">
						<div
							className="mb-1"
							itemProp="offers"
							itemScope=""
							itemType="http://schema.org/Offer">
							<meta itemProp="priceCurrency" content="USD" />
							<span
								className="display-3"
								itemProp="price"
								content="116.86"
								style={{ fontSize: "1.5rem" }}>
								$116.86
							</span>
						</div>

						<ul className="list-unstyled d-flex align-items-center">
							<li className="px-0" style={{ maxWidth: "60px" }}>
								<Backordered fill="red" style={{ maxWidth: "60px" }} />
								{/* <InStock fill="#c00" /> */}
							</li>
							<li
								className="display-3 col-9 px-0"
								style={{ fontSize: "1.1em" }}>
								Backordered
								{/* In-Stock */}
							</li>
						</ul>
					</div>
				</li>
				<li className="d-xl-none">
					<hr />
				</li>

				<li
					//className="d-none"
					className="col-xl-7 px-0 h-100 position-relative"
					id="model-input">
					<div
						id="parts-finder-loading"
						className="d-none position-absolute w-100 h-100"
						style={{
							top: 0,
							left: 0,
							zIndex: 1,
							backgroundColor: "rgba(255,255,255,.1)",
						}}
					/>
					<p
						className="mb-1 font-bold text-center"
						style={{ fontSize: "1.1em" }}>
						Have a model number?
					</p>

					<div className="input-group">
						<div
							className="input-group-prepend border"
							style={{
								borderTopLeftRadius: "4px",
								borderBottomLeftRadius: "4px",
							}}>
							<div
								className="d-flex align-items-center justify-content-center"
								id="model-verify-check"
								style={{
									backgroundColor: verify ? "green" : "#fff",
									borderColor: "1px solid",
									maxWidth: "32px",
									padding: "3px",
								}}>
								<span id="model-verified">
									<Check fill="#ccc" />
								</span>
								<span className="d-none" id="model-error">
									<X fill="red" />
								</span>
							</div>
						</div>
						<input
							type="text"
							id="model-verify-input"
							className="form-control"
							placeholder="ie: 13AT78BT023"
							aria-label="Enter your model number"
							aria-describedby="button-addon2"
							style={{ fontSize: "13px" }}
						/>
						<span className="input-group-append">
							<button
								className="btn position-relative text-white bg-primary"
								style={{
									paddingTop: ".5em",
									paddingBottom: ".5em",
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
									zIndex: 0,
									borderColor: "#d1d3d4",
								}}
								type="button"
								id="button-addon2"
								onClick={(e) => {
									e.preventDefault();
									setLoadingCheck(true);

									const containerID = document.querySelector(`#${id}`);
									// console.log(containerID);

									const modelVerified =
										containerID.querySelector("#model-verified");
									const modelError = containerID.querySelector("#model-error");
									const modelLink =
										containerID.querySelector("#model-find-link");
									const modelInput = containerID.querySelector(
										"#model-verify-input"
									);
									setModelNum(modelInput.value);

									if (modelInput.value !== "error" && modelInput.value !== "") {
										setVerify(true);
										modelVerified.classList.remove("d-none");
										modelError.classList.add("d-none");

										setTimeout(() => {
											containerID
												.querySelector("#model-input")
												.classList.add("d-none");
											containerID
												.querySelector("#model-input-result")
												.classList.remove("d-none");
										}, 1500);
									} else {
										setVerify(false);
										modelVerified.classList.add("d-none");
										modelError.classList.remove("d-none");
										modelLink.style.backgroundColor = "red";
										setTimeout(() => {
											modelLink.style.backgroundColor = "";
											modelLink.style.color = "";
										}, 500);
									}
									setTimeout(() => {
										setLoadingCheck(false);
									}, 1000);
								}}>
								Go
							</button>
						</span>
					</div>

					<p className="text-center mb-0 rounded" id="model-find-link">
						<a
							href="https://www.troybilt.com/en_US/how-to-find-model-number.html"
							style={{ fontSize: "0.8em" }}>
							How to find your model number?
						</a>
					</p>
				</li>

				<li
					//className="d-block"
					className="d-none"
					id="model-input-result">
					<Fits
						modelNum={modelNum}
						setModelNum={setModelNum}
						setVerify={setVerify}
						id={id}
					/>
				</li>

				<li className="d-sm-none">
					<hr />
				</li>
			</ul>
		</div>
	);
}
