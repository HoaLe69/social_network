import LayoutNotHeader from "@layout/layout-not-header";
import ProfileHeader from "@components/profile/profile-header";
import ProfilePost from "@components/profile/profile-posts";

const Profile = () => {
  return (
    <LayoutNotHeader>
      <ProfileHeader />
      <ProfilePost />
    </LayoutNotHeader>
  );
};

export default Profile;
