import Header from "../../components/Header";
import Card from "../../components/Card";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Home(props) {
  AOS.init();

  return (
    <div className="body">
      <div class="page">
        <div class="image" id="parallax">
          {/* <Header className="header-off" /> */}
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
            </div>
            <div className="apresentation">
              <h2 id="name">Leonardo Lopes</h2>
              <div>
                <p className="textApresentation">
                  A full stack programmer, focused on mobile, I create websites
                  and functional applications for any type of business.
                  My goal is to learn more about programming and further develop my skills
                </p>
              </div>
              <div>
                <h3 className="Projects">
                  Projects
                </h3>
                <Card tittle={"Testee"} img={"./assets/asteroid.svg"} text={"Nada demais"}/>
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
