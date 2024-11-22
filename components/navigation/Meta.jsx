import Head from "next/head";

export default function  Meta ({ title }) {
const metaTitle =  title? `Perrez - ${title} ` : "Haffy - Grow Healthy"

   return (
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content={"Hair care, Hair products, Natural hair care, Organic hair products, Shampoo and conditioner,Hair treatments, Hair oils, Healthy hair, Hair growth, Hair repair"
        }
      />
      <meta
        name="description"
        content={"Transform your hair with our natural, expert-crafted products designed for health, strength, and shine"}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icons/haffy-icon.png" />
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ "/images/Plogo.png"} />
      </Head>
   );
};