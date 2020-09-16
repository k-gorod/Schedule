import { StudyEvent } from 'reducers/events/models';

export const timeZone: string[] = [
  'Europe/London',
  'Europe/Warsaw',
  'Europe/Kiev',
  'Europe/Minsk',
  'Europe/Moscow',
  'Europe/Volgograd',
  'Europe/Yekaterenburg',
  'Asia/Tashkent',
  'Asia/Tbilisi',
];

export const backgrounds: string[] = [
  'vanilla-ice',
  'remy',
  'white-lilac',
  'blue-chalk',
  'pattens-blue-light',
  'pattens-blue',
  'humming-bird',
  'foam',
  'white-ice-light',
  'white-ice',
  'china-ivory',
  'blanched-almond',
  'serenade',
  'sazerac',
  'azure',
];

const teamId = '48';
export const getAllEventsUrl = `/team/${teamId}/events`;
export const postEventUrl = `/team/${teamId}/event`;
export const getEventUrl = (eId: string): string =>
  `team/${teamId}/event/${eId}`;
export const putEventUrl = (eId: string): string =>
  `team/${teamId}/event/${eId}`;
export const deleteEventUrl = (eId: string): string =>
  `team/${teamId}/event/${eId}`;
export const getAllOrganizers = `/team/${teamId}/organizers`;
export const postOrganizer = `/team/${teamId}/organizer`;
export const getOrganizer = (orgId: string): string =>
  `team/${teamId}/event/${orgId}`;
export const putOrganizer = (orgId: string): string =>
  `team/${teamId}/event/${orgId}`;
export const deleteOrganizer = (orgId: string): string =>
  `team/${teamId}/event/${orgId}`;

export const currentDay = new Date().getDate();
export const year = new Date().getFullYear();
export const sortDataByDate = (
  prevObject: StudyEvent,
  nextObj: StudyEvent,
): number => {
  const prevDay = prevObject.dateTime.slice(4, 7);
  const nextDay = nextObj.dateTime.slice(4, 7);
  const prevMonth = prevObject.dateTime.slice(8, 10);
  const nextMonth = nextObj.dateTime.slice(8, 10);
  return new Date(year, +nextMonth, +nextDay) <
    new Date(year, +prevMonth, +prevDay)
    ? 1
    : -1;
};

export const eventTypes = {
  onlineLecture: 'Online lecture',
  meetupOffline: 'Meetup',
  taskStart: 'Task start',
  taskDeadline: 'Task deadline',
  optionalTaskStart: 'Optional task start',
  optionalTaskDeadline: 'Optional task deadline',
  selfEducation: 'Self education',
  testGrade: 'Test with grade',
  testWithoutGrade: 'Test without grade',
  crossCheckStart: 'Cross-check start',
  crossCheckDeadline: 'Cross-check deadline',
  interviewStart: 'Interview start',
};
export const userRoles: string[] = ['Student', 'Mentor'];