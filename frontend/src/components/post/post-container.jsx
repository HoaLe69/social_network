import { Box } from "@chakra-ui/react";
import Post from "./post";

const PostContainer = () => {
  const fakeData = [
    {
      id: 1,
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Vwn_hfo_691",
      status: "My equiment !!!",
      follower: [1, 2, 3, 4, 5, 6],
      thumbNail:
        "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      like: [1, 23, 4, 5, 565, 6, 67, 7, 77],
      comments: [1, 2, 3, 4, 45, 5, 6, 67, 7],
    },
    {
      id: 2,
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Vwn_hfo_691",
      status: "My equiment !!!",
      follower: [1, 2, 3, 4, 5, 6],
      thumbNail:
        "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      like: [1, 23, 4, 5, 565, 6, 67, 7, 77],
      comments: [1, 2, 3, 4, 45, 5, 6, 67, 7],
    },
    {
      id: 3,
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Vwn_hfo_691",
      status:
        "HHello , my name Le Van Hoa , To day is not easy,tomorow is more difficult Hello , my name Le Van Hoa , To day is not easy,tomorow is more difficult",
      follower: [1, 2, 3],
      thumbNail:
        "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      like: [1, 23, 4, 5, 565, 6, 67, 7, 77],
      comments: [1, 2, 3, 4, 45, 5, 6, 67, 7],
    },
  ];
  return (
    <Box>
      {fakeData?.map(function (data) {
        return (
          <Post
            key={data.id}
            id={data.id}
            photoUrl={data.photoUrl}
            displayName={data.displayName}
            status={data.status}
            follower={data.follower}
            thumbNail={data.thumbNail}
            like={data.like}
            comments={data.comments}
          />
        );
      })}
    </Box>
  );
};

export default PostContainer;
