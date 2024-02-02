// Copyright 2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import testSim from './testSim.js';

type StringsType = {
  'test-sim': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const TestSimStrings = getStringModule( 'TEST_SIM' ) as StringsType;

testSim.register( 'TestSimStrings', TestSimStrings );

export default TestSimStrings;
