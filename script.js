const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiURL = "https://course-api.com/react-tours-project";
const options = {
  method: "Get",
  headers: {
    "X-Api-Key": apiURL,
  },
};

btnEl.addEventListener("click", async function () {
  jokeEl.innerHTML = "Loading...";
  const response = await fetch(apiURL, options);
  const data = await response.json();
  const number = data.map((item) => {
    jokeEl.innerHTML = item.info;
  });
});
