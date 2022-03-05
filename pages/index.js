import Image from 'next/image';
import Layout from '../components/Layout';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src='/kucing.jpg' width={200} height={300} alt='kucing' />
      <h1>Welcome Okky Maheswara</h1>
    </Layout>
  )
}
