function productCardUi() {
  let form = document.createElement("form");
  form.setAttribute("id", "productForm");
  let productCardDiv = document.createElement("div");
  let productHeading = document.createElement("h1");

  productCardDiv.setAttribute("id", "cardDiv");
  productHeading.innerText = " ✏️ Product Card Maker";
  productHeading.setAttribute("id", "productHead");

  //   bodyChild//
  document.body.appendChild(productHeading);
  document.body.appendChild(form);
  form.appendChild(productCardDiv);
  //   bodyChild//

  //   creatingElements//
  let myPara = document.createElement("p");
  let myInput = document.createElement("input");
  let myTextArea = document.createElement("textarea");
  let myPara2 = document.createElement("p");
  let myPara3 = document.createElement("p");
  let myInput2 = document.createElement("input");
  let myPara4 = document.createElement("p");
  let myInput3 = document.createElement("input");
  let myBtn = document.createElement("button");
  //   creatingElements//

  // myParagraphs//
  myPara.innerText = "Product-Title:";
  myPara2.innerText = "Product-Description:";
  myPara3.innerText = "Button-Title:";
  myPara4.innerText = "Image-Url:";
  myPara.setAttribute("id", "myPara");
  myPara2.setAttribute("id", "myPara");
  myPara3.setAttribute("id", "myPara");
  myPara4.setAttribute("id", "myPara");
  // myParagraphs//

  //   myBtn//
  myBtn.setAttribute("id", "btn");
  myBtn.innerText = "Create Product";
  //   myBtn//

  //   myInput//
  myInput.setAttribute("id", "myInputs");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("placeholder", "Enter Your Product Title");
  myInput.setAttribute("required", "");

  //   myInput//

  //   textArea///
  myTextArea.setAttribute("id", "myTextArea");
  myTextArea.setAttribute("type", "text");
  myTextArea.setAttribute("placeholder", "Enter Your Product Description");
  myTextArea.setAttribute("required", "");

  //   textArea///

  //   myInput2//
  myInput2.setAttribute("id", "myInputs");
  myInput2.setAttribute("type", "text");
  myInput2.setAttribute("placeholder", "Enter Your Button Title");
  myInput2.setAttribute("required", "");
  //   myInput2//

  //   myInput3//
  myInput3.setAttribute("id", "myInputs");
  myInput3.setAttribute("type", "url");
  myInput3.setAttribute("placeholder", "Enter Your Image URL");
  myInput3.setAttribute("required", "");
  //   myInput3//

  // cardDivAppending//
  productCardDiv.append(myPara);
  productCardDiv.append(myInput);
  productCardDiv.append(myPara2);
  productCardDiv.append(myTextArea);
  productCardDiv.append(myPara3);
  productCardDiv.append(myInput2);
  productCardDiv.append(myPara4);
  productCardDiv.append(myInput3);
  productCardDiv.append(myBtn);
  // cardDivAppending//

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let existingCard = document.getElementById("resultCard");
    if (existingCard) {
      existingCard.remove();
    }

    let imageUrl = myInput3.value;
    let productTitle = myInput.value;
    let productDescription = myTextArea.value;
    let buttonTitle = myInput2.value;

    let resultCard = document.createElement("div");
    resultCard.setAttribute("id", "resultCard");

    let imageElem = document.createElement("img");
    imageElem.setAttribute("src", imageUrl);
    imageElem.setAttribute("id", "myImage");

    let titleElem = document.createElement("h2");
    titleElem.innerText = productTitle;
    titleElem.setAttribute("id", "resultHead");

    let descElem = document.createElement("p");
    descElem.innerText = productDescription;
    descElem.setAttribute("id", "myDesc");

    let btnElem = document.createElement("button");
    btnElem.innerText = buttonTitle;
    btnElem.setAttribute("id", "resultBtn");

    resultCard.appendChild(imageElem);
    resultCard.appendChild(titleElem);
    resultCard.appendChild(descElem);
    resultCard.appendChild(btnElem);

    document.body.appendChild(resultCard);

    let fullScreenDiv = document.createElement("div");
    fullScreenDiv.setAttribute("id", "fullScreenImage");
    fullScreenDiv.style.display = "none"; // Pehle hidden hoga
    fullScreenDiv.innerHTML = `<img src="${imageUrl}" id="fullImage">`;
    document.body.appendChild(fullScreenDiv);

    btnElem.addEventListener("click", () => {
      fullScreenDiv.style.display = "flex";
    });

    fullScreenDiv.addEventListener("click", () => {
      fullScreenDiv.style.display = "none";
    });
  });
}
productCardUi();
