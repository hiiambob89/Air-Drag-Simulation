// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import ProjectileMotionDragColors from '../common/ProjectileMotionDragColors.js';
import projectileMotionDrag from '../projectileMotionDrag.js';
import ProjectileMotionDragModel from './model/ProjectileMotionDragModel.js';
import ProjectileMotionDragScreenView from './view/ProjectileMotionDragScreenView.js';
import ProjectileMotionDragStrings from '../ProjectileMotionDragStrings.js';

type SelfOptions = {
  //TODO add options that are specific to ProjectileMotionDragScreen here
};

type ProjectileMotionDragScreenOptions = SelfOptions & ScreenOptions;

export default class ProjectileMotionDragScreen extends Screen<ProjectileMotionDragModel, ProjectileMotionDragScreenView> {

  public constructor( providedOptions: ProjectileMotionDragScreenOptions ) {

    const options = optionize<ProjectileMotionDragScreenOptions, SelfOptions, ScreenOptions>()( {
      name: ProjectileMotionDragStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: ProjectileMotionDragColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new ProjectileMotionDragModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new ProjectileMotionDragScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

projectileMotionDrag.register( 'ProjectileMotionDragScreen', ProjectileMotionDragScreen );