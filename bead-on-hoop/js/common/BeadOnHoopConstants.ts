// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Kaden Hart
 */

import beadOnHoop from '../beadOnHoop.js';

const BeadOnHoopConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  BEAD_CONFIG: [
    {
      val: ".1",
      id: "radius",
      name: "(r)",
      type: "range",
      units: "m",
      display: "radius",
      tooltip: "Hoop radius (m)",
      min:"0.1",
      max:"10"
    },
    {
      val: "9.8",
      id: "gravity",
      name: "(g)",
      type: "range",
      units: "m/s&#178;",
      display: "gravity",
      tooltip: "Gravitational acceleration (m/s^2)",
      min:"0",
      max:"100"
    },
    {
      val: "5.0",
      id: "friction",
      name: "(k)",
      type: "range",
      units: "",
      display: "friction",
      tooltip: "Coefficient of kinetic friction between the bead and the hoop",
      min:"0",
      max:"100"
    },
    {
      val: "1000",
      id: "omega",
      name: "(w)",
      type: "range",
      units: "degrees/s",
      display: "omega",
      tooltip: "Angular frequency of the hoop (degrees/s)",
      min:"0",
      max:"5000"
    },
    {
      val: "18",
      id: "omegaRads",
      name: "(w)",
      type: "range",
      units: "radians/s",
      display: "omega",
      tooltip: "Angular frequency of the hoop (radians/s)",
      min:"0",
      max:"90"
    },
    {
      val: "5",
      id: "theta",
      name: "(t)",
      type: "range",
      units: "degrees",
      display: "theta",
      tooltip: "Initial angular displacement of the bead from the bottom (degrees)",
      min:"0",
      max:"360"
    }, 
    {
      val: "0.6",
      id: "velocity",
      name: "(v)",
      type: "range",
      units: "m/s",
      display: "velocity",
      tooltip: "Initial velocity of the bead along the hoop (m/s)",
      min:"0",
      max:"10"
    },
    {
     val: "0.1",
      id: "simSpeed",
      name: "",
      type: "range",
      units: "x",
      display: "simulation speed",
      tooltip: "factor of speed for the simulation",
      min:"0.1",
      max:"3"
    },
    {
      val: ".001",
      id: "graphint",
      name: "",
      type: "number",
      units: "seconds",
      display: "graph update interval",
      tooltip: "How often there is a new data point (s)",
      min:"0.0001",
      max:".05"
    },
    {
      val: "5",
      id: "graphlen",
      name: "",
      type: "number",
      units: "seconds",
      display: "graph record length",
      tooltip: "length of graph data before refresh(s)",
      min:"1",
      max:"20"
    }
    // ,
    // {
    //   val: "true",
    //   id: "projection",
    //   name: "",
    //   type: "checkbox",
    //   units: "",
    //   "checked": "true",
    //   display: "Project trail on hoop?",
    //   tooltip: "project trail on the hoop vs in 3d space",
    //   min:"",
    //   max:""
    // },
    // {
    //   val: "true",
    //   id: "wrap",
    //   name: "",
    //   type: "checkbox",
    //   units: "",
    //   "checked": "true",
    //   display: "graph theta beyond 0-360",
    //   tooltip: "Limit theta between 0 and 360 degrees",
    //   min:"",
    //   max:""
    // }
  
  ]
  //TODO
};

beadOnHoop.register( 'BeadOnHoopConstants', BeadOnHoopConstants );
export default BeadOnHoopConstants;