import { get } from 'lodash';

const processEnv = get(process, 'env', {});

export const mongoUrl = get(processEnv, 'MONGO_URL');
export const port = get(processEnv, 'PORT');
