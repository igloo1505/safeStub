// import initialSettingsState from "./appSettings";
import authState from "./auth";
import initialUiState from "./ui";
import networkState from "./network";
import adminState from "./adminState";
import { initialFormState } from "./forms/formState";

const initialState = {
    auth: authState,
    UI: initialUiState,
    // settings: initialSettingsState,
    network: networkState,
    form: initialFormState,
    admin: adminState
}



export default initialState
