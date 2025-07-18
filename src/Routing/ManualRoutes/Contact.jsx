function Contact(props) {
    const { page } = props;
    if (page === "contact") {
        return (
        <div>
            <h1>This is the Contact Us Page</h1>
        </div>
    );
    }
    return null;
    
}
export default Contact;