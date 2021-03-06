import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils';
import {
  getAllEventsUrl,
  getAllOrganizers,
  postEventUrl,
  postOrganizer,
  putEventUrl,
} from '@constants/api';
import { StudyEvent } from 'reducers/events/models';
import { Organizer } from 'reducers/organizers/models';
import { errorHandler } from '@constants';

export default createAsyncThunk(
  'events/fetchStudyEvents',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      }: { data: { data: StudyEvent[] } } = await axios.get(getAllEventsUrl);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchOrganizres = createAsyncThunk(
  'organizers/fetchOrganizres',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      }: { data: { data: Organizer[] } } = await axios.get(getAllOrganizers);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const postEvent = createAsyncThunk(
  'events/postEvent',
  async (obj: StudyEvent, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      }: { data: { id: string } } = await axios.post(postEventUrl, obj);
      const newEvent = { ...obj };
      newEvent.id = id;
      return newEvent;
    } catch (e) {
      return rejectWithValue(errorHandler());
    }
  },
);

export const postLector = createAsyncThunk(
  'organizers/postOrganizer',
  async (obj: Organizer, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      }: { data: { id: string } } = await axios.post(postOrganizer, obj);
      const newOrganizer = { ...obj };
      newOrganizer.id = id;
      return newOrganizer;
    } catch (e) {
      return rejectWithValue(errorHandler());
    }
  },
);

interface LocationCoordsResponce {
  results: {
    geometry: { lat: number; lng: number };
  }[];
}

export const fetchCoords = createAsyncThunk(
  'coords/fetchCoords',
  async (location: string, { rejectWithValue }) => {
    try {
      const rawResp = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=0558628d9eba4dc98e9177e831c36e9d&pretty=1&no_annotations=1`,
      );
      const resp: LocationCoordsResponce = await rawResp.json();
      const {
        results: [{ geometry }],
      } = resp;
      return geometry;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
