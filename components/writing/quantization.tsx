"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Catppuccin Mocha palette — matches the site (bg #1e1e2e, mauve #cba6f7)
 * ------------------------------------------------------------------ */
const C = {
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
  surface: "#313244",
  overlay: "#6c7086",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  mauve: "#cba6f7",
  teal: "#94e2d5",
  green: "#a6e3a1",
  yellow: "#f9e2af",
  peach: "#fab387",
  red: "#f38ba8",
  blue: "#89b4fa",
};

const card =
  "rounded-2xl border border-white/5 bg-[#181825] p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.8)]";
const mono = "font-jetbrain";

/* ================================================================== *
 * Act 1 — Spam knobs: weights are the AI
 * ================================================================== */
type Clue = { name: string; w: number; on: boolean };

export function SpamKnobs() {
  const [clues, setClues] = useState<Clue[]>([
    { name: 'contains "FREE"', w: 0.9, on: true },
    { name: "lots of !!!", w: 0.6, on: true },
    { name: "unknown sender", w: 0.3, on: false },
    { name: "mentions money $$$", w: 0.7, on: false },
  ]);

  const total = clues.reduce((s, c) => s + (c.on ? c.w : 0), 0);
  const pct = Math.min(100, (total / 1.6) * 100);
  const isSpam = total >= 1.0;

  return (
    <div className={`${card} my-8`}>
      <div className="font-grotesk font-semibold text-sm text-zinc-200 mb-3">
        📧 Spam detector: toggle the clues
      </div>

      <div className="divide-y divide-dashed divide-white/10">
        {clues.map((c, i) => (
          <div
            key={c.name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-3"
          >
            <span className={`${mono} text-[13px] text-zinc-300`}>{c.name}</span>
            <span
              className={`${mono} text-sm font-bold text-right min-w-[54px]`}
              style={{ color: C.teal }}
            >
              ×&nbsp;{c.w.toFixed(1)}
            </span>
            <button
              aria-label={`toggle ${c.name}`}
              onClick={() =>
                setClues((prev) =>
                  prev.map((p, j) => (j === i ? { ...p, on: !p.on } : p)),
                )
              }
              className="relative h-7 w-[50px] rounded-full transition-colors"
              style={{ background: c.on ? C.red : C.surface }}
            >
              <motion.span
                className="absolute top-[3px] h-[22px] w-[22px] rounded-full bg-white"
                animate={{ left: c.on ? 25 : 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="h-[30px] rounded-lg overflow-hidden border border-white/10 bg-[#11111b]">
          <motion.div
            className="h-full rounded-lg"
            style={{
              background: `linear-gradient(90deg, ${C.green}, ${C.yellow} 55%, ${C.red})`,
            }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <div className="flex justify-between items-baseline mt-2.5">
          <span className={`${mono} text-[13px] text-zinc-400`}>
            spam score:{" "}
            <b className="text-zinc-100">{total.toFixed(1)}</b>
          </span>
          <span
            className="font-grotesk font-bold text-[13px] px-3.5 py-1 rounded-full"
            style={{
              background: isSpam ? "rgba(243,139,168,0.15)" : "rgba(166,227,161,0.15)",
              color: isSpam ? C.red : C.green,
            }}
          >
            {isSpam ? "SPAM!" : "LOOKS FINE"}
          </span>
        </div>
      </div>

      <p className={`${mono} text-xs text-center mt-4 text-zinc-500`}>
        Those weights (0.9, 0.6, 0.3 and so on){" "}
        <b className="text-zinc-300">are</b> the AI. Change them and it behaves
        differently.
      </p>
    </div>
  );
}

/* ================================================================== *
 * Act 2 — A wall of numbers: storing them is expensive
 * ================================================================== */
export function NumbersWall() {
  // deterministic pseudo-random so it looks real but stays stable across renders
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const nums = Array.from({ length: 140 }, () => {
    const n = (rnd() * 2 - 1).toFixed(4);
    return Number(n) >= 0 ? ` ${n}` : n;
  });

  return (
    <div className={`${card} my-8`}>
      <div className="relative max-h-[150px] overflow-hidden rounded-xl border border-white/10 bg-[#11111b] p-4">
        <p className={`${mono} text-[13px] leading-[1.9] text-zinc-500`}>
          {nums.join(",  ")},&nbsp;…
        </p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#11111b] to-transparent" />
      </div>
      <p className={`${mono} text-xs text-center mt-3.5 text-zinc-500`}>
        …and this goes on for billions more. Long, precise numbers are expensive
        to store.
      </p>
    </div>
  );
}

/* ================================================================== *
 * Act 4 + 5 — Bits lab: the rounding tradeoff (shared bit-depth state)
 * ================================================================== */
const WEIGHTS = [0.6817, -0.2344, 0.9051, -0.118];

function quant(w: number, bits: number) {
  const levels = Math.pow(2, bits);
  const step = 2 / (levels - 1);
  return Math.max(-1, Math.min(1, Math.round((w + 1) / step) * step - 1));
}

type Cfg = {
  values: string;
  near: string;
  becomes: string;
  off: string;
  cap: string;
  size: number;
  sizeNote: string;
  acc: number;
  accNote: string;
  accColor: string;
};

const CFG: Record<number, Cfg> = {
  8: {
    values: "256 values",
    near: "nearest $1",
    becomes: "$15",
    off: "tiny",
    cap: "8-bit is like rounding to the nearest dollar. Loads of options, barely any loss.",
    size: 50,
    sizeNote: "Half the original size.",
    acc: 99,
    accNote: "Practically identical to the full model.",
    accColor: C.green,
  },
  4: {
    values: "16 values",
    near: "nearest $10",
    becomes: "$10",
    off: "a bit",
    cap: "4-bit is like rounding to the nearest ten. Fewer options, so you start drifting.",
    size: 25,
    sizeNote: "A quarter of the size. Big savings.",
    acc: 90,
    accNote: "A little less sharp, usually still good.",
    accColor: C.yellow,
  },
  2: {
    values: "4 values",
    near: "nearest $100",
    becomes: "$0",
    off: "way off",
    cap: "2-bit is like rounding to the nearest hundred. $14.97 collapses to $0. Brutal.",
    size: 12,
    sizeNote: "Tiny, but you've gone too far.",
    acc: 55,
    accNote: "Errors stop cancelling. Unreliable.",
    accColor: C.red,
  },
};

export function BitsLab() {
  const [bits, setBits] = useState(8);
  const cfg = CFG[bits];

  return (
    <div className="my-8">
      {/* selector */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-6">
        {[8, 4, 2].map((b) => {
          const on = b === bits;
          return (
            <button
              key={b}
              onClick={() => setBits(b)}
              className={`${mono} rounded-xl px-4 py-3 text-sm font-bold transition text-center border ${
                on ? "border-transparent text-[#11111b]" : "text-zinc-400 hover:border-[#f9e2af] border-white/10"
              }`}
              style={on ? { background: C.mauve, borderColor: C.mauve } : { background: C.mantle }}
            >
              {b}-bit
              <span className="block text-[11px] font-medium opacity-75 mt-0.5">
                {CFG[b].values}
              </span>
            </button>
          );
        })}
      </div>

      <div className={card}>
        {/* price analogy table */}
        <div className={`${mono} grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 text-center`}>
          {["round to nearest…", "$14.97 becomes", "how far off"].map((h) => (
            <div
              key={h}
              className="bg-[#1e1e2e] text-[11px] uppercase tracking-wider text-zinc-500 px-1 py-2.5"
            >
              {h}
            </div>
          ))}
          <div className="border-t border-white/10 px-1 py-3 font-bold text-sm text-zinc-300">
            {cfg.near}
          </div>
          <div
            className="border-t border-white/10 px-1 py-3 font-bold text-sm"
            style={{ background: "rgba(203,166,247,0.10)", color: C.mauve }}
          >
            {cfg.becomes}
          </div>
          <div className="border-t border-white/10 px-1 py-3 font-bold text-sm text-zinc-300">
            {cfg.off}
          </div>
        </div>
        <p className={`${mono} text-xs text-center mt-2 text-zinc-500`}>{cfg.cap}</p>

        {/* weight snapping examples */}
        <div className={`${mono} mt-5 rounded-xl border border-white/10 bg-[#11111b] px-4 py-3 text-[13px]`}>
          {WEIGHTS.map((w) => (
            <div key={w} className="flex justify-between py-0.5">
              <span className="text-zinc-500">
                real weight {w >= 0 ? " " : ""}
                {w.toFixed(4)}
              </span>
              <span className="text-zinc-300">
                → rounds to{" "}
                <span className="font-bold" style={{ color: C.mauve }}>
                  {quant(w, bits).toFixed(2)}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* metrics: size vs accuracy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Metric
            label="Model size"
            value={`${cfg.size}%`}
            valueColor={C.teal}
            barColor={`linear-gradient(90deg, ${C.teal}, #36b39d)`}
            width={cfg.size}
            note={cfg.sizeNote}
          />
          <Metric
            label="Accuracy kept"
            value={`${cfg.acc}%`}
            valueColor={cfg.accColor}
            barColor={`linear-gradient(90deg, ${C.red}, ${C.yellow}, ${C.green})`}
            width={cfg.acc}
            note={cfg.accNote}
          />
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  valueColor,
  barColor,
  width,
  note,
}: {
  label: string;
  value: string;
  valueColor: string;
  barColor: string;
  width: number;
  note: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#1e1e2e] p-[18px]">
      <div className={`${mono} text-[11px] uppercase tracking-wider text-zinc-500`}>
        {label}
      </div>
      <div
        className="font-grotesk font-extrabold text-3xl my-1.5"
        style={{ color: valueColor }}
      >
        {value}
      </div>
      <div className="h-3.5 rounded-full overflow-hidden border border-white/10 bg-[#11111b]">
        <motion.i
          className="block h-full rounded-full"
          style={{ background: barColor }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <p className={`${mono} text-xs mt-2.5 text-zinc-500`}>{note}</p>
    </div>
  );
}

/* ================================================================== *
 * Small flourish — the rounding flip used inline in Act 3
 * ================================================================== */
export function RoundingFlip() {
  const opts = ["0.7", "0.68", "0.7", "0.68"];
  const [k, setK] = useState(0);
  useTick(() => setK((v) => (v + 1) % opts.length), 1500);

  return (
    <div className={`${card} my-8`}>
      <div className={`${mono} flex flex-wrap items-center justify-center gap-4 font-bold`}>
        <span className="text-2xl md:text-4xl text-zinc-500">0.6817</span>
        <span className="text-2xl" style={{ color: C.yellow }}>
          → round →
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={opts[k]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-4xl md:text-5xl"
            style={{ color: C.mauve }}
          >
            {opts[k]}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className={`${mono} text-xs text-center mt-4 text-zinc-500`}>
        Smaller, faster, cheaper. A little less exact, but usually so little you
        never notice.
      </p>
    </div>
  );
}

// tiny interval hook
function useTick(fn: () => void, ms: number) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    const id = setInterval(() => ref.current(), ms);
    return () => clearInterval(id);
  }, [ms]);
}
