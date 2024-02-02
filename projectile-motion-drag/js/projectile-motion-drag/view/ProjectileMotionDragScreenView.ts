// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ProjectileMotionDragConstants from '../../common/ProjectileMotionDragConstants.js';
import projectileMotionDrag from '../../projectileMotionDrag.js';
import ProjectileMotionDragModel from '../model/ProjectileMotionDragModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to ProjectileMotionDragScreenView here
};

type ProjectileMotionDragScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class ProjectileMotionDragScreenView extends ScreenView {

  public constructor( model: ProjectileMotionDragModel, providedOptions: ProjectileMotionDragScreenViewOptions ) {

    const options = optionize<ProjectileMotionDragScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - ProjectileMotionDragConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - ProjectileMotionDragConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

projectileMotionDrag.register( 'ProjectileMotionDragScreenView', ProjectileMotionDragScreenView );