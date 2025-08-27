import Greeting from "@/widgets/Greeting";

export default function Home() {
  const name = "something something";
  return (
    <>
      <h1>Big Title</h1>
      <Greeting name={name} />
    </>
  );
}
