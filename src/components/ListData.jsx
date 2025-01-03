'use client'
import { useEffect, useState } from "react"

const ListData = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const resJson = await res.json()
      const limit10 = resJson.slice(0,10)
      setData(limit10)
    }
    getPosts()
    
  },[])
  return (
    <>
      <h1 className="text-red-500 text-3xl">List data CSR Client :</h1>
      <ul className="list-decimal list-inside">
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ListData