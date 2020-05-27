import { Logger } from "../log/Logger";
import { Networking } from "../net/Networking";
import { Parser } from "../parse/Parser";
import { ListingAllRegisteredChannelGroupsGet } from './endpoint/ListingAllRegisteredChannelGroupsGet';
import { AllChannelsOfAChannelGroupGet } from './endpoint/AllChannelsOfAChannelGroupGet';
import { DeletingAChannelGroupGet } from './endpoint/DeletingAChannelGroupGet';
import { FetchMessageHistoryApiV2Get } from './endpoint/FetchMessageHistoryApiV2Get';
import { FetchMessageHistoryApiV3BatchHistoryGet } from './endpoint/FetchMessageHistoryApiV3BatchHistoryGet';
import { DeleteHistoryDelete } from './endpoint/DeleteHistoryDelete';
import { HistoryWithActionsGet } from './endpoint/HistoryWithActionsGet';
import { MessageCountsGet } from './endpoint/MessageCountsGet';
import { FetchAListOfActionsOrderedByActionTimetokenGet } from './endpoint/FetchAListOfActionsOrderedByActionTimetokenGet';
import { AddAMessageActionPost } from './endpoint/AddAMessageActionPost';
import { RemoveActionsFromAGivenMessageDelete } from './endpoint/RemoveActionsFromAGivenMessageDelete';
import { GetMetadataForAllUuidsGet } from './endpoint/GetMetadataForAllUuidsGet';
import { GetUuidMetadataGet } from './endpoint/GetUuidMetadataGet';
import { SetUuidMetadataPatch } from './endpoint/SetUuidMetadataPatch';
import { DeleteUuidMetadataDelete } from './endpoint/DeleteUuidMetadataDelete';
import { GetMetadataForAllChannelsGet } from './endpoint/GetMetadataForAllChannelsGet';
import { GetChannelMetadataGet } from './endpoint/GetChannelMetadataGet';
import { SetChannelMetadataPatch } from './endpoint/SetChannelMetadataPatch';
import { DeleteChannelMetadataDelete } from './endpoint/DeleteChannelMetadataDelete';
import { GetTheListOfUuidSChannelMembershipMetadataGet } from './endpoint/GetTheListOfUuidSChannelMembershipMetadataGet';
import { SetTheUuidSChannelMembershipMetadataPatch } from './endpoint/SetTheUuidSChannelMembershipMetadataPatch';
import { GetTheListOfMembersMetadataInTheChannelGet } from './endpoint/GetTheListOfMembersMetadataInTheChannelGet';
import { SetTheMembersMetadataInTheChannelPatch } from './endpoint/SetTheMembersMetadataInTheChannelPatch';
import { ApplyingPAMV2Get } from './endpoint/ApplyingPAMV2Get';
import { ApplyingPAMV3Post } from './endpoint/ApplyingPAMV3Post';
import { AnnounceHeartbeatGet } from './endpoint/AnnounceHeartbeatGet';
import { SettingUserStateGet } from './endpoint/SettingUserStateGet';
import { GettingUserStateGet } from './endpoint/GettingUserStateGet';
import { AnnounceLeaveGet } from './endpoint/AnnounceLeaveGet';
import { AnnounceLeavePost } from './endpoint/AnnounceLeavePost';
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
import { SubscribeToChannelV1APIGet } from './endpoint/SubscribeToChannelV1APIGet';
import { SubscribeToChannelSOrChannelGroupSGet } from './endpoint/SubscribeToChannelSOrChannelGroupSGet';
import { FetchTimeGet } from './endpoint/FetchTimeGet';
import { MetadataQueryParamSchema } from './schema/MetadataQueryParamSchema';


export class Api {

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

    listingAllRegisteredChannelGroupsGet(subKey: string, uuid: string, signature: string, timestamp: number) {
        if (ListingAllRegisteredChannelGroupsGet.validate(subKey, uuid, signature, timestamp)) {
            return ListingAllRegisteredChannelGroupsGet.execute(subKey, uuid, signature, timestamp);
        }
    }       
    allChannelsOfAChannelGroupGet(subKey: string, group: string, auth: string, uuid: string, add: string, remove: string, signature: string, timestamp: number) {
        if (AllChannelsOfAChannelGroupGet.validate(subKey, group, auth, uuid, add, remove, signature, timestamp)) {
            return AllChannelsOfAChannelGroupGet.execute(subKey, group, auth, uuid, add, remove, signature, timestamp);
        }
    }       
    deletingAChannelGroupGet(subKey: string, groupName: string, auth: string, uuid: string, signature: string, timestamp: number) {
        if (DeletingAChannelGroupGet.validate(subKey, groupName, auth, uuid, signature, timestamp)) {
            return DeletingAChannelGroupGet.execute(subKey, groupName, auth, uuid, signature, timestamp);
        }
    }       
    fetchMessageHistoryApiV2Get(subKey: string, channel: string, stringtoken: boolean, count: number, reverse: boolean, start: unknown, end: unknown, includeToken: boolean, auth: string, uuid: string, includeMeta: boolean, signature: string, timestamp: number) {
        if (FetchMessageHistoryApiV2Get.validate(subKey, channel, stringtoken, count, reverse, start, end, includeToken, auth, uuid, includeMeta, signature, timestamp)) {
            return FetchMessageHistoryApiV2Get.execute(subKey, channel, stringtoken, count, reverse, start, end, includeToken, auth, uuid, includeMeta, signature, timestamp);
        }
    }       
    fetchMessageHistoryApiV3BatchHistoryGet(subKey: string, channels: string, max: number, reverse: boolean, start: unknown, end: unknown, auth: string, includeMeta: boolean) {
        if (FetchMessageHistoryApiV3BatchHistoryGet.validate(subKey, channels, max, reverse, start, end, auth, includeMeta)) {
            return FetchMessageHistoryApiV3BatchHistoryGet.execute(subKey, channels, max, reverse, start, end, auth, includeMeta);
        }
    }       
    deleteHistoryDelete(subKey: string, channels: string, start: unknown, end: unknown, signature: string, timestamp: number) {
        if (DeleteHistoryDelete.validate(subKey, channels, start, end, signature, timestamp)) {
            return DeleteHistoryDelete.execute(subKey, channels, start, end, signature, timestamp);
        }
    }       
    historyWithActionsGet(subKey: string, channel: string, auth: string, start: unknown, end: unknown, max: number, includeMeta: boolean, signature: string, timestamp: number) {
        if (HistoryWithActionsGet.validate(subKey, channel, auth, start, end, max, includeMeta, signature, timestamp)) {
            return HistoryWithActionsGet.execute(subKey, channel, auth, start, end, max, includeMeta, signature, timestamp);
        }
    }       
    messageCountsGet(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string, signature: string, timestamp: number) {
        if (MessageCountsGet.validate(subKey, channels, auth, timetoken, channelsTimetoken, signature, timestamp)) {
            return MessageCountsGet.execute(subKey, channels, auth, timetoken, channelsTimetoken, signature, timestamp);
        }
    }       
    fetchAListOfActionsOrderedByActionTimetokenGet(subKey: string, channel: string, start: string, end: string, limit: number, auth: string, signature: string, timestamp: number) {
        if (FetchAListOfActionsOrderedByActionTimetokenGet.validate(subKey, channel, start, end, limit, auth, signature, timestamp)) {
            return FetchAListOfActionsOrderedByActionTimetokenGet.execute(subKey, channel, start, end, limit, auth, signature, timestamp);
        }
    }       
    addAMessageActionPost(subKey: string, channel: string, messageTimetoken: string, auth: string, uuid: string, signature: string, timestamp: number) {
        if (AddAMessageActionPost.validate(subKey, channel, messageTimetoken, auth, uuid, signature, timestamp)) {
            return AddAMessageActionPost.execute(subKey, channel, messageTimetoken, auth, uuid, signature, timestamp);
        }
    }       
    removeActionsFromAGivenMessageDelete(subKey: string, channel: string, messageTimetoken: string, actionTimetoken: string, auth: string, uuid: string, signature: string, timestamp: number) {
        if (RemoveActionsFromAGivenMessageDelete.validate(subKey, channel, messageTimetoken, actionTimetoken, auth, uuid, signature, timestamp)) {
            return RemoveActionsFromAGivenMessageDelete.execute(subKey, channel, messageTimetoken, actionTimetoken, auth, uuid, signature, timestamp);
        }
    }       
    getMetadataForAllUuidsGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetMetadataForAllUuidsGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetMetadataForAllUuidsGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    getUuidMetadataGet(include: string[]) {
        if (GetUuidMetadataGet.validate(include)) {
            return GetUuidMetadataGet.execute(include);
        }
    }       
    setUuidMetadataPatch(include: string[]) {
        if (SetUuidMetadataPatch.validate(include)) {
            return SetUuidMetadataPatch.execute(include);
        }
    }       
    deleteUuidMetadataDelete() {
        if (DeleteUuidMetadataDelete.validate()) {
            return DeleteUuidMetadataDelete.execute();
        }
    }       
    getMetadataForAllChannelsGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetMetadataForAllChannelsGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetMetadataForAllChannelsGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    getChannelMetadataGet(include: string[]) {
        if (GetChannelMetadataGet.validate(include)) {
            return GetChannelMetadataGet.execute(include);
        }
    }       
    setChannelMetadataPatch(include: string[]) {
        if (SetChannelMetadataPatch.validate(include)) {
            return SetChannelMetadataPatch.execute(include);
        }
    }       
    deleteChannelMetadataDelete() {
        if (DeleteChannelMetadataDelete.validate()) {
            return DeleteChannelMetadataDelete.execute();
        }
    }       
    getTheListOfUuidSChannelMembershipMetadataGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetTheListOfUuidSChannelMembershipMetadataGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetTheListOfUuidSChannelMembershipMetadataGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    setTheUuidSChannelMembershipMetadataPatch(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (SetTheUuidSChannelMembershipMetadataPatch.validate(include, limit, start, end, count, filter, sort)) {
            return SetTheUuidSChannelMembershipMetadataPatch.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    getTheListOfMembersMetadataInTheChannelGet(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (GetTheListOfMembersMetadataInTheChannelGet.validate(include, limit, start, end, count, filter, sort)) {
            return GetTheListOfMembersMetadataInTheChannelGet.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    setTheMembersMetadataInTheChannelPatch(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]) {
        if (SetTheMembersMetadataInTheChannelPatch.validate(include, limit, start, end, count, filter, sort)) {
            return SetTheMembersMetadataInTheChannelPatch.execute(include, limit, start, end, count, filter, sort);
        }
    }       
    applyingPAMV2Get(subKey: string, signature: string, auth: string, uuid: string, timestamp: number, ttl: number, channel: string, channelGroup: string, w: number, r: number, m: boolean, d: number) {
        if (ApplyingPAMV2Get.validate(subKey, signature, auth, uuid, timestamp, ttl, channel, channelGroup, w, r, m, d)) {
            return ApplyingPAMV2Get.execute(subKey, signature, auth, uuid, timestamp, ttl, channel, channelGroup, w, r, m, d);
        }
    }       
    applyingPAMV3Post(subKey: string, timestamp: number, signature: string) {
        if (ApplyingPAMV3Post.validate(subKey, timestamp, signature)) {
            return ApplyingPAMV3Post.execute(subKey, timestamp, signature);
        }
    }       
    announceHeartbeatGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, heartbeat: number, state: string, uuid: string, signature: string, timestamp: number) {
        if (AnnounceHeartbeatGet.validate(subKey, channel, channelGroup, auth, callback, heartbeat, state, uuid, signature, timestamp)) {
            return AnnounceHeartbeatGet.execute(subKey, channel, channelGroup, auth, callback, heartbeat, state, uuid, signature, timestamp);
        }
    }       
    settingUserStateGet(subKey: string, channel: string, channelGroup: string, uuid: string, auth: string, state: string, callback: string, signature: string, timestamp: number) {
        if (SettingUserStateGet.validate(subKey, channel, channelGroup, uuid, auth, state, callback, signature, timestamp)) {
            return SettingUserStateGet.execute(subKey, channel, channelGroup, uuid, auth, state, callback, signature, timestamp);
        }
    }       
    gettingUserStateGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, signature: string, timestamp: number) {
        if (GettingUserStateGet.validate(subKey, channel, channelGroup, auth, callback, signature, timestamp)) {
            return GettingUserStateGet.execute(subKey, channel, channelGroup, auth, callback, signature, timestamp);
        }
    }       
    announceLeaveGet(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, uuid: string, signature: string, timestamp: number) {
        if (AnnounceLeaveGet.validate(subKey, channel, channelGroup, auth, callback, uuid, signature, timestamp)) {
            return AnnounceLeaveGet.execute(subKey, channel, channelGroup, auth, callback, uuid, signature, timestamp);
        }
    }       
    announceLeavePost(subKey: string, channel: string, channelGroup: string, auth: string, callback: string, uuid: string, signature: string, timestamp: number) {
        if (AnnounceLeavePost.validate(subKey, channel, channelGroup, auth, callback, uuid, signature, timestamp)) {
            return AnnounceLeavePost.execute(subKey, channel, channelGroup, auth, callback, uuid, signature, timestamp);
        }
    }       
    hereNowInformationGet(subKey: string, channel: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string, signature: string, timestamp: number) {
        if (HereNowInformationGet.validate(subKey, channel, channelGroup, auth, disableUuids, state, callback, uuid, signature, timestamp)) {
            return HereNowInformationGet.execute(subKey, channel, channelGroup, auth, disableUuids, state, callback, uuid, signature, timestamp);
        }
    }       
    globalHereNowGet(subKey: string, channelGroup: string, auth: string, disableUuids: string, state: string, callback: string, uuid: string, signature: string, timestamp: number) {
        if (GlobalHereNowGet.validate(subKey, channelGroup, auth, disableUuids, state, callback, uuid, signature, timestamp)) {
            return GlobalHereNowGet.execute(subKey, channelGroup, auth, disableUuids, state, callback, uuid, signature, timestamp);
        }
    }       
    whereNowGet(subKey: string, uuid: string, auth: string, callback: string, signature: string, timestamp: number) {
        if (WhereNowGet.validate(subKey, uuid, auth, callback, signature, timestamp)) {
            return WhereNowGet.execute(subKey, uuid, auth, callback, signature, timestamp);
        }
    }       
    publishAMessageToAChannelGet(pubKey: string, subKey: string, channel: string, callback: string, payload: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number) {
        if (PublishAMessageToAChannelGet.validate(pubKey, subKey, channel, callback, payload, store, auth, meta, uuid, ttl, signature, timestamp)) {
            return PublishAMessageToAChannelGet.execute(pubKey, subKey, channel, callback, payload, store, auth, meta, uuid, ttl, signature, timestamp);
        }
    }       
    publishAMessageToAChannelPost(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, ttl: number, signature: string, timestamp: number) {
        if (PublishAMessageToAChannelPost.validate(pubKey, subKey, channel, callback, store, auth, meta, uuid, ttl, signature, timestamp)) {
            return PublishAMessageToAChannelPost.execute(pubKey, subKey, channel, callback, store, auth, meta, uuid, ttl, signature, timestamp);
        }
    }       
    fireEndpointGet(pubKey: string, subKey: string, channel: string, callback: string, store: number, auth: string, meta: MetadataQueryParamSchema, uuid: string, norep: boolean, signature: string, timestamp: number) {
        if (FireEndpointGet.validate(pubKey, subKey, channel, callback, store, auth, meta, uuid, norep, signature, timestamp)) {
            return FireEndpointGet.execute(pubKey, subKey, channel, callback, store, auth, meta, uuid, norep, signature, timestamp);
        }
    }       
    sendASignalToAChannelGet(pubKey: string, subKey: string, channel: string, callback: string, payload: string, uuid: string, auth: string, signature: string, timestamp: number) {
        if (SendASignalToAChannelGet.validate(pubKey, subKey, channel, callback, payload, uuid, auth, signature, timestamp)) {
            return SendASignalToAChannelGet.execute(pubKey, subKey, channel, callback, payload, uuid, auth, signature, timestamp);
        }
    }       
    managingDeviceRegistrationsAPNSHTTP2Get(subKey: string, devicesApns2: string, uuid: string, auth: string, list: string, add: string, remove: string, environment: string, topic: string, signature: string, timestamp: number) {
        if (ManagingDeviceRegistrationsAPNSHTTP2Get.validate(subKey, devicesApns2, uuid, auth, list, add, remove, environment, topic, signature, timestamp)) {
            return ManagingDeviceRegistrationsAPNSHTTP2Get.execute(subKey, devicesApns2, uuid, auth, list, add, remove, environment, topic, signature, timestamp);
        }
    }       
    removeADeviceFromAChannelGet(subKey: string, devicesApns2: string, uuid: string, auth: string, add: string, remove: string, environment: string, topic: string, signature: string, timestamp: number) {
        if (RemoveADeviceFromAChannelGet.validate(subKey, devicesApns2, uuid, auth, add, remove, environment, topic, signature, timestamp)) {
            return RemoveADeviceFromAChannelGet.execute(subKey, devicesApns2, uuid, auth, add, remove, environment, topic, signature, timestamp);
        }
    }       
    listingAddingRemovingRegistrationsForDeviceGet(subKey: string, pushToken: string, add: string, remove: string, type: string, uuid: string, signature: string, timestamp: number) {
        if (ListingAddingRemovingRegistrationsForDeviceGet.validate(subKey, pushToken, add, remove, type, uuid, signature, timestamp)) {
            return ListingAddingRemovingRegistrationsForDeviceGet.execute(subKey, pushToken, add, remove, type, uuid, signature, timestamp);
        }
    }       
    removingADeviceGet(subKey: string, pushToken: string, type: string, uuid: string, signature: string, timestamp: number) {
        if (RemovingADeviceGet.validate(subKey, pushToken, type, uuid, signature, timestamp)) {
            return RemovingADeviceGet.execute(subKey, pushToken, type, uuid, signature, timestamp);
        }
    }       
    subscribeToChannelV1APIGet(subKey: string, channel: string, callback: string, timetoken: string, channelGroup: string, state: string, heartbeat: number, auth: string, uuid: string, signature: string, timestamp: number) {
        if (SubscribeToChannelV1APIGet.validate(subKey, channel, callback, timetoken, channelGroup, state, heartbeat, auth, uuid, signature, timestamp)) {
            return SubscribeToChannelV1APIGet.execute(subKey, channel, callback, timetoken, channelGroup, state, heartbeat, auth, uuid, signature, timestamp);
        }
    }       
    subscribeToChannelSOrChannelGroupSGet(subKey: string, channel: string, callback: string, tt: string, tr: string, channelGroup: string, heartbeat: number, auth: string, uuid: string, filterExpr: string, signature: string, timestamp: number) {
        if (SubscribeToChannelSOrChannelGroupSGet.validate(subKey, channel, callback, tt, tr, channelGroup, heartbeat, auth, uuid, filterExpr, signature, timestamp)) {
            return SubscribeToChannelSOrChannelGroupSGet.execute(subKey, channel, callback, tt, tr, channelGroup, heartbeat, auth, uuid, filterExpr, signature, timestamp);
        }
    }       
    fetchTimeGet(callback: string, uuid: string) {
        if (FetchTimeGet.validate(callback, uuid)) {
            return FetchTimeGet.execute(callback, uuid);
        }
    }       
}