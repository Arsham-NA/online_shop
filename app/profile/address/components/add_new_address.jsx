"use client";

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { set_address } from "@/app/redux/slices/user_slice";

const AddNewAddress = () => {

	const {isOpen, onOpen, onClose} = useDisclosure();
	const {user} = useSelector((state) => state.user_slice);
	const dispatch = useDispatch();

	//handl form
	const formik = useFormik({
		initialValues: {city: "", address: "", house_number: "", phone_number: user.phone_number, description: ""},
		onSubmit: (values) => {
			dispatch(set_address(values));
			onClose()
		},
		validationSchema: yup.object().shape({
			city: yup.string().min(1).required(),
			address: yup.string().min(5).required(),
			house_number: yup.number("Please enter a number").required(),
			phone_number: yup.number("Please enter your phone number").required().min(11),
			description: yup.string().max(200, "Sorry, you can't write more than 100 character")
		})
	});

	return (
		<>
			<button type="button" className="btn-outline-primary gap-x-2" onClick={onOpen}>Add address<span className="flex justify-center items-center"><FaPlus className="w-[16px] h-[16px]"/></span></button>

			<Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center items-center">New Address</ModalHeader>
              <ModalBody>
								<form onSubmit={formik.handleSubmit}>
									<div className="w-full mb-5">
										<label htmlFor="city" className="block mb-2 font-medium">City</label>
										<input type="text" name="city" className="w-full rounded-xl" placeholder="City" onChange={formik.handleChange} onBlur={formik.handleBlur} />
									</div>
									<div className="w-full mb-5">
										<label htmlFor="address" className="block mb-2 font-medium">Address</label>
										<input type="text" name="address" className="w-full rounded-xl" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} />
									</div>
									<div className="grid grid-cols-2 gap-x-2">
										<div className="w-full mb-5">
											<label htmlFor="house_number" className="block mb-2 font-medium">House Number</label>
											<input type="number" name="house_number" className="w-full rounded-xl" placeholder="1" onChange={formik.handleChange} onBlur={formik.handleBlur} />
										</div>
										<div className="w-full mb-5">
											<label htmlFor="phone_number" className="block mb-2 font-medium">Phone Number</label>
											<input type="tel" name="phone_number" className="w-full rounded-xl text-gray-400" placeholder="Phone Number" value={formik.values.phone_number} onChange={formik.handleChange} disabled/>
										</div>
									</div>
									<div className="w-full mb-5">
										<textarea name="description" className="w-full h-full rounded-xl" placeholder="Write your message here..." rows={3} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
									</div>
									<div className="flex justify-end items-center gap-x-2">
										<button type="button" className="btn-outline-primary w-[110px]" onClick={() => onClose()}>Close</button>
										<button type="submit" className="btn-primary w-[110px]">Confirm</button>
									</div>
								</form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
		</>
	);
};

export default AddNewAddress;