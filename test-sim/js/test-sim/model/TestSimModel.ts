// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import testSim from '../../testSim.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';
import Property from '../../../../axon/js/Property.js';

type SelfOptions = {
  //TODO add options that are specific to TestSimModel here
};

type TestSimModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class TestSimModel implements TModel {
  gravityProperty: Property<number>;

  public constructor( providedOptions: TestSimModelOptions ) {
    this.gravityProperty = new Property(9.8);
    this.gravityProperty.link(gravity => {console.log(gravity)});
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

testSim.register( 'TestSimModel', TestSimModel );