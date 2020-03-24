import {User} from "../models/User";
import {View} from "./View";

export class UserForm extends View {
    eventsMap = (): {[key: string]: () => void} => {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        };
    };

    onSetAgeClick = () => {
        this.model.setRandomAge();
    };

    onSetNameClick = () => {
        const input = document.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({name});
        }
    };

    template = (): string => {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button class="set-name">Set Name</button>
                <button class="set-age">Set random age</button>
            <div>
        `;
    };
}