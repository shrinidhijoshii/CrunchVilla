import { useState } from "react";

const Section = ({ name, description }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <section className="border m-3 p-2">
      <h3 className="font-semibold text-xl">{name}</h3>
      <button
        onClick={() => {
          isVisible ? setIsVisible(false) : setIsVisible(true);
        }}
      >
        {isVisible ? <p>hide</p> : <p>show</p>}
      </button>
      {isVisible ? <p>{description}</p> : <p></p>}
    </section>
  );
};

const InstaMart = () => {
  return (
    <div className="insta-mart">
      <h1 className="font-bold text-2xl">Instamart</h1>
      <Section
        name={"About InstaMart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
      <Section
        name={"About Team"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
      <Section
        name={"Careers"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
    </div>
  );
};

export default InstaMart;


//problem statement : when one description is clicked on show , other two should collapse automatically
// it will teach you about independent states
// here, all three sections do not share common state, all three have their own copy of props and state
// all three sections will maintain their own props and state independently
// eg : when we click on show of section-2 , isVisible of section-2 will be true and 
// isVisible of section-1 & section-2 will be false.

// lifting the state-up:
//from problem statement , if we click on ay section show button we also want to modify isVisible of siblings
// we cannot control or modify state of sibling componenet , instead we can control or modify childern using parent
// the above concept is called lifting the state-up
