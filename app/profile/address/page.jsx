"use client";
import { SlLocationPin } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import AddNewAddress from "./components/add_new_address";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { FaTrash, FaCircle } from "react-icons/fa6";
import { delete_address } from "@/app/redux/slices/user_slice";



const UserAddress = () => {

	const {user} = useSelector((state) => state.user_slice);
	const dispatch = useDispatch();
	

	return (
		<main className ="container-fluid mt-5 px-3 min-h-screen">
			{
				user.address.length === 0 ? (
					<div className="w-full rounded-xl p-4 flex flex-col justify-center items-center mt-[7rem] bg-white gap-y-2 shadow-sm">
						<div><SlLocationPin className="w-[5rem] h-[5rem] text-gray-600"/></div>
						<div className="font-medium">There is no address</div>
						<p className="text-center mb-8 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aspernatur.</p>
						<AddNewAddress />
					</div>
				) : (
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						{
							user.address.map((item, index) => {
								return (
									<div key={index} className="p-4 w-full bg-white rounded-xl">
										<div className="pb-2 flex justify-between items-center border-b font-semibold">
											<Dropdown>
												<DropdownTrigger className="cursor-pointer">
													<div className="flex justify-center items-center gap-x-1 bg-gray-200 p-2 rounded-full border">
														<FaCircle className="w-[4px] h-[4px] text-black"/>
														<FaCircle className="w-[4px] h-[4px] text-black"/>
														<FaCircle className="w-[4px] h-[4px] text-black"/>
													</div>
												</DropdownTrigger>
												<DropdownMenu aria-label="Static Actions">
													<DropdownItem key="delete" className="text-danger" color="danger" onClick={() => dispatch(delete_address(index))}>
														<span className="flex justify-normal items-center gap-x-2">
															<FaTrash className="w-[18px] h-[18px]"/>
															Delete file
														</span>
													</DropdownItem>
												</DropdownMenu>
											</Dropdown>
											<h1 className="flex gap-x-2">
												<span>Location</span>
												<span className="text-primary">{index + 1}</span>
											</h1>
											<div></div>
										</div>
										<div className="py-2 border-b flex flex-col justify-center items-start gap-y-2">
											<span><span className="font-semibold">City:</span> {item.city}</span>
											<span><span className="font-semibold">Address:</span> {item.address}</span>
											<span><span className="font-semibold">House Number:</span> {item.house_number}</span>
											<span><span className="font-semibold">Phone Number: </span>{item.phone_number}</span>
										</div>
										<div className="pt-2">
											<span><span className="font-semibold">Description:</span> {item.description}</span>
										</div>
								</div>
								)
							})
						}
						<div className="flex justify-center items-center">
							<AddNewAddress />
						</div>
					</div>
				)
			}
		</main>
	);
};

export default UserAddress;