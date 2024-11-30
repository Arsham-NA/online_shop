"use client";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal";
import SearchBtn from "../../btns/search_btn";

const HeaderSearchBar = () => {

	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<div className="w-full h-[46px] relative flex justify-center items-center cursor-pointer" onClick={onOpen}>
				<div className="form_control w-full h-full rounded-xl text-secondary">Search...</div>
				<SearchBtn />
			</div>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"} placement="center" className="p-5 border">
				<ModalContent>
						<ModalHeader className="w-full border-b py-4 px-0">
							<form className="w-full h-[46px] relative flex justify-center items-center cursor-pointer" onClick={onOpen}>
								<input type="text" name="search_bar" className="w-full rounded-xl" placeholder="Search..."/>
								<SearchBtn />
							</form>
						</ModalHeader>
							<ModalBody>
								<p>Search...</p>
							</ModalBody>
				</ModalContent>
		</Modal>
	</>
	);
};

export default HeaderSearchBar;