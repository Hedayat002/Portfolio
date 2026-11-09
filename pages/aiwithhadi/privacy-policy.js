import Head from 'next/head'

export default function AIWithHadiPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>AIWithHadi Automation — Privacy Policy</title>
        <meta
          name="description"
          content="Privacy information for AIWithHadi Automation, including YouTube account authorization, channel access, video publishing, OAuth tokens, and access revocation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AIWithHadi Automation — Privacy Policy" />
        <meta
          property="og:description"
          content="How AIWithHadi Automation uses Google OAuth and YouTube data for its personal Shorts workflow."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="aiwh-policy-page">
        <header className="aiwh-policy-header">
          <a className="aiwh-policy-brand" href="/aiwithhadi">
            <span className="aiwh-policy-mark" aria-hidden="true">A</span>
            <span>AIWithHadi <span className="aiwh-policy-muted">Automation</span></span>
          </a>
          <a className="aiwh-policy-home-link" href="/aiwithhadi">Application home <span aria-hidden="true">↗</span></a>
        </header>

        <main className="aiwh-policy-main">
          <div className="aiwh-policy-intro">
            <p className="aiwh-policy-eyebrow">YOUR DATA &amp; YOUR CONTROL</p>
            <h1>Privacy Policy</h1>
            <p className="aiwh-policy-updated">AIWithHadi Automation <span aria-hidden="true">·</span> Last updated: November 9, 2026</p>
            <p className="aiwh-policy-lead">
              This policy describes how AIWithHadi Automation is intended to use Google and YouTube data for its personal AI and technology news YouTube Shorts workflow. The automation is maintained separately from this public website.
            </p>
          </div>

          <nav className="aiwh-policy-toc" aria-label="Policy sections">
            <span>In this policy</span>
            <a href="#data-access">Data accessed</a>
            <a href="#oauth">Google authorization</a>
            <a href="#use-sharing">Use and sharing</a>
            <a href="#tokens-logs">Tokens and logs</a>
            <a href="#retention-revocation">Retention and revocation</a>
          </nav>

          <div className="aiwh-policy-body">
            <section id="data-access">
              <h2>1. YouTube account and channel data</h2>
              <p>
                When the channel owner authorizes the application with Google OAuth 2.0, the automation is intended to access the YouTube account and channel information needed to identify the authorized channel and publish videos to it. This can include channel identification details and the information returned by YouTube for upload and publishing operations.
              </p>
              <p>
                The workflow prepares short-form scripts and videos about AI and technology news, then may submit video files and associated publishing metadata—such as a title, description, tags, or visibility setting—to YouTube when publishing is requested. The exact metadata submitted depends on the publishing operation.
              </p>
            </section>

            <section id="oauth">
              <h2>2. Google OAuth permissions</h2>
              <p>
                Google OAuth 2.0 is used so the channel owner can authorize YouTube access without providing a Google password to the application. The permissions requested are intended to support channel identification and video upload or management needed by the workflow.
              </p>
              <p>
                The automation implementation is maintained outside this repository, so the precise OAuth scope names and any additional scope details are not documented here. Google displays the requested permissions during authorization; review that consent screen before granting access. The application should request only the permissions needed for its YouTube features.
              </p>
              <p>
                Google user data is used to provide the authorized YouTube functionality described in this policy. It is not intended to be used for advertising or unrelated purposes. Google API data is handled in accordance with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">Google API Services User Data Policy</a>, including its Limited Use requirements.
              </p>
            </section>

            <section id="use-sharing">
              <h2>3. How data is used and shared</h2>
              <p>
                YouTube authorization and channel information are used for the owner's requested channel workflow, including identifying the authorized channel and publishing videos. Video content and its publishing metadata are sent to YouTube as part of the upload process. Google processes authorization and YouTube API requests under its own terms and privacy disclosures.
              </p>
              <p>
                The automation code and its operational integrations are outside this portfolio repository. No other recipient, analytics integration, or external data-sharing practice has been confirmed for this public-facing application description; this policy does not claim that none exist. The application owner should update this policy if the implementation sends Google user data to additional service providers.
              </p>
              <p>
                This website page itself is informational; Google authorization and video operations are performed by the separate automation system, not by this page.
              </p>
            </section>

            <section id="tokens-logs">
              <h2>4. OAuth tokens and operational logs</h2>
              <p>
                OAuth tokens are used by the automation to maintain the access the owner authorized, including when needed for subsequent YouTube operations. Tokens are sensitive credentials and should not be shared publicly. The implementation details for token storage, access controls, and handling are not available in this repository, so this policy does not make specific claims about encryption or other technical safeguards.
              </p>
              <p>
                The automation may create operational logs to monitor or troubleshoot authorization, channel lookup, upload, and publishing activity. The specific log fields, who can access those logs, and how long they are kept have not been confirmed here. The owner should ensure logs are limited to what is needed and do not expose OAuth tokens or unnecessary personal data.
              </p>
            </section>

            <section id="retention-revocation">
              <h2>5. Retention and revoking access</h2>
              <p>
                This repository does not document how long the separate automation retains tokens, channel information, videos, metadata, or operational logs, or whether any of them are automatically deleted. No retention period or automatic-deletion practice is promised by this policy. For questions about data held by the automation, contact the owner.
              </p>
              <p>
                You can revoke the application's Google access at any time through your Google Account’s third-party connections page: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">https://myaccount.google.com/permissions</a>. Revocation prevents the automation from using the revoked authorization for future access; it does not itself delete content already published to YouTube or establish deletion of information that may have been separately retained. You can also contact the owner to ask about data associated with the automation.
              </p>
            </section>

            <section id="contact">
              <h2>6. Contact</h2>
              <p>
                For questions about this policy, the automation, or a request concerning your data, contact the owner at <a href="mailto:techhadi61@gmail.com">techhadi61@gmail.com</a>.
              </p>
            </section>
          </div>

          <aside className="aiwh-policy-callout">
            <span className="aiwh-policy-callout-mark" aria-hidden="true">i</span>
            <p>This policy reflects the application details confirmed for the public website. The separate automation implementation should be reviewed to confirm its exact scopes, service providers, credential handling, logs, and retention practices before production authorization.</p>
          </aside>
        </main>

        <footer className="aiwh-policy-footer">
          <a href="/aiwithhadi">← Back to AIWithHadi Automation</a>
          <span>Questions? <a href="mailto:techhadi61@gmail.com">Contact the owner</a></span>
        </footer>
      </div>

      <style jsx>{`
        .aiwh-policy-page { min-height: 100vh; color: #e2e8f0; background: radial-gradient(ellipse at 50% 0%, rgba(20,184,166,.09), transparent 35%), #020408; font-family: 'DM Sans', sans-serif; }
        .aiwh-policy-header, .aiwh-policy-footer { width: min(1000px, calc(100% - 48px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .aiwh-policy-header { min-height: 78px; border-bottom: 1px solid rgba(148,163,184,.12); }
        .aiwh-policy-brand { display: inline-flex; align-items: center; gap: 11px; color: #f8fafc; text-decoration: none; font-weight: 600; letter-spacing: -.02em; }
        .aiwh-policy-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; color: #04110f; background: #2dd4bf; font-family: 'Syne', sans-serif; font-weight: 800; }
        .aiwh-policy-muted { color: #94a3b8; font-weight: 400; }
        .aiwh-policy-home-link, .aiwh-policy-footer a { color: #2dd4bf; text-decoration: none; font-size: 14px; }
        .aiwh-policy-home-link:hover, .aiwh-policy-footer a:hover { color: #99f6e4; }
        .aiwh-policy-home-link span { margin-left: 5px; }
        .aiwh-policy-main { width: min(790px, calc(100% - 48px)); margin: 0 auto; padding: 76px 0 80px; }
        .aiwh-policy-eyebrow { margin: 0 0 15px; color: #2dd4bf; font: 500 11px/1.4 'JetBrains Mono', monospace; letter-spacing: .16em; }
        .aiwh-policy-intro h1 { margin: 0 0 14px; color: #f8fafc; font: 800 clamp(38px, 6vw, 58px)/1.1 'Syne', sans-serif; letter-spacing: -.05em; }
        .aiwh-policy-updated { margin: 0 0 25px; color: #8292a5; font-size: 14px; }
        .aiwh-policy-updated span { margin: 0 6px; color: #2dd4bf; }
        .aiwh-policy-lead { max-width: 700px; margin: 0; color: #b1bdca; font-size: 17px; line-height: 1.8; }
        .aiwh-policy-toc { display: flex; flex-wrap: wrap; align-items: center; gap: 11px 18px; margin: 36px 0 42px; padding: 18px 20px; border: 1px solid rgba(148,163,184,.14); border-radius: 10px; background: rgba(12,26,38,.55); }
        .aiwh-policy-toc span { width: 100%; color: #8191a4; font: 500 10px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; }
        .aiwh-policy-toc a { color: #a7b5c5; font-size: 13px; text-decoration-color: rgba(45,212,191,.4); text-underline-offset: 4px; }
        .aiwh-policy-toc a:hover { color: #2dd4bf; }
        .aiwh-policy-body section { padding: 0 0 29px; margin: 0 0 29px; border-bottom: 1px solid rgba(148,163,184,.12); scroll-margin-top: 24px; }
        .aiwh-policy-body h2 { margin: 0 0 13px; color: #f1f5f9; font: 650 21px/1.35 'Syne', sans-serif; letter-spacing: -.02em; }
        .aiwh-policy-body p { margin: 0 0 13px; color: #a7b5c5; font-size: 15px; line-height: 1.8; }
        .aiwh-policy-body p:last-child { margin-bottom: 0; }
        .aiwh-policy-body a { color: #2dd4bf; text-decoration: underline; text-decoration-color: rgba(45,212,191,.45); text-underline-offset: 3px; overflow-wrap: anywhere; }
        .aiwh-policy-body a:hover { color: #99f6e4; }
        .aiwh-policy-callout { display: flex; align-items: flex-start; gap: 14px; padding: 19px 20px; border: 1px solid rgba(45,212,191,.2); border-radius: 11px; background: rgba(20,184,166,.055); }
        .aiwh-policy-callout-mark { display: grid; flex: 0 0 23px; place-items: center; width: 23px; height: 23px; border-radius: 50%; color: #04110f; background: #2dd4bf; font: 700 14px 'Syne', sans-serif; }
        .aiwh-policy-callout p { margin: 0; color: #a7b5c5; font-size: 13px; line-height: 1.75; }
        .aiwh-policy-footer { min-height: 78px; border-top: 1px solid rgba(148,163,184,.12); color: #8191a4; font-size: 13px; }
        .aiwh-policy-footer > a { color: #a7b5c5; }
        :global(a:focus-visible) { outline: 2px solid #5eead4; outline-offset: 4px; border-radius: 3px; }
        @media (max-width: 600px) { .aiwh-policy-header, .aiwh-policy-footer, .aiwh-policy-main { width: calc(100% - 36px); } .aiwh-policy-header { min-height: 68px; } .aiwh-policy-brand { font-size: 14px; gap: 8px; } .aiwh-policy-mark { width: 30px; height: 30px; } .aiwh-policy-home-link { font-size: 13px; } .aiwh-policy-main { padding-top: 56px; padding-bottom: 60px; } .aiwh-policy-toc { gap: 13px; } .aiwh-policy-toc a { width: calc(50% - 8px); } .aiwh-policy-footer { align-items: flex-start; flex-direction: column; justify-content: center; gap: 10px; min-height: 90px; } }
        @media (prefers-reduced-motion: reduce) { * { scroll-behavior: auto !important; } }
      `}</style>
    </>
  )
}
