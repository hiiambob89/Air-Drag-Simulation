// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import TestSimColors from '../common/TestSimColors.js';
import testSim from '../testSim.js';
import TestSimModel from './model/TestSimModel.js';
import TestSimScreenView from './view/TestSimScreenView.js';
import TestSimStrings from '../TestSimStrings.js';

type SelfOptions = {
  //TODO add options that are specific to TestSimScreen here
};

type TestSimScreenOptions = SelfOptions & ScreenOptions;

export default class TestSimScreen extends Screen<TestSimModel, TestSimScreenView> {

  public constructor( providedOptions: TestSimScreenOptions ) {

    const options = optionize<TestSimScreenOptions, SelfOptions, ScreenOptions>()( {
      name: TestSimStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: TestSimColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new TestSimModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new TestSimScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

testSim.register( 'TestSimScreen', TestSimScreen );