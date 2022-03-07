import Layout from "../../components/Layout";

export default function UserDetail(props) {
  // const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  // console.log(user);
  return (
    <Layout pageTitle="Users Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => (
    {
      params: {
        id: `${user.id}`,
      },
    }
  ));
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  return {
    props: {
      user,
    },
  }
}