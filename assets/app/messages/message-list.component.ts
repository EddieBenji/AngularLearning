import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
@Component({
    selector: 'app-message-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <app-message
                    [message]="message"
                    (editClicked)="message.content=$event"
                    *ngFor="let message of messages"
            ></app-message>
    </div>
`
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {
        //execute this method after the component has been initialized and after the properties have been initialized
        this.messages = this.messageService.getMessages();
    }
}