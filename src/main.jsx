import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// default import
import TestComponent from './Exports/TestComponent';

// Named imports
import { Component1, Component2 } from './Exports/NamedExports';

// combined imports
import MainComponent, {C1, C2} from './Exports/CombinedExports';

//import AllData
import AllData from './DisplayData/AllData';
//impoort ObjData
import ObjData from './DisplayData/ObjData';
//import data with map method
import ArrayData from './DisplayData/ArrayData';
//import parentcomponent that uses props
import ParentComponent from './Props/PrimitiveData';

import MiniProject from './MiniProject/index.jsx';
// import css
import './css.css';
// import Buttons component
import Buttons from './Events/Buttons';
// import Form component
import Form from './Events/Form';

// import SimpleState component
import SimpleState from './Hooks/State/SimpleState';

// import destructured state
import SimpleState2 from './Hooks/State/SimpleState2';
//import form state
import FormState from './Hooks/State/FormState';
import SimpleEffect from './Hooks/Effects/SimpleEffect';

//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ManualRoute from './Routing/ManualRoutes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TestComponent></TestComponent>
    <TestComponent/>
    <TestParagraph></TestParagraph>
    <TestParagraph/>
    <Component1 />
    <Component2 />
    <MainComponent/>
    <C1/>
    <C2/> */}
    {/* <AllData/>
    <ObjData/>
    <ArrayData/> */}
    {/* <ParentComponent /> */}
    {/* <MiniProject /> */}
    {/* <Buttons />
    <Form /> */}
    {/* <SimpleState />
    <SimpleState2/> */}
    {/* <FormState /> */}
    {/* <SimpleEffect /> */}
    <ManualRoute />

  </StrictMode>,
);

function TestParagraph() {
  return (
    <div>
      <p>My first React Component</p>
    </div>
  );
}
