import Head from "next/head";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className="header">
        <ul className="navigation">
          <li>Thing1</li>
          <li>Thing2</li>
          <li>Thing3</li>
          <li>Thing4</li>
        </ul>
      </div>

      <main>{children}</main>

      <style jsx>
        {`
          .root {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 5fr ;
            grid-template-areas:
              "header header header"
              "main main main";
            box-sizing: border-box;
            height: 100%;
          }

          .header {
            grid-area: header;
            background: yellow;
          }

          .navigation {
            display: flex;
            flex-flow: wrap;
            list-style: none;
          }

          .navigation > li {
            margin-right: 10px;
          } 

          main {
            grid-area: main;
            display: flex;
            min-height: 100%;
          }
        `}
      </style>
    </div>
  );
}
