const Modal = ({ children, title, isShow }) => {
	return (
		<div
			style={{left : `${isShow ? 72 : -486}px`}}
			className={`w-[396px] bg-[#fff]  border-r-[1px] border-solid absolute top-0 left-[72px] bottom-0 shadow-medium  border-white-blur transition-all duration-[400ms] z-[-1] `}
		>
			<h4 className="px-[24px] pt-[16px] pb-[24px] text-black text-[23px] font-bold">
				{title}
			</h4>
			<div>{children}</div>
		</div>
	);
};
export default Modal;
