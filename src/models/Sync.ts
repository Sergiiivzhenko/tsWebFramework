import axios, {AxiosResponse} from "axios";

export class Sync {
    fetch(): void {
        const rootUrl = 'http://localhost:3000';
        axios.get(`${rootUrl}/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const rootUrl = 'http://localhost:3000';
        const id = this.get('id');
        if (id) {
            axios.put(`${rootUrl}/users/${id}`, this.data);
        } else {
            axios.post(`${rootUrl}/users`, this.data);
        }
    }
}