/**
*
* Copyright (c), all rights reserved Silicium World.
*   Frozent Package -> Atom Editor
* (c), 2019
*
**/
'use babel';

//import FrozentEditorInit from './core/workspace/EditorInitializer';
//import FrozentCompilerInit from './core/language/CompilerInit';
import FrozentView from './frozent-view';
import { CompositeDisposable } from 'atom';

export default {

  frozentView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.frozentView = new FrozentView(state.frozentViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.frozentView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.toggle();
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.frozentView.destroy();
  },

  serialize() {
    return {
      frozentViewState: this.frozentView.serialize()
    };
  },

  toggle() {
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
