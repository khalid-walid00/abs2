module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mainColor:'#024160',
        secoundColor:'#11B5EA',
        secoundColor40:"rgba(17, 181, 234, 0.4)", 
        blueGreen:"#0088b5 ",
        thirdColor:"#EDEDED",
        overColor:"#DEDEDE",
        darkBlue:"#203908",
        BlueDrak:"#024160",
        Blueblack:"#024160",
        gray:"#777777",
        grayBlue:"#555555",
        grayWhite:"#F1F3F6",
        purple:"#1E2772", 
        whiteGray:"#C2C2C2",
        green:"#00B69B",
        yellowGray:"#F5F5F5",
      Grayblack:"#F5F6FA",
      blockColor:"#e5e7eb"
      },
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
      screens:{
        xs:"410px",
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl":"1400px",
      },
      fontFamily: {
        custom: ['SFArabic', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
