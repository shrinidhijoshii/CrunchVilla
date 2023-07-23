import { useEffect, useState } from "react";

export const About = () => {
  const [avatar, setAvatar] = useState("avatar");
  const [name, setName] = useState("name");
  const [bio, setBio] = useState("bio");
  const [twitter, setTwitter] = useState("twitter handle");
  const [isVisible , setIsVisible] =  useState(true);

  useEffect(async function () {
    let response = await fetch("https://api.github.com/users/shiiijo");
    let json = await response.json();
    console.log(json);
    setAvatar(json.avatar_url);
    setName(json.name);
    setBio(json.bio);
    setTwitter(json.twitter_username);

    return () => {
      // do un-mount of the things if needed
    };
  }, []);

  return (
    <div className="text-center m-10">
      <div className="shadow-md w-100 ml-auto mr-auto">
        <h1 className="font-semibold">About CrunchVilla</h1>
        <button
          className="text-end"
          onClick={() => {
            isVisible ? setIsVisible(false) : setIsVisible(true);
          }}
        >
          {isVisible ? <small>🙈</small> : <small> 📖</small>}
        </button>
        {isVisible ? (
          <p>
            Introducing CrunchVilla, your ultimate food delivery app that brings
            a delightful crunch to your doorstep! With CrunchVilla, you can
            satisfy your cravings with ease and discover a world of culinary
            delights from the best local restaurants. Our user-friendly app is
            designed to make your food ordering experience effortless and
            enjoyable. CrunchVilla understands that everyone has unique tastes
            and preferences when it comes to food. That's why we have handpicked
            a diverse selection of cuisines, ensuring there's something to
            tantalize every taste bud. From crispy and savory snacks to hearty
            meals, refreshing salads to decadent desserts, CrunchVilla offers a
            wide array of options to cater to your cravings. Finding your
            favorite dishes is a breeze with CrunchVilla. Our intuitive search
            function and smart filters allow you to browse through menus,
            explore specific cuisines, dietary preferences, or even search for
            dishes by name. You can easily customize your order, whether you
            want extra toppings, specific spice levels, or any special requests
            - CrunchVilla ensures your meal is just the way you like it.
            CrunchVilla partners with the best local restaurants, renowned for
            their exceptional flavors and quality ingredients. We prioritize
            freshness and taste, ensuring that every dish is prepared with
            utmost care and attention. With our commitment to hygiene and
            safety, you can have complete peace of mind while enjoying your
            favorite meals. Convenience is at the heart of CrunchVilla. Our app
            offers multiple payment options, including secure online
            transactions, mobile wallets, or cash on delivery, giving you
            flexibility and ease. Real-time order tracking keeps you informed
            about the progress of your delivery, so you can plan your time
            accordingly and eagerly anticipate the arrival of your delicious
            meal. Discover new flavors or stick to your trusted favorites -
            CrunchVilla caters to your every culinary whim. With detailed
            descriptions, nutritional information, and honest customer reviews,
            you can make informed decisions about your orders and explore new
            gastronomic adventures. Download CrunchVilla today and experience
            the ultimate food delivery app. Join our community of food
            enthusiasts and embark on a flavorful journey that promises
            convenience, satisfaction, and of course, a delightful crunch. Your
            next culinary adventure is just a tap away with CrunchVilla!
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <img src={avatar} className="rounded-full ml-auto mr-auto m-20"></img>
      <h4>{name}</h4>
      <h4>{bio}</h4>
      <h4>Email : shrinidhijoshi99@gmail.com</h4>
      <h4>Twitter : {twitter}</h4>
    </div>
  );
};
