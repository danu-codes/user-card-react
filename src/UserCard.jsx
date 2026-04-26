const userData = [
  {
    name: "John Doe",
    city: "Colombo",
    job: "Frontend Developer",
    isOnline: true,
    profilePicture: "https://i.pravatar.cc/150?img=1",
    skills: ["React", "JavaScript", "CSS", "HTML"]
  },
  {
    name: "Sarah Lee",
    city: "Kandy",
    job: "UI/UX Designer",
    isOnline: false,
    profilePicture: "https://i.pravatar.cc/150?img=2",
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research"]
  },
  {
    name: "Michael Smith",
    city: "Galle",
    job: "Backend Developer",
    isOnline: true,
    profilePicture: "https://i.pravatar.cc/150?img=3",
    skills: ["Node.js", "Express", "MongoDB", "SQL"]
  }
]


function User(props) {
  return (<div className="card-container">
    <span className={props.status ? "status online" : "status offline"}>{props.status ? "ONLINE" : "OFFLINE"}</span>
    <img className="profile-pic" src={props.picture} alt="user pictue"></img>
    <h3 className="name">{props.name}</h3>
    <h4 className="city">{props.city}</h4>
    <h5 className="job">{props.job}</h5>
    <div className="buttons">
      <button className="btn message">Message</button>
      <button className="btn follow">Follow</button>
    </div>
    <div className="skills">
      <h4>Skills</h4>
      <ul>{props.skills.map((skill, index) => (<li key={index}>{skill}</li>))}</ul>
    </div>
  </div>);
}


function UserCard() {

  return (
    <>
      {userData.map((user, index) => (<User key={index} name={user.name} city={user.city} skills={user.skills} picture={user.profilePicture} status={user.isOnline} job={user.job} />))}
    </>
  )
}

export default UserCard
