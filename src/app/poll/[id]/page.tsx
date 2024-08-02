import { Block } from "@/components/layout/block";

export default function PollPage({ params }: { params: { id: string } }) {
  return (
    <section className="flex w-full gap-4 justify-between">
      <nav>
        <Block>Poll ID: {params.id}</Block>
      </nav>
      <main>
        <Block className="flex flex-col gap-2 p-6">
          <p>Esto es una pregunta?</p>
          <hr className="border-white/10" />

          <div>
            <p>Esto es una respuesta muy larga para que se vea bien</p>
          </div>
          <div>
            <p>Esto es una respuesta muy larga para que se vea bien</p>
          </div>
          <div>
            <p>Esto es una respuesta muy larga para que se vea bien</p>
          </div>
          <div>
            <p>Esto es una respuesta muy larga para que se vea bien</p>
          </div>
        </Block>
      </main>
      <aside>
        <Block>Graphics</Block>
      </aside>
    </section>
  );
}
