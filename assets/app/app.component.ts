import {Component} from "@angular/core";
import {MessageService} from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

    //It'll create one single instance of the MessageService.
    //Because the injection is hierarchical, this same instance will be shared.
    providers: [MessageService]
})
export class AppComponent {

}