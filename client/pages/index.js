import buildClient from "../api/buildClient";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <div>LandingPage</div>;
};

LandingPage.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/currentuser");
  return data;
};

export default LandingPage;
