// import Header from "./components/Header";
// import TopicLibrary from "./components/TopicLibrary";

// import Introduction from "./slides/Introduction";
// import History from "./slides/CoreIdea";
// import WhyTailwind from "./slides/WhyTailwind";
// import TailwindVsCss from "./slides/TailwindVsCss";
// import HowItWorks from "./slides/GettingStarted";
// // import Installation from "./slides/Installation";
// import UtilityClasses from "./slides/UtilityClasses";
// import Layout from "./slides/Layout";
// import FlexGrid from "./slides/FlexGrid";
// // import Spacing from "./slides/Spacing";
// import Sizing from "./slides/SpacingSizing";
// import Typography from "./slides/Typography";
// import Colors from "./slides/Colors";
// import Backgrounds from "./slides/BackgroundsBorder";
// // import Borders from "./slides/Borders";
// import Effects from "./slides/Effects";
// import Responsive from "./slides/ResponsiveDesign";
// import States from "./slides/States";
// import DarkMode from "./slides/DarkMode";
// import Animation from "./slides/TransitionsAnimation";
// // import Theme from "./slides/Theme";
// import CustomCss from "./slides/Customization";
// import ReactWithTailwind from "./slides/ReactWithTailwind";
// import RealProject from "./slides/RealProject";
// import Mistakes from "./slides/Mistakes";
// import CheatSheet from "./slides/CheatSheet";
// import Benefits from "./slides/Benefits";
// import CoreIdea from "./slides/CoreIdea";
// import GettingStarted from "./slides/GettingStarted";
// import SpacingSizing from "./slides/SpacingSizing";
// import BackgroundsBorders from "./slides/BackgroundsBorder";
// import TransitionsAnimation from "./slides/TransitionsAnimation";
// import Interactivity from "./slides/Interactivity";
// import ResponsiveDesign from "./slides/ResponsiveDesign";
// import Customization from "./slides/Customization";
// import ComponentsUI from "./slides/ComponentsUI";
// import TailwindVsBootstrap from "./slides/Tailwind vs Bootstrap";
// import AdvantagesLimitations from "./slides/Advantages-Limitations";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[#07111f]">
//       <Header />

//       <main className="mx-auto max-w-6xl px-6 md:px-10">
//         <Introduction />
//         <CoreIdea />
//         <WhyTailwind />
//         <TailwindVsCss />
//         <GettingStarted />
//         {/* <Installation /> */}
//         {/* <UtilityClasses /> */}
//         <Layout />
//         <FlexGrid />
//         <SpacingSizing />

//         <Typography />
//         {/* // <Colors /> */}
//         <BackgroundsBorders />

//         <Effects />

//         {/* // <States /> */}

//         <TransitionsAnimation />
//         <Interactivity />
//         <ResponsiveDesign />
//         <DarkMode />
//         <Customization />
//         <ComponentsUI />
//         <TailwindVsBootstrap />
//         <AdvantagesLimitations />

//         {/*
//         <ReactWithTailwind />
//         <RealProject />  */}
//         {/* <Mistakes />
//         <CheatSheet />
//         <Benefits />
//         <TopicLibrary /> */}
//       </main>
//     </div>
//   );
// }

import Header from "./components/Header";

import Introduction from "./slides/Introduction";
import CoreIdea from "./slides/CoreIdea";
import WhyTailwind from "./slides/WhyTailwind";
import TailwindVsCss from "./slides/TailwindVsCss";
import GettingStarted from "./slides/GettingStarted";

import UtilityClasses from "./slides/ClassStructure";
import Layout from "./slides/Layout";
import FlexGrid from "./slides/FlexGrid";
import SpacingSizing from "./slides/SpacingSizing";
import Typography from "./slides/Typography";
import Colors from "./slides/Colors";
// import BackgroundsBorder from "BackgroundsBorder";
import BackgroundsBorder from "./slides/BackgroundsBorder";
import Effects from "./slides/Effects";
import TransitionsAnimation from "./slides/TransitionsAnimation";
import Interactivity from "./slides/Interactivity";
import ResponsiveDesign from "./slides/ResponsiveDesign";
import States from "./slides/States";
import DarkMode from "./slides/DarkMode";
import Customization from "./slides/Customization";

import ComponentsUI from "./slides/ComponentsUI";
import TailwindVsBootstrap from "./slides/Tailwind vs Bootstrap";
import AdvantagesLimitations from "./slides/Advantages-Limitations";

import ReactWithTailwind from "./slides/ReactWithTailwind";
import RealProject from "./slides/RealProject";
import Mistakes from "./slides/Mistakes";
import CheatSheet from "./slides/CheatSheet";
import Benefits from "./slides/Benefits";
import AdvancedLayout from "./slides/AdvancedLayout";
import AdvancedTypography from "./slides/AdvancedTypography";
import AdvancedEffects from "./slides/AdvancedEffects";
import Transforms from "./slides/Transforms";
import AdvancedInteractivity from "./slides/AdvancedInteractivity";
import SVGAccessibility from "./slides/SVGAccessibility";
import AdvancedCustomization from "./slides/AdvancedCustomization";
import Conclusion from "./slides/Conclusion";
import Preflight from "./slides/Preflight";
import Tables from "./slides/Tables";
import ClassStructure from "./slides/ClassStructure";

export default function App() {
  return (
    // <div className="min-h-screen bg-[#07111f]">
    //   <Header />

    //   <main className="mx-auto max-w-6xl px-6 md:px-10">

    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Your sections */}

        {/* 01 — Introduction */}
        <Introduction />

        {/* 02 — Core Idea */}
        <CoreIdea />

        {/* 03 — Why Tailwind? */}
        <WhyTailwind />

        {/* 04 — Tailwind vs CSS */}
        <TailwindVsCss />

        {/* 05 — Getting Started */}
        <GettingStarted />

        {/* 06 — Utility Classes */}
        <ClassStructure />

        {/* 07 — Layout */}
        <Layout />

        {/* 08 — Flexbox & Grid */}
        <FlexGrid />

        {/* 09 — Spacing & Sizing */}
        <SpacingSizing />

        {/* 10 — Typography */}
        <Typography />

        {/* 11 — Colors */}
        <Colors />

        {/* 12 — Backgrounds & Borders */}
        {/* <BackgroundsBorders /> */}
        <BackgroundsBorder />

        {/* 13 — Effects  */}
        <Effects />

        {/* 14 — Transitions & Animation */}
        <TransitionsAnimation />

        {/* 15 — Interactivity */}
        <Interactivity />

        {/* 16 — Responsive Design */}
        <ResponsiveDesign />

        {/* 17 — States */}
        <States />

        {/* 18 — Dark Mode */}
        <DarkMode />

        {/* 19 — Customization */}
        <Customization />

        {/* 20 — Components & UI */}
        <ComponentsUI />

        {/* 21 — Tailwind vs Bootstrap */}
        <TailwindVsBootstrap />

        {/* 22 — Advantages & Limitations */}
        <AdvantagesLimitations />

        {/* 23 — React with Tailwind */}
        <ReactWithTailwind />

        {/* 24 — Real Project */}
        <RealProject />

        {/* 25 — Common Mistakes */}
        <Mistakes />

        {/* 26 — Benefits */}
        <Benefits />

        {/* 27 — Cheat Sheet */}
        <CheatSheet />
        <AdvancedLayout />
        <AdvancedTypography />
        <AdvancedEffects />
        <Transforms />
        <AdvancedInteractivity />
        <SVGAccessibility />
        <AdvancedCustomization />
        <Preflight />
        <Tables />

        <Conclusion />
      </main>
    </div>
  );
}
