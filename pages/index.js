import Head from 'next/head'
import serialize from "next-mdx-remote/serialize";
import MdxRemote from 'next-mdx-remote/mdx-remote'

export default function Home({ source }) {
  return (
    <div>
      <MdxRemote source={source} />
    </div>
  )
}

export async function getStaticProps() {
  const markdown = `
# Hello World

export const FancyButton = ({ text = "Press" }) => {
  return (
    <button onClick={() => console.log}>{text}</button>
  )
}
  
<FancyButton text="Press me" />
`;

  return {
    props: {
      source: await serialize(markdown),
    }
  }
}