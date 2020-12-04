var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: callback,
    error: function(error) {
      console.error('recast.ly: Failed to search.', error);
    }
  });
};

export default searchYouTube;

