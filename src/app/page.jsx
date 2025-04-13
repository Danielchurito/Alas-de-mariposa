"use client";
import { useState } from "react";
import sty from "./styles/page.module.css";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, text: comment };
    console.log("datos enviados al servidor", data);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        console.log("Comentario enviado correctamente");
        router.push("/comments"); // Redirigir a la página de comentarios
      } else {
        const errorData = await res.json();
        console.error("Error al enviar el comentario", errorData);
      }
    } catch (error) {
      console.error("Error en la solicitud", error);
    }
  };

  return (
    <div className={sty.comments_container}>
      <h1>Dejanos tu cometario</h1>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="comment-input"
          required
        />

        <input
          type="text"
          id="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe algo..."
          className="comment-input"
          required
        />
        <button type="submit" className="comment-button">
          Agregar
        </button>
      </form>
      <div className="comments-list"></div>
    </div>
  );
}
