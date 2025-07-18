function Home(props) {
    const { page } = props;
    if (page === "home") {
        return (
        <div>
            <h1>This is the Home Page</h1>
        </div>
        );
    }
    return null;
    
}
export default Home;