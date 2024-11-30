import { BsSearch } from "react-icons/bs";

const SearchBtn = () => {
	return (
		<button type="submit" name="search_btn" className="w-[38px] h-[38px] absolute right-1 top-1 bg-white p-[.6rem] rounded-xl flex justify-center items-center"><BsSearch className="min-w-full min-h-full"/></button>
	);
};

export default SearchBtn;