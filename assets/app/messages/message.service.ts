import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {Message} from "./message.model";

//with this we are able to add the http service.
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) {
    }

    private getBaseUrl() {
        return 'http://localhost:3000/message';
    }

    private getToken() {
        const token = localStorage.getItem('token');
        return token ? '?token=' + token : '';
    }

    addMessage(message: Message) {
        // this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.getBaseUrl() + this.getToken(), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        // return this.messages;
        return this.http.get(this.getBaseUrl())
            .map((response: Response) => {
                const messages = response.json().obj;
                //Let's transform the message from the back to the front
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message._id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.patch(this.getBaseUrl() + '/' + message.messageId + this.getToken(), body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete(this.getBaseUrl() + '/' + message.messageId + this.getToken())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}