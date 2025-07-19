const tools = [
  { name: "Slack", category: "Communication", url: "https://slack.com?ref=itxhub" },
  { name: "Notion", category: "Productivity", url: "https://notion.so?ref=itxhub" },
  { name: "Figma", category: "Design", url: "https://figma.com?ref=itxhub" },
];

function renderTools(filter = "") {
  const grid = document.getElementById("toolGrid");
  grid.innerHTML = "";
  const filtered = tools.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = \`
      <h3>\${tool.name}</h3>
      <p>Category: \${tool.category}</p>
      <a href="\${tool.url}" target="_blank">Visit</a>
    \`;
    grid.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  renderTools(e.target.value);
});

window.onload = () => renderTools();
