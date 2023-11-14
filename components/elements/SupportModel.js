import Button from "./Button";

const SupportModel = ({ title, sub, addClass, addStyle }) => {
	return (
		<>
			<h2 className="text-center">{title}</h2>
			<p className="text-center">{sub}</p>

			<div className="mt-3">
				<img
					src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dwf746b099/Model-Plates/Find_Model_Number_Troy_Bilt.jpg"
					alt=""
					className="ml-auto mr-auto"
				/>
				<p className="my-2">
					The Model number is eleven characters long and is printed on the left
					of the product identification label. Characters can include numbers,
					letters or hyphens.
				</p>
			</div>

			<Button
				copy="Find Support"
				url="https://www.troybilt.com/en_US/service-and-parts"
				addclassName="btn btn-block btn-secondary mt-auto"
			/>
		</>
	);
};

export default SupportModel;
