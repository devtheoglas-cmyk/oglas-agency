import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { PlateKind, Service } from "../../data/services";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { Pause, Play } from "./icons";

/*
 * Animated "proof plates": one looping SVG per discipline that shows the
 * service doing its job, in four equal phases synced to the caption strip.
 *
 * Every animated node carries a `data-a` hook (see styles/services.css).
 * All loops share one duration, so the plate and its captions stay in step.
 * The static, un-animated state of every node is the finished composition,
 * which is what reduced-motion visitors see.
 */

const LIME = "#e3ff51";
const INK = "#0c0c0c";
const PAPER = "#f4f2ee";
const BLOCK = "#222222";
const CORAL = "#ff6b4a";

const d = (seconds: number, extra?: Record<string, string>): CSSProperties =>
  ({ "--d": `${seconds}s`, ...extra }) as CSSProperties;

function CellLabel({ x, y, n, text, a }: { x: number; y: number; n: string; text: string; a: string }) {
  return (
    <text data-a={a} fill="#fff" fillOpacity={0.45} fontSize={9.5} fontWeight={600} letterSpacing={1.4} x={x} y={y}>
      <tspan fill={LIME} fillOpacity={1}>
        {n}
      </tspan>
      {"  "}
      {text.toUpperCase()}
    </text>
  );
}

/* ------------------------------------------------------------------ */
/* Brand Design: position → mark → colour & type → apply                */
/* ------------------------------------------------------------------ */

function BrandPlate() {
  const competitors: [number, number][] = [
    [110, 112],
    [130, 96],
    [98, 184],
    [138, 198],
    [198, 188],
    [226, 174],
  ];
  const swatches = [
    { fill: LIME, hex: "E3FF51" },
    { fill: "#ffffff", hex: "FFFFFF" },
    { fill: "#767676", hex: "767676" },
    { fill: "#1f1f1f", hex: "1F1F1F" },
  ];

  return (
    <>
      <defs>
        <symbol id="svc-brand-mark" viewBox="-60 -60 120 120">
          <path d="M43.23 -15.73A46 46 0 1 1 15.73 -43.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={16} />
          <circle cx={32.53} cy={-32.53} fill={LIME} r={10} />
        </symbol>
      </defs>

      {/* The board's crosshair doubles as the frame for four cells. */}
      <line data-a="draw-1" pathLength={1} stroke="#fff" strokeOpacity={0.12} x1={300} x2={300} y1={24} y2={456} />
      <line data-a="draw-1" pathLength={1} stroke="#fff" strokeOpacity={0.12} style={d(0.15)} x1={24} x2={576} y1={240} y2={240} />

      <CellLabel a="fade-1" n="01" text="Position" x={40} y={52} />
      <CellLabel a="fade-2" n="02" text="Mark" x={316} y={52} />
      <CellLabel a="fade-3" n="03" text="Colour & type" x={40} y={268} />
      <CellLabel a="fade-4" n="04" text="Apply" x={316} y={268} />

      {/* 01 — positioning map: find the space nobody owns */}
      <line data-a="draw-1" pathLength={1} stroke="#fff" strokeOpacity={0.3} style={d(0.25)} x1={60} x2={264} y1={150} y2={150} />
      <line data-a="draw-1" pathLength={1} stroke="#fff" strokeOpacity={0.3} style={d(0.3)} x1={162} x2={162} y1={76} y2={224} />
      <g data-a="fade-1" fill="#fff" fillOpacity={0.32} fontSize={7.5} fontWeight={600} letterSpacing={1} style={d(0.5)}>
        <text textAnchor="middle" x={162} y={70}>
          PREMIUM
        </text>
        <text textAnchor="middle" x={162} y={234}>
          EVERYDAY
        </text>
        <text x={60} y={143}>
          CLASSIC
        </text>
        <text textAnchor="end" x={264} y={143}>
          MODERN
        </text>
      </g>
      {competitors.map(([cx, cy], i) => (
        <circle cx={cx} cy={cy} data-a="pop-1" fill="#fff" fillOpacity={0.35} key={`${cx}-${cy}`} r={5} style={d(0.55 + i * 0.1)} />
      ))}
      <circle
        cx={222}
        cy={106}
        data-a="pop-1"
        fill="none"
        r={17}
        stroke={LIME}
        strokeDasharray="3 3"
        strokeOpacity={0.7}
        style={d(1.7)}
      />
      <circle cx={222} cy={106} data-a="seek" fill={LIME} r={8} />

      {/* 02 — the mark, constructed on a grid */}
      <g fill="none" stroke="#fff" strokeOpacity={0.16}>
        <circle cx={438} cy={148} data-a="draw-2" pathLength={1} r={64} />
        <circle cx={438} cy={148} data-a="draw-2" pathLength={1} r={36} style={d(0.1)} />
        <line data-a="draw-2" pathLength={1} style={d(0.2)} x1={358} x2={518} y1={148} y2={148} />
        <line data-a="draw-2" pathLength={1} style={d(0.25)} x1={438} x2={438} y1={72} y2={224} />
        <line data-a="draw-2" pathLength={1} style={d(0.3)} x1={393} x2={483} y1={103} y2={193} />
        <line data-a="draw-2" pathLength={1} style={d(0.35)} x1={483} x2={393} y1={103} y2={193} />
      </g>
      <path
        d="M481.23 132.27A46 46 0 1 1 453.73 104.77"
        data-a="draw-2"
        fill="none"
        pathLength={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={16}
        style={d(0.65)}
      />
      <circle cx={470.53} cy={115.47} data-a="pop-2" fill={LIME} r={10} style={d(1.5)} />

      {/* 03 — colour and type */}
      <text className="svc-display" data-a="rise-3" fill="#fff" fontSize={68} fontWeight={800} letterSpacing={-2} x={42} y={344}>
        Aa
      </text>
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.85} height={10} rx={2} style={d(0.25)} width={116} x={150} y={298} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.35} height={5} rx={2} style={d(0.35)} width={98} x={150} y={318} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.35} height={5} rx={2} style={d(0.42)} width={110} x={150} y={329} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.35} height={5} rx={2} style={d(0.49)} width={78} x={150} y={340} />
      {swatches.map((s, i) => (
        <g key={s.hex}>
          <rect
            data-a="pop-3"
            fill={s.fill}
            height={40}
            rx={3}
            stroke="#fff"
            strokeOpacity={i === 3 ? 0.25 : 0}
            style={d(0.7 + i * 0.12)}
            width={40}
            x={44 + i * 52}
            y={366}
          />
          <text data-a="fade-3" fill="#fff" fillOpacity={0.42} fontSize={7.5} fontWeight={600} letterSpacing={0.6} style={d(1.3)} x={44 + i * 52} y={422}>
            {s.hex}
          </text>
        </g>
      ))}

      {/* 04 — the identity applied */}
      <g data-a="rise-4">
        <g transform="rotate(-6 398 333)">
          <rect fill={PAPER} height={90} rx={6} width={152} x={322} y={288} />
          <use color={INK} height={28} href="#svc-brand-mark" width={28} x={336} y={300} />
          <rect fill={INK} fillOpacity={0.75} height={5} rx={2} width={70} x={336} y={344} />
          <rect fill={INK} fillOpacity={0.35} height={4} rx={2} width={52} x={336} y={355} />
          <rect fill={INK} fillOpacity={0.35} height={4} rx={2} width={38} x={420} y={355} />
        </g>
      </g>
      <g data-a="rise-4" style={d(0.25)}>
        <rect fill={INK} height={140} rx={12} stroke="#fff" strokeOpacity={0.3} width={68} x={492} y={270} />
        <rect fill="#fff" fillOpacity={0.2} height={4} rx={2} width={24} x={514} y={277} />
        <use color="#fff" height={40} href="#svc-brand-mark" width={40} x={506} y={298} />
        <rect fill="#fff" fillOpacity={0.6} height={4} rx={2} width={48} x={502} y={352} />
        <rect fill="#fff" fillOpacity={0.3} height={3} rx={1.5} width={36} x={508} y={362} />
        <rect fill={LIME} height={14} rx={7} width={48} x={502} y={382} />
      </g>
      <g data-a="rise-4" style={d(0.5)}>
        <rect fill="#fff" fillOpacity={0.06} height={40} rx={4} stroke="#fff" strokeOpacity={0.2} width={140} x={328} y={400} />
        <rect fill={LIME} height={16} rx={2} width={16} x={340} y={412} />
        <text fill="#fff" fillOpacity={0.8} fontSize={10} fontWeight={600} x={366} y={423.5}>
          Brand guidelines
        </text>
      </g>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Web Design: sitemap → wireframe → design → responsive                */
/* ------------------------------------------------------------------ */

function WebPlate() {
  const cardXs = [46, 172, 298];
  const children = [
    { cx: 118, label: "About" },
    { cx: 232, label: "Services" },
    { cx: 346, label: "Contact" },
  ];
  const breakpoints = [
    { x: 150, label: "MOBILE" },
    { x: 330, label: "TABLET" },
    { x: 540, label: "DESKTOP" },
  ];

  return (
    <g transform="translate(0 30)">
      {/* Browser chrome */}
      <g data-a="fade-1">
        <rect fill={INK} height={292} rx={10} stroke="#fff" strokeOpacity={0.18} width={404} x={30} y={36} />
        <line stroke="#fff" strokeOpacity={0.1} x1={30} x2={434} y1={62} y2={62} />
        {[46, 58, 70].map((cx) => (
          <circle cx={cx} cy={49} fill="#fff" fillOpacity={0.25} key={cx} r={3.5} />
        ))}
        <rect fill="#fff" fillOpacity={0.07} height={14} rx={7} width={200} x={96} y={42} />
        <text fill="#fff" fillOpacity={0.5} fontSize={8} x={106} y={52}>
          yourbrand.com
        </text>
      </g>

      {/* 01 — sitemap (only while it is being planned) */}
      <g data-a="only-1">
        <rect data-a="pop-1" fill={LIME} height={20} rx={4} style={d(0.2)} width={60} x={202} y={84} />
        <text data-a="fade-1" fill={INK} fontSize={8} fontWeight={700} style={d(0.3)} textAnchor="middle" x={232} y={97.5}>
          Home
        </text>
        {["M232 104V122H118V142", "M232 104V142", "M232 104V122H346V142"].map((p, i) => (
          <path d={p} data-a="draw-1" fill="none" key={p} pathLength={1} stroke="#fff" strokeOpacity={0.4} style={d(0.4 + i * 0.05)} />
        ))}
        {children.map((c, i) => (
          <g data-a="pop-1" key={c.label} style={d(0.7 + i * 0.12)}>
            <rect fill="#fff" fillOpacity={0.08} height={20} rx={4} stroke="#fff" strokeOpacity={0.35} width={64} x={c.cx - 32} y={142} />
            <text fill="#fff" fillOpacity={0.85} fontSize={8} fontWeight={600} textAnchor="middle" x={c.cx} y={155.5}>
              {c.label}
            </text>
          </g>
        ))}
        {children.map((c, i) => (
          <g key={`${c.label}-sub`}>
            <path
              d={`M${c.cx} 162V176H${c.cx - 26}V188M${c.cx} 176H${c.cx + 26}V188`}
              data-a="draw-1"
              fill="none"
              pathLength={1}
              stroke="#fff"
              strokeOpacity={0.25}
              style={d(1.1 + i * 0.1)}
            />
            <rect data-a="pop-1" fill="#fff" fillOpacity={0.06} height={14} rx={3} stroke="#fff" strokeOpacity={0.2} style={d(1.4 + i * 0.1)} width={44} x={c.cx - 48} y={188} />
            <rect data-a="pop-1" fill="#fff" fillOpacity={0.06} height={14} rx={3} stroke="#fff" strokeOpacity={0.2} style={d(1.45 + i * 0.1)} width={44} x={c.cx + 4} y={188} />
          </g>
        ))}
      </g>

      {/* 02 — wireframe on a 12-column grid */}
      <g data-a="only-2">
        {Array.from({ length: 12 }, (_, i) => (
          <rect fill={LIME} fillOpacity={0.06} height={238} key={i} width={24} x={46 + i * 31} y={72} />
        ))}
        <g fill="none" stroke="#fff" strokeDasharray="4 3" strokeOpacity={0.45}>
          <rect data-a="pop-2" height={16} style={d(0.15)} width={372} x={46} y={74} />
          <rect data-a="pop-2" height={34} style={d(0.3)} width={168} x={46} y={102} />
          <rect data-a="pop-2" height={16} style={d(0.4)} width={150} x={46} y={144} />
          <rect data-a="pop-2" height={18} rx={9} style={d(0.5)} width={66} x={46} y={170} />
          <g data-a="pop-2" style={d(0.6)}>
            <rect height={92} width={188} x={230} y={100} />
            <path d="M230 100 418 192M418 100 230 192" strokeDasharray="none" strokeOpacity={0.4} />
          </g>
          {cardXs.map((x, i) => (
            <g data-a="pop-2" key={x} style={d(0.8 + i * 0.12)}>
              <rect height={56} width={120} x={x} y={208} />
              <path d={`M${x} 208 ${x + 120} 264M${x + 120} 208 ${x} 264`} strokeDasharray="none" strokeOpacity={0.4} />
              <rect height={26} width={104} x={x} y={271} />
            </g>
          ))}
        </g>
      </g>

      {/* 03 — finished design */}
      <circle cx={54} cy={82} data-a="pop-3" fill={LIME} r={5} />
      {[318, 350, 382].map((x, i) => (
        <rect data-a="grow-3" fill="#fff" fillOpacity={0.4} height={4} key={x} rx={2} style={d(0.05 + i * 0.05)} width={26} x={x} y={80} />
      ))}
      <rect data-a="grow-3" fill="#fff" height={13} rx={2} style={d(0.15)} width={168} x={46} y={104} />
      <rect data-a="grow-3" fill="#fff" height={13} rx={2} style={d(0.22)} width={132} x={46} y={122} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.35} height={4} rx={2} style={d(0.3)} width={150} x={46} y={146} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.35} height={4} rx={2} style={d(0.34)} width={124} x={46} y={155} />
      <g data-a="pop-3" style={d(0.45)}>
        <rect fill={LIME} height={18} rx={9} width={66} x={46} y={170} />
        <text fill={INK} fontSize={7} fontWeight={700} textAnchor="middle" x={79} y={181.5}>
          Get started
        </text>
      </g>
      <g data-a="fade-3" style={d(0.35)}>
        <rect fill={BLOCK} height={92} rx={4} width={188} x={230} y={100} />
        <polygon fill="#fff" fillOpacity={0.1} points="236,192 290,140 326,170 352,150 412,192" />
      </g>
      <circle cx={390} cy={124} data-a="pop-3" fill={LIME} r={10} style={d(0.6)} />
      {cardXs.map((x, i) => (
        <g data-a="rise-3" key={x} style={d(0.7 + i * 0.12)}>
          <rect fill={BLOCK} height={56} rx={3} width={120} x={x} y={208} />
          <rect fill="#fff" fillOpacity={0.8} height={6} rx={2} width={80} x={x} y={272} />
          <rect fill="#fff" fillOpacity={0.3} height={4} rx={2} width={104} x={x} y={284} />
          <rect fill="#fff" fillOpacity={0.3} height={4} rx={2} width={70} x={x} y={293} />
        </g>
      ))}
      <circle cx={88} cy={180} data-a="click" fill="none" r={14} stroke={LIME} strokeWidth={2} />
      <g data-a="cursor">
        <path d="M0 0 0 16 4.5 12 7.5 18.5 10 17.5 7 11 12.5 11Z" fill="#fff" stroke={INK} strokeLinejoin="round" />
      </g>

      {/* 04 — the same page, designed for the phone */}
      <g data-a="slide-4">
        <rect fill={INK} height={224} rx={16} stroke="#fff" strokeOpacity={0.3} width={112} x={452} y={70} />
        <rect fill="#fff" fillOpacity={0.2} height={4} rx={2} width={32} x={492} y={78} />
        <circle cx={468} cy={96} fill={LIME} r={4} />
        <rect fill="#fff" fillOpacity={0.5} height={2} width={14} x={538} y={93} />
        <rect fill="#fff" fillOpacity={0.5} height={2} width={14} x={538} y={98} />
        <rect fill="#fff" height={9} rx={2} width={84} x={462} y={112} />
        <rect fill="#fff" height={9} rx={2} width={64} x={462} y={125} />
        <rect fill="#fff" fillOpacity={0.35} height={3} rx={1.5} width={88} x={462} y={142} />
        <rect fill="#fff" fillOpacity={0.35} height={3} rx={1.5} width={70} x={462} y={149} />
        <rect fill={LIME} height={14} rx={7} width={54} x={462} y={160} />
        <rect fill={BLOCK} height={56} rx={3} width={92} x={462} y={184} />
        <circle cx={538} cy={198} fill={LIME} r={6} />
        <rect fill="#fff" fillOpacity={0.8} height={5} rx={2} width={60} x={462} y={250} />
        <rect fill="#fff" fillOpacity={0.3} height={3} rx={1.5} width={86} x={462} y={260} />
        <rect fill="#fff" fillOpacity={0.3} height={3} rx={1.5} width={70} x={462} y={267} />
      </g>
      <line data-a="draw-4" pathLength={1} stroke="#fff" strokeOpacity={0.25} style={d(0.4)} x1={30} x2={566} y1={372} y2={372} />
      {breakpoints.map((b, i) => (
        <g data-a="pop-4" key={b.label} style={d(0.7 + i * 0.15)}>
          <rect fill={LIME} height={14} width={2} x={b.x - 1} y={365} />
          <text fill="#fff" fillOpacity={0.55} fontSize={8} fontWeight={600} letterSpacing={1} textAnchor="middle" x={b.x} y={394}>
            {b.label}
          </text>
        </g>
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Digital Marketing: plan → create → publish → measure                 */
/* ------------------------------------------------------------------ */

const HEART = "M8 14.5s-6.5-4-6.5-8.3A3.7 3.7 0 0 1 8 4a3.7 3.7 0 0 1 6.5 2.2C14.5 10.5 8 14.5 8 14.5Z";

function MarketingPlate() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  // [row, day, isVideo]
  const scheduled: [number, number, boolean][] = [
    [0, 0, false],
    [0, 2, true],
    [0, 4, false],
    [0, 5, true],
    [1, 1, false],
    [1, 3, true],
    [1, 4, false],
    [1, 6, false],
  ];
  const bars = [24, 32, 30, 44, 52, 64, 80];
  const hearts = [
    { hx: "-6px", delay: 0 },
    { hx: "14px", delay: 0.35 },
    { hx: "-16px", delay: 0.7 },
    { hx: "8px", delay: 1.05 },
    { hx: "22px", delay: 1.4 },
  ];

  return (
    <>
      {/* Phone */}
      <g data-a="fade-1">
        <rect fill={INK} height={410} rx={26} stroke="#fff" strokeOpacity={0.25} width={196} x={36} y={30} />
        <rect fill="#fff" fillOpacity={0.15} height={6} rx={3} width={48} x={110} y={40} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect fill="#fff" fillOpacity={0.2} height={10} key={i} rx={2} width={10} x={62 + i * 36} y={410} />
        ))}
      </g>

      {/* 02 — the post is designed */}
      <circle cx={66} cy={70} data-a="pop-2" fill={BLOCK} r={11} stroke={LIME} strokeWidth={2} />
      <rect data-a="grow-2" fill="#fff" fillOpacity={0.75} height={6} rx={2} style={d(0.1)} width={72} x={84} y={63} />
      <rect data-a="grow-2" fill="#fff" fillOpacity={0.3} height={4} rx={2} style={d(0.15)} width={48} x={84} y={74} />
      <rect data-a="lift-2" fill="#1e1e1e" height={168} rx={4} style={d(0.2)} width={168} x={50} y={92} />
      <circle cx={140} cy={164} data-a="pop-2" fill={LIME} r={46} style={d(0.55)} />
      <rect data-a="pop-2" fill="#fff" height={50} rx={9} style={d(0.7)} width={62} x={88} y={182} />
      <g data-a="fade-2" fill="none" stroke="#fff" strokeOpacity={0.85} strokeWidth={1.4} style={d(0.85)}>
        <path d={HEART} transform="translate(52 272)" />
        <path d="M80 276h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3v-3h-2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
        <path d="M104 277 118 282 104 288l2-5.5Z" />
        <path d="M204 275h10v13l-5-3.5-5 3.5Z" />
      </g>
      <rect data-a="grow-2" fill="#fff" fillOpacity={0.35} height={4} rx={2} style={d(1)} width={150} x={50} y={314} />
      <rect data-a="grow-2" fill="#fff" fillOpacity={0.35} height={4} rx={2} style={d(1.08)} width={118} x={50} y={323} />

      {/* 03 — published: likes, followers, enquiries */}
      <path d={HEART} data-a="fade-3" fill={LIME} style={d(0.2)} transform="translate(52 272)" />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.7} height={6} rx={2} style={d(0.5)} width={64} x={50} y={300} />
      <rect data-a="grow-3" fill="#fff" fillOpacity={0.2} height={4} rx={2} style={d(0.9)} width={86} x={50} y={340} />
      <g transform="translate(52 268)">
        {hearts.map((h) => (
          <g data-a="heart" key={h.hx} style={d(h.delay, { "--hx": h.hx })}>
            <path d={HEART} fill={LIME} />
          </g>
        ))}
      </g>

      {/* 01 — content calendar */}
      <g data-a="fade-1">
        <rect fill="#fff" fillOpacity={0.03} height={158} rx={10} stroke="#fff" strokeOpacity={0.12} width={308} x={256} y={30} />
        <text fill="#fff" fillOpacity={0.45} fontSize={8.5} fontWeight={600} letterSpacing={1.2} x={272} y={52}>
          CONTENT CALENDAR
        </text>
        {days.map((day, i) => (
          <text fill="#fff" fillOpacity={0.35} fontSize={8} fontWeight={600} key={`${day}-${i}`} textAnchor="middle" x={287 + i * 40} y={72}>
            {day}
          </text>
        ))}
        {[0, 1].map((row) =>
          days.map((day, i) => (
            <rect fill="#fff" fillOpacity={0.05} height={40} key={`${row}-${day}-${i}`} rx={4} width={34} x={270 + i * 40} y={80 + row * 48} />
          )),
        )}
      </g>
      {scheduled.map(([row, day, video], i) => (
        <rect
          data-a="pop-1"
          fill={video ? "#fff" : LIME}
          fillOpacity={video ? 0.7 : 1}
          height={10}
          key={`${row}-${day}`}
          rx={3}
          style={d(0.35 + i * 0.18)}
          width={26}
          x={274 + day * 40}
          y={104 + row * 48}
        />
      ))}

      {[
        { y: 206, w: 154, text: "New follower" },
        { y: 244, w: 186, text: "New enquiry received" },
      ].map((chip, i) => (
        <g data-a="slide-3" key={chip.text} style={d(0.7 + i * 0.6)}>
          <rect fill="#fff" fillOpacity={0.08} height={30} rx={15} stroke="#fff" strokeOpacity={0.15} width={chip.w} x={256} y={chip.y} />
          <circle cx={273} cy={chip.y + 15} fill={LIME} r={4} />
          <text fill="#fff" fillOpacity={0.85} fontSize={9.5} fontWeight={600} x={286} y={chip.y + 18.5}>
            {chip.text}
          </text>
        </g>
      ))}

      {/* 04 — results */}
      <g data-a="fade-4">
        <rect fill="#fff" fillOpacity={0.03} height={150} rx={10} stroke="#fff" strokeOpacity={0.12} width={308} x={256} y={290} />
        <text fill="#fff" fillOpacity={0.45} fontSize={8.5} fontWeight={600} letterSpacing={1.2} x={272} y={312}>
          RESULTS
        </text>
      </g>
      {["REACH", "LEADS"].map((label, i) => (
        <g data-a="pop-4" key={label} style={d(1.5 + i * 0.15)}>
          <polygon fill={LIME} points={`${462 + i * 54},312 ${467 + i * 54},304 ${472 + i * 54},312`} />
          <text fill="#fff" fillOpacity={0.6} fontSize={8} fontWeight={700} letterSpacing={1} x={477 + i * 54} y={312}>
            {label}
          </text>
        </g>
      ))}
      <line data-a="draw-4" pathLength={1} stroke="#fff" strokeOpacity={0.2} x1={272} x2={548} y1={424} y2={424} />
      {bars.map((h, i) => (
        <rect data-a="lift-4" fill="#fff" fillOpacity={0.1} height={h} key={h} style={d(0.2 + i * 0.08)} width={18} x={276 + i * 38} y={424 - h} />
      ))}
      <polyline
        data-a="draw-4"
        fill="none"
        pathLength={1}
        points="285,410 323,400 361,402 399,384 437,372 475,352 513,330"
        stroke={LIME}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        style={d(0.5)}
      />
      <circle cx={513} cy={330} data-a="pop-4" fill={LIME} r={4.5} style={d(1.4)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* UX/UI Design: research → flow → test → interface                     */
/* ------------------------------------------------------------------ */

function UxPlate() {
  const notes = [
    { x: 36, y: 134, r: -4, fill: LIME, ink: INK },
    { x: 114, y: 142, r: 3, fill: PAPER, ink: INK },
    { x: 192, y: 130, r: -2, fill: "#2a2a2a", ink: "#fff" },
    { x: 270, y: 144, r: 4, fill: PAPER, ink: INK },
  ];
  const screens = [
    { x: 34, label: "Home" },
    { x: 168, label: "Search" },
    { x: 302, label: "Product" },
    { x: 436, label: "Checkout" },
  ];

  return (
    <>
      {/* 01 — research: a persona and what they told us */}
      <circle cx={76} cy={74} data-a="pop-1" fill="#1e1e1e" r={28} stroke="#fff" strokeOpacity={0.3} />
      <g data-a="fade-1" fill="#fff" fillOpacity={0.55} style={d(0.15)}>
        <circle cx={76} cy={67} r={8} />
        <path d="M61 92c2-12 28-12 30 0Z" />
      </g>
      <rect data-a="grow-1" fill="#fff" fillOpacity={0.8} height={8} rx={2} style={d(0.25)} width={90} x={116} y={58} />
      <rect data-a="grow-1" fill="#fff" fillOpacity={0.35} height={5} rx={2} style={d(0.32)} width={64} x={116} y={73} />
      <rect data-a="pop-1" fill="none" height={13} rx={6.5} stroke="#fff" strokeOpacity={0.35} style={d(0.4)} width={46} x={116} y={86} />
      <rect data-a="pop-1" fill="none" height={13} rx={6.5} stroke="#fff" strokeOpacity={0.35} style={d(0.48)} width={56} x={166} y={86} />
      {notes.map((n, i) => (
        <g data-a="pop-1" key={n.x} style={d(0.65 + i * 0.18)}>
          <g transform={`rotate(${n.r} ${n.x + 33} ${n.y + 33})`}>
            <rect fill={n.fill} height={66} rx={3} width={66} x={n.x} y={n.y} />
            <rect fill={n.ink} fillOpacity={0.5} height={4} rx={2} width={42} x={n.x + 10} y={n.y + 16} />
            <rect fill={n.ink} fillOpacity={0.5} height={4} rx={2} width={46} x={n.x + 10} y={n.y + 26} />
            <rect fill={n.ink} fillOpacity={0.5} height={4} rx={2} width={30} x={n.x + 10} y={n.y + 36} />
          </g>
        </g>
      ))}

      {/* 02 — the journey, screen to screen */}
      {screens.map((s, i) => (
        <g data-a="pop-2" key={s.label} style={d(i * 0.15)}>
          <rect fill="#161616" height={48} rx={6} stroke="#fff" strokeOpacity={0.25} width={76} x={s.x} y={352} />
          <rect fill="#fff" fillOpacity={0.5} height={4} rx={2} width={30} x={s.x + 8} y={360} />
          <rect fill="#262626" height={22} rx={2} width={60} x={s.x + 8} y={370} />
        </g>
      ))}
      {screens.map((s, i) => (
        <text
          data-a="fade-2"
          fill="#fff"
          fillOpacity={0.6}
          fontSize={8.5}
          fontWeight={600}
          key={`${s.label}-label`}
          letterSpacing={0.6}
          style={d(0.3 + i * 0.15)}
          textAnchor="middle"
          x={s.x + 38}
          y={420}
        >
          {s.label.toUpperCase()}
        </text>
      ))}
      {[110, 244, 378].map((x, i) => (
        <g key={x}>
          <line data-a="draw-2" pathLength={1} stroke="#fff" strokeOpacity={0.4} style={d(0.6 + i * 0.15)} x1={x} x2={x + 56} y1={376} y2={376} />
          <polygon data-a="pop-2" fill="#fff" fillOpacity={0.5} points={`${x + 52},372 ${x + 58},376 ${x + 52},380`} style={d(0.75 + i * 0.15)} />
        </g>
      ))}

      {/* 03 — testing finds friction, the design removes it */}
      <g data-a="flag">
        <rect fill={PAPER} height={34} rx={17} width={180} x={250} y={282} />
        <polygon fill={PAPER} points="334,315 350,315 354,332" />
        <text fill={INK} fontSize={9.5} fontWeight={600} x={266} y={303}>
          &ldquo;I can&rsquo;t find delivery info&rdquo;
        </text>
      </g>
      <g data-a="flag">
        <circle cx={372} cy={354} fill={CORAL} r={10} />
        <rect fill="#fff" height={8} rx={1} width={2.4} x={370.8} y={347.5} />
        <circle cx={372} cy={359.5} fill="#fff" r={1.4} />
      </g>
      <g data-a="fixed">
        <circle cx={372} cy={354} fill={LIME} r={10} />
        <path d="m367.5 354.5 3 3 6-6" fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </g>
      <g data-a="user">
        <circle cx={72} cy={376} fill={LIME} fillOpacity={0.25} r={12} />
        <circle cx={72} cy={376} fill={LIME} r={6} />
      </g>

      {/* 04 — the finished interface, with the fix built in */}
      <g data-a="rise-4">
        <rect fill={INK} height={300} rx={20} stroke="#fff" strokeOpacity={0.3} width={156} x={410} y={24} />
        <rect fill="#fff" fillOpacity={0.15} height={5} rx={2.5} width={44} x={466} y={32} />
        <rect fill="#1e1e1e" height={112} rx={8} width={132} x={422} y={50} />
      </g>
      <circle cx={494} cy={102} data-a="pop-4" fill={LIME} r={30} style={d(0.3)} />
      <rect data-a="pop-4" fill="#fff" height={34} rx={6} style={d(0.42)} width={42} x={452} y={112} />
      <rect data-a="grow-4" fill="#fff" fillOpacity={0.9} height={9} rx={2} style={d(0.5)} width={96} x={422} y={176} />
      <rect data-a="grow-4" fill={LIME} height={7} rx={2} style={d(0.58)} width={44} x={422} y={192} />
      <g data-a="fade-4" fill="#fff" fillOpacity={0.5} style={d(0.65)}>
        {[0, 1, 2, 3, 4].map((i) => (
          <circle cx={426 + i * 10} cy={212} key={i} r={3} />
        ))}
      </g>
      {[0, 1, 2].map((i) => (
        <rect
          data-a="pop-4"
          fill={i === 1 ? "#fff" : "none"}
          height={18}
          key={i}
          rx={4}
          stroke="#fff"
          strokeOpacity={0.35}
          style={d(0.75 + i * 0.08)}
          width={28}
          x={422 + i * 34}
          y={226}
        />
      ))}
      <g data-a="rise-4" style={d(1)}>
        <circle cx={426} cy={260} fill={LIME} r={3} />
        <text fill="#fff" fillOpacity={0.8} fontSize={8.5} fontWeight={600} x={434} y={263}>
          Delivery &amp; returns
        </text>
      </g>
      <g data-a="rise-4" style={d(1.15)}>
        <rect fill={LIME} height={28} rx={14} width={132} x={422} y={280} />
        <text fill={INK} fontSize={9.5} fontWeight={700} textAnchor="middle" x={488} y={297.5}>
          Add to cart
        </text>
      </g>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Web Development: code → connect → test → launch                      */
/* ------------------------------------------------------------------ */

type Token = [x: number, w: number, tone: "k" | "t" | "s" | "c"];

const TOKEN_FILL: Record<Token[2], { fill: string; opacity: number }> = {
  k: { fill: LIME, opacity: 1 },
  t: { fill: "#fff", opacity: 0.8 },
  s: { fill: "#bdbdbd", opacity: 0.55 },
  c: { fill: "#fff", opacity: 0.28 },
};

function DevPlate() {
  const lines: Token[][] = [
    [
      [0, 36, "k"],
      [42, 64, "t"],
      [110, 40, "s"],
    ],
    [
      [0, 28, "k"],
      [34, 90, "t"],
    ],
    [
      [16, 40, "c"],
      [60, 70, "t"],
    ],
    [
      [16, 24, "k"],
      [46, 52, "t"],
      [104, 36, "s"],
    ],
    [
      [32, 60, "t"],
      [98, 44, "s"],
      [148, 30, "c"],
    ],
    [
      [32, 40, "k"],
      [78, 90, "t"],
    ],
    [
      [16, 26, "k"],
      [48, 60, "s"],
    ],
    [[0, 18, "t"]],
    [
      [0, 40, "k"],
      [46, 70, "t"],
      [122, 28, "s"],
    ],
  ];
  const services = [
    { y: 44, label: "CMS" },
    { y: 104, label: "Analytics" },
    { y: 164, label: "Forms & CRM" },
  ];
  const checks = ["Responsive", "Accessible", "Fast-loading", "Search-ready"];

  return (
    <>
      {/* 01 — the editor, written line by line */}
      <g data-a="fade-1">
        <rect fill={INK} height={232} rx={10} stroke="#fff" strokeOpacity={0.15} width={340} x={28} y={28} />
        {[44, 56, 68].map((cx) => (
          <circle cx={cx} cy={40} fill="#fff" fillOpacity={0.25} key={cx} r={3} />
        ))}
        <rect fill="#fff" fillOpacity={0.06} height={20} rx={4} width={74} x={88} y={31} />
        <text className="svc-mono" fill="#fff" fillOpacity={0.6} fontSize={8.5} x={98} y={44.5}>
          home.tsx
        </text>
        <line stroke="#fff" strokeOpacity={0.08} x1={28} x2={368} y1={52} y2={52} />
      </g>
      {lines.map((tokens, i) => {
        const y = 70 + i * 20;
        return (
          <g key={y}>
            <text className="svc-mono" data-a="fade-1" fill="#fff" fillOpacity={0.25} fontSize={8} style={d(0.2 + i * 0.2)} textAnchor="end" x={52} y={y + 3}>
              {i + 1}
            </text>
            <g data-a="grow-1" style={d(0.25 + i * 0.2)}>
              {tokens.map(([x, w, tone]) => (
                <rect
                  fill={TOKEN_FILL[tone].fill}
                  fillOpacity={TOKEN_FILL[tone].opacity}
                  height={6}
                  key={x}
                  rx={3}
                  width={w}
                  x={64 + x}
                  y={y - 3}
                />
              ))}
            </g>
          </g>
        );
      })}

      {/* 02 — connected to the tools the business runs on */}
      {services.map((s, i) => (
        <g key={s.label}>
          <line data-a="draw-2" pathLength={1} stroke="#fff" strokeOpacity={0.3} style={d(i * 0.2)} x1={368} x2={420} y1={s.y + 20} y2={s.y + 20} />
          <g data-a="pop-2" style={d(0.1 + i * 0.2)}>
            <rect fill="#161616" height={40} rx={8} stroke="#fff" strokeOpacity={0.2} width={150} x={420} y={s.y} />
            <rect fill={i === 0 ? LIME : "#fff"} fillOpacity={i === 0 ? 1 : 0.7} height={16} rx={4} width={16} x={432} y={s.y + 12} />
            <text fill="#fff" fillOpacity={0.85} fontSize={9.5} fontWeight={600} x={458} y={s.y + 23.5}>
              {s.label}
            </text>
          </g>
          {[0, 0.9].map((delay) => (
            <circle cx={420} cy={s.y + 20} data-a="packet" fill={LIME} key={delay} r={3.5} style={d(0.6 + i * 0.25 + delay)} />
          ))}
        </g>
      ))}

      {/* 03 — tested on every screen */}
      <g data-a="rise-3">
        <rect fill="#111" height={84} rx={6} stroke="#fff" strokeOpacity={0.35} width={132} x={36} y={334} />
        <rect fill="#fff" fillOpacity={0.4} height={5} rx={2} width={50} x={46} y={344} />
        <rect fill="#262626" height={30} rx={2} width={112} x={46} y={356} />
        <rect fill="#fff" fillOpacity={0.3} height={10} width={4} x={100} y={418} />
        <rect fill="#fff" fillOpacity={0.3} height={4} rx={2} width={40} x={82} y={428} />
      </g>
      <g data-a="rise-3" style={d(0.2)}>
        <rect fill="#111" height={108} rx={9} stroke="#fff" strokeOpacity={0.35} width={80} x={196} y={326} />
        <rect fill="#fff" fillOpacity={0.4} height={4} rx={2} width={36} x={206} y={338} />
        <rect fill="#262626" height={26} rx={2} width={60} x={206} y={348} />
        <rect fill="#262626" height={26} rx={2} width={60} x={206} y={380} />
      </g>
      <g data-a="rise-3" style={d(0.4)}>
        <rect fill="#111" height={92} rx={9} stroke="#fff" strokeOpacity={0.35} width={48} x={302} y={342} />
        <rect fill="#fff" fillOpacity={0.4} height={4} rx={2} width={22} x={309} y={354} />
        <rect fill="#262626" height={22} rx={2} width={34} x={309} y={364} />
        <rect fill="#262626" height={22} rx={2} width={34} x={309} y={392} />
      </g>
      {(
        [
          [164, 336],
          [272, 328],
          [346, 344],
        ] as const
      ).map(([cx, cy], i) => (
        <g data-a="pop-3" key={cx} style={d(0.9 + i * 0.2)}>
          <circle cx={cx} cy={cy} fill={LIME} r={9} />
          <path d={`m${cx - 4} ${cy + 0.5} 2.8 2.8 5.4-5.6`} fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
        </g>
      ))}
      {checks.map((label, i) => {
        const y = 344 + i * 26;
        return (
          <g key={label}>
            <rect data-a="fade-3" fill="none" height={14} rx={3} stroke="#fff" strokeOpacity={0.35} style={d(0.1 + i * 0.25)} width={14} x={404} y={y - 9} />
            <path
              d={`M407 ${y - 2}l3.5 3.5 6.5-7`}
              data-a="draw-3"
              fill="none"
              pathLength={1}
              stroke={LIME}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              style={d(0.5 + i * 0.25)}
            />
            <text data-a="fade-3" fill="#fff" fillOpacity={0.8} fontSize={9.5} fontWeight={600} style={d(0.15 + i * 0.25)} x={426} y={y + 2.5}>
              {label}
            </text>
          </g>
        );
      })}

      {/* 04 — deployed and live */}
      <g data-a="fade-4">
        <text fill="#fff" fillOpacity={0.45} fontSize={8.5} fontWeight={600} letterSpacing={1.2} x={28} y={290}>
          DEPLOY
        </text>
        <rect fill="#fff" fillOpacity={0.1} height={6} rx={3} width={544} x={28} y={298} />
      </g>
      <rect data-a="progress" fill={LIME} height={6} rx={3} width={544} x={28} y={298} />
      <g data-a="pop-4" style={d(1.9)}>
        <text fill="#fff" fillOpacity={0.6} fontSize={8.5} x={426} y={284}>
          yourbrand.com
        </text>
        <rect fill={LIME} fillOpacity={0.12} height={20} rx={10} stroke={LIME} strokeOpacity={0.6} width={64} x={506} y={270} />
        <circle cx={519} cy={280} fill={LIME} r={3.5} />
        <text fill={LIME} fontSize={9} fontWeight={700} x={528} y={283.5}>
          Live
        </text>
      </g>
    </>
  );
}

const PLATES: Record<PlateKind, () => ReactNode> = {
  brand: BrandPlate,
  web: WebPlate,
  marketing: MarketingPlate,
  ux: UxPlate,
  dev: DevPlate,
};

type PlateState = "idle" | "playing" | "paused" | "static";

export function ServicePlate({ service }: { service: Service }) {
  const frame = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const Plate = PLATES[service.plate.kind];

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const state: PlateState = reducedMotion ? "static" : userPaused ? "paused" : inView ? "playing" : "idle";

  return (
    <figure className="svc-plate m-0 border border-white/10 bg-ink text-white" data-state={state} ref={frame}>
      <svg
        aria-label={service.plate.label}
        className="block h-auto w-full"
        role="img"
        viewBox="0 0 600 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern height={20} id={`svc-dots-${service.plate.kind}`} patternUnits="userSpaceOnUse" width={20}>
            <circle cx={1} cy={1} fill="#fff" fillOpacity={0.07} r={1} />
          </pattern>
        </defs>
        <rect fill={`url(#svc-dots-${service.plate.kind})`} height={480} width={600} />
        <Plate />
      </svg>

      <figcaption className="flex border-t border-white/10">
        <div className="grid flex-1 grid-cols-4">
          {service.plate.phases.map((phase, i) => (
            <div className="flex flex-col gap-3 px-3 pt-4 pb-4 sm:px-4 lg:pb-5" key={phase}>
              <span aria-hidden="true" className="relative block h-0.5 overflow-hidden bg-white/12">
                <span className="absolute inset-0 bg-lime" data-a={`bar-${i + 1}`} />
              </span>
              <span
                className="font-body text-xs leading-tight font-semibold tracking-[0.1em] uppercase"
                data-a={`tab-${i + 1}`}
              >
                <span className="text-lime">0{i + 1}</span> {phase}
              </span>
            </div>
          ))}
        </div>
        {!reducedMotion && (
          <div className="flex items-center border-l border-white/10 px-3 sm:px-4">
            <button
              aria-label={userPaused ? `Play the ${service.title} animation` : `Pause the ${service.title} animation`}
              aria-pressed={userPaused}
              className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-lime hover:text-lime"
              onClick={() => setUserPaused((paused) => !paused)}
              type="button"
            >
              {userPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
