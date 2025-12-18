# 🤝 Contributing Guide

## 🛠️ Setup

```bash
git clone <repo>
cd sharktanklang-lang
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

---

## ▶️ Running Locally

```bash
sharktanklang repl
sharktanklang run examples/pitch.stl
```

---

## 🧪 Running Tests

```bash
pytest
```

---

## ➕ Adding a New Catchphrase

1. Add entry to `CATCHPHRASES` in `interpreter.py`
2. No parser changes needed
3. Add a test in `tests/test_catchphrases.py`

---

## 🧠 Adding New Syntax

* Extend `parse_lines()`
* Extend `translate()`
* Add tests
* Update documentation

---

## 📜 Code Style Rules

* Parsing must stay strict
* Errors must be friendly
* Do not break existing syntax

---

## 🏁 Final Note

SharkTankLang prioritizes:

* clarity over complexity
* design over hacks
* learning over performance

The sharks will decide your fate 🦈
