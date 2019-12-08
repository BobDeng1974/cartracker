import {Component} from '@angular/core';
import {Tracker, TrackerMode} from '../../../../data/tracker';
import {App} from '../../../../app';
import {ScreenComponent} from '../../../screen';

@Component({
  selector: 'app-trackers-view',
  templateUrl: 'trackers-view.page.html'
})
export class TrackersViewPage extends ScreenComponent {
  get trackerMode() { return TrackerMode; }

  /**
   * Tracker being edited on this page.
   */
  public tracker: Tracker = null;

  public display() {
    this.tracker = App.navigator.getData();
    if (this.tracker === null) {
      App.navigator.pop();
    }
  }

  /**
   * Delete tracker from the list.
   */
  public delete() {
    let index = App.trackers.indexOf(this.tracker);
    if (index !== -1) {
      App.trackers.splice(index, 1);
      App.store();
      App.navigator.pop();
    }
  }
}
