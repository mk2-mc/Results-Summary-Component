const summary = document.querySelectorAll(".summary-item");
const result = document.querySelector(".result-value");
let scoresCount = 0;
let scoresTotal = 0;

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  
  // Summary
  summary.forEach((item, i) => {
    const img = document.createElement("img");
    img.src = data[i].icon;
    img.alt = "";
    item.insertAdjacentElement("afterbegin", img);

    item.querySelector(".summary-name").innerHTML = data[i].category;
    item.querySelector(".summary-score").innerHTML = data[i].score;
    
    scoresCount ++;
    scoresTotal += data[i].score;
  });

  // Result
  result.innerHTML = Math.floor(scoresTotal / scoresCount);
}

getData();