import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enterMeetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
