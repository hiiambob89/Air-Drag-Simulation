// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kaden Hart
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TestSimConstants from '../../common/TestSimConstants.js';
import testSim from '../../testSim.js';
import TestSimModel from '../model/TestSimModel.js';
import optionize from '../../../../phet-core/js/optionize.js';
import HSlider from '../../../../sun/js/HSlider.js';
import Property from '../../../../axon/js/Property.js';
import Range from '../../../../dot/js/Range.js';
import { DOM, Display, Input, VBox } from '../../../../scenery/js/imports.js';
import TextInput from '../model/TextInput.js';
type SelfOptions = {
 //TODO add options that are specific to TestSimScreenView here
};

type TestSimScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class TestSimScreenView extends ScreenView {

  public constructor( model: TestSimModel, providedOptions: TestSimScreenViewOptions ) {

    const options = optionize<TestSimScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

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
      //right: this.layoutBounds.maxX - TestSimConstants.SCREEN_VIEW_X_MARGIN,
      //bottom: this.layoutBounds.maxY - TestSimConstants.SCREEN_VIEW_Y_MARGIN,
      center: this.layoutBounds.center,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
    const valueProperty = new Property(0);//use link method to listen for changes
    const valueProperty2 = new Property(0);

    const mySlider = new HSlider(model.gravityProperty, new Range(0,10));
    const mySlider2 = new HSlider(valueProperty2, new Range(0,10));
    
    const myVBox = new VBox({children: [mySlider, mySlider2], right: this.layoutBounds.maxX - TestSimConstants.SCREEN_VIEW_X_MARGIN, bottom: this.layoutBounds.maxY - TestSimConstants.SCREEN_VIEW_Y_MARGIN});
    this.addChild(myVBox); 
    const span = document.createElement("form");
    span.innerHTML = '<span><label>input here: </label><input type="text" defaultValue="hi"><textarea></textarea></span>'
    const myDOMNode = new phet.scenery.DOM(span);
    
    this.addChild(myDOMNode);
    const myText = new TextInput({inputType:"text", initialText:"hi", onlyLetters:false, width:20, linkObj:model.gravityProperty})
    this.addChild(myText)
    

  } // try simgraph domelement for mathquill

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

testSim.register( 'TestSimScreenView', TestSimScreenView );