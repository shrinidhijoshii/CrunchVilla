import { useEffect, useState } from "react";

export const About = () => {
  const [avatar, setAvatar] = useState("avatar");
  const [name, setName] = useState("name");
  const [bio, setBio] = useState("bio");
  const [twitter, setTwitter] = useState("twitter handle");

  useEffect(async function () {
    let response = await fetch("https://api.github.com/users/shiiijo");
    let json = await response.json();
    console.log(json);
    setAvatar(json.avatar_url);
    setName(json.name);
    setBio(json.bio);
    setTwitter(json.twitter_username);

    return () =>{
        // do un-mount of the things if needed
    }
  }, []);

  return (
    <div className="text-center m-10">
      <img src={avatar} className="rounded-full ml-auto mr-auto m-20"></img>
      <h4>{name}</h4>
      <h4>{bio}</h4>
      <h4>Email : shrinidhijoshi99@gmail.com</h4>
      <h4>Twitter : {twitter}</h4>
    </div>
  );
};
