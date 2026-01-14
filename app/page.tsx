export default function Home() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Workspace
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            A place to draft and organize my paper summaries.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            This site is for summarizing research papers I read. I use the notes page to record source details,
            capture key takeaways, and keep the context I want to revisit later.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Capture key details",
              description:
                "Store the title, source, and year alongside each reading.",
            },
            {
              title: "Track note dates",
              description:
                "Log when each note was drafted so the timeline stays clear.",
            },
            {
              title: "Write personal reflections",
              description:
                "Leave room for paragraph-level notes on what stood out.",
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
            Wish to see the most recent summaries?
          </h2>
          <p className="mt-3 text-sm text-emerald-800">
            Head to the notes workspace to start viewing reading details and
            observations.
          </p>
        </div>
      </section>
    </div>
  );
}
