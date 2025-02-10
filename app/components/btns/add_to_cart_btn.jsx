"use client";
import { add_item } from "@/app/redux/slices/cart_slice";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure  } from "@heroui/react";

const AddToCartBtn = ({className, product}) => {

	const router = useRouter();
	const dispatch = useDispatch();
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<button type="button" className={className} onClick={(e) => {dispatch(add_item(product)); onOpen(e)}}>Add to cart</button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"}>
				<ModalContent>
					<ModalHeader className="flex flex-col gap-1">Added to your cart</ModalHeader>
					<ModalBody>
						<p>Click on open cart to navigate to your cart</p>
					</ModalBody>
					<ModalFooter>
						<button className="w-full btn-primary" onClick={() => router.push("/profile/cart")}>Open cart</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddToCartBtn;