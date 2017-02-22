import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {Message} from "./message.model";
import {ErrorService} from "../errors/error.service";

//with this we are able to add the http service.
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    private static getBaseUrl() {
        return 'http://localhost:3000/message';
    }

    private static getToken() {
        const token = localStorage.getItem('token');
        return token ? '?token=' + token : '';
    }

    addMessage(message: Message) {
        // this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(MessageService.getBaseUrl() + MessageService.getToken(), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id
                );
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    getMessages() {
        // return this.messages;
        return this.http.get(MessageService.getBaseUrl())
            .map((response: Response) => {
                const messages = response.json().obj;
                //Let's transform the message from the back to the front
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(
                        new Message(
                            message.content,
                            message.user.firstName,
                            message._id,
                            message.user._id
                        )
                    );
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    editMessage(message: Message) {
        //Because we want to edit the message from the input component, we have to delegate the call to that component
        //That's why the message input component has to subscribe to the event of the messageIsEdit object
        //on the ngOnInit() method, because it has to listen always if any change has happened.
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.patch(MessageService.getBaseUrl() + '/' + message.messageId + MessageService.getToken(), body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete(MessageService.getBaseUrl() + '/' + message.messageId + MessageService.getToken())
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
}