import styles from "./styles/page.module.css";
import { prisma } from "@/libs/prisma";

async function getData() {
  const query = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return query;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function Message() {
  const data = await getData();
  return (
    <>
      <div className={styles.c}>
        <div className={styles.contenedor}>
          <h1>Sección de Comentarios</h1>
          {data.map((e) => (
            <div key={e.id} className={styles.comment}>
              <div className={styles.dp}>
                <p>{e.name}</p>
                <p>
                  {new Date(e.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
              <p className={styles.hp}>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Message;
