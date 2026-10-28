import { useEffect, useState } from 'react'
import axios from 'axios'

const Notice = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadPosts()
  }, [])

  const filteredPosts = data.filter((post) =>
    post.title.includes(search)
  )

  return (
    <section>
      <h2>공지사항</h2>

      <input
        className="search"
        placeholder="제목 검색"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p>{filteredPosts.length}건</p>

      <ul className="notice-list">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <span className="notice-id">{post.id}</span>
            {post.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notice