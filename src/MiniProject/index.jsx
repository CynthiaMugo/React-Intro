import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
function ComponentA() {
    return (
        <div>
            <ComponentB />
            <ComponentC />
        </div>
    );
}
export default ComponentA;