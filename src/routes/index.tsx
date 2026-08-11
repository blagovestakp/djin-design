import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import heroMaiorkaDining from "@/assets/hero-maiorka-dining.jpg";
import apartamentKitchen from "@/assets/apartament-kitchen.jpg";
import apartament2Kitchen from "@/assets/apartament2-kitchen.jpg";
import sladkarnicaTea from "@/assets/sladkarnica-tea.jpg";
import doorsImg from "@/assets/doors.jpg";
import windowsImg from "@/assets/windows.jpg";
import logoWhite from "@/assets/logo-white.png";

const TITLE = "Джин Дизайн — мебели по поръчка, врати и дървена дограма";
const DESC =
  "Джин Дизайн изработва индивидуални мебели, интериорни врати и дървена дограма за дома и офиса. Проектиране, производство и монтаж в София.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#proces", label: "Процес" },
  { href: "#za-nas", label: "За нас" },
  { href: "#kontakti", label: "Контакти" },
];

const services = [
  {
    n: "01",
    title: "Мебели по поръчка",
    text: "Кухни, гардероби, библиотеки и офис обзавеждане — проектирани до милиметър за вашето пространство.",
    img: apartamentKitchen,
  },
  {
    n: "02",
    title: "Интериорни врати",
    text: "Врати по индивидуален проект — масив и фурнир, скрити каси, покрития по ваш избор.",
    img: doorsImg,
  },
  {
    n: "03",
    title: "Дървена дограма",
    text: "Топла, тиха и дълготрайна дограма, съвместима с всички видове стъклопакети и витражи.",
    img: windowsImg,
  },
];

const projects = [
  { title: "Апартамент", place: "гр. София", img: apartamentKitchen, span: "md:col-span-7" },
  { title: "Сладкарница Теа", place: "гр. София", img: sladkarnicaTea, span: "md:col-span-5" },
  { title: "Къща", place: "Палма де Майорка", img: heroMaiorkaDining, span: "md:col-span-5" },
  { title: "Апартамент II", place: "гр. София", img: apartament2Kitchen, span: "md:col-span-7" },
];

const steps = [
  { t: "Разговор и оглед", d: "Изслушваме идеята ви, измерваме на място и уточняваме бюджета." },
  { t: "Проект и визуализация", d: "Получавате чертежи, мостри на материали и ясна оферта." },
  { t: "Производство", d: "Изработка в собствен цех с контрол на всеки детайл." },
  { t: "Монтаж и гаранция", d: "Чист монтаж в договорения срок и последваща поддръжка." },
];

function Index() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-lg tracking-[0.2em] uppercase">
            Джин&nbsp;Дизайн
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="transition-colors hover:text-foreground">
                {i.label}
              </a>
            ))}
            <Link to="/proekti" className="transition-colors hover:text-foreground">
              Проекти
            </Link>
          </nav>
          <a
            href="#kontakti"
            className="rounded-sm bg-ink px-4 py-2 text-xs tracking-widest text-ink-foreground uppercase transition-opacity hover:opacity-85"
          >
            Запитване
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="flex min-h-[calc(100vh-72px)] flex-col md:flex-row">
            {/* Left Side: Visual Narrative */}
            <div className="relative w-full min-h-[420px] md:w-3/5 md:min-h-full">
              <img
                src={heroMaiorkaDining}
                alt="Къща в Майорка — трапезария с масивна дървена маса и панорамна гледка"
                width={1200}
                height={1600}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute top-16 left-8 z-10 md:top-24 md:left-12">
                <div className="flex h-16 w-16 items-center justify-center border border-white/30 p-2 backdrop-blur-md md:h-20 md:w-20 md:p-3">
                  <img
                    src={logoWhite}
                    alt="Джин Дизайн лого"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute bottom-10 left-8 z-10 hidden md:block md:bottom-12 md:left-12">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-gold" />
                  <p className="font-['Montserrat'] text-[10px] font-light tracking-[0.2em] uppercase text-white/80">
                    Майсторство без компромис
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Bold Typography & Action */}
            <div className="relative flex w-full flex-col justify-center bg-ink p-8 md:w-2/5 md:p-12 lg:p-20">
              <div className="pointer-events-none absolute top-8 right-8 select-none font-display text-8xl italic text-white/5 md:top-10 md:right-10 md:text-9xl">
                Art
              </div>

              <div className="relative z-10">
                <span className="mb-6 block font-['Montserrat'] text-xs font-semibold tracking-[0.5em] uppercase text-gold">
                  Мебели по поръчка
                </span>

                <h1 className="mb-8 font-display text-3xl leading-[1.05] text-white md:text-4xl lg:text-5xl">
                  Мебели, врати и дограма, <br />
                  изваяни в <i className="font-display italic text-gold">дърво</i>
                </h1>

                <p className="mb-10 max-w-sm font-['Montserrat'] text-base font-light leading-relaxed text-white/60">
                  От класически кухни до модерни интериорни акценти. Превръщаме вашите идеи в автентична реалност.
                </p>

                <div className="flex flex-col items-start gap-5">
                  <Link
                    to="/proekti"
                    className="group relative inline-flex items-center gap-5 bg-gold px-8 py-4 font-['Montserrat'] text-xs font-bold tracking-[0.2em] uppercase text-ink transition-all hover:bg-white hover:pl-10"
                  >
                    Разгледайте
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <a
                    href="#kontakti"
                    className="border-b border-white/10 pb-2 font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-white/50 transition-all hover:border-gold hover:text-gold"
                  >
                    Свържете се с нас
                  </a>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-8 right-8 flex items-center gap-5 md:bottom-12 md:right-12">
                <div className="flex gap-2">
                  <div className="h-[2px] w-10 bg-gold" />
                  <div className="h-[2px] w-6 bg-white/10" />
                  <div className="h-[2px] w-6 bg-white/10" />
                </div>
                <span className="font-['Montserrat'] text-[10px] text-white/30">01 / 03</span>
              </div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="uslugi" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Какво правим</p>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
            Три занаята под един покрив
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.n} className="group">
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-accent">{s.n}</span>
                  <h3 className="text-xl">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Проекти */}
        <section id="proekti" className="bg-secondary/60 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Избрани реализации</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Проекти</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-12">
              {projects.map((p, i) => (
                <figure
                  key={i}
                  className={`group relative overflow-hidden rounded-sm ${p.span}`}
                >
                  <img
                    src={p.img}
                    alt={`${p.title}, ${p.place}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                    <p className="font-display text-xl text-ink-foreground">{p.title}</p>
                    <p className="text-xs tracking-widest text-ink-foreground/70 uppercase">
                      {p.place}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/proekti"
                className="inline-flex rounded-sm border border-border px-6 py-3 text-sm tracking-wide transition-colors hover:border-accent"
              >
                Всички проекти
              </Link>
            </div>
          </div>
        </section>

        {/* Процес */}
        <section id="proces" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Как работим</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">От идея до монтаж</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-border pt-5">
                <span className="font-display text-3xl text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-3 text-lg">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* За нас */}
        <section id="za-nas" className="bg-ink py-24 text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="eyebrow text-ink-foreground/60">За нас</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Джин Дизайн — вашият партньор за персонализиран интериор
              </h2>
              <p className="mt-6 leading-relaxed text-ink-foreground/75">
                Екип от професионалисти, специализирани в изработката на индивидуални мебели,
                интериорни врати и дървена дограма — изцяло съобразени с вашите изисквания, стил и
                размери. Мисията ни е да превърнем визията за интериора ви в реалност чрез
                функционални и елегантни решения.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-8 self-center">
              {[
                ["100%", "по индивидуален проект"],
                ["Собствен цех", "контрол на качеството"],
                ["София", "и цялата страна"],
                ["Гаранция", "и последваща поддръжка"],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-ink-foreground/20 pl-5">
                  <dt className="font-display text-2xl">{k}</dt>
                  <dd className="mt-1 text-sm text-ink-foreground/60">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Контакти */}
        <section id="kontakti" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Контакти</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Разкажете ни за проекта си</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Опишете накратко какво ви трябва — кухня, гардероб, врати или дограма. Връщаме
                отговор с ориентировъчна оферта и следващи стъпки.
              </p>
              <div className="mt-8 space-y-1 text-sm text-muted-foreground">
                <p>гр. София, България</p>
                <p>Георги Панков · Христо Баръмски · Николай Зарев</p>
              </div>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                fd.append("_subject", "Ново запитване от djindesign.com");
                fd.append("_captcha", "false");
                setSending(true);
                try {
                  await fetch("https://formsubmit.co/ajax/blagovestakp04@abv.bg", {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: fd,
                  });
                  setSent(true);
                  form.reset();
                } finally {
                  setSending(false);
                }
              }}
              className="space-y-4 rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-muted-foreground">Име</span>
                  <input
                    required
                    name="Име"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-accent"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-muted-foreground">Имейл или телефон</span>
                  <input
                    required
                    name="Имейл или телефон"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-accent"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="text-muted-foreground">Тип проект</span>
                <select
                  name="Тип проект"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-accent"
                >
                  <option>Мебели по поръчка</option>
                  <option>Кухня</option>
                  <option>Интериорни врати</option>
                  <option>Дървена дограма</option>
                  <option>Цялостен интериор</option>
                </select>
              </label>
              <label className="block text-sm">
                <span className="text-muted-foreground">Съобщение</span>
                <textarea
                  rows={4}
                  name="Съобщение"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-accent"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-sm bg-ink py-3 text-sm tracking-widest text-ink-foreground uppercase transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                {sending ? "Изпращане…" : "Изпрати запитване"}
              </button>
              {sent && (
                <p className="text-sm text-accent-foreground">
                  Благодарим! Ще се свържем с вас възможно най-скоро.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display tracking-[0.2em] uppercase">Джин Дизайн</span>
          <span>© {new Date().getFullYear()} · Мебели по поръчка, врати и дограма</span>
        </div>
      </footer>
    </div>
  );
}
