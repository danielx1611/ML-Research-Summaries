const summaryTemplates = [
  {
    id: "paper-one",
    title: "Paper Summary Template",
    description:
      "Use this space to capture the essentials and write a clear narrative summary.",
  },
  {
    id: "paper-two",
    title: "Additional Summary",
    description:
      "Duplicate this template for each document you want to summarize.",
  },
];

export default function SummariesPage() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Summaries Workspace
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Draft research summaries with consistent structure.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Each section below is a prepared page for storing paper metadata and
            drafting paragraph-length summaries. Add as many templates as you
            need when reviewing new papers.
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
                    Paper Details
                  </p>
                  <dl className="mt-4 space-y-4 text-sm text-zinc-700">
                    <div>
                      <dt className="font-semibold text-zinc-900">Title</dt>
                      <dd className="mt-1 text-zinc-600">[Add paper title]</dd>
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
                        Publication Venue
                      </dt>
                      <dd className="mt-1 text-zinc-600">[Add venue]</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">
                        Summary Date
                      </dt>
                      <dd className="mt-1 text-zinc-600">[Add date]</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Paragraph Summary
                  </p>
                  <div className="mt-4 space-y-4 text-sm text-zinc-600">
                    <p>
                      [Write a paragraph that describes the problem statement,
                      methodology, and why the paper matters.]
                    </p>
                    <p>
                      [Add a second paragraph for key results, evaluation
                      details, and how the paper relates to other work.]
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
