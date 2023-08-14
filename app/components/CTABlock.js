import Button from "@/app/components/Button";

const CTABlock = ({ block }) => {
	return (
		<div className={block.className}>
			<h2
				dangerouslySetInnerHTML={{ __html: block.title.copy }}
				className={`${block.title.className}`}
			/>
			{block.text && (
				<p
					dangerouslySetInnerHTML={{ __html: block.text.copy }}
					className={`${block.text.className}`}
				/>
			)}
			<Button
				url={block.button.url}
				copy={block.button.copy}
				className={block.button.className}
			/>
		</div>
	);
};

export default CTABlock;
