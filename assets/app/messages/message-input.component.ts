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
            this.messageService.updateMessage(this.message).subscribe(
                // Param => how to use it!
                result => console.log(result)
            );
            this.message = null;
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
        //Starts listening if the messageIsEdit object has been changed.
        //The .subscribe call has to do with the http call, not with listening to the messageIsEdit object.
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm()
    }
}