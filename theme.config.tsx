import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const logo = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      fontWeight: "bold",
      gap: "0.5rem",
    }}
  >
    <img src="/logo.png" alt="Liu Purnomo" width="30" height="30" />
    <div className="flex">Liu Purnomo</div>
  </div>
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Liu Purnomo",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://drone.liupurnomo.com/og.jpeg"
        : `https://drone.liupurnomo.com/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Drone Indonesia API Docs" />
        <meta name="og:description" content="Drone Indonesia API Docs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="drone.liupurnomo.com" />
        <meta name="twitter:url" content="https://drone.liupurnomo.com" />
        <meta name="og:title" content={title ? title + " – Drone" : "Drone"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="drone" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  },
  project: {
    link: "https://github.com/liu-purnomo/style-guide",
  },
  chat: {
    link: "https://discord.gg/BEeMTGmQ",
  },
  docsRepositoryBase: "https://github.com/liu-purnomo/style-guide/tree/main",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center">
        <p className="">
          © {new Date().getFullYear()} <a href="https://liupurnomo.com">Liu Purnomo</a>
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
