import { defineTheme } from 'pinceau'

export default defineTheme({
  docus: {
    header: {
      height: '72px',

      logo: {
        height: {
          initial: '1.75rem',
          sm: '2rem'
        }
      },

      title: {
        color: {
          static: {
            initial: '#ff99ff',
            dark: '#ff99ff'
          },

          hover: '#ff99ff'
        }
      }
    }
  }
})