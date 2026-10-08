import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function FlexboxGrid() {
  /*
    React Basic Concept:
    Array of Objects + map()

    We use an array of objects to describe
    the main Flexbox and Grid concepts.
  */

  const concepts = [
    {
      number: "01",
      title: "Flexbox",
      description: "Arranges items in a row or column.",
      example: "flex",
    },
    {
      number: "02",
      title: "Flex Direction",
      description: "Controls the direction of flex items.",
      example: "flex-row / flex-col",
    },
    {
      number: "03",
      title: "Flex Wrap",
      description: "Controls whether items move to a new line.",
      example: "flex-wrap",
    },
    {
      number: "04",
      title: "Justify Content",
      description: "Controls items on the main axis.",
      example: "justify-center",
    },
    {
      number: "05",
      title: "Align Items",
      description: "Controls items on the cross axis.",
      example: "items-center",
    },
    {
      number: "06",
      title: "Grid",
      description: "Creates layouts using rows and columns.",
      example: "grid",
    },
    {
      number: "07",
      title: "Grid Columns",
      description: "Controls the number of columns.",
      example: "grid-cols-3",
    },
    {
      number: "08",
      title: "Grid Rows",
      description: "Controls the number of rows.",
      example: "grid-rows-2",
    },
    {
      number: "09",
      title: "Gap",
      description: "Adds space between items.",
      example: "gap-4",
    },
    {
      number: "10",
      title: "Span",
      description: "Makes an item occupy multiple columns or rows.",
      example: "col-span-2",
    },
  ];

  /*
    --------------------------------
    FLEXBOX STATE
    --------------------------------
  */

  const [direction, setDirection] = useState("flex-row");

  const [wrap, setWrap] = useState("flex-nowrap");

  const [gap, setGap] = useState("gap-4");

  const [justify, setJustify] = useState("justify-center");

  const [align, setAlign] = useState("items-center");

  /*
    --------------------------------
    GRID STATE
    --------------------------------
  */

  const [gridColumns, setGridColumns] = useState("grid-cols-3");

  const [gridRows, setGridRows] = useState("grid-rows-2");

  const [gridGap, setGridGap] = useState("gap-4");

  const [span, setSpan] = useState("col-span-1");

  const [placeItems, setPlaceItems] = useState("place-items-center");

  /*
    --------------------------------
    RESET FUNCTION
    --------------------------------
  */

  const resetPlayground = () => {
    setDirection("flex-row");
    setWrap("flex-nowrap");
    setGap("gap-4");
    setJustify("justify-center");
    setAlign("items-center");

    setGridColumns("grid-cols-3");
    setGridRows("grid-rows-2");
    setGridGap("gap-4");
    setSpan("col-span-1");
    setPlaceItems("place-items-center");
  };

  /*
    --------------------------------
    FLEXBOX CLASS STRING
    --------------------------------
  */

  const flexClasses = `flex ${direction} ${wrap} ${gap} ${justify} ${align}`;

  /*
    --------------------------------
    GRID CLASS STRING
    --------------------------------
  */

  const gridClasses = `grid ${gridColumns} ${gridRows} ${gridGap} ${placeItems}`;

  return (
    <Section
      number="08"
      label="Flexbox & Grid"
      title="How Do Flexbox and Grid Build Layouts?"
    >
      <div className="max-w-5xl space-y-8">

        {/* =========================================
            INTRODUCTION
        ========================================= */}

        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Tailwind gives us utility classes to build
            powerful layouts without writing custom CSS.
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            Flexbox is mainly for arranging items in a{" "}
            <span className="font-bold text-cyan-300">
              row or column
            </span>
            . Grid is mainly for creating{" "}
            <span className="font-bold text-cyan-300">
              rows and columns
            </span>
            .
          </p>
        </div>

        {/* =========================================
            MAIN CONCEPTS
        ========================================= */}

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-300">
            Main Concepts
          </p>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {concepts.map((concept) => (
              <div
                key={concept.number}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="text-xs font-black text-cyan-400">
                  {concept.number}
                </span>

                <h3 className="mt-2 text-base font-black text-white">
                  {concept.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">
                  {concept.description}
                </p>

                <div className="mt-4 rounded-lg bg-slate-950 p-3">
                  <code className="font-mono text-xs text-cyan-300">
                    {concept.example}
                  </code>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* =========================================
            FLEXBOX PLAYGROUND
        ========================================= */}

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Interactive Playground 01
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Explore Flexbox
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Change the options below and see exactly how each
              Flexbox utility class changes the layout.
            </p>
          </div>

          {/* FLEX CONTROLS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {/* Direction */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Direction
              </label>

              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="flex-row">flex-row</option>
                <option value="flex-row-reverse">
                  flex-row-reverse
                </option>
                <option value="flex-col">flex-col</option>
                <option value="flex-col-reverse">
                  flex-col-reverse
                </option>
              </select>
            </div>

            {/* Wrap */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Wrap
              </label>

              <select
                value={wrap}
                onChange={(e) => setWrap(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="flex-nowrap">flex-nowrap</option>
                <option value="flex-wrap">flex-wrap</option>
              </select>
            </div>

            {/* Gap */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Gap
              </label>

              <select
                value={gap}
                onChange={(e) => setGap(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="gap-0">gap-0</option>
                <option value="gap-2">gap-2</option>
                <option value="gap-4">gap-4</option>
                <option value="gap-6">gap-6</option>
                <option value="gap-8">gap-8</option>
              </select>
            </div>

            {/* Justify */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Justify
              </label>

              <select
                value={justify}
                onChange={(e) => setJustify(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="justify-start">
                  justify-start
                </option>

                <option value="justify-center">
                  justify-center
                </option>

                <option value="justify-end">
                  justify-end
                </option>

                <option value="justify-between">
                  justify-between
                </option>

                <option value="justify-around">
                  justify-around
                </option>

                <option value="justify-evenly">
                  justify-evenly
                </option>
              </select>
            </div>

            {/* Align */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Align
              </label>

              <select
                value={align}
                onChange={(e) => setAlign(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="items-start">
                  items-start
                </option>

                <option value="items-center">
                  items-center
                </option>

                <option value="items-end">
                  items-end
                </option>

                <option value="items-stretch">
                  items-stretch
                </option>
              </select>
            </div>

          </div>

          {/* CURRENT CLASSES */}

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Current Tailwind Classes
            </p>

            <code className="mt-2 block break-words font-mono text-sm text-cyan-300">
              {flexClasses}
            </code>

          </div>

          {/* LIVE RESULT */}

          <div className="mt-5">

            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              Live Result
            </p>

            <div className="min-h-[330px] rounded-2xl bg-slate-950 p-6">

              <div className={`${flexClasses} min-h-[280px]`}>

                <div className="flex min-h-16 min-w-24 items-center justify-center rounded-xl bg-cyan-500 px-5 py-4 font-bold text-white shadow-lg">
                  One
                </div>

                <div className="flex min-h-16 min-w-24 items-center justify-center rounded-xl bg-violet-500 px-5 py-4 font-bold text-white shadow-lg">
                  Two
                </div>

                <div className="flex min-h-16 min-w-24 items-center justify-center rounded-xl bg-emerald-500 px-5 py-4 font-bold text-white shadow-lg">
                  Three
                </div>

                <div className="flex min-h-16 min-w-24 items-center justify-center rounded-xl bg-orange-500 px-5 py-4 font-bold text-white shadow-lg">
                  Four
                </div>

              </div>

            </div>

          </div>

          {/* FLEX EXPLANATIONS */}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-cyan-300">
                {direction}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Changes the direction of the items.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-cyan-300">
                {wrap}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls whether items wrap.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-cyan-300">
                {gap}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls space between items.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-cyan-300">
                {justify}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls the main axis.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-cyan-300">
                {align}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls the cross axis.
              </p>
            </div>

          </div>

        </div>

        {/* =========================================
            FLEXBOX EXPLANATION
        ========================================= */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Flexbox Concepts
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            What Does Each Flexbox Property Do?
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                flex-row
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Places items horizontally from left to right.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                flex-col
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Places items vertically from top to bottom.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                flex-wrap
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Allows items to move onto a new line when needed.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                gap-4
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Creates consistent space between flex items.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                justify-center
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Centers items on the main axis.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                items-center
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Centers items on the cross axis.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                justify-between
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Places equal space between the items.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-cyan-300">
                justify-evenly
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Gives equal space around the items.
              </p>
            </div>

          </div>

        </div>

        {/* =========================================
            GRID PLAYGROUND
        ========================================= */}

        <div className="rounded-3xl border border-violet-400/20 bg-violet-400/5 p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
              Interactive Playground 02
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Explore CSS Grid
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Change columns, rows, gap, and alignment to see
              how Grid creates a structured layout.
            </p>
          </div>

          {/* GRID CONTROLS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {/* Columns */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Columns
              </label>

              <select
                value={gridColumns}
                onChange={(e) => setGridColumns(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-violet-400"
              >
                <option value="grid-cols-1">
                  grid-cols-1
                </option>

                <option value="grid-cols-2">
                  grid-cols-2
                </option>

                <option value="grid-cols-3">
                  grid-cols-3
                </option>

                <option value="grid-cols-4">
                  grid-cols-4
                </option>
              </select>
            </div>

            {/* Rows */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Rows
              </label>

              <select
                value={gridRows}
                onChange={(e) => setGridRows(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-violet-400"
              >
                <option value="grid-rows-1">
                  grid-rows-1
                </option>

                <option value="grid-rows-2">
                  grid-rows-2
                </option>

                <option value="grid-rows-3">
                  grid-rows-3
                </option>
              </select>
            </div>

            {/* Gap */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Gap
              </label>

              <select
                value={gridGap}
                onChange={(e) => setGridGap(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-violet-400"
              >
                <option value="gap-0">gap-0</option>
                <option value="gap-2">gap-2</option>
                <option value="gap-4">gap-4</option>
                <option value="gap-6">gap-6</option>
                <option value="gap-8">gap-8</option>
              </select>
            </div>

            {/* Span */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Column Span
              </label>

              <select
                value={span}
                onChange={(e) => setSpan(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-violet-400"
              >
                <option value="col-span-1">
                  col-span-1
                </option>

                <option value="col-span-2">
                  col-span-2
                </option>

                <option value="col-span-3">
                  col-span-3
                </option>
              </select>
            </div>

            {/* Place Items */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Alignment
              </label>

              <select
                value={placeItems}
                onChange={(e) => setPlaceItems(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm font-bold text-white outline-none focus:border-violet-400"
              >
                <option value="place-items-start">
                  place-items-start
                </option>

                <option value="place-items-center">
                  place-items-center
                </option>

                <option value="place-items-end">
                  place-items-end
                </option>
              </select>
            </div>

          </div>

          {/* CURRENT GRID CLASSES */}

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Current Tailwind Classes
            </p>

            <code className="mt-2 block break-words font-mono text-sm text-violet-300">
              {gridClasses}
            </code>

          </div>

          {/* GRID RESULT */}

          <div className="mt-5">

            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              Live Result
            </p>

            <div className="rounded-2xl bg-slate-950 p-6">

              <div className={`${gridClasses} min-h-[320px]`}>

                <div className={`${span} rounded-xl bg-violet-500 p-5 text-center font-bold text-white`}>
                  1
                </div>

                <div className="rounded-xl bg-cyan-500 p-5 text-center font-bold text-white">
                  2
                </div>

                <div className="rounded-xl bg-emerald-500 p-5 text-center font-bold text-white">
                  3
                </div>

                <div className="rounded-xl bg-orange-500 p-5 text-center font-bold text-white">
                  4
                </div>

                <div className="rounded-xl bg-pink-500 p-5 text-center font-bold text-white">
                  5
                </div>

                <div className="rounded-xl bg-blue-500 p-5 text-center font-bold text-white">
                  6
                </div>

              </div>

            </div>

          </div>

          {/* GRID EXPLANATIONS */}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-violet-300">
                {gridColumns}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls the number of columns.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-violet-300">
                {gridRows}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls the number of rows.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-violet-300">
                {gridGap}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Controls space between grid items.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-violet-300">
                {span}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Makes an item span multiple columns.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <code className="font-bold text-violet-300">
                {placeItems}
              </code>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Aligns grid items inside their cells.
              </p>
            </div>

          </div>

        </div>

        {/* =========================================
            GRID EXPLANATION
        ========================================= */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Grid Concepts
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            What Does Each Grid Property Do?
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                grid
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Turns an element into a CSS Grid container.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                grid-cols-3
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Creates three grid columns.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                grid-rows-2
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Creates two explicit grid rows.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                gap-4
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Adds space between rows and columns.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                col-span-2
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Makes an item occupy two columns.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <code className="text-violet-300">
                row-span-2
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Makes an item occupy two rows.
              </p>
            </div>

          </div>

        </div>

        {/* =========================================
            CODE EXAMPLE
        ========================================= */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Real Project Example
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            A Real Card Layout
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Flexbox is useful for navigation and alignment.
            Grid is useful for structured card layouts.
          </p>

          <div className="mt-6">

            <CodeBlock>{`<div className="grid grid-cols-3 gap-6">

  <div className="col-span-2 rounded-xl bg-white p-6">
    Main Card
  </div>

  <div className="rounded-xl bg-white p-6">
    Side Card
  </div>

  <div className="rounded-xl bg-white p-6">
    Card 1
  </div>

  <div className="rounded-xl bg-white p-6">
    Card 2
  </div>

  <div className="rounded-xl bg-white p-6">
    Card 3
  </div>

</div>`}</CodeBlock>

          </div>

        </div>

        {/* =========================================
            RESET
        ========================================= */}

        <div className="flex justify-center">

          <button
            onClick={resetPlayground}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Reset Playground
          </button>

        </div>

        {/* =========================================
            KEY TAKEAWAY
        ========================================= */}

        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Key Takeaway
          </p>

          <h3 className="mt-3 text-2xl font-black text-white">
            Flexbox = One-Dimensional Layout
          </h3>

          <h3 className="mt-2 text-2xl font-black text-white">
            Grid = Two-Dimensional Layout
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            Flexbox is great for arranging items in a row or column.
            Grid is great for organizing items across rows and columns.
            Gap and alignment help us control the space and position.
          </p>

        </div>

      </div>
    </Section>
  );
}