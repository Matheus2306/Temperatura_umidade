import { useContext } from "react"; //importando useContext do react
import { ThemeContext } from "../context/ThemeContextInstance.js"; //importando ThemeContext do contexto

export function useTheme() {
  const context = useContext(ThemeContext); //usando useContext para acessar o contexto
  if (context === undefined) 
    throw new Error("useTheme precisa de um ThemeProvider"); //se o contexto for indefinido, lança um erro
  return context;
}
