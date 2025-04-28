import { ThemeProvider } from "../context/ThemeContext";

export default function Footer() {
  return (
    <ThemeProvider>
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
    </ThemeProvider>
  );
}