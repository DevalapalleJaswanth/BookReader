import axios from 'axios';
export async function getAllBooks() {
    var data: any = [];
    await axios.get(`https://assignment.api.staging.monomi.lt/v1/books`, { headers: { 'Authorization': 'Bearer Monomi2021' } })
        .then(resp => { console.log(resp.data); data = resp.data })
    return data;
}
