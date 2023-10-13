import Modal from "../Modal";
import { useSelector } from "react-redux";
import NotifiItem from "./NotifiItem";

const ModalNotifi = () => {
	const isShowModalNotifi = useSelector(
		(state) => state.sidebar.isShowModalNotifi
	);
	return (
		<Modal title="Notifications" isShow={isShowModalNotifi}>
			<NotifiItem />
		</Modal>
	);
};

export default ModalNotifi;
