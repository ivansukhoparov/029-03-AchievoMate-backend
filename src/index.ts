import {app} from "./app";

const port = 5000;
const appStart =async ()=>{
    app.listen(port, async ()=>{
        console.log(`app start on port ${port}`);
        console.log(`open in browser http://localhost:${port}`);
    })
}

appStart();
