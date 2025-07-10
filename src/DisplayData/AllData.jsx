function AllData() {
    const author = "Samson Mwangi"; //string
    let is_married = true; //boolean
    let salary = 30000; //number

    function calculatePaye(salary) {
        return salary * 0.16
    }

    return (
<div>
    <p>The Author of this book is {author}</p>
    <p>The author is married {is_married.toString()}</p>
    <p>The author salary is {salary}</p>
    <p>The paye is {calculatePaye(salary)}</p>
</div>
    );
}

//export data
export default AllData;