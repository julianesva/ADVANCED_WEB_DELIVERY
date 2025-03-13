import React, { useEffect, useState } from "react";

const PromiseActivty = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating fetching an image from the provided URL
    const fetchImage = () => {
      fetch("https://images.unsplash.com/photo-1591160690555-5debfba289f0?fm=jpg&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          return response.url;
        })
        .then((url) => {
          setImageUrl(url);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };

    fetchImage();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return(
    <div>
    <h1>
        Promise Activity
    </h1>
    <img src={imageUrl} alt="Fetched from Unsplash" />
    </div>
  ); 
};

export default PromiseActivty;
