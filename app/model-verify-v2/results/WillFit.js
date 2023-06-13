"use client";

export default function WillFit() {
	return (
		<div className="part-fitment-wrapper pdp text-center ">
			<div className="part-fitment-icon pdp w-100 mb-1 mb-md-0 verified" />
			<h6 className="mb-1">
				<div className="content-asset" style={{ fontSize: "0.9em" }}>
					Verified, Will Fit Model
				</div>
			</h6>
			{/* <div className="content-asset">
				Enter your{" "}
				<a
					className="find-model"
					data-target="#modal-will-fit"
					data-toggle="modal"
					href=""
					title="Find my model number">
					model number
				</a>{" "}
				to confirm fit.
			</div>
			<p /> */}
			<form
				action="/en_US/service-and-parts/all-parts"
				className="need-validation"
				method="get"
				role="search">
				<div className="input-group text-center">
					<input
						name="fitsOnModel"
						type="search"
						className="form-control text-center part-fitment-input has-number"
						defaultValue="#13APA1CT010"
						readOnly=""
						required=""
					/>
					<input type="hidden" name="pid" defaultValue="19A30031100" />
				</div>
			</form>
			<div className="">
				<a
					className="reset"
					href="/en_US/riding-mower-accessories/double-bagger-for-42--and-46-inch-decks/19A30031100.html"
					style={{ fontSize: "0.75em" }}>
					Reset
				</a>
			</div>
		</div>
	);
}
