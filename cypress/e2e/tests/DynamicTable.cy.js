import { DynamicTablepage } from "../../support/pages/DynamicTablePage";
import { navigateTo } from "../../support/pages/NavigationPage";

const dynamicTable = new DynamicTablepage();

describe("Testing dynamic table", () => {

    beforeEach(() => {
        navigateTo.main();
    }) 

    it("Testing dynamic table", () => {

        cy.get(dynamicTable.dynamicTableButtom).click();

        cy.get(dynamicTable.table).contains('td', 'Chrome').parent('tr').within(() => {
            
            // Retrieve all the values from the row
            cy.get('td').then(($cells) => {
                let rowData = [];

                // Loop through each cell and push the text to rowData array
                $cells.each((_, $cell) => { // _ ignoring the index
                    rowData.push($cell.innerText.trim());
                });

                // Join the rowData array to make a single string for comparison
                const data = rowData.join(' ');

                cy.log(`Row Data: ${data}`);

                // Get the expected result from the element
                // fails here can not find the expectedResultData element ??
                cy.get(dynamicTable.expectedResultData).then(($element) => {
                    const expectedResult = $element.text().trim();
                    
                    cy.log(`Expected Result: ${expectedResult}`);

                
                    expect(data).to.contain(expectedResult,'Expected "${expectedResult}" to be part of "${data}"');
                });
            });
        });
    });
});
