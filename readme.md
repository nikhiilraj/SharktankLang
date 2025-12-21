# 🦈 SharkTankLang

**SharkTankLang** is a fully working, domain-specific programming language inspired by **Shark Tank India**.

You pitch startups, get rejected, receive offers, and close deals — all in code.

While the syntax is playful, the implementation is serious. SharkTankLang includes a real interpreter, automated tests, CI, proper packaging, and a live web playground.

👉 **Live Playground:** <[sharktanklang](https://sharktank-lang.vercel.app)>  
📦 **Install:** `pip install sharktanklang`

---

## ✨ Why SharkTankLang?

Most “fun languages” online are joke scripts or one-file hacks.

SharkTankLang was built as a **serious engineering project** to deeply understand:
- how programming languages work internally
- how to design and parse custom syntax
- how to test and evolve language behavior safely
- how to package and ship developer tools
- how frontend, backend, and tooling fit together

The Shark Tank theme simply makes the learning process more engaging.

---

## 🧠 Example

```txt
pitch("Hello Sharks!")
valuation(200)
ask(50, 5)

shark Ashneer ->
  sab_bekaar_hai("unit economics")
end

deal()
````

Readable, expressive, and intentionally mapped to familiar programming concepts.

---

## 🧾 Tiny Cheat Sheet

| Syntax                | Meaning            |
| --------------------- | ------------------ |
| `pitch("X")`          | Print a message    |
| `valuation(200)`      | Set valuation      |
| `ask(50, 5)`          | Ask ₹50 Cr for 5%  |
| `shark Ashneer ->`    | Begin shark block  |
| `sab_bekaar_hai("X")` | Reject with reason |
| `offer(30, 10)`       | Make an offer      |
| `deal()`              | Accept final deal  |
| `no_deal()`           | Walk away          |

📘 Full language documentation:
👉 `docs/language.md`

---

## ⚙️ How It Works (High Level)

SharkTankLang follows a real execution pipeline:

```
Source code
→ tokenization
→ parsing into structured statements
→ internal program representation
→ Python code generation
→ sandboxed execution
→ output
```

The interpreter avoids `eval`-based shortcuts and is designed to be readable, debuggable, and extendable.

---

## 🌐 Web Playground

To make the language accessible, SharkTankLang includes a **live web IDE**:

* Monaco Editor (VS Code-style)
* FastAPI backend for execution
* Clean output and error handling
* Deployed frontend and backend

👉 Try it live: <[YOUR LIVE URL](https://sharktank-lang.vercel.app)>

---

## 📦 Installation & Usage

Install from PyPI:

```bash
pip install sharktanklang
```

Run a file:

```bash
sharktanklang run examples/pitch.stl
```

Open the REPL:

```bash
sharktanklang repl
```

---

## 🧪 Testing & CI

The project includes:

* unit tests for core language features
* tests for invalid syntax and edge cases
* regression tests for parser changes

Tests run automatically using **GitHub Actions CI** on every push, making it safe to refactor and extend the language.

---

## 🏗️ Project Structure

```txt
sharktanklang/
├── src/sharktanklang/
│   ├── interpreter.py
│   ├── cli.py
│   └── __init__.py
├── tests/
│   ├── test_basic_language.py
│   ├── test_catchphrases.py
│   └── test_errors.py
├── web/
│   ├── frontend/
│   └── backend/
├── docs/
│   └── language.md
└── pyproject.toml
```

---

## 🚀 Tech Stack

* Python
* Custom DSL interpreter
* FastAPI
* Monaco Editor
* pytest
* GitHub Actions CI
* PyPI packaging
* Vercel + Render deployment

---

## 🧠 What This Project Demonstrates

* language design and interpretation
* clean project structure and packaging
* automated testing and CI
* backend API development
* frontend–backend integration
* end-to-end ownership of a developer tool

---

## 👤 Built By

**Nikhil Raj**
CS @ IIIT Nagpur

Building things for clarity, curiosity, and fun.

* GitHub: <[YOUR GITHUB](https://github.com/nikhiilraj)>
* LinkedIn: <https://www.linkedin.com/in/nikhilraj-dev/>
* Email: <mailto: nikhil4rajj@gmail.com>

---

## ⭐ Feedback

This project is still evolving.

Feedback, ideas, and suggestions are always welcome.
