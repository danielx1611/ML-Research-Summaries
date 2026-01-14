const summaryTemplates = [
  {
    id: "paper-one",
    title: "Reading Note Template",
    description:
      "Use this space to capture the essentials and write a clear recap.",
  },
  {
    id: "paper-two",
    title: "Another Reading Note",
    description:
      "Duplicate this template for each reading I want to capture.",
  },
];

export default function SummariesPage() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Notes Workspace
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Clear and concise paper summaries.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Each section below is a prepared page for storing reading details
            and drafting paragraph-length notes. I add a new entry whenever
            I capture another source.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {summaryTemplates.map((template) => (
            <article
              key={template.id}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-zinc-900">
                  {template.title}
                </h2>
                <p className="text-sm text-zinc-500">{template.description}</p>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Reading Details
                  </p>
                  <dl className="mt-4 space-y-4 text-sm text-zinc-700">
                    <div>
                      <dt className="font-semibold text-zinc-900">Title</dt>
                      <dd className="mt-1 text-zinc-600">[Add title]</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">Link</dt>
                      <dd className="mt-1 text-emerald-600">[Add URL]</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">Year</dt>
                      <dd className="mt-1 text-zinc-600">[Add year]</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">
                        Source
                      </dt>
                      <dd className="mt-1 text-zinc-600">[Add source]</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">
                        Note Date
                      </dt>
                      <dd className="mt-1 text-zinc-600">[Add note date]</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Reflection
                  </p>
                  <div className="mt-4 space-y-4 text-sm text-zinc-600">
                    <p>
                      [Write a paragraph describing the main ideas and why this
                      reading matters to me.]
                    </p>
                    <p>
                      [Add a second paragraph for key takeaways, examples, or
                      how it connects to other things I have read.]
                    </p>
                    <p>
                      [Capture any insights, open questions, or follow-up ideas
                      here.]
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
