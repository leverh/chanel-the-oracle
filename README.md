# ※ Chanel's Mystical Predictions ※

A whimsical fortune-telling web app featuring Chanel, the most loving and wise oracle cat. Ask her your most pressing questions, and she'll consult the cosmic forces... and her treat jar.

## ✨ Features

- **Smart Context Detection**: Chanel provides relevant fortunes based on your question's keywords (love, career, health, travel, family, education)
- **Light/Dark Mode**: Themes with smooth transitions and glassmorphism effects
- **Mystical Cat Personality**: Over 35 fortunes that capture Chanel's loving yet sassy oracle persona (more will be added in due course)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, thinking indicators, and fortune reveals
- **Typography**: Clean Source Sans 3 font throughout for a fresh, whimsical feel

## 🎭 How It Works

1. **Ask Your Question**: Type any question into the input field
2. **Chanel Thinks**: Watch the mystical thinking animation while she consults the ancient feline prophecies
3. **Receive Your Fortune**: Get a contextually appropriate response delivered in Chanel's unique voice
4. **Ask Again**: Clear slate for your next burning question

## 🚀 Live Demo
[Chanel The Oracle](https://chanel-the-oracle.netlify.app/) live site link


## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **CSS3** - Custom styling with CSS variables for theming in a modular structure

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.css                    # Global styles and theme variables
├── data/
│   └── fortunes.js           # All fortune data and keyword detection
├── components/
│   ├── Header/
│   │   ├── Header.jsx        # App title and subtitle
│   │   └── Header.css        # Header styling
│   ├── FortuneCard/
│   │   ├── FortuneCard.jsx   # Main fortune display with Chanel's photo
│   │   └── FortuneCard.css   # Card styling and animations
│   ├── QuestionInput/
│   │   ├── QuestionInput.jsx # Input field and submit button
│   │   └── QuestionInput.css # Input styling
│   └── ThemeToggle/
│       ├── ThemeToggle.jsx   # Light/dark mode switcher
│       └── ThemeToggle.css   # Toggle button styling
└── assets/
    └── chanel-oracle.png     # Chanel's mystical portrait
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leverh/chanel-the-oracle
cd chanel-the-oracle
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Customization

### Adding New Fortunes
Edit `src/data/fortunes.js` to add new fortunes to any category:

```javascript
export const fortuneCategories = {
  love: [
    "Existing fortune...",
    "New fortune here..."
  ],
  // ... other categories
};
```

### Adding New Keywords
Extend the keyword detection in `src/data/fortunes.js`:

```javascript
export const keywords = {
  love: ['love', 'relationship', 'a-new-keyword'],
  // ... other categories
};
```

### Theming
Modify CSS variables in `src/App.css` to customize colors:

```css
.light-mode {
  --accent: #the-color;
  --text-primary: #the-color;
  /* ... other variables */
}
```

Following the updates on 17th March 2026, I'm not using the dark and light themes anymore, but just a dark cosmic one. You can,however, find the previous light and dark schemes on previous commits.

## 🐱 About Chanel

Chanel is a loving rescue cat who found her way to her forever home from a shelter over 8 years ago. Now 15 years young, she takes her oracle duties very seriously while enjoying adventures in her cat stroller to explore the world. She believes all of life's answers can be found through the wisdom of treat jars, sunny windowsills, and the ancient art of 3am zoomies.

While Chanel happens to be a Scottish Fold, it's important to know that this breed often faces significant health challenges due to genetic mutations affecting bones, cartilage, airways, and tear ducts. I encourage everyone to choose adoption over purchasing from breeders - there are countless amazing cats of all types waiting in shelters for their perfect match!

## 🎯 Key Features Explained

### Smart Context Detection
The app analyzes your question for keywords and delivers contextually appropriate responses:
- **Love questions** → Romantic advice with cat wisdom
- **Career questions** → Professional guidance (treat-dependent)
- **Health questions** → Wellness tips from a nap expert
- **General questions** → Universal cat philosophy

### Responsive Design
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Stacked layout with larger touch targets

### Performance Optimizations
- **Component-based architecture** for easy maintenance
- **CSS variables** for efficient theming

### UPDATE UPDATE UPDATE! (17th March 2026)
Chanel is now connected to the Gemini AI API. As long as it's free and available, Gemini will aid Chanel with her prediction. In case the API is not available, predictions will fall back to the data file. 

The new **catOracle.js** file is inside the data directory and contains the new connection and ai direction code and details. 

With the new AI connection, I decided to also redesign the page. Chanel and I hope you enjoy the new mysterious cosmic look!


## 📄 License

This project is licensed under the MIT License. Copy or share - I really don't care 🖖✌️

**Special Note on Images:** The cat images used in this application are photographs of my personal pet and are **NOT** included in the open-source license. All cat photographs are copyright protected and may not be used, reproduced, distributed, or modified without explicit written permission. While you are welcome to fork and modify the code for your own projects, please replace the cat images with your own.

## 🙏 Acknowledgments

- **Chanel** - The real MVP and mystical inspiration
- **Google Fonts** - For the Source Sans 3 typography
- **Google Gemini AI** - For assisting with predictions
- **React Team** - For the framework
- **Vite Team** - For the build tooling

## Contact

You can find my portfolio and contact details here at [PixelSummit.dev](https://pixelsummit.dev/)

---

*"The cosmic yarn ball has spoken... your future is bright, like the red dot I must catch."* - Chanel, Oracle Cat Extraordinaire

## 🐾 REMEMBER! 🐾

### 🏠 Adopt Don't Shop 🛍️

Every year, millions of wonderful animals wait in shelters for loving homes, while many others never get that chance. When you adopt, you're not just bringing home a pet – you're saving a life, creating space for another animal in need, and taking a stand against harmful breeding practices.

Shelter pets bring just as much love, loyalty, and companionship as any pet from a breeder or store. Each has their own unique personality and backstory, waiting for someone to give them a second chance. Many are already trained, vaccinated, and ready to become your perfect companion.

By choosing adoption, you'll experience the incomparable joy of watching a formerly homeless animal blossom in a loving environment – there's simply no feeling like the gratitude of a rescued pet. 🐱 🐶 🐰 💕

*Remember: When you adopt, you're not just changing an animal's life – they're changing yours too.*