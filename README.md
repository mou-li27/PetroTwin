# PETROTWIN 🛢️ 
### AI-Enabled Well-to-Surface Digital Twin for Integrated CSS and SRP Optimization


**PETROTWIN** is a comprehensive, data-driven Digital Twin prototype designed to solve critical heavy crude extraction challenges at the Baghewala Field, Rajasthan. Developed for **Oil India Limited** as part of the **Smart India Hackathon (SIH)**.

---

## 🛑 The Problem

Extracting heavy crude oil (17–19° API) from the Jodhpur Sandstone reservoir is incredibly difficult due to high viscosity, high asphaltene content, and low reservoir temperatures (46–48°C). 

Currently, the industry relies on **Cyclic Steam Stimulation (CSS)** to heat and thin the oil, and **Sucker Rod Pumping (SRP)** to lift it to the surface. However, these systems are managed independently:
1. **Reservoir Cooling:** Weeks after steam injection, the reservoir cools, and crude viscosity increases again in the wellbore.
2. **Mechanical Stress:** Because the surface pump operates without real-time connection to changing reservoir thermodynamics, it pumps too aggressively for the thickening oil.
3. **The Result:** Rod floating, severe impact loading, snapped rod strings, high energy consumption, and halted production.

---

## 💡 Our Solution

PETROTWIN links the thermodynamic behavior of the underground reservoir directly to the mechanical operations of the surface pump. By bridging the gap between CSS and SRP, PETROTWIN acts as a predictive **Decision Support System** for field engineers.

### Key Features

- 📊 **Real-Time Monitoring:** Live tracking of Reservoir Temp, Crude Viscosity, Production Rates, Steam-Oil Ratio (SOR), and Energy Consumption.
- ⚙️ **CSS Optimizer:** Simulates and recommends optimal steam volumes and soak times to maximize recovery.
- 📉 **Reservoir & Production Prediction:** Dual-axis forecasting predicting exactly when oil viscosity will rise to dangerous levels.
- 🩺 **Equipment Health & SRP Monitoring:** Dynamometer chart simulations and predictive alerts for "Rod Floating" and "Impact Loading" before equipment fails.
- 🧠 **Integrated Optimizer:** The core engine that evaluates steam and pump parameters simultaneously, suggesting balanced, actionable strategies to boost production while protecting equipment.

---

## 🛠️ Technology Stack

This front-end prototype is built with modern, high-performance web technologies:

- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** Custom Vanilla CSS with a formal, professional Light Theme (optimized for industrial dashboards).
- **Charting:** [Recharts](https://recharts.org/) for responsive, dynamic data visualization.
- **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent UI iconography.

---

## 🚀 Getting Started (Local Development)

To run the PETROTWIN prototype locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mou-li27/PetroTwin.git
   cd PetroTwin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open `http://localhost:5173` in your web browser.

---

## 📖 How to Use the Prototype (For Judges & Reviewers)

The prototype is designed for an interactive walkthrough:
1. **Overview:** View the top-level KPIs and urgent AI suggestions.
2. **Well Digital Twin:** See the 2D schematic proving how temperature drops affect mechanical surface load.
3. **CSS Optimizer:** Adjust steam parameters and see simulated AI-recommended improvements.
4. **Integrated Optimizer:** Generate a unified strategy that balances future steam injection with immediate pump adjustments.
5. **Scenario Comparison:** Evaluate trade-offs between balanced energy-saving plans and aggressive, high-risk production plans.

*(Note: This is a front-end UI prototype. Data presented is illustrative "demo data" designed to showcase the logic and value proposition of the proposed ML architecture.)*

---

*Made with ❤️ for SIH*
