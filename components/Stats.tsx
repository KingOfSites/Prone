import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="relative -mt-2 bg-white pb-4">
      <div className="container-p">
        <div className="grid grid-cols-2 gap-4 rounded-card border border-paper-200 bg-white p-6 shadow-card md:grid-cols-4 md:p-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} i={i} className="text-center md:text-left">
              <p className="font-display text-4xl font-extrabold tracking-tight text-ink-800 md:text-5xl">
                <span className="text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-1 text-sm text-graphite">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
