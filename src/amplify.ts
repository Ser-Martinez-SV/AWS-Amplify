import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import outputs from '../amplify_outputs.json';
import type { Schema } from '../amplify/data/resource';

export const backendConfigured = Boolean(outputs.data.url && outputs.data.api_key);

if (backendConfigured) {
  Amplify.configure(outputs);
}

export const client = generateClient<Schema>();
