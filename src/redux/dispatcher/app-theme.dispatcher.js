import store from "../store";
import { SWITCH_BACKGROUND_COLOR } from '../action-types/app-theme.action-types'
export const disatpchThemeBackgroundColor = (colorToSet) => {
    store.dispatch({
        payload: colorToSet,
        type: SWITCH_BACKGROUND_COLOR
    });
}