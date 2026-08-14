// Listado de productos - adaptado para usar el catalogo real de Cream Concept
// (ver scripts/creamProducts.js) en lugar de la API caida de zara-server.

let query = JSON.parse(localStorage.getItem("search"));

function fmt(n) {
    return "$" + Number(n).toLocaleString("es-AR");
}

function getProducts() {
    if (!query || query === "null" || query === "Todos") {
          return creamProducts;
    }
    return creamProducts.filter(
          (p) => p.section.toLowerCase() === String(query).toLowerCase()
        );
}

initial();

function initial() {
    display(getProducts());
}

document.querySelector("#sortPrice").addEventListener("change", sortByPrice);

function sortByPrice() {
    let selected = document.querySelector("#sortPrice").value;
    let products = [...getProducts()];
    if (selected == "low") {
          products.sort((a, b) => a.price - b.price);
    }
    if (selected == "high") {
          products.sort((a, b) => b.price - a.price);
    }
    if (selected == "less") {
          products = products.filter((product) => product.price <= 30000);
    }
    if (selected == "greater") {
          products = products.filter((product) => product.price >= 30000);
    }
    display(products);
}

function display(data) {
    let main = document.getElementById("main");
    main.innerHTML = "";

  if (!data.length) {
        main.innerHTML = "<p style='padding:40px;text-align:center;'>No hay productos en esta seccion.</p>";
        return;
  }

  data.forEach(function (elem) {
        let div = document.createElement("div");

                   div.innerHTML = ` <img src=${elem.imgUrl} alt="${elem.prod_name}">

                              <div class="flex">
                                             <p class='underline'>${elem.prod_name}</p>
                                                            <div>
                                                                               ${
                                                                                                      elem.strikedOffPrice
                                                                                                        ? `<p style="text-decoration:line-through">${fmt(
                                                                                                                                     elem.strikedOffPrice
                                                                                                                                   )}</p>`
                                                                                                        : ""
                                                                               }
                                                                                                  <p><span>${elem.prod_discount || ""} </span> ${fmt(
                                                                                                          elem.price
                                                                                                        )}</p>
                                                                                                                       </div>
                                                                                                                                  </div>`;

                   div.addEventListener("click", function () {
                           window.open(elem.url, "_blank");
                   });

                   main.appendChild(div);
  });
}
