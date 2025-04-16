import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./global.css";

export const metadata = {
  title: "Alas de Mariposa",
  description:
    " Empoderar a las mujeres en estado de vulnerabilidad para que lideren el cambio hacia comunidades sostenibles y resilientes, promoviendo la igualdad de género, la justicia social y la protección del medio ambiente, y mejorando su calidad de vida y la de sus familias.",
  icons: "/media/AlasDeMariposaF.png",
};

function Layout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
