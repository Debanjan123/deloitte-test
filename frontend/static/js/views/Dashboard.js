import AbstractView from "./AbstractView.js";
import dashboardHTML from './dashboard.view.js'
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return dashboardHTML();
    }
}