import colorsConfig from "../../config/colors.config";
import { SWITCH_BACKGROUND_COLOR } from "../action-types/app-theme.action-types";
const defaultState = {
    backgroundColor: colorsConfig.PURE_WHITE
}
const appThemeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_BACKGROUND_COLOR:
            return {
                backgroundColor:action.payload
            }
        default:
            return state;
    }
};

export default appThemeReducer;