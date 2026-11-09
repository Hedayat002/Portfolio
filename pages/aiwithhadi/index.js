import Head from 'next/head'

const privacyPolicyPath = '/aiwithhadi/privacy-policy'

export default function AIWithHadiHome() {
  return (
    <>
      <Head>
        <title>AIWithHadi Automation | AI-Powered YouTube Shorts</title>
        <meta
          name="description"
          content="AIWithHadi Automation is a personal AI-powered system for researching AI and technology news, preparing scripts, and producing YouTube Shorts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AIWithHadi Automation" />
        <meta
          property="og:description"
          content="A personal AI-powered workflow for researching, producing, and publishing YouTube Shorts."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="aiwh-page">
        <header className="aiwh-header">
          <a className="aiwh-brand" href="/aiwithhadi" aria-label="AIWithHadi Automation home">
            <span className="aiwh-brand-mark" aria-hidden="true">A</span>
            <span>AIWithHadi <span className="aiwh-brand-muted">Automation</span></span>
          </a>
          <a className="aiwh-header-link" href={privacyPolicyPath}>Privacy policy</a>
        </header>

        <main>
          <section className="aiwh-hero" aria-labelledby="page-title">
            <p className="aiwh-eyebrow"><span className="aiwh-status-dot" /> PERSONAL CREATOR WORKFLOW</p>
            <h1 id="page-title">AIWithHadi <span>Automation</span></h1>
            <p className="aiwh-lead">
              A personal AI-powered system for turning the latest in artificial intelligence and technology into YouTube Shorts.
            </p>
            <a className="aiwh-button" href={privacyPolicyPath}>
              Read the privacy policy <span aria-hidden="true">→</span>
            </a>
            <div className="aiwh-orbit aiwh-orbit-one" aria-hidden="true" />
            <div className="aiwh-orbit aiwh-orbit-two" aria-hidden="true" />
          </section>

          <section className="aiwh-content" aria-labelledby="workflow-title">
            <div className="aiwh-section-heading">
              <p className="aiwh-eyebrow">FROM RESEARCH TO SHORTS</p>
              <h2 id="workflow-title">A focused production workflow</h2>
              <p>Created for the owner’s authorized channel, with Google OAuth 2.0 used to request YouTube access.</p>
            </div>

            <ol className="aiwh-steps">
              <li><span className="aiwh-step-number">01</span><div><h3>Research</h3><p>Finds timely stories and updates in AI and technology.</p></div></li>
              <li><span className="aiwh-step-number">02</span><div><h3>Prepare</h3><p>Develops short-form scripts based on selected topics.</p></div></li>
              <li><span className="aiwh-step-number">03</span><div><h3>Produce</h3><p>Creates videos formatted for the YouTube Shorts experience.</p></div></li>
              <li><span className="aiwh-step-number">04</span><div><h3>Publish</h3><p>Publishes to the owner’s YouTube channel using the permissions authorized through Google.</p></div></li>
            </ol>

            <aside className="aiwh-oauth-note">
              <span className="aiwh-oauth-icon" aria-hidden="true">↗</span>
              <p><strong>You stay in control.</strong> Google OAuth 2.0 is used to request permission for YouTube channel access. You can review or revoke that access from your Google Account permissions.</p>
            </aside>
          </section>

          <section className="aiwh-contact" aria-labelledby="contact-title">
            <div><p className="aiwh-eyebrow">QUESTIONS?</p><h2 id="contact-title">Get in touch</h2></div>
            <a href="mailto:techhadi61@gmail.com">techhadi61@gmail.com <span aria-hidden="true">↗</span></a>
          </section>
        </main>

        <footer className="aiwh-footer">
          <span>AIWithHadi Automation</span>
          <a href={privacyPolicyPath}>Privacy policy</a>
        </footer>
      </div>

      <style jsx>{`
        .aiwh-page { min-height: 100vh; color: #e2e8f0; background: radial-gradient(ellipse at 50% 0%, rgba(20,184,166,.12), transparent 38%), #020408; font-family: 'DM Sans', sans-serif; }
        .aiwh-header, .aiwh-footer { width: min(1120px, calc(100% - 48px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .aiwh-header { min-height: 78px; border-bottom: 1px solid rgba(148,163,184,.12); }
        .aiwh-brand { display: inline-flex; gap: 11px; align-items: center; color: #f8fafc; text-decoration: none; font-weight: 600; letter-spacing: -.02em; }
        .aiwh-brand-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; color: #04110f; background: #2dd4bf; font-family: 'Syne', sans-serif; font-weight: 800; }
        .aiwh-brand-muted { color: #94a3b8; font-weight: 400; }
        .aiwh-header-link, .aiwh-footer a { color: #a7b5c5; text-decoration: none; font-size: 14px; transition: color .2s ease; }
        .aiwh-header-link:hover, .aiwh-footer a:hover { color: #2dd4bf; }
        .aiwh-hero { position: relative; isolation: isolate; overflow: hidden; min-height: 490px; padding: 112px 24px 100px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .aiwh-hero > :not(.aiwh-orbit) { position: relative; z-index: 1; }
        .aiwh-eyebrow { margin: 0 0 18px; color: #2dd4bf; font: 500 11px/1.4 'JetBrains Mono', monospace; letter-spacing: .16em; }
        .aiwh-status-dot { display: inline-block; width: 7px; height: 7px; margin-right: 8px; border-radius: 50%; background: #2dd4bf; box-shadow: 0 0 12px rgba(45,212,191,.8); }
        h1, h2, h3, p { margin-top: 0; }
        .aiwh-hero h1 { max-width: 850px; margin-bottom: 22px; color: #f8fafc; font: 800 clamp(42px, 7vw, 76px)/1.04 'Syne', sans-serif; letter-spacing: -.055em; }
        .aiwh-hero h1 span { color: #2dd4bf; }
        .aiwh-lead { max-width: 660px; margin-bottom: 32px; color: #a7b5c5; font-size: clamp(16px, 2vw, 19px); line-height: 1.75; }
        .aiwh-button { display: inline-flex; align-items: center; gap: 12px; padding: 13px 19px; border: 1px solid rgba(45,212,191,.5); border-radius: 8px; color: #04110f; background: #2dd4bf; text-decoration: none; font-size: 14px; font-weight: 600; transition: transform .2s ease, background .2s ease; }
        .aiwh-button:hover { transform: translateY(-2px); background: #5eead4; }
        .aiwh-orbit { position: absolute; z-index: -1; width: 430px; height: 430px; border: 1px solid rgba(45,212,191,.1); border-radius: 50%; pointer-events: none; }
        .aiwh-orbit-one { top: 22px; left: calc(50% - 215px); }
        .aiwh-orbit-two { top: 62px; left: calc(50% - 175px); width: 350px; height: 350px; border-color: rgba(45,212,191,.07); }
        .aiwh-content { width: min(1000px, calc(100% - 48px)); margin: 0 auto; padding: 30px 0 90px; }
        .aiwh-section-heading { max-width: 620px; margin-bottom: 35px; }
        .aiwh-section-heading h2, .aiwh-contact h2 { margin-bottom: 12px; color: #f8fafc; font: 700 clamp(25px, 4vw, 34px)/1.2 'Syne', sans-serif; letter-spacing: -.035em; }
        .aiwh-section-heading > p:last-child { margin-bottom: 0; color: #94a3b8; line-height: 1.7; }
        .aiwh-steps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; margin: 0; padding: 0; list-style: none; }
        .aiwh-steps li { min-height: 175px; padding: 22px 19px; border: 1px solid rgba(148,163,184,.15); border-radius: 12px; background: linear-gradient(145deg, rgba(12,26,38,.85), rgba(6,13,20,.75)); }
        .aiwh-step-number { display: block; margin-bottom: 25px; color: #2dd4bf; font: 500 12px 'JetBrains Mono', monospace; }
        .aiwh-steps h3 { margin-bottom: 8px; color: #f1f5f9; font: 600 17px 'Syne', sans-serif; }
        .aiwh-steps p { margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.65; }
        .aiwh-oauth-note { display: flex; align-items: flex-start; gap: 16px; margin-top: 22px; padding: 20px 22px; border: 1px solid rgba(45,212,191,.18); border-radius: 12px; background: rgba(20,184,166,.055); }
        .aiwh-oauth-icon { display: grid; flex: 0 0 32px; place-items: center; width: 32px; height: 32px; border-radius: 9px; color: #2dd4bf; background: rgba(45,212,191,.12); }
        .aiwh-oauth-note p { margin: 2px 0 0; color: #a7b5c5; font-size: 14px; line-height: 1.7; }
        .aiwh-oauth-note strong { color: #e2e8f0; }
        .aiwh-contact { width: min(1000px, calc(100% - 48px)); margin: 0 auto 70px; padding: 27px 30px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 1px solid rgba(148,163,184,.14); border-radius: 14px; background: rgba(12,26,38,.55); }
        .aiwh-contact .aiwh-eyebrow { margin-bottom: 9px; }
        .aiwh-contact h2 { margin: 0; font-size: 25px; }
        .aiwh-contact > a { color: #2dd4bf; text-decoration: none; font-weight: 500; }
        .aiwh-contact > a:hover { color: #99f6e4; }
        .aiwh-contact > a span { margin-left: 6px; }
        .aiwh-footer { min-height: 76px; border-top: 1px solid rgba(148,163,184,.12); color: #64748b; font-size: 13px; }
        :global(a:focus-visible) { outline: 2px solid #5eead4; outline-offset: 4px; border-radius: 3px; }
        @media (max-width: 760px) { .aiwh-hero { min-height: 430px; padding-top: 85px; padding-bottom: 80px; } .aiwh-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 520px) { .aiwh-header, .aiwh-footer, .aiwh-content, .aiwh-contact { width: calc(100% - 36px); } .aiwh-header { min-height: 68px; } .aiwh-brand { font-size: 14px; gap: 8px; } .aiwh-brand-mark { width: 30px; height: 30px; } .aiwh-header-link { font-size: 13px; } .aiwh-hero { min-height: 400px; padding: 75px 18px; } .aiwh-steps { grid-template-columns: 1fr; } .aiwh-steps li { min-height: auto; } .aiwh-step-number { margin-bottom: 16px; } .aiwh-content { padding-bottom: 65px; } .aiwh-contact { align-items: flex-start; flex-direction: column; padding: 23px; margin-bottom: 50px; } .aiwh-footer { min-height: 70px; } }
        @media (prefers-reduced-motion: reduce) { .aiwh-button, .aiwh-header-link, .aiwh-footer a { transition: none; } }
      `}</style>
    </>
  )
}
