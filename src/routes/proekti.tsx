import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import apartamentKitchen from "@/assets/apartament-kitchen.jpg";
import apartament2 from "@/assets/apartament-2.jpg";
import apartament3 from "@/assets/apartament-3.jpg";
import apartament2Kitchen from "@/assets/apartament2-kitchen.jpg";
import apartament2_2 from "@/assets/apartament2-2.jpg";
import apartament2_3 from "@/assets/apartament2-3.jpg";
import sladkarnicaTea from "@/assets/sladkarnica-tea.jpg";
import sladkarnica2 from "@/assets/sladkarnica-2.jpg";
import sladkarnica3 from "@/assets/sladkarnica-3.jpg";
import heroMaiorkaDining from "@/assets/hero-maiorka-dining.jpg";
import maiorka1 from "@/assets/maiorka-1.jpg";
import maiorka3 from "@/assets/maiorka-3.jpg";

const TITLE = "Проекти — Джин Дизайн";
const DESC =
  "Реализирани проекти на Джин Дизайн: мебели по поръчка, интериорни врати и дървена дограма. Разгледайте галериите по обект.";

export const Route = createFileRoute("/proekti")({
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
  component: Proekti,
});

const categories = [
  { key: "all", label: "Всички" },
  { key: "mebeli", label: "Мебели" },
  { key: "turgovski", label: "Търговски обекти" },
  { key: "kashta", label: "Къщи" },
];

const projects = [
  {
    title: "Апартамент",
    place: "гр. София",
    cat: "mebeli",
    desc: "Цялостно обзавеждане на тристаен апартамент — кухня, дневна, гардероби и детайлни решения.",
    images: [apartamentKitchen, apartament2, apartament3],
  },
  {
    title: "Апартамент II",
    place: "гр. София",
    cat: "mebeli",
    desc: "Съвременна кухня и дневна зона в жилищен интериор със студени и топли дървесни акценти.",
    images: [apartament2Kitchen, apartament2_2, apartament2_3],
  },
  {
    title: "Сладкарница Теа",
    place: "гр. София",
    cat: "turgovski",
    desc: "Търговски интериор с цветни мебели, витрини и бар зона за сладкарница.",
    images: [sladkarnicaTea, sladkarnica2, sladkarnica3],
  },
  {
    title: "Къща Майорка",
    place: "Палма де Майорка",
    cat: "kashta",
    desc: "Пълно обзавеждане на къща на брега — кухня, трапезария, дневна и спални зони.",
    images: [heroMaiorkaDining, maiorka1, maiorka3],
  },
];

function Proekti() {
  const [activeCat, setActiveCat] = useState("all");
  const [lightbox, setLightbox] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  const filtered =
    activeCat === "all"
      ? projects
      : projects.filter((p) => p.cat === activeCat);

  const openBox = (projectIndex: number, imageIndex: number) => {
    setLightbox({ projectIndex, imageIndex });
  };

  const closeBox = () => setLightbox(null);

  const step = (d: number) => {
    if (!lightbox) return;
    const imgs = projects[lightbox.projectIndex]!.images;
    const next = (lightbox.imageIndex + d + imgs.length) % imgs.length;
    setLightbox({ ...lightbox, imageIndex: next });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-lg tracking-[0.2em] uppercase">
            Джин&nbsp;Дизайн
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="/#uslugi" className="transition-colors hover:text-foreground">
              Услуги
            </a>
            <a href="/#proces" className="transition-colors hover:text-foreground">
              Процес
            </a>
            <a href="/#za-nas" className="transition-colors hover:text-foreground">
              За нас
            </a>
            <a href="/proekti" className="transition-colors hover:text-foreground">
              Проекти
            </a>
            <a href="/#kontakti" className="transition-colors hover:text-foreground">
              Контакти
            </a>
          </nav>
          <a
            href="/#kontakti"
            className="rounded-sm bg-ink px-4 py-2 text-xs tracking-widest text-ink-foreground uppercase transition-opacity hover:opacity-85"
          >
            Запитване
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Портфолио</p>
        <h1 className="mt-3 text-3xl sm:text-4xl">Реализирани проекти</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Изберете обект, за да разгледате снимките му. Навигация със стрелките или Esc за затваряне.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCat(c.key)}
              className={`border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors ${
                activeCat === c.key
                  ? "border-ink bg-ink text-ink-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, projectIndex) => (
            <figure
              key={p.title}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
              onClick={() => openBox(projectIndex, 0)}
            >
              <img
                src={p.images[0]}
                alt={`${p.title}, ${p.place}`}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 bg-ink/70 px-2.5 py-1 text-[11px] text-ink-foreground tracking-wide">
                {p.images.length} снимки
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="font-display text-xl text-ink-foreground">{p.title}</p>
                <p className="text-xs tracking-widest text-ink-foreground/70 uppercase">{p.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,15,15,.96)] p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBox();
          }}
        >
          <button
            className="absolute right-5 top-5 h-12 w-12 border border-white/25 text-white hover:border-gold hover:text-gold"
            onClick={closeBox}
            aria-label="Затвори"
          >
            ×
          </button>
          <button
            className="absolute left-5 top-1/2 h-12 w-12 -translate-y-1/2 border border-white/25 text-white hover:border-gold hover:text-gold"
            onClick={() => step(-1)}
            aria-label="Назад"
          >
            ‹
          </button>
          <button
            className="absolute right-5 top-1/2 h-12 w-12 -translate-y-1/2 border border-white/25 text-white hover:border-gold hover:text-gold"
            onClick={() => step(1)}
            aria-label="Напред"
          >
            ›
          </button>
          <img
            src={projects[lightbox.projectIndex]!.images[lightbox.imageIndex]}
            alt={projects[lightbox.projectIndex]!.title}
            className="max-h-[76vh] max-w-[92vw] object-contain"
          />
          <div className="absolute bottom-6 left-0 right-0 text-center text-sm tracking-wide text-white/80">
            {projects[lightbox.projectIndex]!.title} · {projects[lightbox.projectIndex]!.place} —{" "}
            {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex]!.images.length}
          </div>
        </div>
      )}

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Джин Дизайн</span>
          <a href="/" className="hover:text-foreground">
            Начало
          </a>
        </div>
      </footer>
    </div>
  );
}
