import { LightningElement, api } from "lwc";
import getDetails from '@salesforce/apex/activitytimeline.getDetails';
/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";
}