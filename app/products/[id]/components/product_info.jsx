"use client";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { useState } from "react";

const ProductInfo = ({data}) => {

	const [selected, setSelected] = useState("photos");

	const data_details = [
		{
			id: 1,
			title: "Material",
			text: "null",
		},
		{
			id: 2,
			title: "Pattern",
			text: "null",
		},
		{
			id: 3,
			title: "Neck Style",
			text: "null",
		},
		{
			id: 4,
			title: "Sleeve Type",
			text: "null",
		},
		{
			id: 5,
			title: "Sizes Available",
			text: "S, M, L, XL",
		},
		{
			id: 6,
			title: "Suitable For",
			text: "none",
		},
		{
			id: 7,
			title: "Season",
			text: "none",
		},
		{
			id: 8,
			title: "Washing Method",
			text: "Hand or Machine Wash",
		},
	];

	return (
		<div className="flex w-full flex-col">
		<Tabs aria-label="Options" selectedKey={selected} onSelectionChange={setSelected}>
			<Tab key="description" title="Description">
				<Card>
					<CardBody>
						<p className="text-secondary">{data.description}</p>
					</CardBody>
				</Card>  
			</Tab>
			<Tab key="detail" title="Detail">
				<Card>
					<CardBody className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5">
						{
							data_details.map((item) => (
								<div key={item.id} className="w-full flex justify-start items-center bg-gray-50 border p-3 rounded-xl">
									<div className="text-start w-full h-full">
										<span className="text-secondary font-medium text-nowrap">{item.title}: </span>{item.text}
									</div>
								</div>
							))
						}
					</CardBody>
				</Card>  
			</Tab>
			<Tab key="comments" title="Comments">
				<Card>
					<CardBody className="flex justify-center items-center h-[100px]">
						<span className="font-medium text-secondary">There is no comment</span>
					</CardBody>
				</Card>  
			</Tab>
		</Tabs>
	</div>  
	);
};

export default ProductInfo;
