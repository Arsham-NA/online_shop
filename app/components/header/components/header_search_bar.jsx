"use client";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal";
import SearchBtn from "../../btns/search_btn";
// import useSWR from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderSearchBar = () => {

	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const router = useRouter();
	const [search_input, setSearch_input] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetch_data = async() => {
			let response = await axios.get("https://fakestoreapi.com/products")
			response = response.data.filter((item) => item.title.includes(search_input))
			setData(response);
		};
		fetch_data();
	} ,[search_input]);

	return (
		<>
			<div className="w-full h-[46px] relative flex justify-center items-center cursor-pointer" onClick={onOpen}>
				<div className="form_control w-full h-full rounded-xl text-secondary">Search...</div>
				<SearchBtn />
			</div>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"} placement="center" className="p-5 border max-h-[450px]">
				<ModalContent>
					{
						(onClose) => (
							<>
								<ModalHeader className="w-full border-b py-4 px-0">
									<form className="w-full h-[46px] relative flex justify-center items-center cursor-pointer" onClick={onOpen}>
										<input type="text" name="search_bar" className="w-full rounded-xl" placeholder="Search..." onChange={(e) => setSearch_input(e.target.value)}/>
										<SearchBtn />
									</form>
								</ModalHeader>
								<ModalBody className="overflow-y-auto flex flex-col gap-y-0">
									{
										search_input === "" ? (
											undefined
										) : (
											data.map((item) => {
												return (
													<div key={item.id} className="w-full flex items-center justify-center py-4 border-b gap-x-4 cursor-pointer" onClick={(e) => {router.push(`/products/${item.id}`); onClose(e)}}>
														<div className="w-3/12 h-[60px]">
															<Image src={item.image} alt={item.title} width={800} height={800} className="w-full h-full object-contain"/>
														</div>
														<div className="w-9/12 line-clamp-2">{item.title}</div>
													</div>
												)
											})
										)
									}
								</ModalBody>
							</>
						)
					}
				</ModalContent>
		</Modal>
	</>
	);
};

export default HeaderSearchBar;