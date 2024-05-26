/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },

      fontFamily: {
        SofiaProSemiBoldItalic: ["SofiaProSemiBoldItalic", "sans-serif"],
        SofiaProSemiBold: ["SofiaProSemiBold", "sans-serif"],
        SofiaProMediumItalic: ["SofiaProMediumItalic", "sans-serif"],
        SofiaProMedium: ["SofiaProMedium", "sans-serif"],
        SofiaProBlackItalic: ["SofiaProBlackItalic", "sans-serif"],
        SofiaProBlack: ["SofiaProBlack", "sans-serif"],
        SofiaProBoldItalic: ["SofiaProBoldItalic", "sans-serif"],
        SofiaProBold: ["SofiaProBold", "sans-serif"],
        SofiaProUltraLightItalic: ["SofiaProUltraLightItalic", "sans-serif"],
        SofiaProUltraLight: ["SofiaProUltraLight", "sans-serif"],
        SofiaProRegularItalic: ["SofiaProRegularItalic", "sans-serif"],
        SofiaProRegular: ["SofiaProRegular", "sans-serif"],
        SofiaProExtraLightItalic: ["SofiaProExtraLightItalic", "sans-serif"],
        SofiaProExtraLight: ["SofiaProExtraLight", "sans-serif"],
        SofiaProLightItalic: ["SofiaProLightItalic", "sans-serif"],
        SofiaProLight: ["SofiaProLight", "sans-serif"],
        AbolitionTestRegular:["AbolitionTestRegular"],
      },
    colors: {
        Quinary: "#707070",
        Quaternary: "#ADADAD",
        Tertiary: "#F8F7F4",
        Secondary: "#E0F869",
        Primary: "#072434",
      },
    },
  },
  plugins: [],
};
