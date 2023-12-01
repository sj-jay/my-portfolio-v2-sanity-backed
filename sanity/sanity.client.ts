import { createClient, type ClientConfig } from "@sanity/client";

 const config: ClientConfig = {
    projectId: 'ctl91umg',
    dataset: 'production',
    apiVersion:'2023-11-27',
    useCdn: false,
};

const client = createClient(config);

export default client;

