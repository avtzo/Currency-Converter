# 🪟 Currency Converter Web App

A clean, light-weight JavaScript web application that enables instant exchange rate conversions between major global currencies using an interactive HTML/CSS interface.

---

## 🌟 Features

* **Multi-Currency Support:** Convert seamlessly between EUR, USD, GBP, JPY, CNY, CHF, AUD, CAD, HKD, and NZD.
* **Universal Conversion Logic:** Employs a base-currency ratio algorithm (`EUR` base) allowing accurate cross-rate conversions between any two currencies.
* **Input Validation:** Prevents calculations on missing values and blocks duplicate currency selection.
* **Pure JavaScript:** Built with zero external dependencies or libraries.

---

## 🛠️ Built With

* **HTML5:** Semantic form controls and structure.
* **CSS3:** Clean layout and modern visual design.
* **JavaScript (ES6+):** Dynamic DOM manipulation and functional conversion logic.

---

## 📐 Conversion Logic

The application uses **EUR** as the anchor currency. Any conversion from `Currency A` to `Currency B` is calculated using the formula:

$$\text{Result} = \text{Amount} \times \frac{\text{Rate}_{\text{Currency B}}}{\text{Rate}_{\text{Currency A}}}$$

### Supported Exchange Rates (EUR Base)

| Currency | Code | Base Rate ($1\text{€}$) |
| :--- | :---: | :---: |
| **Euro** | EUR | `1.00` |
| **US Dollar** | USD | `1.08` |
| **British Pound** | GBP | `0.84` |
| **Japanese Yen** | JPY | `160.50` |
| **Chinese Yuan** | CNY | `7.70` |
| **Swiss Franc** | CHF | `0.94` |
| **Australian Dollar** | AUD | `1.62` |
| **Canadian Dollar** | CAD | `1.47` |
| **Hong Kong Dollar** | HKD | `8.45` |
| **New Zealand Dollar** | NZD | `1.76` |

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avtzo/Currency-Converter.git
