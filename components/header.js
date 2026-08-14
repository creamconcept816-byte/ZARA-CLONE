let token = JSON.parse(localStorage.getItem("token"));
let name = JSON.parse(localStorage.getItem("userName"));


let change = "LOG IN"

if (token) {
    change = "Hi " + name;
}

function goTo(section) {
    localStorage.setItem("search", JSON.stringify(section));
    window.location.href = "./products.html";
}

function header() {
    return `

      <div class="hamburger">
          <span class="fas fa-bars"></span>
            </div>
              <div class="logo">
                  <a href="./index.html"
                        ><img
                                height="70"
                                        width="180"
                                                style="object-fit:contain"
                                                        src="https://acdn-us.mitiendanube.com/stores/005/200/262/themes/common/logo-1574918684-1741118856-1bbecca5cd76a6bbeb5e85a5f5ef65701741118856.png?0"
                                                                alt="Cream Concept"
                                                                    /></a>



                                                                        <span class="rightoptions">
                                                                            <a href="./search.html">
                                                                                <p id="search-input">SEARCH</p></a>
                                                                                      <a href="login.html">
                                                                                              <p id="userCheck">${change}</p>
                                                                                                    </a>
                                                                                                          <a href="zarahelp.html">
                                                                                                                  <p>HELP</p>
                                                                                                                        </a>
                                                                                                                              <a href="shoppingBasket.html">
                                                                                                                                      <p>CART</p>
                                                                                                                                            </a>
                                                                                                                                                </span>
                                                                                                                                                  </div>
                                                                                                                                                  
                                                                                                                                                  
                                                                                                                                                  
                                                                                                                                                  
                                                                                                                                                    <nav class="sidebar">
                                                                                                                                                        <ul>
                                                                                                                                                              <li onclick="goTo('New In')"><a href="#">NEW IN</a></li>
                                                                                                                                                                    <li onclick="goTo('Camperas')"><a href="#">CAMPERAS</a></li>
                                                                                                                                                                          <li onclick="goTo('Buzos')"><a href="#">BUZOS</a></li>
                                                                                                                                                                                <li onclick="goTo('Jeans')"><a href="#">JEANS</a></li>
                                                                                                                                                                                      <li onclick="goTo('Remeras')"><a href="#">REMERAS</a></li>
                                                                                                                                                                                            <li onclick="goTo('Pantalones')"><a href="#">PANTALONES</a></li>
                                                                                                                                                                                                  <li onclick="goTo('Bermudas')"><a href="#">BERMUDAS</a></li>
                                                                                                                                                                                                        <li onclick="goTo('Calzado')"><a href="#">CALZADO</a></li>
                                                                                                                                                                                                              <li onclick="goTo('Gorras')"><a href="#">GORRAS</a></li>
                                                                                                                                                                                                                    <li onclick="goTo('Accesorios')"><a href="#">ACCESORIOS</a></li>
                                                                                                                                                                                                                          <li onclick="goTo('Todos')"><a href="#">VER TODO</a></li>
                                                                                                                                                                                                                                <br />
                                                                                                                                                                                                                                      <li><a href="mainhelp.html">+ info</a></li>
                                                                                                                                                                                                                                          </ul>
                                                                                                                                                                                                                                            </nav>`;
}

export { header };
