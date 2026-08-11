import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import doorsImg from "@/assets/doors.jpg";
import doors2 from "@/assets/doors-2.jpg";
import windowsImg from "@/assets/windows.jpg";
import windows2 from "@/assets/windows-2.jpg";
import apartmentImg from "@/assets/apartment.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

export type Category = "mebeli" | "vrati" | "dograma";

export type Shot = { src: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  cat: Category;
  desc: string;
  intro: string;
  facts: { label: string; value: string }[];
  shots: Shot[];
};

export const categoryLabels: Record<Category, string> = {
  mebeli: "Мебели по поръчка",
  vrati: "Интериорни врати",
  dograma: "Дървена дограма",
};

export const projects: Project[] = [
  {
    slug: "apartament-sofia",
    title: "Апартамент",
    place: "гр. София",
    year: "2024",
    cat: "mebeli",
    desc: "Цялостно обзавеждане с вградени гардероби и дневна зона от дъбов фурнир.",
    intro:
      "Тристаен апартамент в центъра на София, обзаведен изцяло по проект — от дневната стена до скритите гардероби в спалнята. Работихме с дъбов фурнир в топъл тон и матов лак.",
    facts: [
      { label: "Площ", value: "112 м²" },
      { label: "Материал", value: "Дъбов фурнир, масив" },
      { label: "Срок", value: "9 седмици" },
    ],
    shots: [
      { src: apartmentImg, caption: "Вградени гардероби в антрето" },
      { src: apartment2, caption: "Дневна зона с интегрирани рафтове" },
      { src: apartment3, caption: "Плъзгащи врати на гардероба в спалнята" },
      { src: heroKitchen, caption: "Кухненски блок с каменен плот" },
      { src: kitchen2, caption: "Детайл: месингови дръжки" },
    ],
  },
  {
    slug: "sladkarnitsa-tea",
    title: "Сладкарница Теа",
    place: "гр. София",
    year: "2023",
    cat: "mebeli",
    desc: "Кухненски блок и бар плот, съобразени с натоварен професионален режим.",
    intro:
      "Обзавеждане за търговски обект — устойчиви повърхности, лесна поддръжка и топъл дървесен характер, който посреща клиентите.",
    facts: [
      { label: "Площ", value: "68 м²" },
      { label: "Материал", value: "Дъб, камък" },
      { label: "Срок", value: "6 седмици" },
    ],
    shots: [
      { src: heroKitchen, caption: "Бар плот и работна зона" },
      { src: kitchen2, caption: "Детайл на фронта" },
      { src: apartment2, caption: "Витрини и рафтове" },
    ],
  },
  {
    slug: "kashta-maiorka",
    title: "Къща",
    place: "Палма де Майорка",
    year: "2023",
    cat: "dograma",
    desc: "Дървена дограма с троен стъклопакет и покритие, устойчиво на морски климат.",
    intro:
      "Дограма за къща на брега — профил от ламелиран бор, троен стъклопакет и специално покритие срещу солен въздух и UV.",
    facts: [
      { label: "Отвори", value: "24 бр." },
      { label: "Стъклопакет", value: "Троен, нискоемисионен" },
      { label: "Срок", value: "14 седмици" },
    ],
    shots: [
      { src: windowsImg, caption: "Панорамни прозорци към морето" },
      { src: windows2, caption: "Еркер с изглед към залива" },
      { src: doors2, caption: "Външна врата от масив" },
    ],
  },
  {
    slug: "gradska-kashta-plovdiv",
    title: "Градска къща",
    place: "гр. Пловдив",
    year: "2022",
    cat: "vrati",
    desc: "Интериорни врати от масив със скрити каси и матово покритие.",
    intro:
      "Комплект интериорни врати за реновирана градска къща — скрити каси, безрамкови кантове и хармония с оригиналния паркет.",
    facts: [
      { label: "Врати", value: "11 бр." },
      { label: "Материал", value: "Масив ясен" },
      { label: "Срок", value: "7 седмици" },
    ],
    shots: [
      { src: doorsImg, caption: "Врата със скрита каса" },
      { src: doors2, caption: "Коридор с еднакъв ритъм на вратите" },
      { src: apartment3, caption: "Плъзгащ панел към дрешника" },
    ],
  },
  {
    slug: "mansarden-etazh-sofia",
    title: "Мансарден етаж",
    place: "гр. София",
    year: "2024",
    cat: "dograma",
    desc: "Нестандартни прозорци по мярка за скосени тавански помещения.",
    intro:
      "Всеки отвор е различен — измерване на място, шаблони и производство по индивидуален чертеж.",
    facts: [
      { label: "Отвори", value: "9 бр., нестандартни" },
      { label: "Материал", value: "Ламелиран бор" },
      { label: "Срок", value: "8 седмици" },
    ],
    shots: [
      { src: windows2, caption: "Скосен прозорец под покрива" },
      { src: windowsImg, caption: "Светлина в дневната зона" },
    ],
  },
  {
    slug: "ofis-prostranstvo-sofia",
    title: "Офис пространство",
    place: "гр. София",
    year: "2025",
    cat: "mebeli",
    desc: "Работни станции, шкафове и акустични панели в единна дървесна линия.",
    intro:
      "Офис за 24 души — модулни работни станции, шкафове за архив и акустични дървени панели, които успокояват шума.",
    facts: [
      { label: "Площ", value: "240 м²" },
      { label: "Работни места", value: "24" },
      { label: "Срок", value: "11 седмици" },
    ],
    shots: [
      { src: apartment2, caption: "Обща работна зона" },
      { src: apartmentImg, caption: "Шкафове и архив" },
      { src: doors2, caption: "Коридор към залите" },
    ],
  },
  {
    slug: "kuhnya-dab-varna",
    title: "Кухня в дъб",
    place: "гр. Варна",
    year: "2024",
    cat: "mebeli",
    desc: "Кухня от масивен дъб с интегрирано осветление и каменен плот.",
    intro:
      "Кухня с остров, скрито LED осветление под шкафовете и плот от естествен камък.",
    facts: [
      { label: "Дължина", value: "5.4 м + остров" },
      { label: "Материал", value: "Масивен дъб" },
      { label: "Срок", value: "8 седмици" },
    ],
    shots: [
      { src: heroKitchen, caption: "Кухненски остров" },
      { src: kitchen2, caption: "Детайл на чекмеджетата" },
      { src: windowsImg, caption: "Естествена светлина в кухнята" },
    ],
  },
  {
    slug: "dvukrili-vrati-sofia",
    title: "Двукрили врати",
    place: "гр. София",
    year: "2023",
    cat: "vrati",
    desc: "Двукрили врати с остъкление, свързващи дневна и трапезария.",
    intro:
      "Двукрили врати с матово стъкло — отварят се широко за гости и се затварят за тишина.",
    facts: [
      { label: "Врати", value: "2 двукрили" },
      { label: "Материал", value: "Масив, матово стъкло" },
      { label: "Срок", value: "5 седмици" },
    ],
    shots: [
      { src: doorsImg, caption: "Двукрила врата към трапезарията" },
      { src: doors2, caption: "Детайл на дръжката" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
