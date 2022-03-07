import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

export default function User(props) {
  const { dataUsers } = props;
  const router = useRouter();
  // console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => (
        <div key={user.id} className={styles.card} onClick={() => router.push(`/users/${user.id}`)}>
          <p>
            Name : {user.name}<br />
            Email : {user.email}<br />
          </p>
        </div>
      ))}
    </Layout >
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  }
}