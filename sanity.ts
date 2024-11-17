import {type  ClientConfig, createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const config: ClientConfig = {
  projectId: 'nhkzihot',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}

const clientImg = {
  projectId: 'nhkzihot',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}

const builder = imageUrlBuilder(clientImg) 

export const  urlFor = (source: SanityImageSource) => builder.image(source) 


export  const sanityClient = createClient(config);

