import { Component, OnInit } from '@angular/core';
import { testGCPSDMActivities } from '../../shared/models/gcp-sdm-activities';
import { testGCPSDMSubscriptions } from '../../shared/models/gcp-sdm-subscriptions';
import { GCPSDMActivity } from '../../shared/models/gcp-sdm-activity';
import { GCPSDMSubscription } from '../../shared/models/gcp-sdm-subscription';
import clone from 'lodash/clone';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['./style.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  recentUpdates: GCPSDMActivity[] = [];
  subscriptions: GCPSDMSubscription[] = [];

  ngOnInit() {

    //clone is faster than slice
    this.recentUpdates = clone(testGCPSDMActivities);
    this.subscriptions = clone(testGCPSDMSubscriptions);


  }

}
