import { stringify } from 'qs';
import { getToken } from '../utils/authority';
import request from '../utils/request';

export async function getLaborGenderRateData() {
  return request('/labor/person/sex/count', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export async function getLaborActivityPercentData(params) {
  return request(`/labor/laborAttendance/activity/count/date/${params.from}/${params.to}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
