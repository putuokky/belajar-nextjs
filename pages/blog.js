import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  const { dataBlog } = props;
  // console.log(dataBlog);
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    }
  }
}