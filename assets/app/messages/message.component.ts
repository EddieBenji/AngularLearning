import {Component, Input} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message', //will insert a selector like this: <app-message>....</app-message>
    templateUrl: './message.component.html',
    styles: [`
            .author{
                display:inline-block;
                font-style: italic;
                font-size: 12px;
                width: 80%;
            }
            
            .config{
                display: inline-block;
                text-align: right;
                font-size: 12px;
                width: 19%;
            }
    `]
})

export class MessageComponent {
    //You can write an alias, for example: @Input('inputMessage')
    //and inside the app.component.html you'll have to put this same alias in the left side of the expr.
    @Input() message: Message;


    onEdit() {
        //In here we'll send the message to the message service, in order to edit it.
        this.messageService.editMessage(this.message);
    }

    constructor(private messageService: MessageService) {

    }

    onDelete() {
        this.messageService.deleteMessage(this.message).subscribe(
            result => console.log(result)
        );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}