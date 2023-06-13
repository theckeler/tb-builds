"use client";

export default function InStock() {
	return (
		<div className="part-fitment-wrapper pdp text-center">
			<div className="part-fitment-icon pdp mb-2 mb-md-0 w-100" />
			<h6>
				<div className="content-asset" style={{ fontSize: "0.9em" }}>
					Have a Model Number?
				</div>
			</h6>
			<form
				action="/en_US/service-and-parts/all-parts"
				className="need-validation"
				method="get"
				role="search">
				<div className="input-group d-flex flex-column ">
					<input
						name="fitsOnModel"
						type="search"
						className="form-control text-center part-fitment-input w-100 mb-1 p-1"
						defaultValue=""
						null=""
						required=""
					/>
					<span className="">
						<button
							className="btn btn-secondary content-search w-100 p-1"
							type="submit">
							Go
						</button>
					</span>
					<input type="hidden" name="pid" defaultValue="19A30031100" />
				</div>
			</form>
			<div className="m-1">
				<a
					className="find-model "
					data-target="#modal-will-fit"
					data-toggle="modal"
					href=""
					title="Find my model number"
					style={{ fontSize: "0.75em" }}>
					How to find your model number?
				</a>
			</div>
		</div>
	);
}
