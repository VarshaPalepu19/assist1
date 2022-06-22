import { LightningElement ,track,wire} from "lwc";
import getDetails from '@salesforce/apex/demo.getDetails';

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  @track item;
  //@track color;
  @track format;
  @wire(getDetails) item({error,data}){
    if(data){
        this.item=data;
        /*for(let a=0;a<this.item.length;a++){
          this.item[a].colour=this.item[a].Background_color__c;
        }*/
        /*this.item = JSON.parse(JSON.stringify(data)).map(m => {
          this.color = "background:"+m.Background_color__c+"!important;";
          return m;
        });
        this.item = JSON.parse(JSON.stringify(this.item));*/
    }
    else if(error){
        this.error=error;
        this.item=undefined;
    }
}
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }

  /*getMonth(index){
    let monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    return monthNames[index];
  }*/
}
