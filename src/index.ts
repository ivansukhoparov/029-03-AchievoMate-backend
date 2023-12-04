import {app} from "./settings";
import {runDb} from "./db/db";



const port = 5000;
const appStart =async ()=>{
    await runDb();
    app.listen(port, async ()=>{
        console.log(`app start on port ${port}`);
        console.log(`open in browser http://localhost:${port}`);
    })
}


appStart();
