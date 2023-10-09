module.exports = {
  theme: {
    width: {
      w220: "18%", // Define a custom width value
      w82p: "82%",
      w100p: "100%",
      w26: "26px",
      w220: "220px",
      w118: "118px",
    },
    height: {
      h118: "118px",
      h15: "15px",
      h20: "20px",
      h26: "26px",
      h30: "30px",
      h48: "48px",
      h45: "45px",
    },

    margin: {
     
      mauto: "auto",
      m10: "10px",
      m4: "4px",
      m8: "8px",
      m20: "20px",
      mt46: "46px",
      mn5:"-5px",
    },
    borderRadius:{
      br50p:'50%',
      br4:'4px'
    },
    screens: {
      xs: "375px",
      "md-sm": "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      fs10: "10px",
      fs12: "12px",
      fs14: "14px",
      fs16: "16px",
      fs40: "40px",
      fs22: "22px",
    },
    colors: {
      dark_grey: "#404040",
      white: "#FFFFFF",
      grey: "#A2A3B7",
      grey_subtext:'#B2B2B2',
      grey_light: "#00000029",
      grey_bg: "#F1F2F7",
      grey_bg2:"#F8F8F8",
      dark_yellow: "#99CA3B",
      sky_blue: "#2680EB",
      text_black: "#404040",
    },
  },

  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    // Add any other files that contain your HTML/JSX templates.
  ],
};
