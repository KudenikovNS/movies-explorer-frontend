import "./AboutMe.css";
import MyInfo from "../MyInfo/MyInfo";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <MyInfo />
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
