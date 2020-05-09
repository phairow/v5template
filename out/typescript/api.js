import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

import { ListingAllRegisteredChannelGroupsGet } from './endpoints/ListingAllRegisteredChannelGroupsGet';
import { AllChannelsOfAChannelGroupGet } from './endpoints/AllChannelsOfAChannelGroupGet';
import { DeletingAChannelGroupGet } from './endpoints/DeletingAChannelGroupGet';
import { FetchMessageHistoryApiV2Get } from './endpoints/FetchMessageHistoryApiV2Get';
import { FetchMessageHistoryApiV3Get } from './endpoints/FetchMessageHistoryApiV3Get';
import { HistoryWithActionsGet } from './endpoints/HistoryWithActionsGet';
import { MessageCountsGet } from './endpoints/MessageCountsGet';
import { DeleteHistoryDelete } from './endpoints/DeleteHistoryDelete';
import { FetchAListOfActionsOrderedByActionTimetokenGet } from './endpoints/FetchAListOfActionsOrderedByActionTimetokenGet';
import { AddAMessageActionPost } from './endpoints/AddAMessageActionPost';
import { RemoveActionsFromAGivenMessageDelete } from './endpoints/RemoveActionsFromAGivenMessageDelete';
import { Parameters } from './endpoints/Parameters';
import { GetAllUsersGet } from './endpoints/GetAllUsersGet';
import { CreateAUserPost } from './endpoints/CreateAUserPost';
import { Parameters } from './endpoints/Parameters';
import { FetchAUserGet } from './endpoints/FetchAUserGet';
import { UpdateAUserPatch } from './endpoints/UpdateAUserPatch';
import { DeleteAUserDelete } from './endpoints/DeleteAUserDelete';
import { Parameters } from './endpoints/Parameters';
import { GetAllSpacesGet } from './endpoints/GetAllSpacesGet';
import { CreateASpacePost } from './endpoints/CreateASpacePost';
import { Parameters } from './endpoints/Parameters';
import { GetASpaceGet } from './endpoints/GetASpaceGet';
import { UpdateASpacePatch } from './endpoints/UpdateASpacePatch';
import { DeleteASpaceDelete } from './endpoints/DeleteASpaceDelete';
import { Parameters } from './endpoints/Parameters';
import { GetAUserSListOfSpaceMembershipsGet } from './endpoints/GetAUserSListOfSpaceMembershipsGet';
import { UpdateAUserSSpaceMembershipsPatch } from './endpoints/UpdateAUserSSpaceMembershipsPatch';
import { Parameters } from './endpoints/Parameters';
import { GetTheListOfMembersInASpaceGet } from './endpoints/GetTheListOfMembersInASpaceGet';
import { UpdateTheMembersInASpacePatch } from './endpoints/UpdateTheMembersInASpacePatch';
import { ApplyingPMAV2Get } from './endpoints/ApplyingPMAV2Get';
import { ApplyingPAMV3Post } from './endpoints/ApplyingPAMV3Post';
import { GetPresenceInformationGet } from './endpoints/GetPresenceInformationGet';
import { SettingUserStateGet } from './endpoints/SettingUserStateGet';
import { GettingUserStateGet } from './endpoints/GettingUserStateGet';
import { AnnounceLeaveGet } from './endpoints/AnnounceLeaveGet';
import { HereNowInformationGet } from './endpoints/HereNowInformationGet';
import { GlobalHereNowGet } from './endpoints/GlobalHereNowGet';
import { WhereNowGet } from './endpoints/WhereNowGet';
import { PublishAMessageToAChannelGet } from './endpoints/PublishAMessageToAChannelGet';
import { PublishAMessageToAChannelPost } from './endpoints/PublishAMessageToAChannelPost';
import { FireEndpointGet } from './endpoints/FireEndpointGet';
import { SendASignalToAChannelGet } from './endpoints/SendASignalToAChannelGet';
import { ManagingDeviceRegistrationsAPNSHTTP2Get } from './endpoints/ManagingDeviceRegistrationsAPNSHTTP2Get';
import { RemoveADeviceFromAChannelGet } from './endpoints/RemoveADeviceFromAChannelGet';
import { ListingAddingRemovingRegistrationsForDeviceGet } from './endpoints/ListingAddingRemovingRegistrationsForDeviceGet';
import { RemovingADeviceGet } from './endpoints/RemovingADeviceGet';
import { SubscribeToChannelV1ApiGet } from './endpoints/SubscribeToChannelV1ApiGet';
import { SubscribeToChannelSOrChannelGroupGet } from './endpoints/SubscribeToChannelSOrChannelGroupGet';
import { FetchTimeGet } from './endpoints/FetchTimeGet';

class Api {

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

    listingAllRegisteredChannelGroupsGet(sub_key: string, uuid: string) {
        if (ListingAllRegisteredChannelGroupsGet.validate(sub_key: string, uuid: string)) {
            return ListingAllRegisteredChannelGroupsGet.execute(sub_key: string, uuid: string);
        }
    }       

    allChannelsOfAChannelGroupGet(sub_key: string, group: string, auth: string, uuid: string, add: string, remove: string) {
        if (AllChannelsOfAChannelGroupGet.validate(sub_key: string, group: string, auth: string, uuid: string, add: string, remove: string)) {
            return AllChannelsOfAChannelGroupGet.execute(sub_key: string, group: string, auth: string, uuid: string, add: string, remove: string);
        }
    }       

    deletingAChannelGroupGet(sub_key: string, group_name: string, auth: string, uuid: string) {
        if (DeletingAChannelGroupGet.validate(sub_key: string, group_name: string, auth: string, uuid: string)) {
            return DeletingAChannelGroupGet.execute(sub_key: string, group_name: string, auth: string, uuid: string);
        }
    }       

    fetchMessageHistoryApiV2Get(sub_key: string, channel: string, stringtoken: boolean, count: integer, reverse: boolean, start: number, end: number, include_token: boolean, auth: string, uuid: string, include_meta: boolean) {
        if (FetchMessageHistoryApiV2Get.validate(sub_key: string, channel: string, stringtoken: boolean, count: integer, reverse: boolean, start: number, end: number, include_token: boolean, auth: string, uuid: string, include_meta: boolean)) {
            return FetchMessageHistoryApiV2Get.execute(sub_key: string, channel: string, stringtoken: boolean, count: integer, reverse: boolean, start: number, end: number, include_token: boolean, auth: string, uuid: string, include_meta: boolean);
        }
    }       

    fetchMessageHistoryApiV3Get(sub_key: string, channels: string, max: integer, reverse: boolean, start: number, end: number, auth: string, include_meta: boolean) {
        if (FetchMessageHistoryApiV3Get.validate(sub_key: string, channels: string, max: integer, reverse: boolean, start: number, end: number, auth: string, include_meta: boolean)) {
            return FetchMessageHistoryApiV3Get.execute(sub_key: string, channels: string, max: integer, reverse: boolean, start: number, end: number, auth: string, include_meta: boolean);
        }
    }       

    historyWithActionsGet(sub_key: string, channel: string, auth: string, start: number, end: number, max: integer, include_meta: boolean) {
        if (HistoryWithActionsGet.validate(sub_key: string, channel: string, auth: string, start: number, end: number, max: integer, include_meta: boolean)) {
            return HistoryWithActionsGet.execute(sub_key: string, channel: string, auth: string, start: number, end: number, max: integer, include_meta: boolean);
        }
    }       

    messageCountsGet(sub_key: string, channels: string, auth: string, timetoken: number, channelsTimetoken: string) {
        if (MessageCountsGet.validate(sub_key: string, channels: string, auth: string, timetoken: number, channelsTimetoken: string)) {
            return MessageCountsGet.execute(sub_key: string, channels: string, auth: string, timetoken: number, channelsTimetoken: string);
        }
    }       

    deleteHistoryDelete(sub_key: string, channels: string, start: number, end: number) {
        if (DeleteHistoryDelete.validate(sub_key: string, channels: string, start: number, end: number)) {
            return DeleteHistoryDelete.execute(sub_key: string, channels: string, start: number, end: number);
        }
    }       

    fetchAListOfActionsOrderedByActionTimetokenGet(sub_key: string, channel: string, start: string, end: string, limit: integer, auth: string) {
        if (FetchAListOfActionsOrderedByActionTimetokenGet.validate(sub_key: string, channel: string, start: string, end: string, limit: integer, auth: string)) {
            return FetchAListOfActionsOrderedByActionTimetokenGet.execute(sub_key: string, channel: string, start: string, end: string, limit: integer, auth: string);
        }
    }       

    addAMessageActionPost(sub_key: string, channel: string, message_timetoken: string, auth: string, uuid: string) {
        if (AddAMessageActionPost.validate(sub_key: string, channel: string, message_timetoken: string, auth: string, uuid: string)) {
            return AddAMessageActionPost.execute(sub_key: string, channel: string, message_timetoken: string, auth: string, uuid: string);
        }
    }       

    removeActionsFromAGivenMessageDelete(sub_key: string, channel: string, message_timetoken: string, action_timetoken: string, auth: string, uuid: string) {
        if (RemoveActionsFromAGivenMessageDelete.validate(sub_key: string, channel: string, message_timetoken: string, action_timetoken: string, auth: string, uuid: string)) {
            return RemoveActionsFromAGivenMessageDelete.execute(sub_key: string, channel: string, message_timetoken: string, action_timetoken: string, auth: string, uuid: string);
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    getAllUsersGet(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (GetAllUsersGet.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return GetAllUsersGet.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    createAUserPost(include: array) {
        if (CreateAUserPost.validate(include: array)) {
            return CreateAUserPost.execute(include: array);
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    fetchAUserGet(include: array) {
        if (FetchAUserGet.validate(include: array)) {
            return FetchAUserGet.execute(include: array);
        }
    }       

    updateAUserPatch(include: array) {
        if (UpdateAUserPatch.validate(include: array)) {
            return UpdateAUserPatch.execute(include: array);
        }
    }       

    deleteAUserDelete() {
        if (DeleteAUserDelete.validate()) {
            return DeleteAUserDelete.execute();
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    getAllSpacesGet(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (GetAllSpacesGet.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return GetAllSpacesGet.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    createASpacePost(include: array) {
        if (CreateASpacePost.validate(include: array)) {
            return CreateASpacePost.execute(include: array);
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    getASpaceGet(include: array) {
        if (GetASpaceGet.validate(include: array)) {
            return GetASpaceGet.execute(include: array);
        }
    }       

    updateASpacePatch(include: array) {
        if (UpdateASpacePatch.validate(include: array)) {
            return UpdateASpacePatch.execute(include: array);
        }
    }       

    deleteASpaceDelete() {
        if (DeleteASpaceDelete.validate()) {
            return DeleteASpaceDelete.execute();
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    getAUserSListOfSpaceMembershipsGet(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (GetAUserSListOfSpaceMembershipsGet.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return GetAUserSListOfSpaceMembershipsGet.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    updateAUserSSpaceMembershipsPatch(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (UpdateAUserSSpaceMembershipsPatch.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return UpdateAUserSSpaceMembershipsPatch.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    parameters() {
        if (Parameters.validate()) {
            return Parameters.execute();
        }
    }       

    getTheListOfMembersInASpaceGet(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (GetTheListOfMembersInASpaceGet.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return GetTheListOfMembersInASpaceGet.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    updateTheMembersInASpacePatch(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array) {
        if (UpdateTheMembersInASpacePatch.validate(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array)) {
            return UpdateTheMembersInASpacePatch.execute(include: array, limit: integer, start: string, end: string, count: boolean, filter: string, sort: array);
        }
    }       

    applyingPMAV2Get(sub_key: string, signature: string, auth: string, uuid: string, timestamp: integer, ttl: integer, channel: string, channel-group: string, w: integer, r: integer, m: boolean, d: integer) {
        if (ApplyingPMAV2Get.validate(sub_key: string, signature: string, auth: string, uuid: string, timestamp: integer, ttl: integer, channel: string, channel-group: string, w: integer, r: integer, m: boolean, d: integer)) {
            return ApplyingPMAV2Get.execute(sub_key: string, signature: string, auth: string, uuid: string, timestamp: integer, ttl: integer, channel: string, channel-group: string, w: integer, r: integer, m: boolean, d: integer);
        }
    }       

    applyingPAMV3Post(sub_key: string, timestamp: integer, signature: string) {
        if (ApplyingPAMV3Post.validate(sub_key: string, timestamp: integer, signature: string)) {
            return ApplyingPAMV3Post.execute(sub_key: string, timestamp: integer, signature: string);
        }
    }       

    getPresenceInformationGet(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, heartbeat: integer, state: string, uuid: string) {
        if (GetPresenceInformationGet.validate(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, heartbeat: integer, state: string, uuid: string)) {
            return GetPresenceInformationGet.execute(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, heartbeat: integer, state: string, uuid: string);
        }
    }       

    settingUserStateGet(sub_key: string, channel: string, channel-group: string, uuid: string, auth: string, state: string, callback: string) {
        if (SettingUserStateGet.validate(sub_key: string, channel: string, channel-group: string, uuid: string, auth: string, state: string, callback: string)) {
            return SettingUserStateGet.execute(sub_key: string, channel: string, channel-group: string, uuid: string, auth: string, state: string, callback: string);
        }
    }       

    gettingUserStateGet(sub_key: string, channel: string, channel-group: string, auth: string, callback: string) {
        if (GettingUserStateGet.validate(sub_key: string, channel: string, channel-group: string, auth: string, callback: string)) {
            return GettingUserStateGet.execute(sub_key: string, channel: string, channel-group: string, auth: string, callback: string);
        }
    }       

    announceLeaveGet(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, uuid: string) {
        if (AnnounceLeaveGet.validate(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, uuid: string)) {
            return AnnounceLeaveGet.execute(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, uuid: string);
        }
    }       

    hereNowInformationGet(sub_key: string, channel: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string) {
        if (HereNowInformationGet.validate(sub_key: string, channel: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string)) {
            return HereNowInformationGet.execute(sub_key: string, channel: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string);
        }
    }       

    globalHereNowGet(sub_key: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string) {
        if (GlobalHereNowGet.validate(sub_key: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string)) {
            return GlobalHereNowGet.execute(sub_key: string, channel-group: string, auth: string, disable_uuids: string, state: string, callback: string, uuid: string);
        }
    }       

    whereNowGet(sub_key: string, uuid: string, auth: string, callback: string) {
        if (WhereNowGet.validate(sub_key: string, uuid: string, auth: string, callback: string)) {
            return WhereNowGet.execute(sub_key: string, uuid: string, auth: string, callback: string);
        }
    }       

    publishAMessageToAChannelGet(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer) {
        if (PublishAMessageToAChannelGet.validate(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer)) {
            return PublishAMessageToAChannelGet.execute(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer);
        }
    }       

    publishAMessageToAChannelPost(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer) {
        if (PublishAMessageToAChannelPost.validate(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer)) {
            return PublishAMessageToAChannelPost.execute(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, ttl: integer);
        }
    }       

    fireEndpointGet(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, norep: boolean) {
        if (FireEndpointGet.validate(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, norep: boolean)) {
            return FireEndpointGet.execute(pub_key: string, sub_key: string, channel: string, callback: string, store: integer, auth: string, meta: object, uuid: string, norep: boolean);
        }
    }       

    sendASignalToAChannelGet(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {
        if (SendASignalToAChannelGet.validate(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, uuid: string, auth: string)) {
            return SendASignalToAChannelGet.execute(pub_key: string, sub_key: string, channel: string, callback: string, payload: string, uuid: string, auth: string);
        }
    }       

    managingDeviceRegistrationsAPNSHTTP2Get(sub_key: string, device-apns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {
        if (ManagingDeviceRegistrationsAPNSHTTP2Get.validate(sub_key: string, device-apns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string)) {
            return ManagingDeviceRegistrationsAPNSHTTP2Get.execute(sub_key: string, device-apns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string);
        }
    }       

    removeADeviceFromAChannelGet(sub_key: string, device-apns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string) {
        if (RemoveADeviceFromAChannelGet.validate(sub_key: string, device-apns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string)) {
            return RemoveADeviceFromAChannelGet.execute(sub_key: string, device-apns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string);
        }
    }       

    listingAddingRemovingRegistrationsForDeviceGet(sub_key: string, push_token: string, type: string, uuid: string) {
        if (ListingAddingRemovingRegistrationsForDeviceGet.validate(sub_key: string, push_token: string, type: string, uuid: string)) {
            return ListingAddingRemovingRegistrationsForDeviceGet.execute(sub_key: string, push_token: string, type: string, uuid: string);
        }
    }       

    removingADeviceGet(sub_key: string, push_token: string, type: string, uuid: string) {
        if (RemovingADeviceGet.validate(sub_key: string, push_token: string, type: string, uuid: string)) {
            return RemovingADeviceGet.execute(sub_key: string, push_token: string, type: string, uuid: string);
        }
    }       

    subscribeToChannelV1ApiGet(sub_key: string, channel: string, callback: string, timetoken: string, channle-group: string, state: string, heartbeat: integer, auth: string, uuid: string) {
        if (SubscribeToChannelV1ApiGet.validate(sub_key: string, channel: string, callback: string, timetoken: string, channle-group: string, state: string, heartbeat: integer, auth: string, uuid: string)) {
            return SubscribeToChannelV1ApiGet.execute(sub_key: string, channel: string, callback: string, timetoken: string, channle-group: string, state: string, heartbeat: integer, auth: string, uuid: string);
        }
    }       

    subscribeToChannelSOrChannelGroupGet(sub_key: string, channel: string, callback: string, tt: string, tr: string, channle-group: string, heartbeat: integer, auth: string, uuid: string, filter-expr: string) {
        if (SubscribeToChannelSOrChannelGroupGet.validate(sub_key: string, channel: string, callback: string, tt: string, tr: string, channle-group: string, heartbeat: integer, auth: string, uuid: string, filter-expr: string)) {
            return SubscribeToChannelSOrChannelGroupGet.execute(sub_key: string, channel: string, callback: string, tt: string, tr: string, channle-group: string, heartbeat: integer, auth: string, uuid: string, filter-expr: string);
        }
    }       

    fetchTimeGet(callback: string, uuid: string) {
        if (FetchTimeGet.validate(callback: string, uuid: string)) {
            return FetchTimeGet.execute(callback: string, uuid: string);
        }
    }       


}