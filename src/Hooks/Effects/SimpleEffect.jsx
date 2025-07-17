import { useEffect, useState } from 'react';
import chickenimg from './../../assets/chicken.jpg';
function SimpleEffect() {

    // useEffect(function, [dependency array])
    //useEffect(function) - without dependency
    // useEffect(function,[])-> it will run only once
    // useEffect(function,[radius])-> initially when component is mounte and when radius

        const [n, setN] = useState(0);
        const [showForm, setShowForm] = useState(false);

        const [chickens, setChickens] = useState([]);

        const [d, setD] = useState();
        useEffect(() => {
            let date = new Date();
            // bug memmory leak
            setTimeout(() => {
            setD(date.toISOString());
            }, 100);
        }, []);

        useEffect(() => {
            console.log("useEffect has run")
            let k = n / 5;
            k = Math.floor(k);

            let chickenArr = [];
            for(let i =  0; i < k; i++) {
                chickenArr.push(i + 1);
            }
            console.log(chickenArr);
            setChickens(chickenArr);
        }, [n]);

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
            <div>TS:{d}</div>
            <div>
                <button className="button-style" onClick={decrement}>-</button>
                <span style={{padding: "10px"}}>{n}</span>
                <button className="button-style" onClick={increment}>+</button>
                <div>
                    <div>
                        {chickens.map((chicken, index) => {
                        return (
                            <img
                                src={chickenimg}
                                key={index}
                                style={{
                                    width: "100px",
                                    margin: "10px",
                                }}
                                />
                                );
                                })}
                    </div>
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
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
        console.log("Mouse position");
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
        };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    }, []);

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
        <p>X Axios {position.x}</p>
        <p>X Axios {position.y}</p>
      </div>
    </div>
  );
}

export default SimpleEffect;