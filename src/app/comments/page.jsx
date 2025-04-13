import styles from "./styles/page.module.css";

async function Message() {
  const items = await fetch("http://localhost:3000/api/tasks");
  const data = await items.json();
  return (
    <>
      <div className="contenedor">
        <h1>Seccion de Comentarios</h1>
        {data.map((e) => (
          <div key={e.id} className="comment">
            <div className="dp">
              <p>{e.name}</p>
              <p>
                {e.createdAt.slice(8, 10) +
                  e.createdAt.slice(4, 5) +
                  e.createdAt.slice(5, 7) +
                  e.createdAt.slice(7, 8) +
                  e.createdAt.slice(0, 4)}
              </p>
            </div>
            <p className="hp">{e.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Message;
