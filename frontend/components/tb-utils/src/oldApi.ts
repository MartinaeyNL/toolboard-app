import {Dashboard} from "./models";

export async function createOldDashboard(dashboard: Dashboard): Promise<any> {
    console.log("Creating dashboard..")

    try {

        // TODO: Hardcoded URL for now, see issue #10 and #11 for future plans
        const response = await fetch("http://localhost:8080/dashboard", {
            method: "POST",
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(dashboard)
        });
        if(response.status == 201) {
            const obj = await response.json();
            console.log(obj);
            return obj;
        } else {
            console.error(response.statusText);
        }

    } catch (e) {
        console.error(e);
    }
}