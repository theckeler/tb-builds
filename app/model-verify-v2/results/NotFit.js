"use client";

export default function NotFit() {
	return (
		<div className="part-fitment-wrapper pdp text-center not-fit">
			<div className="part-fitment-icon pdp not-fit w-100 mb-1 mb-md-0" />
			<h6 className="does-not-fit-title mb-0 ">
				<div className="content-asset">Will NOT Fit</div>
			</h6>
			<div className="text-center disclaimer">
				<div className="content-asset">
					This part is <strong>NOT</strong> expected to fit your equipment.
				</div>
			</div>
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
						defaultValue="#343433"
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
