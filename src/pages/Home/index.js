import Header from "../../components/Header";
import "./style.css"
function Home() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      
    return (
        <div className="body">
            <Header/>
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
                    <div class="image_layer" id="image-0"></div>
                </div>
                <div class="overflow reveal">
                    <img src="./assets/curveVector.svg" alt="Vector curve"></img>
                    <h1>Teste</h1>
                    <div>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                  <p>nada</p>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Home;