export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Email Deliverability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Does your email hit the{' '}
          <span className="text-[#58a6ff]">inbox</span> or the{' '}
          <span className="text-red-400">spam folder</span>?
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Send test emails to real seed accounts across Gmail, Outlook, Yahoo, and more.
          Get instant inbox/spam placement reports and reputation scores.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing — $12/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { label: 'Providers Tested', value: 'Gmail, Outlook, Yahoo & more' },
            { label: 'Real-time Results', value: 'IMAP-verified placement checks' },
            { label: 'Reputation Score', value: 'SPF, DKIM, DMARC analysis' },
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-wide mb-1">{f.label}</p>
              <p className="text-[#c9d1d9] text-sm">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited deliverability tests',
              'Seed accounts: Gmail, Outlook, Yahoo',
              'Inbox vs spam placement report',
              'SPF / DKIM / DMARC scoring',
              'Email queue with real-time status',
              'Cancel anytime',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the deliverability test work?',
              a: 'We send your email to real seed accounts we control across major providers. Our system then connects via IMAP to check whether the message landed in the inbox or spam folder and reports the result in real time.',
            },
            {
              q: 'Which email providers are covered?',
              a: 'We currently test against Gmail, Outlook/Hotmail, and Yahoo Mail — the three providers that account for the vast majority of consumer inboxes worldwide.',
            },
            {
              q: 'Do I need to change my DNS or email setup?',
              a: 'No DNS changes required. Simply enter your SMTP credentials or paste your raw email headers and we handle the rest. We also analyze your SPF, DKIM, and DMARC records automatically.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Email Deliverability Tester. All rights reserved.
      </footer>
    </main>
  )
}
