

export const getData = async () => {
    try {

        let resp = await fetch("/assets/data.json");
        let json = await resp.json();

        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };

        return json;
        
    } catch (error) {
        console.log(error);
    }
}