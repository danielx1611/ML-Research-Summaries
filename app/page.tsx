export default function Home() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Workspace
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            A calm place to draft and organize research summaries.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            ML Research Summaries helps you keep key metadata, paper links, and
            narrative summaries in one structured layout. Use the summaries page
            to collect publication details, capture takeaways, and preserve the
            context needed for future literature reviews.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Capture metadata",
              description:
                "Store the title, publication venue, and year alongside every research document.",
            },
            {
              title: "Track summary dates",
              description:
                "Log when each summary was drafted so your reading timeline stays clear.",
            },
            {
              title: "Write narrative insights",
              description:
                "Leave room for paragraph-level notes on methods, results, and impact.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-zinc-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 p-8">
          <h2 className="text-2xl font-semibold text-emerald-950">
            Ready to draft your first summary?
          </h2>
          <p className="mt-3 text-sm text-emerald-800">
            Head to the summaries workspace to start capturing paper details and
            observations.
          </p>
        </div>
      </section>
    </div>
  );
}
