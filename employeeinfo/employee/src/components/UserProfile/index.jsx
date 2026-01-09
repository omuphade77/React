import "./index.css";
const UserProfile = (props) => {
    const {userDetails} = props;
    const {imageUrl, name, role} = userDetails;

    return (
        <div className="user-profile-container">
            <img src={imageUrl} alt="user profile" className="user-profile-image" />
            <h1 className="user-profile-name">{name}</h1>
            <p className="user-profile-role">{role}</p>
        </div>
    );
}

export default UserProfile;