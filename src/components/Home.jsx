import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>InnoKidsTech</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            InnoKidsTech is a dynamic educational initiative that champions the
            limitless potential of young minds. We are passionate about
            equipping children with essential skills in science, technology,
            engineering, and mathematics (STEM), fostering creativity, and
            nurturing their innate capacity for innovation.
          </p>
          <p>
            At InnoKidsTech, we believe in the power of hands-on learning,
            encouraging young learners to explore, experiment, and
            problem-solve. Our programs introduce children to the exciting world
            of technology, robotics, and coding in a fun and engaging way,
            setting them on a path to becoming tech-savvy, forward-thinking
            individuals.
          </p>

          <p>
            Our mission is simple: to inspire the innovators of the future by
            providing them with the tools and knowledge to tackle challenges,
            create solutions, and shape a brighter world. Join us at
            InnoKidsTech and embark on a journey of discovery, invention, and
            boundless possibilities.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
