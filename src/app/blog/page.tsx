import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Santifa.io",
  description: "Ecommerce operations insights, case studies, and playbooks from the Santifa team.",
};

const posts = [
  {
    tag: "OPERATIONS",
    title: "The 7 SOPs that keep our eBay stores healthy every day",
    excerpt: "Daily check-ins, account health monitoring, listing audits — the routines that prevent 90% of store fires.",
    date: "Coming soon",
  },
  {
    tag: "POD",
    title: "How we tripled an Etsy store's revenue in 6 months",
    excerpt: "Trend research, listing optimization, and strategic ad spend — a real case study.",
    date: "Coming soon",
  },
  {
    tag: "ADS",
    title: "Why your Meta ads creative is the bottleneck (and how to fix it)",
    excerpt: "The fastest path to better ROAS is more creative variations. Here's our workflow.",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-5xl mx-auto px-6">
        <header className="mb-12 text-center">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">
            Notes from the <span className="gradient-text">operations desk</span>.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Practical insights, case studies, and playbooks from running 150+ ecommerce stores.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl border border-dashed border-gray-200 p-5 hover:border-[#ef4d23]/30 hover:shadow-md transition-all">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[#fee8e4] text-[#ef4d23] mb-3">
                {post.tag}
              </span>
              <h2 className="text-lg font-bold text-[#0b0f1a] mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-3 leading-relaxed">{post.excerpt}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </article>
          ))}
        </section>

        <p className="text-center text-sm text-gray-400 mt-12">
          More posts coming soon. Have a topic in mind?
          <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline ml-1">Email us</a>.
        </p>
      </article>
    </main>
  );
}
