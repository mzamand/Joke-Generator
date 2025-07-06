document.getElementById("getJokeBtn").addEventListener("click", async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("setup").textContent = data.setup;
  document.getElementById("punchline").textContent = data.punchline;
});