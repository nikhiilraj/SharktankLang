# 🧠 Architecture Overview (Engineer View)

## 🧩 High-Level Pipeline

```
.stl source
↓
Parser
↓
AST (Program / Statement)
↓
Translator
↓
Python code
↓
Sandboxed execution
```

---

## 🧠 Why a Transpiler?

Instead of building a full VM or bytecode interpreter,
SharkTankLang **transpiles** to Python.

### Benefits

* ⚡ Fast to build
* 🐞 Easy to debug
* 🔐 Safer execution
* 🎓 Excellent for learning language design

---

## 🧱 AST Design

### Program Node

```python
class Program:
    statements: list[Statement]
```

### Statement Node

```python
class Statement:
    kind: str
    data: dict
    children: list[Statement]
```

* Simple statements have no children
* Block statements (e.g. `shark ->`) contain nested children

---

## 📖 Parsing Strategy

* Line-based parsing
* Regex-driven grammar
* Stack-based block handling
* Strict syntax enforcement

Invalid syntax **never reaches execution**.

---

## 🔁 Translation Strategy

* AST → Python source
* Deterministic output
* No implicit control flow
* Shark blocks are semantic only

This avoids indentation bugs and unsafe behavior.

---

## 🧪 Error Handling

Custom `SharkSyntaxError` provides:

* Line numbers
* Context
* Human-readable hints

No raw Python tracebacks are shown to users.

---

## 🛡️ Execution Safety

Execution is sandboxed:

```python
exec(code, {"__builtins__": {"print": print}})
```

This prevents access to dangerous Python builtins.

---

## 📌 Design Trade-offs

### Current Limitations

* ❌ No variables (yet)
* ❌ No loops (yet)

### Intentional Strengths

* ✅ Strong domain focus
* ✅ Clear mental model
* ✅ Easy extensibility
