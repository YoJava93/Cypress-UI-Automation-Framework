import { navigateTo } from "../../support/pages/NavigationPage";
import { DragAndDropCircle} from "../../support/pages/DragAndDropCirclePage";

const dragAndDropCircle = new DragAndDropCircle();


describe("Testing drag and drop", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Drag and drop test", () => {

        cy.scrollTo(0, 500);

        cy.get(dragAndDropCircle.dragAndDropCircleButton).click();
        // cy.dragAndDrop(dragAndDropCircle.draggableRed, dragAndDropCircle.target)

            // it gets stuck when trying to drag the circle
        // cy.get(dragAndDropCircle.draggableRed).should('be.visible')
        //                                       .drag(dragAndDropCircle.target, { force: true })

        cy.dragAndDrop(dragAndDropCircle.target, dragAndDropCircle.draggableRed);

        cy.get(dragAndDropCircle.target).find('div.red')
                                        .should('have.attr', 'draggable', 'true');

    })


})