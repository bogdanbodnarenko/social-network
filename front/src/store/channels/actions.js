import httpService from "../../utils/httpService/httpService";
import {
    SET_CHANNELS,
    SET_SELECTED_CHANNEL
} from "./types";

export const getChannels = () => async dispatch => {
    const {
        data
    } = await httpService.get('channels');
    if (data) {
        dispatch(setChannels(data))
    }
}

export const getChannelById = (id) => async dispatch => {
    if (id) {
        const {
            data
        } = await httpService.get(`channels/${id}`);
        if (data) {
            dispatch(setSelectedChannel(data.channel))
        }
    }
}

export const setChannels = channels => ({
    type: SET_CHANNELS,
    payload: channels
})

export const setSelectedChannel = post => ({
    type: SET_SELECTED_CHANNEL,
    payload: post
})