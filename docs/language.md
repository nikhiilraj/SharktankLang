# 🟢 Language Guide (User View)

## 🧠 Core Idea

You write startup pitches.  
Sharks react.  
Deals happen.

---

## 🟢 Basic Syntax

### 📣 Pitch

```stl
pitch("Hello Sharks! We built MoodDosa.")
````

---

### 💰 Valuation & Ask

```stl
valuation(200)
ask(50, 5)
```

Meaning:

* Valuation = ₹200 Cr
* Asking ₹50 Cr for 5%

---

## 🦈 Sharks

Sharks are written as **blocks**.

```stl
shark Ashneer ->
    sab_bekaar_hai("unit economics")
    offer(30, 10)
end
```

### Supported Sharks

* Ashneer
* Aman
* Namita
* Peyush
* Anupam
* Vineeta

---

## 🗣️ Catchphrases

Catchphrases are the **heart of the language**.

### With Arguments

```stl
sab_bekaar_hai("pricing")
doglapan_alert("unrealistic claims")
kya_kar_raha_hai_tu("marketing?")
i_believe_in_you("strong founders")
```

### Without Arguments

```stl
for_that_reason_im_out()
```

---

## 💸 Offers & Deals

### Making an Offer

```stl
offer(40, 7)
```

### Counter Offer

```stl
counter(35, 8)
```

### Final Decision

```stl
deal()
```

or

```stl
no_deal()
```

---

## 🧪 Complete Example Program

```stl
pitch("Hello Sharks!")
valuation(200)
ask(50, 5)

shark Ashneer ->
    sab_bekaar_hai("unit economics")
    offer(30, 10)
end

shark Peyush ->
    i_believe_in_you("great team")
    offer(50, 5)
end

deal()
```

---

## ❌ Errors & Diagnostics

Errors are **human-friendly**, not Python tracebacks.

```text
🦈 SharkTankLang Error
→ Line 1: print("test")
✖ Unknown syntax.
💡 Hint: Use pitch(), ask(), offer(), deal(), or shark catchphrases.
```

---

## 🚀 Running SharkTankLang

### Run a File

```bash
sharktanklang run pitch.stl
```

### Start REPL

```bash
sharktanklang repl
```
