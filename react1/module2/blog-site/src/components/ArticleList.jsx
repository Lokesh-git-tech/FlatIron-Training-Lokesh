import Article from "./Article";

function ArticleList(props) {
  const articleComponents = props.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });

  return <main>{articleComponents}</main>;
}

export default ArticleList;