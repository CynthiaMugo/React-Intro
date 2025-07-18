function About(props) {
    const { page } = props;
    if (page === "about") {
        return (
        <div>
            <h1>This is the About Page</h1>
        </div>
    );
    }
    return null;
    
}
export default About;