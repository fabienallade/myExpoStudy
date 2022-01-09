import client from './client'

const endpoint ='/product/'

const getListings = () => client.get(endpoint)

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("category", 4);
  data.append("description", listing.title);

  listing.images.forEach((image, index) => {
    data.append("images", {
      uri: image,
      name: "image" + index + ".jpeg",
      type: "image/jpeg",
    });
  });
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>{
        onUploadProgress(progress.loaded / progress.total)
    },
  });
};

export default 
{
    addListing,
    getListings,
}