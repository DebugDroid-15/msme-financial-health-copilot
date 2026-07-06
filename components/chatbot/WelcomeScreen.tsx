import SuggestionChips from "./SuggestionChips";

export default function WelcomeScreen() {
  return (
    <div className="space-y-6">

      <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8">

        <h2 className="text-4xl font-bold text-white">
          Hello Rajesh 👋
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          I'm your MSME Financial Copilot.
          I can analyze financial health, improve loan eligibility,
          recommend government schemes, explain reports and help
          you make better financial decisions.
        </p>

      </div>

      <SuggestionChips />

    </div>
  );
}