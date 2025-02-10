"use client";
import { delete_cart } from "@/app/redux/slices/cart_slice";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useDispatch } from "react-redux";


const DeleteCartModal = () => {

	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const dispatch = useDispatch();

	return (
		<>
			<button className="w-[120px] rounded-xl p-[.6rem] border-1 border-danger text-danger duration-150 hover:bg-danger hover:text-white text-nowrap" onClick={onOpen}>Delete cart</button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Delete Cart</ModalHeader>
								<ModalBody>
									<p>Are you sure?</p>
								</ModalBody>
							<ModalFooter>
								<button type="button" className="btn-outline-primary w-[110px]" onClick={onClose}>Close</button>
								<button type="button" className="btn-primary w-[110px]" onClick={() => {dispatch(delete_cart()); onClose()}}>Delete</button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default DeleteCartModal;