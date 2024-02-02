// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import projectileMotionDrag from '../../projectileMotionDrag.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';
import Property from '../../../../axon/js/Property.js';

type SelfOptions = {
  //TODO add options that are specific to ProjectileMotionDragModel here
};

type ProjectileMotionDragModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class ProjectileMotionDragModel implements TModel {
  public gravityProp: Property<number>;
  public gravity: number;
  public massProp: Property<number>;
  public mass: number;
  public constructor( providedOptions: ProjectileMotionDragModelOptions ) {
    
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
    
  }
}

projectileMotionDrag.register( 'ProjectileMotionDragModel', ProjectileMotionDragModel );