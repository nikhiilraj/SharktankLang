async function runCode() {
  const code = document.getElementById("editor").value;
  const output = document.getElementById("output");

  output.textContent = "Running...";

  const res = await fetch("http://127.0.0.1:8000/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });

  const data = await res.json();

  if (data.error) {
    output.textContent = "❌ Error:\n" + data.error;
  } else {
    output.textContent = data.output;
  }
}
