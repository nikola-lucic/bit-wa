
const Header = (props) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

const BlogItem = (props) => {
    return (
        <li>
            <h2 id={props.id}>{props.title}</h2>
            <p>{props.blogText} </p>
        </li>
    )
}

const BlogList = (props) => {
    return (
        <ul>
            {postsData.map((listItem) => {
                return <BlogItem id={listItem.id} title={listItem.title} blogText={listItem.body} />
            })}
        </ul>
    )
}

const App = (props) => {
    return (
        <div>
            <Header title={"My Blog"} />
            <MainElement />
        </div>
    )

}


const MainElement = (props) => {
    return (
        <main>
        <BlogList/>
        </main>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);