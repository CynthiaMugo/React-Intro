//thus is just to refer the rendered data is on ObjData file
//export data
//first way to display array and object data 
//go to ObjData to see each of these in their own components
function ObjData() {
    let person = {
        author: "Samson Mwangi",
        is_married: true,
        salary: 30000,
    };
    
    //Destructure an object
    // let author = person.author;
    // let is_married = person.is_married

    const { author, is_married, salary } = person; //div2

    //array data
    let arrayData = ["John Mugi", true, 40000];
    const [author1, authorIsMarried, authorSalary] = arrayData;

    function calculatePaye(salary) {
        return salary * 0.16
    }

    return (
    <div>
    <div>
        <h1>Person 1:Dot Notation/Bracket Notation</h1>
        <p>The Author of this book is {person.author}</p>
        <p>The author is married {person.is_married.toString()}</p>
        <p>The author salary is {person.salary}</p>
        <p>The paye is {calculatePaye(person.salary)}</p>
    </div>
    <div>
        <h1>Person 2:Destructure from Object</h1>
            <p>The Author of this book is {author}</p>
            <p>The author is married {is_married?.toString()}</p>
            <p>The Author salary {salary}</p>
            <p>The paye is {calculatePaye(salary)}</p>
    </div>
    <div>
        <h1>Person 3:Destructure An Array</h1>
            <p>The Author of this book is {author1}</p>
            <p>The author is married {authorIsMarried.toString()}</p>
            <p>The Author salary {authorSalary}</p>
            <p>The paye is {calculatePaye(authorSalary)}</p>
    </div>
    </div>
    );
}
//export default ObjData;