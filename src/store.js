import {configureStore} from "@reduxjs/toolkit";
import contact_reducer from "./Contexts/Contact_Reducer";

const store = configureStore({"reducer":contact_reducer,
middleware: (gdm) => gdm({
     immutableCheck: false,
})});

export default store;