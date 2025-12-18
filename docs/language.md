# 🟢 SharkTankLang (STL)

A domain-specific language for the high-stakes world of startup pitching. Write your pitch, handle the heat from the Sharks, and close the deal.

## 🧠 Core Idea

1. **Draft your Pitch:** Define your product and your ask.
2. **Sharks React:** Define shark-specific logic and catchphrases.
3. **The Result:** Negotiate and finalize the deal.

---

## 🟢 Basic Syntax

### 📣 Pitching the Idea

The `pitch` function initializes your session.

```python

pitch("Hello Sharks! We built MoodDosa.")

```

### 💰 Valuation & Ask

Define your financial standing before the Sharks start biting.

```python
valuation(200) # Valuation in ₹ Cr
ask(50, 5)     # Asking ₹50 Cr for 5% equity

```

---

## 🦈 Sharks

Sharks are written as **scoped blocks**. Logic placed inside a shark block is specific to that personality.

```ruby
shark Ashneer ->
    sab_bekaar_hai("unit economics")
    offer(30, 10)
end

```

### Supported Sharks

* `Ashneer`
* `Aman`
* `Namita`
* `Peyush`
* `Anupam`
* `Vineeta`

---

## 🗣️ Catchphrases

Catchphrases trigger specific state changes or dialogue in the simulation.

| Function | Type | Description |
| --- | --- | --- |
| `sab_bekaar_hai("reason")` | Argument | Rejects the premise based on a metric. |
| `doglapan_alert("claim")` | Argument | Flags inconsistent numbers. |
| `kya_kar_raha_hai_tu("tag")` | Argument | Questions the founder's direction. |
| `i_believe_in_you("text")` | Argument | Positive reinforcement. |
| `for_that_reason_im_out()` | No Arg | Shark exits the deal. |

---

## 💸 Offers & Deals

Negotiate your way to a term sheet.

* **Make an Offer:** `offer(amount, equity)`
* **Counter Offer:** `counter(amount, equity)`
* **Close the Deal:** Use `deal()` or `no_deal()`.

---

## 🧪 Complete Example Program

```ruby
pitch("Innovative AI-driven Chai-point")
valuation(100)
ask(10, 10)

shark Aman ->
    i_believe_in_you("Great branding")
    offer(10, 8)
end

shark Namita ->
    sab_bekaar_hai("Expertise")
    for_that_reason_im_out()
end

deal()

```

---

## ❌ Errors & Diagnostics

STL provides **human-friendly** error messages instead of complex stack traces.

> [!CAUTION]
> ### 🦈 SharkTankLang Error
> 
> 
> **→ Line 1:** `print("test")`
> **✖ Unknown syntax.** > **💡 Hint:** Use `pitch()`, `ask()`, `offer()`, `deal()`, or shark catchphrases.

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
