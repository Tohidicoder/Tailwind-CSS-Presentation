

import { useState } from "react";
import Section from "../components/Section";

export default function SpacingSizing() {
  const [category, setCategory] = useState("padding");
  const [utility, setUtility] = useState("p");
  const [value, setValue] = useState("4");

  // const categories = {
  //   padding: {
  //     label: "Padding — Inside Space",
  //     description: "Space inside an element",
  //     utilities: {
  //       p: "All Sides — p-*",
  //       px: "Horizontal — px-*",
  //       py: "Vertical — py-*",
  //       pt: "Top — pt-*",
  //       pb: "Bottom — pb-*",
  //       pl: "Left — pl-*",
  //       pr: "Right — pr-*",
  //     },
  //   },

  //   margin: {
  //     label: "Margin — Outside Space",
  //     description: "Space outside an element",
  //     utilities: {
  //       m: "All Sides — m-*",
  //       mx: "Horizontal — mx-*",
  //       my: "Vertical — my-*",
  //       mt: "Top — mt-*",
  //       mb: "Bottom — mb-*",
  //       ml: "Left — ml-*",
  //       mr: "Right — mr-*",
  //     },
  //   },

  //   direction: {
  //     label: "Direction — Top / Bottom / Left / Right",
  //     description: "Control spacing from one direction",
  //     utilities: {
  //       pt: "Padding Top — pt-*",
  //       pb: "Padding Bottom — pb-*",
  //       pl: "Padding Left — pl-*",
  //       pr: "Padding Right — pr-*",
  //       mt: "Margin Top — mt-*",
  //       mb: "Margin Bottom — mb-*",
  //       ml: "Margin Left — ml-*",
  //       mr: "Margin Right — mr-*",
  //     },
  //   },

  //   between: {
  //     label: "Between — Gap & Space",
  //     description: "Control space between elements",
  //     utilities: {
  //       gap: "Flex/Grid Gap — gap-*",
  //       gapX: "Horizontal Gap — gap-x-*",
  //       gapY: "Vertical Gap — gap-y-*",
  //       spaceX: "Horizontal Space — space-x-*",
  //       spaceY: "Vertical Space — space-y-*",
  //     },
  //   },

  //   size: {
  //     label: "Size — Width & Height",
  //     description: "Control the size of an element",
  //     utilities: {
  //       w: "Width — w-*",
  //       h: "Height — h-*",
  //     },
  //   },

  //   limits: {
  //     label: "Limits — Min & Max",
  //     description: "Set minimum and maximum size",
  //     utilities: {
  //       minW: "Minimum Width — min-w-*",
  //       maxW: "Maximum Width — max-w-*",
  //       minH: "Minimum Height — min-h-*",
  //       maxH: "Maximum Height — max-h-*",
  //     },
  //   },
  // };



  const categories = {
    padding: {
      label: "Padding — Inside Space",
      description: "Space inside an element",
      utilities: {
        p: "All Sides — p-* (p-2, p-4, p-6...)",
        px: "Horizontal — px-* (px-2, px-4, px-6...)",
        py: "Vertical — py-* (py-2, py-4, py-6...)",
        pt: "Top — pt-* (pt-2, pt-4, pt-6...)",
        pb: "Bottom — pb-* (pb-2, pb-4, pb-6...)",
        pl: "Left — pl-* (pl-2, pl-4, pl-6...)",
        pr: "Right — pr-* (pr-2, pr-4, pr-6...)",
      },
    },

    margin: {
      label: "Margin — Outside Space",
      description: "Space outside an element",
      utilities: {
        m: "All Sides — m-* (m-2, m-4, m-6...)",
        mx: "Horizontal — mx-* (mx-2, mx-4, mx-6...)",
        my: "Vertical — my-* (my-2, my-4, my-6...)",
        mt: "Top — mt-* (mt-2, mt-4, mt-6...)",
        mb: "Bottom — mb-* (mb-2, mb-4, mb-6...)",
        ml: "Left — ml-* (ml-2, ml-4, ml-6...)",
        mr: "Right — mr-* (mr-2, mr-4, mr-6...)",
      },
    },

    direction: {
      label: "Direction — Top / Bottom / Left / Right",
      description: "Control spacing from one direction",
      utilities: {
        pt: "Padding Top — pt-* (pt-2, pt-4, pt-6...)",
        pb: "Padding Bottom — pb-* (pb-2, pb-4, pb-6...)",
        pl: "Padding Left — pl-* (pl-2, pl-4, pl-6...)",
        pr: "Padding Right — pr-* (pr-2, pr-4, pr-6...)",
        mt: "Margin Top — mt-* (mt-2, mt-4, mt-6...)",
        mb: "Margin Bottom — mb-* (mb-2, mb-4, mb-6...)",
        ml: "Margin Left — ml-* (ml-2, ml-4, ml-6...)",
        mr: "Margin Right — mr-* (mr-2, mr-4, mr-6...)",
      },
    },

    between: {
      label: "Between — Gap & Space",
      description: "Control space between elements",
      utilities: {
        gap: "Flex/Grid Gap — gap-* (gap-2, gap-4, gap-6...)",
        gapX: "Horizontal Gap — gap-x-* (gap-x-2, gap-x-4...)",
        gapY: "Vertical Gap — gap-y-* (gap-y-2, gap-y-4...)",
        spaceX: "Horizontal Space — space-x-* (space-x-2, space-x-4...)",
        spaceY: "Vertical Space — space-y-* (space-y-2, space-y-4...)",
      },
    },

    size: {
      label: "Size — Width & Height",
      description: "Control the size of an element",
      utilities: {
        w: "Width — w-* (w-32, w-48, w-64...)",
        h: "Height — h-* (h-32, h-48, h-64...)",
      },
    },

    limits: {
      label: "Limits — Min & Max",
      description: "Set minimum and maximum size",
      utilities: {
        minW: "Minimum Width — min-w-* (min-w-sm, min-w-md...)",
        maxW: "Maximum Width — max-w-* (max-w-sm, max-w-md...)",
        minH: "Minimum Height — min-h-* (min-h-32, min-h-48...)",
        maxH: "Maximum Height — max-h-* (max-h-32, max-h-48...)",
      },
    },
  };
  const values = {
    spacing: [
      {
        value: "2",
        label: "Small — 0.5rem",
      },
      {
        value: "4",
        label: "Medium — 1rem",
      },
      {
        value: "6",
        label: "Large — 1.5rem",
      },
      {
        value: "8",
        label: "Extra Large — 2rem",
      },
    ],

    size: [
      {
        value: "32",
        label: "Small — 8rem",
      },
      {
        value: "48",
        label: "Medium — 12rem",
      },
      {
        value: "64",
        label: "Large — 16rem",
      },
      {
        value: "80",
        label: "Extra Large — 20rem",
      },
    ],

    limit: [
      {
        value: "sm",
        label: "Small — max-w-sm",
      },
      {
        value: "md",
        label: "Medium — max-w-md",
      },
      {
        value: "lg",
        label: "Large — max-w-lg",
      },
    ],
  };

  const classMap = {
    p: {
      2: "p-2",
      4: "p-4",
      6: "p-6",
      8: "p-8",
    },

    px: {
      2: "px-2",
      4: "px-4",
      6: "px-6",
      8: "px-8",
    },

    py: {
      2: "py-2",
      4: "py-4",
      6: "py-6",
      8: "py-8",
    },

    pt: {
      2: "pt-2",
      4: "pt-4",
      6: "pt-6",
      8: "pt-8",
    },

    pb: {
      2: "pb-2",
      4: "pb-4",
      6: "pb-6",
      8: "pb-8",
    },

    pl: {
      2: "pl-2",
      4: "pl-4",
      6: "pl-6",
      8: "pl-8",
    },

    pr: {
      2: "pr-2",
      4: "pr-4",
      6: "pr-6",
      8: "pr-8",
    },

    m: {
      2: "m-2",
      4: "m-4",
      6: "m-6",
      8: "m-8",
    },

    mx: {
      2: "mx-2",
      4: "mx-4",
      6: "mx-6",
      8: "mx-8",
      auto: "mx-auto",
    },

    my: {
      2: "my-2",
      4: "my-4",
      6: "my-6",
      8: "my-8",
    },

    mt: {
      2: "mt-2",
      4: "mt-4",
      6: "mt-6",
      8: "mt-8",
    },

    mb: {
      2: "mb-2",
      4: "mb-4",
      6: "mb-6",
      8: "mb-8",
    },

    ml: {
      2: "ml-2",
      4: "ml-4",
      6: "ml-6",
      8: "ml-8",
    },

    mr: {
      2: "mr-2",
      4: "mr-4",
      6: "mr-6",
      8: "mr-8",
    },

    gap: {
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
    },

    gapX: {
      2: "gap-x-2",
      4: "gap-x-4",
      6: "gap-x-6",
      8: "gap-x-8",
    },

    gapY: {
      2: "gap-y-2",
      4: "gap-y-4",
      6: "gap-y-6",
      8: "gap-y-8",
    },

    spaceX: {
      2: "space-x-2",
      4: "space-x-4",
      6: "space-x-6",
      8: "space-x-8",
    },

    spaceY: {
      2: "space-y-2",
      4: "space-y-4",
      6: "space-y-6",
      8: "space-y-8",
    },

    w: {
      32: "w-32",
      48: "w-48",
      64: "w-64",
      80: "w-80",
    },

    h: {
      32: "h-32",
      48: "h-48",
      64: "h-64",
      80: "h-80",
    },

    minW: {
      sm: "min-w-sm",
      md: "min-w-md",
      lg: "min-w-lg",
    },

    maxW: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    },

    minH: {
      sm: "min-h-32",
      md: "min-h-48",
      lg: "min-h-64",
    },

    maxH: {
      sm: "max-h-32",
      md: "max-h-48",
      lg: "max-h-64",
    },
  };

  const getValueOptions = () => {
    if (
      category === "padding" ||
      category === "margin" ||
      category === "direction" ||
      category === "between"
    ) {
      return values.spacing;
    }

    if (category === "size") {
      return values.size;
    }

    return values.limit;
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);

    const firstUtility = Object.keys(
      categories[newCategory].utilities
    )[0];

    setUtility(firstUtility);

    if (
      newCategory === "padding" ||
      newCategory === "margin" ||
      newCategory === "direction" ||
      newCategory === "between"
    ) {
      setValue("4");
    } else if (newCategory === "size") {
      setValue("48");
    } else {
      setValue("md");
    }
  };

  const handleUtilityChange = (newUtility) => {
    setUtility(newUtility);

    if (
      category === "padding" ||
      category === "margin" ||
      category === "direction" ||
      category === "between"
    ) {
      setValue("4");
    } else if (category === "size") {
      setValue("48");
    } else {
      setValue("md");
    }
  };

  const currentClass = classMap[utility]?.[value] || "";

  const getMeaning = () => {
    if (utility === "p") {
      return "p = Padding → all four sides";
    }

    if (utility === "px") {
      return "px = Padding + X → left and right";
    }

    if (utility === "py") {
      return "py = Padding + Y → top and bottom";
    }

    if (utility === "pt") {
      return "pt = Padding + Top";
    }

    if (utility === "pb") {
      return "pb = Padding + Bottom";
    }

    if (utility === "pl") {
      return "pl = Padding + Left";
    }

    if (utility === "pr") {
      return "pr = Padding + Right";
    }

    if (utility === "m") {
      return "m = Margin → all four sides";
    }

    if (utility === "mx") {
      return "mx = Margin + X → left and right";
    }

    if (utility === "my") {
      return "my = Margin + Y → top and bottom";
    }

    if (utility === "mt") {
      return "mt = Margin + Top";
    }

    if (utility === "mb") {
      return "mb = Margin + Bottom";
    }

    if (utility === "ml") {
      return "ml = Margin + Left";
    }

    if (utility === "mr") {
      return "mr = Margin + Right";
    }

    if (utility === "gap") {
      return "gap = space between Flex/Grid items";
    }

    if (utility === "gapX") {
      return "gap-x = horizontal gap";
    }

    if (utility === "gapY") {
      return "gap-y = vertical gap";
    }

    if (utility === "spaceX") {
      return "space-x = horizontal space between children";
    }

    if (utility === "spaceY") {
      return "space-y = vertical space between children";
    }

    if (utility === "w") {
      return "w = Width";
    }

    if (utility === "h") {
      return "h = Height";
    }

    if (utility === "minW") {
      return "min-w = Minimum Width";
    }

    if (utility === "maxW") {
      return "max-w = Maximum Width";
    }

    if (utility === "minH") {
      return "min-h = Minimum Height";
    }

    if (utility === "maxH") {
      return "max-h = Maximum Height";
    }

    return "";
  };

  const reset = () => {
    setCategory("padding");
    setUtility("p");
    setValue("4");
  };

  const categoryCards = [
    {
      id: "padding",
      title: "Padding",
      subtitle: "Inside Space",
      examples: [
        "p-4 → all sides",
        "px-4 → left + right",
        "py-4 → top + bottom",
        "pt-4 → top",
        "pb-4 → bottom",
        "pl-4 → left",
        "pr-4 → right",
      ],
    },

    {
      id: "margin",
      title: "Margin",
      subtitle: "Outside Space",
      examples: [
        "m-4 → all sides",
        "mx-4 → left + right",
        "my-4 → top + bottom",
        "mt-4 → top",
        "mb-4 → bottom",
        "ml-4 → left",
        "mr-4 → right",
      ],
    },

    {
      id: "direction",
      title: "Direction",
      subtitle: "Top / Bottom / Left / Right",
      examples: [
        "pt-4 → top",
        "pb-4 → bottom",
        "pl-4 → left",
        "pr-4 → right",
        "mt-4 → margin top",
        "mb-4 → margin bottom",
      ],
    },

    {
      id: "between",
      title: "Between",
      subtitle: "Gap & Space",
      examples: [
        "gap-4 → Flex/Grid gap",
        "gap-x-4 → horizontal gap",
        "gap-y-4 → vertical gap",
        "space-x-4 → horizontal",
        "space-y-4 → vertical",
      ],
    },

    {
      id: "size",
      title: "Size",
      subtitle: "Width & Height",
      examples: [
        "w-32 → width",
        "w-64 → width",
        "h-32 → height",
        "h-64 → height",
      ],
    },

    {
      id: "limits",
      title: "Limits",
      subtitle: "Min & Max",
      examples: [
        "min-w-sm → minimum width",
        "max-w-md → maximum width",
        "min-h-32 → minimum height",
        "max-h-64 → maximum height",
      ],
    },
  ];

  return (
    <Section
      number="09"
      label="Spacing & Sizing"
      title="How Do You Control Space and Size?"
      description="Tailwind gives you simple utilities for inside space, outside space, gaps, width, height, and size limits."
    >
      {/* Main Memory */}
      <div className="mb-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
          The Main Idea
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Control the Space. Control the Size.
        </h2>

        <p className="mt-4 text-sm text-slate-300 md:text-base">
          Inside → Padding &nbsp; | &nbsp; Outside → Margin &nbsp; | &nbsp;
          Between → Gap &nbsp; | &nbsp; Size → Width & Height
        </p>
      </div>

      {/* Six Category Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categoryCards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCategoryChange(card.id)}
            className={`group rounded-3xl border p-5 text-left transition ${category === card.id
              ? "border-cyan-400/50 bg-cyan-400/10"
              : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-1 text-sm text-cyan-300">
                  {card.subtitle}
                </p>
              </div>

              <span className="rounded-xl bg-white/10 px-3 py-1 text-xs text-slate-300">
                {card.id}
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {card.examples.map((example) => (
                <div
                  key={example}
                  className="rounded-xl bg-black/20 px-3 py-2 text-sm text-slate-300"
                >
                  <code className="text-cyan-300">
                    {example.split(" → ")[0]}
                  </code>

                  <span className="text-slate-500"> → </span>

                  <span>{example.split(" → ")[1]}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Interactive Playground */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl md:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Interactive Playground
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Choose a Utility and See the Result
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Select the concept first, then choose the exact Tailwind utility
            and value.
          </p>
        </div>

        {/* Dropdowns */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              1. What do you want to control?
            </label>

            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
            >
              {Object.entries(categories).map(([key, item]) => (
                <option
                  key={key}
                  value={key}
                  className="bg-slate-900"
                >
                  {item.label}
                </option>
              ))}
            </select>

            <p className="mt-2 text-xs text-slate-500">
              {categories[category].description}
            </p>
          </div>

          {/* Utility */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              2. Which utility?
            </label>

            <select
              value={utility}
              onChange={(e) => handleUtilityChange(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400/50"
            >
              {Object.entries(categories[category].utilities).map(
                ([key, label]) => (
                  <option
                    key={key}
                    value={key}
                    className="bg-slate-900"
                  >
                    {label}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Value */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              3. Choose the value
            </label>

            <select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-400/50"
            >
              {getValueOptions().map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  className="bg-slate-900"
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Class */}
        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Your Tailwind Class
              </p>

              <code className="mt-1 block text-xl font-bold text-cyan-300">
                {currentClass}
              </code>
            </div>

            <div className="rounded-xl bg-white/5 px-4 py-2 text-sm text-slate-300">
              {getMeaning()}
            </div>
          </div>
        </div>

        {/* Live Result */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-white">Live Result</h3>

            <span className="text-xs text-slate-500">
              Class: {currentClass}
            </span>
          </div>

          <div className="min-h-[280px] overflow-hidden rounded-3xl border border-dashed border-white/20 bg-slate-900 p-6">
            {/* Padding */}
            {category === "padding" && (
              <div className="flex h-full min-h-[230px] items-center justify-center">
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-2">
                  <div
                    className={`${currentClass} rounded-xl bg-cyan-400 text-center font-bold text-slate-950 transition-all duration-300`}
                  >
                    Content
                  </div>
                </div>
              </div>
            )}

            {/* Margin */}
            {category === "margin" && (
              <div className="flex min-h-[230px] items-center justify-center">
                <div className="relative rounded-2xl border border-dashed border-violet-400/40 p-2">
                  <span className="absolute -top-7 left-0 text-xs text-violet-300">
                    Outer Container
                  </span>

                  <div
                    className={`${currentClass} rounded-xl bg-violet-400 px-8 py-6 text-center font-bold text-slate-950 transition-all duration-300`}
                  >
                    Margin
                    <div className="mt-1 text-xs font-normal">
                      Outside Space
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Direction */}
            {category === "direction" && (
              <div className="flex min-h-[230px] items-center justify-center">
                <div className="rounded-2xl border border-dashed border-pink-400/40 bg-pink-400/5">
                  <div
                    className={`${currentClass} rounded-xl bg-pink-400 text-center font-bold text-slate-950 transition-all duration-300`}
                  >
                    {currentClass}
                  </div>
                </div>
              </div>
            )}

            {/* Between */}
            {category === "between" && (
              <div className="flex min-h-[230px] items-center justify-center">
                {utility === "spaceX" || utility === "gapX" ? (
                  <div
                    className={`${utility === "spaceX" ? currentClass : `flex ${currentClass}`} flex items-center`}
                  >
                    <div className="rounded-xl bg-cyan-400 px-5 py-4 font-bold text-slate-950">
                      1
                    </div>

                    <div className="rounded-xl bg-violet-400 px-5 py-4 font-bold text-slate-950">
                      2
                    </div>

                    <div className="rounded-xl bg-pink-400 px-5 py-4 font-bold text-slate-950">
                      3
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex flex-wrap items-center justify-center ${currentClass}`}
                  >
                    <div className="rounded-xl bg-cyan-400 px-5 py-4 font-bold text-slate-950">
                      1
                    </div>

                    <div className="rounded-xl bg-violet-400 px-5 py-4 font-bold text-slate-950">
                      2
                    </div>

                    <div className="rounded-xl bg-pink-400 px-5 py-4 font-bold text-slate-950">
                      3
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Size */}
            {category === "size" && (
              <div className="flex min-h-[230px] items-center justify-center">
                <div
                  className={`${currentClass} ${utility === "w" ? "h-32" : "w-48"
                    } rounded-2xl bg-cyan-400 transition-all duration-300`}
                >
                  <div className="flex h-full items-center justify-center text-center font-bold text-slate-950">
                    {utility === "w" ? "Width" : "Height"}
                  </div>
                </div>
              </div>
            )}

            {/* Limits */}
            {category === "limits" && (
              <div className="flex min-h-[230px] items-center justify-center">
                <div
                  className={`${currentClass} ${utility.includes("H") ? "w-64" : "min-h-24"
                    } rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 p-5 text-center font-bold text-slate-950 transition-all duration-300`}
                >
                  Size Limit
                  <p className="mt-2 text-xs font-normal">
                    {currentClass}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Reset Playground
        </button>
      </div>

      {/* Quick Mental Model */}
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <code className="text-xl font-bold text-cyan-300">p</code>
          <h3 className="mt-2 font-bold text-white">Padding</h3>
          <p className="mt-1 text-sm text-slate-400">
            Space inside the element.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <code className="text-xl font-bold text-violet-300">m</code>
          <h3 className="mt-2 font-bold text-white">Margin</h3>
          <p className="mt-1 text-sm text-slate-400">
            Space outside the element.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <code className="text-xl font-bold text-pink-300">x / y</code>
          <h3 className="mt-2 font-bold text-white">Direction</h3>
          <p className="mt-1 text-sm text-slate-400">
            x = horizontal, y = vertical.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <code className="text-xl font-bold text-emerald-300">
            w / h
          </code>
          <h3 className="mt-2 font-bold text-white">Size</h3>
          <p className="mt-1 text-sm text-slate-400">
            Control width and height.
          </p>
        </div>
      </div>

      {/* Final Memory */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Remember
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Control the Space. Control the Size.
        </h2>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Inside → Padding
          </span>

          <span className="rounded-full bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            Outside → Margin
          </span>

          <span className="rounded-full bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            Between → Gap
          </span>

          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Size → Width & Height
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400">
          Read Tailwind classes from left to right:
          <br />
          <strong className="text-white">p</strong> = padding,
          <strong className="text-white"> m</strong> = margin,
          <strong className="text-white"> x</strong> = horizontal,
          <strong className="text-white"> y</strong> = vertical,
          <strong className="text-white"> t/b/l/r</strong> = direction,
          and the final number is the value.
        </p>
      </div>
    </Section>
  );
}



