const searchBar = document.getElementById("searchBar");
const videos = document.querySelectorAll(".video-card");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  videos.forEach((video) => {
    const title = video.getAttribute("data-title").toLowerCase();
    video.style.display = title.includes(query) ? "block" : "none";
  });
});

function askAI() {
  const description = prompt("Enter movie description:");
  if (!description) return;

  const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual key

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a movie expert. Based on the user's description, suggest the most likely movie name.",
        },
        { role: "user", content: description },
      ],
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const reply = data.choices[0].message.content;
      alert("AI Suggests: " + reply);
    })
    .catch((err) => {
      console.error(err);
      alert("Error talking to AI");
    });
}
