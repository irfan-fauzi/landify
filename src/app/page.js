import ListData from "@/components/ListData";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataPost = await res.json() 
  return (
   <div className="max-w-[600px] mx-auto mt-5">
    <h1 className="text-4xl">Home</h1>
    <p className="mt-5">data dari API secara server Component: </p>
    <div className="border mt-3">
    {
      <ul className="list-decimal list-inside">
        {dataPost.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    }
    </div>
   </div>
  );
}
