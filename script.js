const summary = document.querySelectorAll(".summary-box");
const name = document.querySelectorAll(".summary-name");
const score = document.querySelectorAll(".summary-score");
const result = document.querySelectorAll(".result-value");

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  
  console.log(data);
  return data;
}

getData();