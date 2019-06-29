import { get } from 'lodash';

const processEnv = get(process, 'env', {});
const mongoHost = get(processEnv, 'MONGO_URL');

// Mongo details
export const dbName = get(processEnv, 'DB_NAME');
export const mongoUrl = `${mongoHost}/${dbName}`;

// API Port
export const port = get(processEnv, 'PORT');
