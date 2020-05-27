import { Logger } from "../log/Logger";
import { Networking } from "../net/Networking";
import { Parser } from "../parse/Parser";
import { ListingAllRegisteredChannelGroupsGet } from './endpoint/ListingAllRegisteredChannelGroupsGet';
import { AllChannelsOfAChannelGroupGet } from './endpoint/AllChannelsOfAChannelGroupGet';
import { DeletingAChannelGroupGet } from './endpoint/DeletingAChannelGroupGet';
import { FetchMessageHistoryApiV2Get } from './endpoint/FetchMessageHistoryApiV2Get';
import { FetchMessageHistoryApiV3Get } from './endpoint/FetchMessageHistoryApiV3Get';
import { HistoryWithActionsGet } from './endpoint/HistoryWithActionsGet';
import { MessageCountsGet } from './endpoint/MessageCountsGet';
import { DeleteHistoryDelete } from './endpoint/DeleteHistoryDelete';
import { FetchAListOfActionsOrderedByActionTimetokenGet } from './endpoint/FetchAListOfActionsOrderedByActionTimetokenGet';
import { AddAMessageActionPost } from './endpoint/AddAMessageActionPost';
import { RemoveActionsFromAGivenMessageDelete } from './endpoint/RemoveActionsFromAGivenMessageDelete';
import { GetAllUsersGet } from './endpoint/GetAllUsersGet';
import { CreateAUserPost } from './endpoint/CreateAUserPost';
import { FetchAUserGet } from './endpoint/FetchAUserGet';
import { UpdateAUserPatch } from './endpoint/UpdateAUserPatch';
import { DeleteAUserDelete } from './endpoint/DeleteAUserDelete';
import { GetAllSpacesGet } from './endpoint/GetAllSpacesGet';
import { CreateASpacePost } from './endpoint/CreateASpacePost';
import { GetASpaceGet } from './endpoint/GetASpaceGet';
import { UpdateASpacePatch } from './endpoint/UpdateASpacePatch';
import { DeleteASpaceDelete } from './endpoint/DeleteASpaceDelete';
import { GetAUserSListOfSpaceMembershipsGet } from './endpoint/GetAUserSListOfSpaceMembershipsGet';
import { UpdateAUserSSpaceMembershipsPatch } from './endpoint/UpdateAUserSSpaceMembershipsPatch';
import { GetTheListOfMembersInASpaceGet } from './endpoint/GetTheListOfMembersInASpaceGet';
import { UpdateTheMembersInASpacePatch } from './endpoint/UpdateTheMembersInASpacePatch';
import { ApplyingPMAV2Get } from './endpoint/ApplyingPMAV2Get';
import { ApplyingPAMV3Post } from './endpoint/ApplyingPAMV3Post';
import { GetPresenceInformationGet } from './endpoint/GetPresenceInformationGet';
import { SettingUserStateGet } from './endpoint/SettingUserStateGet';
import { GettingUserStateGet } from './endpoint/GettingUserStateGet';
import { AnnounceLeaveGet } from './endpoint/AnnounceLeaveGet';
import { HereNowInformationGet } from './endpoint/HereNowInformationGet';
import { GlobalHereNowGet } from './endpoint/GlobalHereNowGet';
import { WhereNowGet } from './endpoint/WhereNowGet';
import { PublishAMessageToAChannelGet } from './endpoint/PublishAMessageToAChannelGet';
import { PublishAMessageToAChannelPost } from './endpoint/PublishAMessageToAChannelPost';
import { FireEndpointGet } from './endpoint/FireEndpointGet';
import { SendASignalToAChannelGet } from './endpoint/SendASignalToAChannelGet';
import { ManagingDeviceRegistrationsAPNSHTTP2Get } from './endpoint/ManagingDeviceRegistrationsAPNSHTTP2Get';
import { RemoveADeviceFromAChannelGet } from './endpoint/RemoveADeviceFromAChannelGet';
import { ListingAddingRemovingRegistrationsForDeviceGet } from './endpoint/ListingAddingRemovingRegistrationsForDeviceGet';
import { RemovingADeviceGet } from './endpoint/RemovingADeviceGet';
import { SubscribeToChannelV1ApiGet } from './endpoint/SubscribeToChannelV1ApiGet';
import { SubscribeToChannelSOrChannelGroupGet } from './endpoint/SubscribeToChannelSOrChannelGroupGet';
import { FetchTimeGet } from './endpoint/FetchTimeGet';
import { MetadataQueryParamSchema } from './schema/MetadataQueryParamSchema';


export class Api {

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

    listingAllRegisteredChannelGroupsGet(subKey: string, uuid: string) {
        if (ListingAllRegisteredChannelGroupsGet.validate(subKey, uuid)) {
            return ListingAllRegisteredChannelGroupsGet.execute(subKey, uuid);
        }
    }       
    allChannelsOfAChannelGroupGet(subKey: string, group: string, auth: string, uuid: string, add: string, remove: string) {
        if (AllChannelsOfAChannelGroupGet.validate(subKey, group, auth, uuid, add, remove)) {
            return AllChannelsOfAChannelGroupGet.execute(subKey, group, auth, uuid, add, remove);
        }
    }       
    deletingAChannelGroupGet(subKey: string, groupName: string, auth: string, uuid: string) {
        if (DeletingAChannelGroupGet.validate(subKey, groupName, auth, uuid)) {
            return DeletingAChannelGroupGet.execute(subKey, groupName, auth, uuid);
        }
    }       
    fetchMessageHistoryApiV2Get(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean) {
        if (FetchMessageHistoryApiV2Get.validate(subKey, channel, stringtoken, count, reverse, start, end, includeToken, auth, uuid, includeMeta)) {
            return FetchMessageHistoryApiV2Get.execute(subKey, channel, stringtoken, count, reverse, start, end, includeToken, auth, uuid, includeMeta);
        }
    }       
    fetchMessageHistoryApiV3Get(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean) {
        if (FetchMessageHistoryApiV3Get.validate(subKey, channels, max, reverse, start, end, auth, includeMeta)) {
            return FetchMessageHistoryApiV3Get.execute(subKey, channels, max, reverse, start, end, auth, includeMeta);
        }
    }       
    historyWithActionsGet(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean) {
        if (HistoryWithActionsGet.validate(subKey, channel, auth, start, end, max, includeMeta)) {
            return HistoryWithActionsGet.execute(subKey, channel, auth, start, end, max, includeMeta);
        }
    }       
    messageCountsGet(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string) {
        if (MessageCountsGet.validate(subKey, channels, auth, timetoken, channelsTimetoken)) {
            return MessageCountsGet.execute(subKey, channels, auth, timetoken, channelsTimetoken);
        }
    }       
    deleteHistoryDelete(subKey: string, channels: string, start: unknown, end: unknown) {
        if (DeleteHistoryDelete.validate(subKey, channels, start, end)) {
            return DeleteHistoryDelete.execute(subKey, channels, start, end);
        }
    }       
    fetchAListOfActionsOrderedByActionTimetokenGet(subKey: string, channel: string, start: string, end: string, limit: number, auth: string) {
        if (FetchAListOfActionsOrderedByActionTimetokenGet.validate(subKey, channel, start, end, limit, auth)) {
            return FetchAListOfActionsOrderedByActionTimetokenGet.execute(subKey, channel, start, end, limit, auth);
        }
    }       
    addAMessageActionPost(subKey: string, channel: string, messageTimetoken: string, auth: string, uuid: string) {
        if (AddAMessageActionPost.validate(subKey, channel, messageTimetoken, auth, uuid)) {
            return AddAMessageActionPost.execute(subKey, channel, messageTimetoken, auth, uuid);
        }
    }       
    removeActionsFromAGivenMessageDelete(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string) {
        if (RemoveActionsFromAGivenMessageDelete.validate(subKey, channel, messageTimetoken, actionTimetoken, auth, uuid)) {
            return RemoveActionsFromAGivenMessageDelete.execute(subKey, channel, messageTimetoken, actionTimetoken, auth, uuid);
        }
    }       
    getAllUsersGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetAllUsersGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetAllUsersGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    createAUserPost(include: string[]) {
        if (CreateAUserPost.validate(include)) {
            return CreateAUserPost.execute(include);
        }
    }       
    fetchAUserGet(include: string[]) {
        if (FetchAUserGet.validate(include)) {
            return FetchAUserGet.execute(include);
        }
    }       
    updateAUserPatch(include: string[]) {
        if (UpdateAUserPatch.validate(include)) {
            return UpdateAUserPatch.execute(include);
        }
    }       
    deleteAUserDelete() {
        if (DeleteAUserDelete.validate()) {
            return DeleteAUserDelete.execute();
        }
    }       
    getAllSpacesGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetAllSpacesGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetAllSpacesGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    createASpacePost(include: string[]) {
        if (CreateASpacePost.validate(include)) {
            return CreateASpacePost.execute(include);
        }
    }       
    getASpaceGet(include: string[]) {
        if (GetASpaceGet.validate(include)) {
            return GetASpaceGet.execute(include);
        }
    }       
    updateASpacePatch(include: string[]) {
        if (UpdateASpacePatch.validate(include)) {
            return UpdateASpacePatch.execute(include);
        }
    }       
    deleteASpaceDelete() {
        if (DeleteASpaceDelete.validate()) {
            return DeleteASpaceDelete.execute();
        }
    }       
    getAUserSListOfSpaceMembershipsGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetAUserSListOfSpaceMembershipsGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetAUserSListOfSpaceMembershipsGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    updateAUserSSpaceMembershipsPatch(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (UpdateAUserSSpaceMembershipsPatch.validate(include, limit, start, end, count, filter, sort)) {
            return UpdateAUserSSpaceMembershipsPatch.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    getTheListOfMembersInASpaceGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetTheListOfMembersInASpaceGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetTheListOfMembersInASpaceGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    updateTheMembersInASpacePatch(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (UpdateTheMembersInASpacePatch.validate(include, limit, start, end, count, filter, sort)) {
            return UpdateTheMembersInASpacePatch.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    applyingPMAV2Get(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {
        if (ApplyingPMAV2Get.validate(subKey, signature, auth, uuid, timestamp, ttl, channel, channelGroup, w, r, m, d)) {
            return ApplyingPMAV2Get.execute(subKey, signature, auth, uuid, timestamp, ttl, channel, channelGroup, w, r, m, d);
        }
    }       
    applyingPAMV3Post(subKey: string, timestamp: number, signature: string) {
        if (ApplyingPAMV3Post.validate(subKey, timestamp, signature)) {
            return ApplyingPAMV3Post.execute(subKey, timestamp, signature);
        }
    }       
    getPresenceInformationGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, heartbeat: number, state: string, uuid: string) {
        if (GetPresenceInformationGet.validate(subKey, channel, channelGroup, auth, callback, heartbeat, state, uuid)) {
            return GetPresenceInformationGet.execute(subKey, channel, channelGroup, auth, callback, heartbeat, state, uuid);
        }
    }       
    settingUserStateGet(subKey: string, channel: string, channelGroup: string, uuid: string, auth: string, state: string, callback: string) {
        if (SettingUserStateGet.validate(subKey, channel, channelGroup, uuid, auth, state, callback)) {
            return SettingUserStateGet.execute(subKey, channel, channelGroup, uuid, auth, state, callback);
        }
    }       
    gettingUserStateGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string) {
        if (GettingUserStateGet.validate(subKey, channel, channelGroup, auth, callback)) {
            return GettingUserStateGet.execute(subKey, channel, channelGroup, auth, callback);
        }
    }       
    announceLeaveGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, uuid: string) {
        if (AnnounceLeaveGet.validate(subKey, channel, channelGroup, auth, callback, uuid)) {
            return AnnounceLeaveGet.execute(subKey, channel, channelGroup, auth, callback, uuid);
        }
    }       
    hereNowInformationGet(subKey: string, channel: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string) {
        if (HereNowInformationGet.validate(subKey, channel, channelGroup, auth, disableUuids, state, callback, uuid)) {
            return HereNowInformationGet.execute(subKey, channel, channelGroup, auth, disableUuids, state, callback, uuid);
        }
    }       
    globalHereNowGet(subKey: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string) {
        if (GlobalHereNowGet.validate(subKey, channelGroup, auth, disableUuids, state, callback, uuid)) {
            return GlobalHereNowGet.execute(subKey, channelGroup, auth, disableUuids, state, callback, uuid);
        }
    }       
    whereNowGet(subKey: string, uuid: string, auth: string, callback: string) {
        if (WhereNowGet.validate(subKey, uuid, auth, callback)) {
            return WhereNowGet.execute(subKey, uuid, auth, callback);
        }
    }       
    publishAMessageToAChannelGet(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number) {
        if (PublishAMessageToAChannelGet.validate(pubKey, subKey, channel, callback, payload, store, auth, meta, uuid, ttl)) {
            return PublishAMessageToAChannelGet.execute(pubKey, subKey, channel, callback, payload, store, auth, meta, uuid, ttl);
        }
    }       
    publishAMessageToAChannelPost(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number) {
        if (PublishAMessageToAChannelPost.validate(pubKey, subKey, channel, callback, store, auth, meta, uuid, ttl)) {
            return PublishAMessageToAChannelPost.execute(pubKey, subKey, channel, callback, store, auth, meta, uuid, ttl);
        }
    }       
    fireEndpointGet(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, norep: boolean) {
        if (FireEndpointGet.validate(pubKey, subKey, channel, callback, store, auth, meta, uuid, norep)) {
            return FireEndpointGet.execute(pubKey, subKey, channel, callback, store, auth, meta, uuid, norep);
        }
    }       
    sendASignalToAChannelGet(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string) {
        if (SendASignalToAChannelGet.validate(pubKey, subKey, channel, callback, payload, uuid, auth)) {
            return SendASignalToAChannelGet.execute(pubKey, subKey, channel, callback, payload, uuid, auth);
        }
    }       
    managingDeviceRegistrationsAPNSHTTP2Get(subKey: string, deviceApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string) {
        if (ManagingDeviceRegistrationsAPNSHTTP2Get.validate(subKey, deviceApns2, uuid, auth, list, add, remove, environment, topic)) {
            return ManagingDeviceRegistrationsAPNSHTTP2Get.execute(subKey, deviceApns2, uuid, auth, list, add, remove, environment, topic);
        }
    }       
    removeADeviceFromAChannelGet(subKey: string, deviceApns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string) {
        if (RemoveADeviceFromAChannelGet.validate(subKey, deviceApns2, uuid, auth, add, remove, environment, topic)) {
            return RemoveADeviceFromAChannelGet.execute(subKey, deviceApns2, uuid, auth, add, remove, environment, topic);
        }
    }       
    listingAddingRemovingRegistrationsForDeviceGet(subKey: string, pushToken: string, type: string, uuid: string) {
        if (ListingAddingRemovingRegistrationsForDeviceGet.validate(subKey, pushToken, type, uuid)) {
            return ListingAddingRemovingRegistrationsForDeviceGet.execute(subKey, pushToken, type, uuid);
        }
    }       
    removingADeviceGet(subKey: string, pushToken: string, type: string, uuid: string) {
        if (RemovingADeviceGet.validate(subKey, pushToken, type, uuid)) {
            return RemovingADeviceGet.execute(subKey, pushToken, type, uuid);
        }
    }       
    subscribeToChannelV1ApiGet(subKey: string, channel: string, callback: string, timetoken: string, channleGroup: string, state: string, heartbeat: number, auth: string, uuid: string) {
        if (SubscribeToChannelV1ApiGet.validate(subKey, channel, callback, timetoken, channleGroup, state, heartbeat, auth, uuid)) {
            return SubscribeToChannelV1ApiGet.execute(subKey, channel, callback, timetoken, channleGroup, state, heartbeat, auth, uuid);
        }
    }       
    subscribeToChannelSOrChannelGroupGet(subKey: string, channel: string, callback: string, tt: string, tr: string, channleGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string) {
        if (SubscribeToChannelSOrChannelGroupGet.validate(subKey, channel, callback, tt, tr, channleGroup, heartbeat, auth, uuid, filterExpr)) {
            return SubscribeToChannelSOrChannelGroupGet.execute(subKey, channel, callback, tt, tr, channleGroup, heartbeat, auth, uuid, filterExpr);
        }
    }       
    fetchTimeGet(callback: string, uuid: string) {
        if (FetchTimeGet.validate(callback, uuid)) {
            return FetchTimeGet.execute(callback, uuid);
        }
    }       
}