// alert("Hello APSSC");
fetch("data.json") //fetch is a promise
  .then(res => {
    return res.json(); //converting the obtained response into js file using .json()
  })
  .then(data => {
    display_info(data.basics);
  });
//creating  bodyElement to call function and display on that
var a = document.querySelector("#root");

function display_info(info) {
  //card veiw
  let card = document.createElement("div"); //
  card.classList.add("card");
  let head3 = document.createElement("h3"); //creating a html element using java script
  head3.textContent = info.name;
  //head3.style.fontSize = "500%";
  //append card to body and heading to card
  a.append(card);
  card.append(head3);
  let line = document.createElement("hr");
  card.append(line);
  let role = document.createElement("h3");
  role.textContent = info.role;
  card.append(role);
  let email = document.createElement("a"); //anchor tag
  email.href = "mailto:" + info.email;
  email.textContent = info.email;
  card.append(email);

  card.append(document.createElement("br"));
  card.append(document.createElement("br"));

  let mobile = document.createElement("a");
  mobile.href = "tel:" + info.mobile;

  mobile.textContent = info.mobile;
  card.append(mobile);

  card.append(document.createElement("br"));

  var button = document.createElement("a");
  button.textContent = "Veiw Profile";
  button.classList.add("btn");
  card.append(button);
}
