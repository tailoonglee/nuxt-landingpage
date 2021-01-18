/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
        pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'announce': [
          '14px',
          {
            letterSpacing: '0.1rem',
            lineHeight: '17px'
          }
        ],
        'p': [
          '14px',
          {
            lineHeight: '17px'
          }
        ],
        'menu': [
          '20px',
          {
            letterSpacing: '0.1rem',
            lineHeight: '24px'
          }
        ],
        'h1': [
          '60px',
          {
            lineHeight: '105px'
          }
        ],
        'h2': [
          '40px',
          {
            lineHeight: '70px'
          }
        ],
        'h2-m': [
          '20px',
          {
            lineHeight: '35px'
          }
        ],
        'h3': [
          '22px',
          {
            lineHeight: '26px'
          }
        ],
        'subheader': [
          '26px',
          {
            lineHeight: '31px'
          }
        ],
        'b1': [
          '16px',
          {
            lineHeight: '19px'
          }
        ],
        'b2': [
          '12px',
          {
            lineHeight: '14px'
          }
        ],
        'price': [
          '26px',
          {
            lineHeight: '46px'
          }
        ],
        'price-m': [
          '18px',
          {
            lineHeight: '32px'
          }
        ],
        'footer': [
          '22px',
          {
            lineHeight: '39px'
          }
        ],
        'menu-2': [
          '18px',
          {
            lineHeight: '40px'
          }
        ],
        'menu-3': [
          '18px',
          {
            lineHeight: '36px'
          }
        ],
        'menu-2-m': [
          '12px',
          {
            lineHeight: '30px'
          }
        ],
        'btn-m': [
          '12px',
          {
            letterSpacing: '0.1rem',
            lineHeight: '14px'
          }
        ],
      },
      colors: {
        green: '#10504F',
        grey: '#EFEFEF',
        grey1: '#F1F1EF'
      },
      height: {
        btn: '43px',
        'u36': '36px',
        'u46': '46px',
        'u41': '41px',
        'u47': '47px',
        'u54': '54px',
        'u58': '58px',
        'u64': '64px',
        'u138': '138px',
      },
      spacing: {
        'u4': '4px',
        'u5': '5px',
        'u7': '7px',
        'u8': '8px',
        'u10': '10px',
        'u11': '11px',
        'u15': '15px',
        'u17': '17px',
        'u20': '20px',
        'u22': '22px',
        'u25': '25px',
        'u30': '30px',
        'u35': '35px',
        'u40': '40px',
        'u42': '42px',
        'u45': '45px',
        'u50': '50px',
        'u55': '55px',
        'u60': '60px',
        'u70': '70px',
        'u80': '80px',
        'u90': '90px',
      },
      inset: {
        '2/4': '50%',
        'u20': '20px',
        'u45': '45px',
        'u50': '50px',
      },
      width: {
        btn: '129px',
        btn2: '140px',
        'u29': '29px',
        'u53': '53px',
        'u55': '55px',
        'u278': '278px',
        'u335': '335px',
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
        'u140': '140px',
        'u200': '200px',
        'u972': '972px',
      },
      minHeight: {
        'u200': '200px',
        'u227': '227px',
        'u300': '300px',
      },
      maxHeight: {
        'u300': '300px',
      },
      gap: {
        'u20': '20px',
        'u26': '26px'
      },
      backgroundOpacity: {
        '70': '0.7',
      },
      borderWidth: {
        '1/2': '0.5px'
      }
    }
  },
  variants: {
    padding: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover'],
    display: ['responsive', 'last', 'hover', 'focus', 'group-hover'],
    visibility: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
  },
};
