export class DynamicTablepage {

    get dynamicTableButtom() {
        return 'a[href="/dynamic-table"]'
    }

    get table() {
        return 'div[class="col-md-6"]'
    }

    get expectedResultData() {
        return 'p[id="chrome-cpu"]'
    } 


}