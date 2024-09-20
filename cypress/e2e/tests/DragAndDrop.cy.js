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

        cy.get(dragAndDropCircle.draggableRed).drag(dragAndDropCircle.target, { force: true })

        cy.get(dragAndDropCircle.target).find('div.red')
                                        .should('have.attr', 'draggable', 'true');

    })


})