export default function PostComponent({ post }) {

    return (
      <h1>hello</h1>
    )
  }

export async function getStaticProps (req) {

    
    const post = "this is post"
  
    return {
      props: {
        post: JSON.parse(JSON.stringify(post))
      },
      revalidate: 1
    }
  
  }