let editor;

require.config({
  paths: {
    vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: `pitch("Hello Sharks!")
valuation(200)
ask(50, 5)

shark Ashneer ->
    sab_bekaar_hai("pricing")
    offer(30, 10)
end

deal()
`,
    language: "plaintext",
    theme: "vs-dark",
    fontSize: 14,
    minimap: { enabled: false }
  });
});

async function runCode() {
  const output = document.getElementById("output");
  output.textContent = "Running...";

  const code = editor.getValue();

  const res = await fetch("https://sharktanklang.onrender.com/run", {
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
