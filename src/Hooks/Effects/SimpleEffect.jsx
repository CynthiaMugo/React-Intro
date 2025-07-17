import { useEffect, useState } from 'react';
function SimpleEffect() {

    // useEffect(function, [dependency array])
    //useEffect(function) - without dependency
    // useEffect(function,[])-> it will run only once
    // useEffect(function,[radius])-> initially when component is mounte and when radius

        const [n, setN] = useState(0);
        const [showForm, setShowForm] = useState(false);

        const getStatus = () => {
            if (showForm === true) {
                return "Hide Form";
            }
            return "Show Form";
        }
        //button 1 & 2
            const increment = () => {
                setN(n + 1);
            };
            const decrement = () => {
                let newState = n - 1;
                setN(newState);
            };
            // Whenever state change occurs
            // It triggures a rerender of the component
            // if the useEffect does not have dependency it will rerender
            // useEffect(() => {
            // console.log("Useefect has run");
            //     });
        // Using use Effect with empty dependency
        // Empty dependency useEffect only once Intital render Only

        useEffect(() => {
            console.log("useEffect has run");
        }, []);

    return (
        <div>
            <h2>Simple Effect</h2>
            <div>
                <button className="button-style" onClick={decrement}>-</button>
                <span style={{padding: "10px"}}>{n}</span>
                <button className="button-style" onClick={increment}>+</button>
                <div>
                <button className="button-style" style={{marginTop: "10px"}} onClick={() => {
                        if (showForm === true) {
                            setShowForm(false);
                        } else {
                            setShowForm(true);
                        }
                        }}>
                        {getStatus()}
                    </button>
                    <MyForm showForm={showForm} />
                </div>
            </div>
        </div>
    );
}

function MyForm(props) {
  const { showForm } = props;

  if (showForm === false) {
    return null;
  }

  return (
    <div>
      <UnMountComponent />
    </div>
  );
}

function UnMountComponent() {
    let k = 1;
  useEffect(() => {
    console.log("Show Form has been Mounted");

    //kill interval
    let interval = setInterval(() => {
        console.log("K is", k);
        k = k + 1
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Component Unmounted");
        clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Unmount Component</h1>
      <div>
        <p>X Axios</p>
        <p>X Axios</p>
      </div>
    </div>
  );
}

export default SimpleEffect;