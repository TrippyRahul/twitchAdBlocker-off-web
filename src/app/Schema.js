import Script from "next/script";

export default function Schema() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can i prevent dangerous websites in twitch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To protect your browser from dangerous websites, the only way is to download and install twitch ad solutions. The best part is this this extension is free of cost and there is no hidden charges where you can block all kind of unnecessary ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of ads this extension block?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It block all kind of ads such as pop-ups, video ads, and banner ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to block ads ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you are not aware of how to block ads on twitch, then all you have to do is to download and install the extension",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is twitch adblock extension free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes!! It is absolutely free of cost. Where you can block ads in this extension.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this safe to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this is safe to use. By installing ublock origin twitch ads , you can watch video adblock for twitch.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
}
