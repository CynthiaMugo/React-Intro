import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
function ComponentA() {
    return (
        <div className="border-container">
            <ComponentB />
            <ComponentC />
        </div>
    );
}
export default ComponentA;