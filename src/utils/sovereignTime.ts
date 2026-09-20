import { SovereignTime } from '../types';

/**
 * Dragon 9 Temporal Architecture
 * Total: 1,440 minutes legacy day
 * Reallocated: 
 * - 26 Hours (54 minutes each) = 1,404 minutes
 * - 2 Intermissions (18 minutes each) = 36 minutes
 * Total: 1,440 minutes
 */
export function getSovereignTime(date: Date): SovereignTime {
  const totalMinutes = date.getHours() * 60 + date.getMinutes();
  const totalSecondsInDay = totalMinutes * 60 + date.getSeconds();
  
  // Logic: 
  // 0 - 18: Midnight Intermission
  // 18 - 18+(13*54): Hours 1-13
  // 18+(13*54) - 18+(13*54)+18: Midday Intermission
  // ...and so on
  
  const MIDNIGHT_INTERMISSION_DURATION = 18 * 60; // seconds
  const HOUR_DURATION = 54 * 60; // seconds
  const MIDDAY_INTERMISSION_DURATION = 18 * 60; // seconds

  const firstIntermissionEnd = MIDNIGHT_INTERMISSION_DURATION;
  const firstBlockEnd = firstIntermissionEnd + (13 * HOUR_DURATION);
  const secondIntermissionEnd = firstBlockEnd + MIDDAY_INTERMISSION_DURATION;

  if (totalSecondsInDay < firstIntermissionEnd) {
    return {
      hour: 0,
      minute: Math.floor(totalSecondsInDay / 60),
      second: totalSecondsInDay % 60,
      isIntermission: true,
      intermissionType: 'MIDNIGHT'
    };
  }

  if (totalSecondsInDay >= firstIntermissionEnd && totalSecondsInDay < firstBlockEnd) {
    const relativeSeconds = totalSecondsInDay - firstIntermissionEnd;
    return {
      hour: Math.floor(relativeSeconds / HOUR_DURATION) + 1,
      minute: Math.floor((relativeSeconds % HOUR_DURATION) / 60),
      second: relativeSeconds % 60,
      isIntermission: false,
      intermissionType: null
    };
  }

  if (totalSecondsInDay >= firstBlockEnd && totalSecondsInDay < secondIntermissionEnd) {
    const relativeSeconds = totalSecondsInDay - firstBlockEnd;
    return {
      hour: 13,
      minute: Math.floor(relativeSeconds / 60),
      second: relativeSeconds % 60,
      isIntermission: true,
      intermissionType: 'MIDDAY'
    };
  }

  const relativeSeconds = totalSecondsInDay - secondIntermissionEnd;
  return {
    hour: Math.floor(relativeSeconds / HOUR_DURATION) + 14,
    minute: Math.floor((relativeSeconds % HOUR_DURATION) / 60),
    second: relativeSeconds % 60,
    isIntermission: false,
    intermissionType: null
  };
}
