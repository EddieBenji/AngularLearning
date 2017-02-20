import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {

    message: Message;

    constructor(private messageService: MessageService) {
    }

    onSubmit(form: NgForm) {
        if (this.message) {
            //Edit
            this.message.content = form.value.content;
            this.message = null;
            this.messageService.updateMessage(this.message);
        } else {
            //create
            const message = new Message(form.value.content, 'Lalo');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error),
                );
        }

        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm()
    }
}