class ApiHandler
{
    private url: string

    constructor() {
        this.url = 'https://localhost:8000/'
    }

    public async setData(body: any) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // A NE PAS FAIRE

        await fetch(this.url + "api/messages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    public async getDataFromEndpoints(endpoints: string) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // A NE PAS FAIRE

        return await fetch(this.url + endpoints, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => data);
    }
}

export default ApiHandler;