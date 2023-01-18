import Card from "../../components/Card";
import "./style.css";
function Home() {
  return (
    <div className="body">
      <div class="page">
        <div class="image" id="parallax">
          <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </section>
          <div class="image_layer" id="image-1"></div>
          <div class="scroll-downs">
            <div class="mouse">
              <div class="scroll"></div>
            </div>
          </div>
          <div class="image_layer" id="image-0"></div>
        </div>
        <div class="overflow">
          <div className="alignment">
            <div className="straight">
                <img className="straightVector" src="./assets/straightVector.svg" alt="Vector curve"></img>
                <img className="laptop" src="./assets/laptop.svg" alt="Vector curve"></img>
                <img className="bigStraightVector" src="./assets/bigStraightVector.svg" alt="Vector curve"></img>
                <img className="badge" src="./assets/certificates.svg" alt="Certificate"></img>
                <img className="bigStraightVector" src="./assets/bigStraightVector.svg" alt="Vector curve"></img>
            </div>
            <div className="apresentation">
              <h1 id="name">Leonardo Lopes</h1>
              <div>
                <p className="textApresentation">
                  A full stack programmer, focused on mobile, I create websites
                  and functional applications for any type of business.
                  My goal is to learn more about programming and further develop my skills
                </p>
              </div>
              <div className="projects">
                <h2 className="projectsTittle">
                  Projects
                </h2>
                <p className="projectsText">I like to keep my mind busy, that's why I'm always doing projects to train my skills. Here are some of them:</p>
                <div className="projectsCard">
                    <Card tittle={"El Churras"} img={"./assets/elchurrasIcon.png"} text={"This project was done together with my friends from SENAI, the project consists of an event expense calculator"} navigation={"/education"}/>
                    <Card tittle={"Storm App"} img={"./assets/stormApp.png"} text={"I made this app to test my use of API's, the goal was to create an interactive weather app, and i trained routes"} navigation={"/education"}/>
                </div>
              </div>
              <div className="badges">
                  <h2>Badges</h2>
                  <div className="projectsCard">
                    <Card tittle={"Cybersecurity"} img={"./assets/badgeCisco.png"} text={"The holder of this student-level credential has introductory knowledge of cybersecurity"} navigation={"/education"}/>
                    <Card tittle={"Azure AI"} img={"./assets/badgeMicrosoft.png"} text={"Earners certification have knowledge of machine learning (ML) and artificial intelligence (AI) concepts."} navigation={"/education"}/>
                    {/* <Link to="/education">Education</Link> */}
                </div>
              </div>
            <div>
            </div>
            </div>
            <div className="asteroids">
              <img className="asteroid" src="./assets/circle.svg" alt="Vector curve"></img>
              <img className="asteroid asteroid-down" src="./assets/circle.svg" alt="Vector curve"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
