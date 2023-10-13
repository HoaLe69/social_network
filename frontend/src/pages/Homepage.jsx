import PostContainer from "../components/Post";
import ListSuggest from "../components/SuggestFollow";

const Homepage = () => {
	return (
		<div className="overflow-auto h-[100vh]">
			<div className="flex justify-center pt-[22px]">
				<div className="max-w-[630px] w-[100%] flex justify-center">
					<PostContainer />
				</div>
				<div className="max-w-[383px] w-[100%] pl-[64px]">
					<ListSuggest />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
