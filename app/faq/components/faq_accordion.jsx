"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { faq_accordion_data } from "./faq_accordion_data";
import { useState } from "react";

const FaqAccordion = () => {

	const [selected_item, setSelected_item] = useState();

	return (
		<Accordion itemClasses={{title: "text-sm lg:text-base font-bold"}} onSelectionChange={setSelected_item}>
      {
				faq_accordion_data.map((item) => {
					return (
						<AccordionItem key={item.id} aria-label={item.id} title={<h2>{item.title}</h2>}>
							<p className="text-secondary text-justify">{item.description}</p>
						</AccordionItem>
					)
				})
			}
    </Accordion>
	);
};

export default FaqAccordion;