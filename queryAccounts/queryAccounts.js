import { LightningElement, track, wire } from 'lwc';
import queryAccountsMethod from '@salesforce/apex/queryAccounts.queryAccountsMethod';
import queryAccountsMethodImperative from '@salesforce/apex/queryAccounts.queryAccountsMethodImperative';
export default class QueryAccounts extends LightningElement {


    @track wireAccounts;
    @track error;
    //below code will be used as a function
    @wire(queryAccountsMethod)
    queryacc({ error, data }) {
        if (data) {
            this.wireAccounts = data;
            console.log('data' + JSON.stringify(this.lstaccounts));
        } else if (error) {
            this.error = error;
        }
    }


    @track imperativeAccounts;
    @track error;

    handleLoad() {
        queryAccountsMethodImperative()
            .then(result => {
                this.imperativeAccounts = result;
                console.log('imp' + JSON.stringify(this.imperativeAccounts));

            })
            .catch(error => {
                this.error = error;
            });
    }
}