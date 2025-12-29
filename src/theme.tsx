import { createTheme } from '@mui/material/styles';

// Definindo o tema personalizado
const theme = createTheme({

 pipesol: {
    buttons: {
      primary: {
        background: "#216fed",
        backgroundHover: "#005ce3",
        color: "#fff",
        colorHover: "#fff",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
      secondary: {
        background: "#fff",
        backgroundHover: "#fff",
        color: "#216fed",
        colorHover: "#005ce3",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
      // opcionais:
      delete: {
        background: "#F44336",
        backgroundHover: "#D32F2F",
        color: "#fff",
        colorHover: "#fff",
        borderRadius: "9999px",
        padding: "8px 24px",
      },
    },
  },
  
});

export { theme };